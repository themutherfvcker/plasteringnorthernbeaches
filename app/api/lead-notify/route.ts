import { NextRequest, NextResponse } from 'next/server';

// /api/lead-notify — original single-purpose Telegram notification handler.
//
// Restored 2026-09-13 after commit 5164524's Supabase+Resend+Telegram unified
// pipeline silently regressed: LEAD_FROM_EMAIL was never populated in Vercel
// (Resend 422) and TELEGRAM_BOT_TOKEN went stale after the 2026-08-15 rotation
// (Telegram 401). Joe elected Option A: revert to the simpler pre-refactor
// pipeline — Telegram notify from this route, Web3Forms direct-fetch from the
// form component for email backup, no Supabase, no Resend.
//
// Env required (Vercel Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN  — bot that will send the lead alert (should match the
//                         bot Joe DMs with, currently LandingPageTesterBot;
//                         rotated 2026-08-15, so Vercel must be updated)
//   TELEGRAM_CHAT_ID    — 8658574805 (Joe's chat)
//
// Fails open if env vars are missing — the Web3Forms email backup fires from
// the client and is the primary delivery guarantee. Telegram is the real-time
// convenience alert.

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? '';
const CHAT_ID = process.env.TELEGRAM_CHAT_ID ?? '';

// MarkdownV2 requires escaping this exact set of characters. Applied to any
// user-supplied field before interpolation.
function esc(s: string) {
  return s.replace(/[_*[\]()~`>#+\-=|{}.!]/g, (c) => `\\${c}`);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { name, phone, email, suburb, service, message, page_url } = body;

  if (!BOT_TOKEN || !CHAT_ID) {
    return NextResponse.json({ ok: true, telegram: 'skipped — env vars missing' });
  }

  const lines = [
    '🔔 *New Lead — Plastering Northern Beaches*',
    '',
    `👤 *Name:* ${esc(name || '—')}`,
    `📞 *Phone:* ${esc(phone || '—')}`,
    email ? `📧 *Email:* ${esc(email)}` : null,
    `📍 *Suburb:* ${esc(suburb || '—')}`,
    service ? `🔧 *Service:* ${esc(service)}` : null,
    message ? `💬 *Job:* ${esc(message)}` : null,
    page_url ? `🌐 *Source:* ${esc(page_url)}` : null,
  ].filter(Boolean);

  const r = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: lines.join('\n'),
        parse_mode: 'MarkdownV2',
      }),
    },
  ).catch(() => null);

  if (r && r.ok) return NextResponse.json({ ok: true });
  const text = r ? await r.text().catch(() => '') : '';
  return NextResponse.json({
    ok: false,
    telegram: r ? `http ${r.status}: ${text.slice(0, 200)}` : 'fetch failed',
  });
}
