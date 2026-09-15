import { randomUUID } from 'node:crypto';
import type { DeliveryState, LeadServerError } from './lead-client';

const SITE = 'plastering-nb';
const MAX_BODY_BYTES = 32768;
const UPSTREAM_TIMEOUT_MS = 8000;

const ALLOWED_HOSTS = new Set(['plasteringnorthernbeaches.com.au', 'www.plasteringnorthernbeaches.com.au']);
const CONTROL_CHARS = new RegExp('[\\u0000-\\u0008\\u000b\\u000c\\u000e-\\u001f\\u007f]');
const DELIVERY_STATES: readonly DeliveryState[] = ['pending', 'accepted', 'failed', 'not_configured'];

const FIELD_LIMITS: Record<string, number> = {
  name: 120, phone: 40, email: 254, suburb: 120, service: 120, message: 4000,
  source: 60, gclid: 200, fbclid: 200,
  utm_source: 120, utm_medium: 120, utm_campaign: 240, utm_content: 240, utm_term: 240,
  website: 200,
};
const ALLOWED_KEYS = new Set(['name', 'phone', 'elapsed_ms', ...Object.keys(FIELD_LIMITS)]);

type Env = { LEAD_INGEST_URL?: string; LEAD_INGEST_TOKEN?: string; [key: string]: string | undefined };
type Channel = 'ingest';
type LogEntry = { request_id: string; lead_id: string | null; site: typeof SITE; channel: Channel; status: string; error_category: string };
type Dependencies = { env?: Env; fetch?: typeof fetch; log?: (entry: LogEntry) => void };

type Fields = {
  name: string; phone: string; email: string | null;
  suburb: string | null; service: string | null; message: string | null; source: string | null;
  gclid: string | null; fbclid: string | null;
  utm_source: string | null; utm_medium: string | null; utm_campaign: string | null;
  utm_content: string | null; utm_term: string | null;
};

class InputError extends Error {
  constructor(readonly category: LeadServerError, readonly status = 400) { super(category); }
}

function failure(error: LeadServerError, status: number) {
  return Response.json({ ok: false, error }, { status, headers: { 'Cache-Control': 'no-store' } });
}

async function readBody(request: Request): Promise<unknown> {
  if (request.headers.get('content-type')?.split(';')[0].trim().toLowerCase() !== 'application/json') {
    throw new InputError('unsupported_media_type', 415);
  }
  const length = request.headers.get('content-length');
  if (length !== null && (!/^\d+$/.test(length) || Number(length) > MAX_BODY_BYTES)) {
    throw new InputError('body_too_large', 413);
  }
  if (!request.body) throw new InputError('invalid_body');
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) { await reader.cancel(); throw new InputError('body_too_large', 413); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  try { return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes)); }
  catch { throw new InputError('invalid_body'); }
}

function coerceOptional(input: Record<string, unknown>, key: string): string | null {
  const v = input[key];
  if (v === undefined) return null;
  if (typeof v !== 'string') throw new InputError('invalid_fields');
  const trimmed = v.trim();
  return trimmed === '' ? null : trimmed;
}

function validate(body: unknown): Fields {
  if (!body || typeof body !== 'object' || Array.isArray(body)) throw new InputError('invalid_body');
  const input = body as Record<string, unknown>;
  for (const key of Object.keys(input)) {
    if (!ALLOWED_KEYS.has(key)) throw new InputError('invalid_fields');
  }
  for (const [field, limit] of Object.entries(FIELD_LIMITS)) {
    const value = input[field];
    if (value !== undefined && (typeof value !== 'string' || value.length > limit || CONTROL_CHARS.test(value))) {
      throw new InputError('invalid_fields');
    }
  }
  if (typeof input.website !== 'string') throw new InputError('invalid_fields');
  if (input.website !== '') throw new InputError('spam_rejected');
  if (typeof input.elapsed_ms !== 'number' || !Number.isFinite(input.elapsed_ms)
    || input.elapsed_ms < 1000 || input.elapsed_ms > 86400000) {
    throw new InputError('invalid_elapsed');
  }
  const name = ((input.name as string | undefined) ?? '').trim();
  const phone = ((input.phone as string | undefined) ?? '').trim();
  if (!name) throw new InputError('invalid_fields');
  if (!phone) throw new InputError('invalid_fields');
  const digits = phone.replace(/\D/g, '');
  if (!/^\+?[0-9().\-\s]+$/.test(phone) || /[\r\n\t]/.test(phone) || digits.length < 7 || digits.length > 15) {
    throw new InputError('invalid_phone');
  }
  const email = coerceOptional(input, 'email');
  if (email) {
    const parts = email.split('@');
    const local = parts[0];
    const domain = parts[1] || '';
    if (parts.length !== 2 || local.length > 64 || !/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(local)
      || local.startsWith('.') || local.endsWith('.') || local.includes('..')
      || !domain.includes('.') || domain.split('.').some((label) =>
        !/^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/.test(label))) {
      throw new InputError('invalid_email');
    }
  }
  return {
    name, phone, email,
    suburb: coerceOptional(input, 'suburb'),
    service: coerceOptional(input, 'service'),
    message: coerceOptional(input, 'message'),
    source: coerceOptional(input, 'source'),
    gclid: coerceOptional(input, 'gclid'),
    fbclid: coerceOptional(input, 'fbclid'),
    utm_source: coerceOptional(input, 'utm_source'),
    utm_medium: coerceOptional(input, 'utm_medium'),
    utm_campaign: coerceOptional(input, 'utm_campaign'),
    utm_content: coerceOptional(input, 'utm_content'),
    utm_term: coerceOptional(input, 'utm_term'),
  };
}

function pageUrl(request: Request): string | null {
  const referer = request.headers.get('referer');
  if (!referer) return null;
  try {
    const url = new URL(referer);
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.port) return null;
    if (!ALLOWED_HOSTS.has(url.hostname)) return null;
    url.search = '';
    url.hash = '';
    return url.href.length <= 2048 ? url.href : null;
  } catch { return null; }
}

function readIngestEnv(env: Env): { url: string; token: string } | null {
  const url = env.LEAD_INGEST_URL?.trim();
  const token = env.LEAD_INGEST_TOKEN?.trim();
  if (!url || !token) return null;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:' || parsed.username || parsed.password) return null;
  } catch { return null; }
  return { url, token };
}

export async function captureLead(request: Request, dependencies: Dependencies = {}): Promise<Response> {
  const send = dependencies.fetch ?? fetch;
  const logger = dependencies.log ?? ((entry: LogEntry) => console.warn(JSON.stringify(entry)));
  const requestId = randomUUID();
  const record = (status: string, error_category: string, lead_id: string | null = null) => {
    try { logger({ request_id: requestId, lead_id, site: SITE, channel: 'ingest', status, error_category }); } catch { /* safe no-op */ }
  };

  let fields: Fields;
  try { fields = validate(await readBody(request)); } catch (error) {
    return error instanceof InputError ? failure(error.category, error.status) : failure('invalid_body', 400);
  }

  const env: Env = dependencies.env ?? process.env;
  const ingest = readIngestEnv(env);
  if (!ingest) {
    record('failed', 'ingest_not_configured');
    return failure('ledger_not_configured', 503);
  }

  const payload: Record<string, unknown> = {
    name: fields.name,
    phone: fields.phone,
    email: fields.email,
    suburb: fields.suburb,
    service: fields.service,
    message: fields.message,
    source: fields.source ?? 'plastering-nb-web',
    gclid: fields.gclid,
    fbclid: fields.fbclid,
    utm_source: fields.utm_source,
    utm_medium: fields.utm_medium,
    utm_campaign: fields.utm_campaign,
    utm_content: fields.utm_content,
    utm_term: fields.utm_term,
    page_url: pageUrl(request),
  };

  let upstream: Response;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);
  try {
    upstream = await send(ingest.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${ingest.token}` },
      body: JSON.stringify(payload),
      cache: 'no-store',
      redirect: 'error',
      signal: controller.signal,
    });
  } catch {
    clearTimeout(timer);
    record('failed', 'network_error');
    return failure('capture_failed', 503);
  }
  clearTimeout(timer);

  let parsed: unknown = null;
  try { parsed = await upstream.json(); } catch { /* fall through */ }

  if (!upstream.ok) {
    if (upstream.status === 401 || upstream.status === 403) {
      record('failed', `upstream_${upstream.status}`);
      return failure('ledger_not_configured', 503);
    }
    if (upstream.status === 415) return failure('unsupported_media_type', 415);
    if (upstream.status === 413) return failure('body_too_large', 413);
    if (upstream.status >= 400 && upstream.status < 500) {
      record('failed', `upstream_${upstream.status}`);
      return failure('invalid_fields', upstream.status);
    }
    record('failed', `upstream_${upstream.status}`);
    return failure('capture_failed', 503);
  }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    record('failed', 'invalid_response');
    return failure('capture_failed', 502);
  }
  const responseBody = parsed as Record<string, unknown>;
  const leadId = typeof responseBody.lead_id === 'string' ? responseBody.lead_id.trim() : '';
  const delivery = responseBody.delivery && typeof responseBody.delivery === 'object' && !Array.isArray(responseBody.delivery)
    ? (responseBody.delivery as Record<string, unknown>).telegram : undefined;
  if (responseBody.ok !== true || !leadId || responseBody.capture_status !== 'captured' ||
      typeof delivery !== 'string' || !(DELIVERY_STATES as readonly string[]).includes(delivery)) {
    record('failed', 'invalid_response', leadId || null);
    return failure('capture_failed', 502);
  }
  record('accepted', 'ok', leadId);
  return Response.json({
    ok: true, lead_id: leadId, capture_status: 'captured',
    delivery: { telegram: delivery as DeliveryState },
  }, { status: 200, headers: { 'Cache-Control': 'no-store' } });
}
