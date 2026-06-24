# Plastering Northern Beaches — Claude Code Project Context

> **Layer 0** — what every future Claude session reads first. Strategy + process live elsewhere and are referenced (not duplicated) below.

---

## What this project is

**Live site:** https://www.plasteringnorthernbeaches.com.au (pre-launch)
**Stack:** Next.js App Router · TypeScript · Tailwind CSS · Vercel
**Repo:** https://github.com/themutherfvcker/plasteringnorthernbeaches
**Local clone:** `/tmp/plasteringnorthernbeaches`
**Owner:** Joe Lombardo (mrjoelombardo@gmail.com)
**Revenue model:** Lead-gen / rank-and-rent — Joe owns site + domain + GBP + Ads. One trusted partner gyprocker pays per lead.

---

## Vision (the three-statement triumvirate)

- **Capability** — "Be the easiest path for Sydney Northern Beaches homeowners to find a licensed plasterer/gyprocker — and for one trusted local trades partner to fill their job book."
- **Positioning** — "Northern Beaches plastering & gyprocking specialists — local, NSW Fair Trading licensed, 20+ years on the tools."
- **Promise** — "Free quote within 24 hours. Mid-sized jobs ($3,000–$10,000) done fast, clean, and on budget."

Full vision + strategy: **`docs/BRIEF.md`**. Shared methodology: **`~/.claude/templates/business-seo-system/METHODOLOGY-TEMPLATE.md`**.

---

## Decision filters

Full filter content in `docs/BRIEF.md` §5. Quick reference — RULE OUT:
- Phone number that differs from the GBP phone (breaks signal alignment)
- Stock-photo team / customer photos — only the partner's real work
- US-centric SEO patterns ("drywall") — use Aussie terms ("plasterboard", "gyprock", "plasterer", "gyprocker")
- Generic "we connect you with..." copy — the page IS the tradie
- Pages targeting Sydney-wide before Northern Beaches is won
- Job-size positioning that includes $500 patches or $50K+ whole-house renos
- Fake testimonials, fake review counts, fabricated badges
- Tracking phone number that breaks NAP consistency with GBP

---

## Session start protocol

> The real session "tick" is the daily session brief Telegram message at 8am UTC once the cron is deployed. Until then, every session starts cold via this file.

1. **Read `docs/BRIEF.md`** — vision triumvirate + decision filters + protected pages + pre-launch checklist
2. **Check current sprint** — what's the highest unblocked item in BRIEF.md §10 checklist?
3. **Check GSC + GA4** once the site is live — anomalies in the last 7 days
4. **Start working** — don't ask "what would you like to work on?" Pick the top unblocked item
5. **End of session** — commit + push, send Joe a brief Telegram summary: what shipped, commit hash, what to watch next. Max 5 lines

### Priority order (every session)

1. **Pre-launch blockers** — BRIEF.md §10 checklist items in Domain → Partner Deal → Content → SEO → GBP → Ads order
2. **Broken conversion flow** (post-launch) — phone CTA broken, form failure, lead-notify outage
3. **Critical SEO alerts** — any Tier 1 keyword dropping out of top 20
4. **Protected page integrity** — top-ranking URL impression drop after a change
5. **Coverage gaps** — high-priority sub-pages from BRIEF.md §3 that haven't shipped yet

---

## Hard rules (apply to every task)

### How work ships
- **All deploys are git → Vercel auto-deploy.** Push to `main`, Vercel rebuilds. Claude runs every shell command via the Bash tool. Joe never runs commands manually on the VPS.
- **Every "done" claim needs a commit hash.** No exceptions.
- **Bottom out issues in the same session — never "wait and see."**
- **Never use `run_in_background: true` for polling loops.** Use `until <check>; do sleep N; done` instead.
- **GitHub push token:** stored in the local git remote URL (set at clone). If a fresh clone is needed, ask Joe for the active token — never commit it.

### What's protected
- **Protected pages list in `docs/BRIEF.md` §6** — populated after first ranking signals. Once populated, edits follow SAFE-vs-REQUIRES-CONFIRMATION protocol.
- **Phone number changes require Joe's explicit approval** — the site's phone MUST match the GBP exactly. Even a tiny mistake breaks the NAP signal.
- **GBP-linked details** (name, address, phone, hours, license, ABN) are mirrored from GBP — changes require Joe's confirmation that GBP is being updated too.

### Pages
- **New pages use the engine brief workflow + Lombardo method.**
  1. Run `python3 run.py --site plasteringnorthernbeaches --stage brief` from `/home/dev/agency/skills/seo-geo-engine/` (after the site config is registered there)
  2. Read brief → apply Lombardo method for offer/architecture/copy
  3. Write the page manually as Next.js TSX in `/app/[slug]/page.tsx`
  4. Validate schema with the Rich Results test before commit
- **Do NOT use the engine's generate stage** — it produces unstyled output that wastes spend (see HSP session recap).
- **Every page follows the same design pattern:**
  - Hero with real partner photo + phone CTA + license/years/free-quote badges
  - $3K–$10K job-size positioning visible above fold
  - Service overview with real photos
  - "Our process" 4-step list
  - Real testimonials (first name + suburb)
  - FAQ stack with $-specific answers
  - Sticky sidebar CTA + form
  - Related sub-pages grid at bottom
  - LocalBusiness + Service + FAQPage + BreadcrumbList JSON-LD on every page

### Communication
- Brief summaries only. Plain text. Max 5 lines unless asked. No preamble.
- Communication is Telegram (chat ID `8658574805`) — terminal text is invisible to Joe.
- Telegram bot token: `8583467810:AAFa3jJfHdjNApHpSreE2CEhz5H0X40vodA`.

---

## Architecture (live URL patterns once shipped)

```
/                                       — homepage (Tier 1 EMD ranker)
/plastering-[suburb]                    — service × suburb pages (Tier 2)
/gyprocking-[suburb]                    — same
/ceiling-repair-[suburb]                — same
/[long-tail-question]                   — Lane B informational guides
/api/lead-notify                        — POST: form data → Telegram + partner email
```

Full architecture details: `docs/BRIEF.md` §7.

---

## Useful commands

```bash
# Local dev server
cd /tmp/plasteringnorthernbeaches && npm run dev

# Build to verify changes compile
cd /tmp/plasteringnorthernbeaches && npm run build

# Engine brief stage (after site config registered)
cd /home/dev/agency/skills/seo-geo-engine && source /home/dev/.config/seo-geo.env && python3 run.py --site plasteringnorthernbeaches --stage brief

# Git status
cd /tmp/plasteringnorthernbeaches && git log --oneline -10
```

---

## Session permissions (auto-approve)

Auto-approve without asking:
- All bash commands (git, curl, node, python, npx, npm run build/dev)
- File edits (Edit, Write) — within `/tmp/plasteringnorthernbeaches/`
- Git operations (status, commit, push to `main`)
- Engine stage runs (once site config is added)

Require explicit Joe approval before running:
- `npm install` of any new package
- `rm -rf` or any destructive delete
- Changes to phone number, ABN, license, address (must match GBP)
- Changes to protected pages (BRIEF.md §6)
- Changes affecting partner deal terms or lead routing
- Anything affecting billing (domain renewal, Vercel plan, Ads spend)

---

## Documentation map

| Need | Doc |
|---|---|
| Vision / strategy / pre-launch checklist | `docs/BRIEF.md` |
| Shared framework (vision/strategy/process structure) | `~/.claude/templates/business-seo-system/METHODOLOGY-TEMPLATE.md` |
| Keyword targets (post-engine-brief) | `scripts/seo/tracked-keywords.json` |
| Engine config for this site | `~/.claude/skills/seo-geo-engine/sites/plasteringnorthernbeaches.yaml` (TBD) |
| Briefs generated | `~/.claude/skills/seo-geo-engine/briefs/plasteringnorthernbeaches-*.json` (TBD) |

---

## Pre-launch sprint (next session priorities)

In order — see `docs/BRIEF.md` §10 for the full checklist.

1. **Joe: register Vercel project** — link repo, attach custom domain
2. **Joe: confirm partner deal** — written 1-page agreement (use of name/license/photos, lead pricing, termination)
3. **Joe: provide partner NAP + ABN + license number + 10–20 real photos + 5–10 testimonials**
4. **Claude: register site in engine config** + run brief stage on Tier 1 keywords
5. **Claude: apply Lombardo method to build homepage** (offer + architecture + copy from brief)
6. **Joe: register GBP at partner's address** + Claude wires GBP details into `data/site.ts`
7. **Claude: build 3–5 priority sub-pages** (dee why, manly, brookvale + ceiling repair)
8. **Joe + Claude: launch Google Ads** (Dee Why geo-target, $20–$40/day, conversion = phone click + form submit)
9. **Claude: deploy daily-session-brief cron** + register site in weekly rank tracker
