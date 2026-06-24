# Plastering Northern Beaches — Business Brief

**Status:** v0.1 (scaffold — pre-launch)
**Last reviewed:** 2026-06-24
**Owner:** Joe Lombardo (mrjoelombardo@gmail.com)

Per-business content. Shared framework lives at `~/.claude/templates/business-seo-system/METHODOLOGY-TEMPLATE.md`. This file is everything specific to plasteringnorthernbeaches.com.au.

---

## 1. Vision — the triumvirate

### Capability statement (what we build)
**Be the easiest path for Sydney Northern Beaches homeowners to find a licensed plasterer/gyprocker — and for one trusted local trades partner to fill their job book.**

### Positioning statement (how we're perceived)
**Northern Beaches plastering & gyprocking specialists — local, NSW Fair Trading licensed, 20+ years on the tools.**

### Promise statement (what users get)
**Free quote within 24 hours. Mid-sized jobs ($3,000–$10,000) done fast, clean, and on budget.**

### Five-year vision
- Top-3 organic position for 10+ priority queries across Northern Beaches + Eastern Sydney
- Ranking in the local 3-pack for "gyprocker dee why" / "plasterer northern beaches" via GBP
- Steady stream of 15–40 qualified leads/month routed to a single trusted partner
- Sydney-wide expansion via service × suburb sub-pages on the same domain (no new domain needed)

---

## 2. Strategy — three moats

### Business model
- [x] **Lead-gen / rank-and-rent** — Joe owns site + domain + GBP + Ads. Partner gyprocker pays per lead OR on a monthly retainer.
- [ ] Direct service provider
- [ ] SaaS

### Target audience
**Primary searcher (B2C):** Sydney Northern Beaches homeowners. Renovation-mid, mid-budget. Owner-occupiers and landlords. Searching for plasterers/gyprockers for ceiling repair, room replaster, gyprock install, cornice restoration.

**Geographic scope (Tier 1):** Dee Why corridor — Brookvale, Collaroy, Cromer, Narrabeen, Manly, Frenchs Forest, Belrose. ~150K population, ~50% homeownership rate.

**Geographic scope (Tier 2 — Sydney expansion later):** Eastern Suburbs, Inner West, Lower North Shore.

**Buyer side:** Single gyprocking partner — 20+ years experience, NSW Fair Trading licensed, has photos + testimonials + capacity to take 10–40 jobs/month.

### Moat 1 — EMD domain + Northern Beaches authority
**What we build:** plasteringnorthernbeaches.com.au is a pure exact-match domain for the primary head term. Combined with rich on-page entity coverage (NSW Fair Trading, HIA, Master Builders, heritage cornice, strata renovation requirements, coastal humidity gyprock specs), the homepage ranks fast and the sub-pages catch long-tail.
**Measurement:** GSC organic positions on tracked keywords.
**Target:** 10 priority keywords in top 10 organic by month 4. Homepage on page 1 for "plastering northern beaches" by month 3.

### Moat 2 — GBP local pack presence (Dee Why area)
**What we build:** Google Business Profile registered at the gyprocker partner's real business address. Photos, services, reviews seeded from real past clients. Goal: appear in the Map Pack for "plasterer dee why" / "gyprocker northern beaches" / "ceiling repair dee why".
**Measurement:** Local Falcon-style geo-grid monthly. Target: top-3 in the 5km radius around Dee Why within 6 months.

### Moat 3 — Specific job-size positioning ($3K–$10K sweet spot)
**Unique angle:** Page copy specifically positions for $3,000–$10,000 jobs — room replasters, ceiling repairs, cornice restoration, single-wall gyprock. This filters out the $500 patch quotes AND the $50k whole-house renos. Result: partner quotes faster, leads convert at higher rate, cash margins are best in this band.
**Measurement:** Lead form / phone enquiry analytics (which projects do they describe).
**Target:** 70%+ of leads fall in the $3K–$10K band by month 3.

### What we will NOT do
- Sell to multiple partners (one-partner exclusivity for trust + conversion quality)
- Compete on the $500 patch jobs (low margin, slow conversion, hurts brand)
- Compete on the $50K whole-house renos (long sales cycle, big-firm competition)
- Fake testimonials or stock-photo "team" photos — every photo is real partner work
- Run paid ads to landing pages without a clear conversion event (form or call)
- Build for SEO before the GBP exists (NAP must align from day 1)
- Use a tracking phone number that differs from the GBP phone (de-validates GBP signal)

---

## 3. Site architecture — two intent lanes

### Lane A — High-Intent (immediate conversion)
**Searcher state:** Has the renovation, needs a tradie now.
**Page intent:** Hero with phone CTA, photos, "free quote 24 hr" badge.
**URL patterns:**
- `/` (homepage — EMD ranker for "plastering northern beaches")
- `/gyprocking-dee-why` etc. (service × suburb)
- `/plastering-manly` etc.
- `/ceiling-repair-northern-beaches`
- `/cornice-restoration-northern-beaches`

### Lane B — Lower-Intent (informational)
**Searcher state:** Researching, cost comparison, "how does plastering work".
**Page intent:** Answer the question deeply, build trust via local knowledge, soft phone CTA.
**URL patterns:**
- `/cost-to-plaster-a-room-sydney`
- `/plastering-vs-gyprocking-whats-the-difference`
- `/heritage-cornice-restoration-cost-sydney`
- `/how-long-does-plastering-take`
- `/do-i-need-strata-approval-for-gyprocking-sydney`

### Conversion gateway
**The phone CTA button** — present in every hero, every sticky sidebar, every section break. **Phone number = partner's actual GBP phone**. The form is secondary (slower to convert, less qualified).

---

## 4. Conversion flow

```
Step 1: Google search / Google Ads / GBP click  →
Step 2: Land on /  or  /[service]-[suburb]       →
Step 3: See hero photo + $3K–$10K positioning    →
Step 4: Click phone CTA (tel:+61PARTNER-PHONE)   →
Step 5: Partner answers, books site visit         →
Step 6: Partner closes job → pays Joe lead fee
```

### What "broken conversion" looks like
- Form submits with no follow-up phone calls (means partner missed the lead)
- Leads with non-Sydney area codes (test/spam — flag in lead-notify)
- Phone CTAs render but no `phone_call_click` events in GA4
- Lead description mentions $500 jobs or $50K+ renos (positioning leak)

---

## 5. Decision filters

### Build trust
- Real partner photos in hero + service galleries
- NSW Fair Trading license number displayed prominently + linked
- "20+ years on the tools" claim is true (verify before publishing)
- Real testimonials with first name + suburb (not "Sarah from somewhere")
- HIA / Master Builders membership badges if applicable
- Job-size positioning explicit ("specialising in $3,000–$10,000 jobs")

### Build authority
- Local entity coverage: NSW Fair Trading, HIA, Northern Beaches Council, strata laws, coastal humidity specs, heritage areas (Paddington-like NB neighbourhoods)
- Question-format H2s for AI extraction ("How much does plastering a room cost in Sydney?")
- Cost ranges in AUD, not USD (obvious but critical)
- Schema markup: LocalBusiness + Service + FAQPage + BreadcrumbList on every page
- Internal linking between service pages + sub-suburb pages
- Use Australian English: "plasterer", "gyprocker", "Mum-and-Dad renovations", "knockdown rebuild"

### Rule out (do not ship)
- Phone number that differs from the GBP phone (breaks signal)
- Photos that are stock — only partner's real work
- US-centric SEO patterns (drywall vs plasterboard / gyprock — use Aussie terms)
- Generic "we connect you with..." copy — the page IS the tradie
- Pages that try to rank for Sydney-wide before NB is won

---

## 6. Protected pages — top-ranking URLs

To populate after first ranking signals (expected week 8+).

| URL | Current pos / impr / clicks | Owns query cluster |
|---|---|---|
| (TBD) | — | — |

---

## 7. Architecture / API / Stack

**Live site:** https://www.plasteringnorthernbeaches.com.au (pending DNS + Vercel)
**Repo:** https://github.com/themutherfvcker/plasteringnorthernbeaches
**Stack:** Next.js App Router · TypeScript · Tailwind CSS · Vercel
**Local working clone:** `/tmp/plasteringnorthernbeaches`
**GitHub push token:** stored in the local git remote URL (set at clone). Ask Joe for the active token if a fresh clone is needed — never commit it.

### Domain & DNS
- Registrar: TBD (Crazy Domains / VentraIP / Netregistry)
- DNS: point to Vercel (TBD: nameservers vs A records)

### Vercel
- Project: TBD (create + link to repo via dashboard)
- Auto-deploy from `main`
- Custom domain: plasteringnorthernbeaches.com.au + www. redirect

### Partner contact
- Name: TBD
- Business name: TBD
- ABN: TBD
- NSW Fair Trading license: TBD
- Phone: TBD (THIS becomes the site's phone everywhere — match GBP)
- Email: TBD
- Address (for GBP): TBD

### Lead delivery
- Phone: direct to partner (tel: click)
- Form: → `/api/lead-notify` → Telegram (Joe) + email (partner)
- Telegram bot for Joe: token stored in env var `TELEGRAM_BOT_TOKEN` (VPS + Vercel) — chat ID `8658574805`
- Need: partner email for form lead forwarding

### Analytics
- GA4: TBD (create property, paste G- ID)
- Phone + form events: wire via afterInteractive Script (same pattern as HSP)

### Cron infrastructure (post-launch)
- Daily session brief (8am UTC) — copy template from `~/.claude/templates/business-seo-system/cron-templates/`
- Weekly rank tracker (Monday) — extend the agency Python tracker

---

## 8. Keyword strategy

Engine brief will populate `scripts/seo/tracked-keywords.json` after first SERP audit. Initial keyword candidates:

### Tier 1 — Highest commercial intent (homepage targets)
- plastering northern beaches
- plasterer northern beaches
- gyprocking northern beaches
- gyprocker northern beaches
- plaster repair northern beaches
- ceiling repair northern beaches

### Tier 2 — Service × Dee Why corridor (sub-pages)
- plasterer dee why
- gyprocker dee why
- ceiling repair dee why
- plasterer manly
- gyprocker manly
- plasterer brookvale
- plasterer collaroy
- plasterer mona vale

### Tier 3 — Service-specific (sub-pages)
- heritage cornice restoration sydney
- cornice repair northern beaches
- plasterboard installation sydney
- skim coat plastering sydney
- gyprock ceiling installation

### Tier 4 — Informational guides (Lane B)
- how much does plastering cost in sydney
- plastering vs gyprocking what's the difference
- how long does plastering take
- do i need strata approval for gyprocking

### Tier 5 — Near-me / location-agnostic (Google Ads winners)
- plasterer near me (Dee Why geo-target)
- gyprocker near me
- ceiling repair near me

---

## 9. Operational KPIs — weekly (post-launch)

| KPI | Source | Target | Action if down |
|---|---|---|---|
| GSC impressions | GSC API | 500/wk by week 8 | Check indexation, resubmit sitemap |
| Tier 1 keywords in top 10 | GSC weekly tracker | 5 of 6 by month 4 | Identify drops; check cannibalization |
| Phone CTA clicks (tel:) | GA4 event | 20/wk by month 2 | Check CTA visibility + Ads spend |
| Lead form submits | Web3Forms / api/lead-notify | 5/wk by month 2 | Check form validation |
| Leads accepted by partner | Manual tally from partner | 60%+ acceptance | Check lead quality + positioning |

---

## 10. Pre-launch checklist

### Domain & infrastructure
- [x] Repo created (https://github.com/themutherfvcker/plasteringnorthernbeaches)
- [ ] Domain registered (`plasteringnorthernbeaches.com.au` — Joe purchased 2026-06-24)
- [ ] Vercel project linked to repo
- [ ] Custom domain attached in Vercel
- [ ] DNS configured at registrar → Vercel
- [ ] SSL active (auto via Vercel)

### Partner deal
- [ ] Verbal agreement on lead pricing or retainer model
- [ ] Written agreement (1-page) covering use of name/license/photos + termination terms
- [ ] Partner provides: real NAP, ABN, license number, business address
- [ ] Partner provides: 10–20 real job photos with permission
- [ ] Partner provides: 5–10 testimonials from past clients (first name + suburb)

### Content
- [ ] Engine brief stage on homepage + Tier 1 keywords
- [ ] Lombardo method applied to convert brief → page architecture
- [ ] Homepage built (hero + services + process + testimonials + FAQ + contact)
- [ ] 3–5 priority sub-pages built (dee why, manly, brookvale + 1 service-specific)

### SEO / GEO
- [ ] Schema markup live + validated (Rich Results test)
- [ ] Sitemap generated + submitted to GSC
- [ ] robots.txt sitemap URL matches canonical
- [ ] llms.txt seeded
- [ ] GA4 property created + Measurement ID wired in layout

### GBP
- [ ] GBP created at partner's address
- [ ] Primary category: "Plasterer" or "Plasterboard contractor"
- [ ] Photos uploaded (10+ real partner work)
- [ ] Hours match site
- [ ] Service area set
- [ ] Phone matches site exactly
- [ ] Website link points to plasteringnorthernbeaches.com.au

### Ads
- [ ] Google Ads account created (or linked to existing)
- [ ] Campaign: "Plasterer near me — Dee Why geo target" with $20–$40/day budget
- [ ] Conversion: phone_call_click + lead_form_submit
- [ ] Landing page: homepage (or specific Dee Why sub-page)

---

## 11. Changelog

| Version | Date | Changes |
|---|---|---|
| v0.1 | 2026-06-24 | Scaffold repo created — Next.js + Tailwind + base structure. Domain `plasteringnorthernbeaches.com.au` purchased. Partner deal terms + content + GBP + Ads pending. |
