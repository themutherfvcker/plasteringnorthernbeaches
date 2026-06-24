import { NextRequest, NextResponse } from 'next/server';

// Telegram lead notification. Reads secrets from env vars only:
//   TELEGRAM_BOT_TOKEN  — set in Vercel Settings → Environment Variables
//   TELEGRAM_CHAT_ID    — Joe's chat ID
//
// Fails open if env vars are missing — the lead capture path (Web3Forms email,
// to be wired separately) is the primary delivery. Telegram is convenience.

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? '';
const CHAT_ID = process.env.TELEGRAM_CHAT_ID ?? '';

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { name, phone, email, suburb, service, message, page_url } = body;

  if (!BOT_TOKEN || !CHAT_ID) {
    return NextResponse.json({ ok: true, telegram: 'skipped — env vars missing' });
  }

  const lines = [
    '🔔 *New Lead — Plastering Northern Beaches*',
    '',
    `👤 *Name:* ${name || '—'}`,
    `📞 *Phone:* ${phone || '—'}`,
    `📧 *Email:* ${email || '—'}`,
    `📍 *Suburb:* ${suburb || '—'}`,
    `🔧 *Service:* ${service || '—'}`,
    `💬 *Job description:* ${message || '—'}`,
    `🌐 *Source:* ${page_url || '—'}`,
  ];

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: lines.join('\n'),
      parse_mode: 'Markdown',
    }),
  }).catch(() => {});

  return NextResponse.json({ ok: true });
}
