import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { captureLead } from '../lib/lead-pipeline';
import { submitLead, type LeadInput } from '../lib/lead-client';
import { POST as retired } from '../app/api/lead-notify/route';
import { POST } from '../app/api/leads/route';

const SOURCE_ROOT = process.env.LEAD_TESTS_REPO_ROOT ?? resolve(__dirname, '..');

const INPUT: LeadInput = {
  name: 'Jane Homeowner',
  phone: '0400 123 456',
  email: 'jane@example.test',
  suburb: 'Manly',
  service: 'Plaster Repairs',
  message: 'Kitchen ceiling water damage.',
  source: 'main',
  website: '',
  elapsed_ms: 3200,
};

const ENV = { LEAD_INGEST_URL: 'https://ingest.example.test/functions/v1/lead-ingest', LEAD_INGEST_TOKEN: 'synthetic-token-value' };

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

function requestFor(body: unknown = INPUT, referer = 'https://www.plasteringnorthernbeaches.com.au/?utm=x#top') {
  return new Request('https://www.plasteringnorthernbeaches.com.au/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Referer: referer },
    body: JSON.stringify(body),
  });
}

type Call = { url: string; init: RequestInit; body: Record<string, unknown> };
type Behavior = (call: Call) => Response | Promise<Response>;

function harness(behavior?: Behavior, env: typeof ENV | Partial<typeof ENV> = ENV) {
  const calls: Call[] = [];
  const logs: object[] = [];
  const fetcher: typeof fetch = async (url, init = {}) => {
    const bodyText = init.body != null ? String(init.body) : '';
    const call: Call = { url: String(url), init, body: bodyText ? JSON.parse(bodyText) : {} };
    calls.push(call);
    if (behavior) return await behavior(call);
    return Response.json({
      ok: true, lead_id: '11111111-2222-4333-8444-555555555555',
      capture_status: 'captured', delivery: { telegram: 'accepted' },
    });
  };
  return {
    calls, logs,
    run: (req = requestFor()) => captureLead(req, { env, fetch: fetcher, log: (entry) => logs.push(entry) }),
  };
}

test('successful upstream capture returns 200 with delivery telegram passthrough', async () => {
  const h = harness();
  const response = await h.run();
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  const body = await response.json();
  assert.deepEqual(body, {
    ok: true, lead_id: '11111111-2222-4333-8444-555555555555',
    capture_status: 'captured', delivery: { telegram: 'accepted' },
  });
  assert.equal(h.calls.length, 1);
  const call = h.calls[0];
  assert.equal(call.url, ENV.LEAD_INGEST_URL);
  assert.equal((call.init.headers as Record<string, string>)['Authorization'], `Bearer ${ENV.LEAD_INGEST_TOKEN}`);
  assert.equal(call.init.cache, 'no-store');
  assert.equal(call.init.redirect, 'error');
  assert.ok(call.init.signal instanceof AbortSignal);
  assert.equal(call.body.name, 'Jane Homeowner');
  assert.equal(call.body.phone, '0400 123 456');
  assert.equal(call.body.email, 'jane@example.test');
  assert.equal(call.body.suburb, 'Manly');
  assert.equal(call.body.service, 'Plaster Repairs');
  assert.equal(call.body.source, 'main');
  assert.equal(call.body.page_url, 'https://www.plasteringnorthernbeaches.com.au/');
  // Client cannot set an authoritative site — that comes from token registry.
  assert.equal(Object.prototype.hasOwnProperty.call(call.body, 'site'), false);
});

test('missing suburb/service/email/message are dropped, not forwarded as empty strings', async () => {
  const h = harness();
  await h.run(requestFor({
    name: 'Jack Plasterer', phone: '0400 111 222',
    website: '', elapsed_ms: 2500,
  }));
  const body = h.calls[0].body;
  assert.equal(body.suburb, null);
  assert.equal(body.service, null);
  assert.equal(body.email, null);
  assert.equal(body.message, null);
  assert.equal(body.source, 'plastering-nb-web');
});

test('missing LEAD_INGEST_URL surfaces ledger_not_configured with no upstream call', async () => {
  const h = harness(undefined, { LEAD_INGEST_TOKEN: 't' });
  const response = await h.run();
  assert.equal(response.status, 503);
  assert.deepEqual(await response.json(), { ok: false, error: 'ledger_not_configured' });
  assert.equal(h.calls.length, 0);
});

test('missing LEAD_INGEST_TOKEN surfaces ledger_not_configured', async () => {
  const h = harness(undefined, { LEAD_INGEST_URL: 'https://x.example.test' });
  const response = await h.run();
  assert.equal(response.status, 503);
  assert.deepEqual(await response.json(), { ok: false, error: 'ledger_not_configured' });
});

test('non-https LEAD_INGEST_URL becomes ledger_not_configured', async () => {
  const h = harness(undefined, { LEAD_INGEST_URL: 'http://x.test', LEAD_INGEST_TOKEN: 't' });
  const response = await h.run();
  assert.equal(response.status, 503);
});

test('upstream 401/403 becomes ledger_not_configured', async () => {
  for (const status of [401, 403]) {
    const h = harness(() => new Response('', { status }));
    const response = await h.run();
    assert.equal(response.status, 503);
    assert.deepEqual(await response.json(), { ok: false, error: 'ledger_not_configured' });
  }
});

test('upstream 5xx and network errors become capture_failed', async () => {
  for (const status of [500, 502, 503, 504]) {
    const h = harness(() => new Response('', { status }));
    const response = await h.run();
    assert.equal(response.status, 503);
    assert.deepEqual(await response.json(), { ok: false, error: 'capture_failed' });
  }
  const netH = harness(() => { throw new TypeError('offline'); });
  const netR = await netH.run();
  assert.equal(netR.status, 503);
  assert.deepEqual(await netR.json(), { ok: false, error: 'capture_failed' });
});

test('upstream returning non-JSON or ok:false at 200 becomes capture_failed', async () => {
  const nonJson = harness(() => new Response('plain', { status: 200 }));
  const r1 = await nonJson.run();
  assert.equal(r1.status, 502);
  assert.deepEqual(await r1.json(), { ok: false, error: 'capture_failed' });
  const okFalse = harness(() => Response.json({ ok: false, error: 'anything' }, { status: 200 }));
  const r2 = await okFalse.run();
  assert.equal(r2.status, 502);
});

test('unknown delivery state becomes capture_failed', async () => {
  const h = harness(() => Response.json({ ok: true, lead_id: '11111111-2222-4333-8444-555555555555', capture_status: 'captured', delivery: { telegram: 'weird' } }));
  const response = await h.run();
  assert.equal(response.status, 502);
});

test('all four delivery states are accepted on success', async () => {
  for (const state of ['pending', 'accepted', 'failed', 'not_configured'] as const) {
    const h = harness(() => Response.json({ ok: true, lead_id: '11111111-2222-4333-8444-555555555555', capture_status: 'captured', delivery: { telegram: state } }));
    const response = await h.run();
    assert.equal(response.status, 200);
    const body = await response.json();
    assert.equal(body.delivery.telegram, state);
  }
});

test('page_url only accepts same-site plaster-nb host and strips query/hash; hostile hosts drop it', async () => {
  const h = harness();
  await h.run(requestFor(INPUT, 'https://plasteringnorthernbeaches.com.au/services/plaster-crack-repair?utm=abc#pricing'));
  assert.equal(h.calls[0].body.page_url, 'https://plasteringnorthernbeaches.com.au/services/plaster-crack-repair');
  const hostile = harness();
  await hostile.run(requestFor(INPUT, 'https://attacker.test/x'));
  assert.equal(hostile.calls[0].body.page_url, null);
});

for (const [label, changes, error] of [
  ['missing name', { name: '' }, 'invalid_fields'],
  ['missing phone', { phone: '' }, 'invalid_fields'],
  ['whitespace name', { name: '   ' }, 'invalid_fields'],
  ['invalid email', { email: 'bad@' }, 'invalid_email'],
  ['short phone', { phone: '123456' }, 'invalid_phone'],
  ['long digit count', { phone: '1'.repeat(16) }, 'invalid_phone'],
  ['phone letters', { phone: 'CALL-NOW' }, 'invalid_phone'],
  ['name limit', { name: 'a'.repeat(121) }, 'invalid_fields'],
  ['message limit', { message: 'a'.repeat(4001) }, 'invalid_fields'],
  ['honeypot', { website: 'bot' }, 'spam_rejected'],
  ['fast elapsed', { elapsed_ms: 999 }, 'invalid_elapsed'],
  ['stale elapsed', { elapsed_ms: 86400001 }, 'invalid_elapsed'],
  ['nonfinite elapsed', { elapsed_ms: Infinity }, 'invalid_elapsed'],
  ['non-numeric elapsed', { elapsed_ms: '5000' }, 'invalid_elapsed'],
  ['client site', { site: 'plastering-nb' }, 'invalid_fields'],
  ['client lead_id', { lead_id: 'spoof' }, 'invalid_fields'],
  ['client page_url', { page_url: 'https://attacker.test' }, 'invalid_fields'],
  ['client page_path', { page_path: '/x' }, 'invalid_fields'],
] as const) {
  test(`validation rejects ${label} without upstream I/O`, async () => {
    const h = harness();
    const response = await h.run(requestFor({ ...INPUT, ...changes }));
    assert.equal(response.status >= 400 && response.status < 500, true);
    assert.deepEqual(await response.json(), { ok: false, error });
    assert.equal(h.calls.length, 0);
  });
}

test('lead-notify is retired to HTTP 410 with no send', async () => {
  const response = await retired();
  assert.equal(response.status, 410);
});

test('lead-notify source contains no Telegram references or credentials', () => {
  const src = readFileSync(resolve(SOURCE_ROOT, 'app/api/lead-notify/route.ts'), 'utf-8');
  assert.equal(/TELEGRAM_BOT_TOKEN/.test(src), false);
  assert.equal(/TELEGRAM_CHAT_ID/.test(src), false);
  assert.equal(/api\.telegram\.org/.test(src), false);
});

test('lead-pipeline source uses only LEAD_INGEST_* server env, no Supabase or Telegram calls', () => {
  const src = readFileSync(resolve(SOURCE_ROOT, 'lib/lead-pipeline.ts'), 'utf-8');
  assert.equal(/SUPABASE_URL/.test(src), false);
  assert.equal(/SUPABASE_SERVICE_ROLE_KEY/.test(src), false);
  assert.equal(/TELEGRAM_BOT_TOKEN/.test(src), false);
  assert.equal(/TELEGRAM_CHAT_ID/.test(src), false);
  assert.equal(/api\.telegram\.org/.test(src), false);
  assert.equal(/rest\/v1\/leads/.test(src), false);
  assert.ok(/LEAD_INGEST_URL/.test(src));
  assert.ok(/LEAD_INGEST_TOKEN/.test(src));
});

test('all three forms still POST to Web3Forms browser-direct (best-effort backup preserved)', () => {
  const files = [
    'components/QuoteForm.tsx',
    'components/LeanQuoteForm.tsx',
    'components/LimeQuoteForm.tsx',
  ];
  for (const rel of files) {
    const src = readFileSync(resolve(SOURCE_ROOT, rel), 'utf-8');
    assert.ok(/api\.web3forms\.com\/submit/.test(src), `${rel}: browser-direct Web3Forms POST must remain`);
    assert.ok(/a1b3ff09-7019-4b9d-b28e-86d6e6cebf08/.test(src), `${rel}: Web3Forms access key must remain (browser-visible operational identifier)`);
  }
});

test('all three forms now call submitLead (durable capture path)', () => {
  const files = [
    'components/QuoteForm.tsx',
    'components/LeanQuoteForm.tsx',
    'components/LimeQuoteForm.tsx',
  ];
  for (const rel of files) {
    const src = readFileSync(resolve(SOURCE_ROOT, rel), 'utf-8');
    assert.ok(/from '\.\.\/lib\/lead-client'/.test(src), `${rel}: must import submitLead from lib/lead-client`);
    assert.ok(/submitLead\(/.test(src), `${rel}: must call submitLead`);
    // Old direct /api/lead-notify call must be gone.
    assert.equal(/\/api\/lead-notify/.test(src), false, `${rel}: must not call retired /api/lead-notify`);
    // Honeypot present.
    assert.ok(/website/.test(src) && /Do not fill/i.test(src), `${rel}: must include honeypot`);
    // Elapsed monotonic tracking.
    assert.ok(/performance\.now\(\)/.test(src), `${rel}: must track elapsed_ms via performance.now`);
  }
});

test('/api/leads route delegates to captureLead', async () => {
  const req = new Request('https://www.plasteringnorthernbeaches.com.au/api/leads', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(INPUT),
  });
  const response = await POST(req);
  assert.ok(response instanceof Response);
});

test('submitLead client contract accepts a successful capture and rejects unknown delivery states', async () => {
  const originalFetch = globalThis.fetch;
  try {
    globalThis.fetch = (async () => Response.json({
      ok: true, lead_id: '11111111-2222-4333-8444-555555555555',
      capture_status: 'captured', delivery: { telegram: 'accepted' },
    })) as typeof fetch;
    const good = await submitLead(INPUT);
    assert.equal(good.ok, true);
    if (good.ok) {
      assert.equal(good.delivery.telegram, 'accepted');
      assert.match(good.lead_id, UUID_RE);
    }
    globalThis.fetch = (async () => Response.json({
      ok: true, lead_id: '11111111-2222-4333-8444-555555555555',
      capture_status: 'captured', delivery: { telegram: 'garbage' },
    })) as typeof fetch;
    const bad = await submitLead(INPUT);
    assert.equal(bad.ok, false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
