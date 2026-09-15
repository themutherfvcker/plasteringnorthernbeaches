# LEADS-002 — Plastering Northern Beaches integration

Status: CC implementation complete on `cc/LEADS-002-universal` — READY_FOR_REVIEW
Date: 2026-09-15
Authorization: Huntsville Issue #1 comment `5673438292` + start authorization `5674739533`
Control plane: Huntsville Issue #8 comment `5673428559`
Canonical LEADS-002 architecture reference: HSP `docs/project/LEADS-002.md`

## What changed in this repo

Plaster-nb joins the portfolio-wide universal `public.leads` ledger via the central Supabase Edge Function that HSP owns canonically. This repo's LEADS-002 delta:

- **NEW** `app/api/leads/route.ts` — thin wrapper that delegates to `captureLead`.
- **NEW** `lib/lead-pipeline.ts` — server-to-server client to the central Edge Function. Site slug `plastering-nb` is derived server-side from the token registry — never accepted from the browser.
- **NEW** `lib/lead-client.ts` — typed browser helper `submitLead(...)`. Whitelists the payload keys and returns a discriminated result the forms can render success or bounded error from.
- **UPDATED** `app/api/lead-notify/route.ts` — retired to HTTP 410 with no notification behavior. Holds no credentials.
- **UPDATED** `components/QuoteForm.tsx`, `components/LeanQuoteForm.tsx`, `components/LimeQuoteForm.tsx` — each form now POSTs to `/api/leads` (durable capture path) in parallel with its existing browser-direct Web3Forms POST. Only `/api/leads` HTTP-ok + `ok:true` + non-empty `lead_id` may show success UI. On durable-capture failure the form stays usable and renders a bounded contact fallback message.
- **NEW** `tests/lead-pipeline.test.ts` + `scripts/test-lead-pipeline.sh` — 36 deterministic tests covering the upstream contract, safe error mapping, honeypot, elapsed check, source-file absence of Supabase/Telegram references, browser-direct Web3Forms preserved, and durable-capture wiring on all three forms.
- **NEW** `docs/LEADS-002.md` (this file).

No page copy, title, H1, meta, schema, canonical, internal-link, protected-surface or CTA/positioning change.

## Server contract

- Browser payload: `{name, phone, [email], [suburb], [service], [message], [source], [gclid], [fbclid], [utm_*], website, elapsed_ms}`. Unknown keys are rejected as `invalid_fields`.
- Server hard-codes site slug `plastering-nb` via the token registry — never accepted from the browser.
- `page_url` is derived only from a validated same-site Referer (`plasteringnorthernbeaches.com.au` / `www…`). Client-supplied `page_url` / `page_path` are rejected.
- Honeypot `website` MUST be empty. `elapsed_ms` MUST be a monotonic elapsed duration between 1s and 24h (from `performance.now()`).
- Forwarded payload contains the validated browser fields plus server-derived `page_url` and `source`. Never any Supabase or Telegram credentials.
- Upstream call: `POST $LEAD_INGEST_URL` with `Authorization: Bearer $LEAD_INGEST_TOKEN`. Response mapping:
  - upstream 200 + `ok:true` + non-empty `lead_id` + valid delivery state → 200 with the same body.
  - upstream 401/403 → `ledger_not_configured` (503).
  - upstream 4xx → mapped safe browser category (`invalid_fields` fallback).
  - upstream 5xx / network / non-JSON / `ok:false` at 200 / bad delivery state → `capture_failed`.
- API success shape: `{ ok: true, lead_id, capture_status: 'captured', delivery: { telegram: 'pending'|'accepted'|'failed'|'not_configured' } }`.

## Browser behavior

- Each form calls `submitLead(...)` and, in parallel, the existing browser-direct Web3Forms endpoint. The Web3Forms POST body and access key are unchanged (browser-visible operational identifier already deployed on the public bundle for months).
- Only `/api/leads` durable success may show the success state. Web3Forms success alone MUST NOT show success. Web3Forms failure alone MUST NOT show an error.
- On durable-capture failure, forms remain usable and render a bounded `role="alert"` sentence pointing to the existing phone number.

## Vercel environment (post-LEADS-002)

- Add `LEAD_INGEST_URL` (HTTPS URL of the central Edge Function).
- Add `LEAD_INGEST_TOKEN` (per-site opaque bearer whose SHA-256 hash is in the central `LEAD_INGEST_REGISTRY`).
- Remove `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID` from the Vercel project — Telegram is now central. The rotated `TELEGRAM_BOT_TOKEN` used by the old `/api/lead-notify` no longer has any consumer in this project.
- No `SUPABASE_URL` or `SUPABASE_SERVICE_ROLE_KEY` in any site's Vercel env — those live only as Supabase Function secrets.
- Browser Web3Forms access key stays exactly as it is — no rotation, no account action.

## Not authorized by this branch

No live Supabase migration, Edge Function deployment, secret creation, Vercel env change, merge or deploy is authorized by LEADS-002. Branches only.
