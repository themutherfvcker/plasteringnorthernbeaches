'use client';

const KEY = 'plaster:first-touch:v1';
type Attribution = Record<string, string>;
const KEYS = ['gclid','gbraid','wbraid','fbclid','utm_source','utm_medium','utm_campaign','utm_content','utm_term'] as const;
const LIMIT = 200;
const TTL_MS = 30 * 60 * 1000;

function clean(value: string | null): string | undefined {
  return value && value.length <= LIMIT && /^[a-zA-Z0-9_.,%+~:\/ -]+$/.test(value) ? value : undefined;
}

export function getLeadAttribution(): Attribution {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const now = Date.now();
  let previous: Attribution = {};
  try {
    const raw = window.sessionStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Number.isFinite(parsed.at) && now - parsed.at < TTL_MS &&
          parsed.data && typeof parsed.data === 'object') previous = parsed.data;
    }
  } catch { /* Storage can be unavailable. */ }
  const observed: Attribution = {};
  for (const k of KEYS) {
    const value = clean(params.get(k));
    if (value) observed[k] = value;
  }
  const first: Attribution = Object.keys(previous).length ? previous : {
    landing_path: window.location.pathname,
    ...observed,
    ...(document.referrer ? { referrer_host: safeReferrerHost(document.referrer) } : {}),
  };
  try { window.sessionStorage.setItem(KEY, JSON.stringify({ at: now, data: first })); } catch {}
  return first;
}

function safeReferrerHost(referrer: string): string | undefined {
  try {
    const u = new URL(referrer);
    return u.protocol === 'https:' || u.protocol === 'http:' ? u.hostname.slice(0, 120) : undefined;
  } catch { return undefined; }
}
