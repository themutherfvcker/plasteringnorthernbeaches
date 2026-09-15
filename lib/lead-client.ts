export type DeliveryState = 'pending' | 'accepted' | 'failed' | 'not_configured';
export type LeadServerError = 'unsupported_media_type' | 'body_too_large' | 'invalid_body' |
  'invalid_fields' | 'invalid_email' | 'invalid_phone' | 'spam_rejected' | 'invalid_elapsed' |
  'ledger_not_configured' | 'capture_failed';

export type LeadInput = {
  name: string;
  phone: string;
  email?: string;
  suburb?: string;
  service?: string;
  message?: string;
  source?: string;
  gclid?: string;
  fbclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  website: string;
  elapsed_ms: number;
};

export type LeadResult = {
  ok: true;
  lead_id: string;
  capture_status: 'captured';
  delivery: { telegram: DeliveryState };
} | { ok: false; error: LeadServerError | 'network_error' | 'invalid_response' };

const SAFE_ERRORS: readonly LeadServerError[] = [
  'unsupported_media_type', 'body_too_large', 'invalid_body',
  'invalid_fields', 'invalid_email', 'invalid_phone', 'spam_rejected',
  'invalid_elapsed', 'ledger_not_configured', 'capture_failed',
];

function isDeliveryState(v: unknown): v is DeliveryState {
  return typeof v === 'string' && ['pending', 'accepted', 'failed', 'not_configured'].includes(v);
}

export async function submitLead(input: LeadInput): Promise<LeadResult> {
  const {
    name, phone, email, suburb, service, message, source,
    gclid, fbclid, utm_source, utm_medium, utm_campaign, utm_content, utm_term,
    website, elapsed_ms,
  } = input;
  const payload: Record<string, unknown> = { name, phone, website, elapsed_ms };
  for (const [k, v] of Object.entries({ email, suburb, service, message, source, gclid, fbclid, utm_source, utm_medium, utm_campaign, utm_content, utm_term })) {
    if (v !== undefined && v !== '') payload[k] = v;
  }
  try {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    let body: Record<string, unknown> | null = null;
    try { body = await response.json() as Record<string, unknown>; } catch { return { ok: false, error: 'invalid_response' }; }
    const okResp = body?.ok;
    const leadId = typeof body?.lead_id === 'string' ? body.lead_id : '';
    const telegram = (body?.delivery && typeof body.delivery === 'object' && !Array.isArray(body.delivery))
      ? (body.delivery as Record<string, unknown>).telegram : undefined;
    if (response.ok && okResp === true && leadId.trim() && body?.capture_status === 'captured' && isDeliveryState(telegram)) {
      return { ok: true, lead_id: leadId, capture_status: 'captured', delivery: { telegram } };
    }
    const errCandidate = body?.error;
    const safeError = typeof errCandidate === 'string' && (SAFE_ERRORS as readonly string[]).includes(errCandidate)
      ? (errCandidate as LeadServerError) : 'invalid_response';
    return { ok: false, error: response.ok ? 'invalid_response' : safeError };
  } catch {
    return { ok: false, error: 'network_error' };
  }
}
