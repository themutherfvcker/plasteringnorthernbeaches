import { NextRequest, NextResponse } from 'next/server';

// /api/lead-submit — unified lead handler for every form on the site.
//
// Fires FOUR delivery channels in parallel:
//   1. Supabase — persists the lead as a row in `public.leads`
//                (source of truth, queryable, exportable)
//   2. Resend  — sends a formatted lead email to LEAD_TO_EMAIL
//                (readable notification for humans)
//   3. Telegram — pushes a formatted notification to the paired chat
//                (real-time on-the-tools alert)
//   4. (future) Twilio SMS — bolt-on when ready
//
// Environment variables required (set in Vercel):
//   TELEGRAM_BOT_TOKEN
//   TELEGRAM_CHAT_ID
//   RESEND_API_KEY
//   LEAD_TO_EMAIL              recipient inbox
//   LEAD_FROM_EMAIL            sender (must be verified in Resend OR
//                              onboarding@resend.dev as MVP)
//   SUPABASE_URL               e.g. https://xxx.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY  server-side key that bypasses RLS
//
// Each channel is fire-and-forget with individual failure isolation —
// one bad channel doesn't break the others. Every result is logged in
// the response for observability.

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? '';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID ?? '';
const RESEND_API_KEY = process.env.RESEND_API_KEY ?? '';
const LEAD_TO_EMAIL = process.env.LEAD_TO_EMAIL ?? '';
const LEAD_FROM_EMAIL = process.env.LEAD_FROM_EMAIL ?? 'onboarding@resend.dev';
const SUPABASE_URL = process.env.SUPABASE_URL ?? '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';

interface LeadPayload {
  name?: string;
  phone?: string;
  email?: string;
  suburb?: string;
  service?: string;
  message?: string;
  source?: string;
  page_url?: string;
  page_path?: string;
  form_id?: string;
  gclid?: string;
  fbclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

async function sendToSupabase(body: LeadPayload) {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return { ok: false, reason: 'supabase env missing' };
  }
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        business_slug: 'plastering-nb',
        name: body.name || null,
        phone: body.phone || null,
        email: body.email || null,
        suburb: body.suburb || null,
        service: body.service || null,
        message: body.message || null,
        source: body.source || null,
        page_url: body.page_url || null,
        page_path: body.page_path || null,
        form_id: body.form_id || null,
        gclid: body.gclid || null,
        fbclid: body.fbclid || null,
        utm_source: body.utm_source || null,
        utm_medium: body.utm_medium || null,
        utm_campaign: body.utm_campaign || null,
        utm_content: body.utm_content || null,
        utm_term: body.utm_term || null,
        raw: body,
      }),
    });
    if (r.ok) return { ok: true };
    const text = await r.text().catch(() => '');
    return { ok: false, reason: `http ${r.status}: ${text.slice(0, 200)}` };
  } catch (e: unknown) {
    return { ok: false, reason: e instanceof Error ? e.message : String(e) };
  }
}

async function sendToResend(body: LeadPayload) {
  if (!RESEND_API_KEY || !LEAD_TO_EMAIL) {
    return { ok: false, reason: 'resend env missing' };
  }
  const subject = `🔔 New lead — ${body.service || 'Plastering'} — ${body.suburb || 'NB'}`;
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #102a43; border-bottom: 3px solid #f59e0b; padding-bottom: 12px;">
        New Lead — Plastering Northern Beaches
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        ${[
          ['Name', body.name],
          ['Phone', body.phone ? `<a href="tel:${body.phone}">${body.phone}</a>` : null],
          ['Email', body.email ? `<a href="mailto:${body.email}">${body.email}</a>` : null],
          ['Suburb', body.suburb],
          ['Service', body.service],
          ['Message', body.message],
          ['Source', body.source],
          ['Page', body.page_url],
        ]
          .filter(([, v]) => v)
          .map(
            ([k, v]) =>
              `<tr><td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #486581; font-weight: 600; width: 120px;">${k}</td><td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #102a43;">${v}</td></tr>`,
          )
          .join('')}
      </table>
      ${
        body.gclid
          ? `<p style="color: #486581; font-size: 12px; margin-top: 20px;">📊 Google Ads click ID: <code>${body.gclid}</code></p>`
          : ''
      }
      <p style="color: #829ab1; font-size: 12px; margin-top: 30px; text-align: center;">Sent by plasteringnorthernbeaches.com.au</p>
    </div>
  `;
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: LEAD_FROM_EMAIL,
        to: [LEAD_TO_EMAIL],
        reply_to: body.email || undefined,
        subject,
        html,
      }),
    });
    if (r.ok) return { ok: true };
    const text = await r.text().catch(() => '');
    return { ok: false, reason: `http ${r.status}: ${text.slice(0, 200)}` };
  } catch (e: unknown) {
    return { ok: false, reason: e instanceof Error ? e.message : String(e) };
  }
}

async function sendToTelegram(body: LeadPayload) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return { ok: false, reason: 'telegram env missing' };
  }
  const escape = (s: string) =>
    s.replace(/[_*[\]()~`>#+\-=|{}.!]/g, (c) => `\\${c}`);
  const lines = [
    '🔔 *New Lead — Plastering Northern Beaches*',
    '',
    `👤 *Name:* ${escape(body.name || '—')}`,
    `📞 *Phone:* ${escape(body.phone || '—')}`,
    body.email ? `📧 *Email:* ${escape(body.email)}` : null,
    `📍 *Suburb:* ${escape(body.suburb || '—')}`,
    body.service ? `🔧 *Service:* ${escape(body.service)}` : null,
    body.message ? `💬 *Job:* ${escape(body.message)}` : null,
    body.page_url ? `🌐 *Source:* ${escape(body.page_url)}` : null,
  ].filter(Boolean);
  try {
    const r = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: lines.join('\n'),
          parse_mode: 'MarkdownV2',
        }),
      },
    );
    if (r.ok) return { ok: true };
    const text = await r.text().catch(() => '');
    return { ok: false, reason: `http ${r.status}: ${text.slice(0, 200)}` };
  } catch (e: unknown) {
    return { ok: false, reason: e instanceof Error ? e.message : String(e) };
  }
}

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => ({}))) as LeadPayload;

  // Fire all channels in parallel — one bad channel doesn't block the others.
  const [supabase, resend, telegram] = await Promise.all([
    sendToSupabase(body),
    sendToResend(body),
    sendToTelegram(body),
  ]);

  return NextResponse.json({
    ok: true,
    channels: { supabase, resend, telegram },
  });
}
