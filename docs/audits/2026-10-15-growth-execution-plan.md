# Plastering Northern Beaches — Growth execution plan (2026-10-15)

Status: **IMPLEMENTATION BRIEF — NO PRODUCTION CHANGES**  
Owner: Plastering Northern Beaches project; evidence: G1 (GSC through 2026-10-12, GA4/Ads through 2026-10-13).  
Canonical control: GitHub Issue #3; deployment requires owner approval.

## Baseline and measurement contract

- GSC 2026-09-15 to 2026-10-12: 1,433 impressions, 11 clicks, 0.77% CTR, average position 12.99. Prior 28d: 873 impressions, 6 clicks, avg position 20.79.
- GA4 2026-09-16 to 2026-10-13: 170 sessions, 18 key events. G1 reports no configured/observed named lead events in its lead-tracking summary.
- Google Ads same period: A$599.33 spend, 87 clicks, 13 reported conversions, A$46.10 per reported conversion. **Do not represent these as 13 verified customers/leads**.
- Supabase `lead_analytics` (site `plastering-nb`, date 2026-09-16 through 2026-10-13 inclusive): 8 ledger rows, 8 valid records per automatic test filters, all submitted at `/`. Not equivalent to paid-attributed conversions.
- Audit three periods: baseline; 14-day follow-up; 28-day follow-up. Record raw counts, qualified calls/forms, wins, spend, CPA and page-level search evidence with exact windows.

## Workstream A — lead reconciliation (P0)

1. Inventory actual Google Ads conversion action names, include/exclude status, counting setting (one/every), attribution, value and primary/secondary classification; identify calls vs form submits. Read-only first.
2. Trace the homepage form through submit handler -> Supabase ledger -> Telegram notification -> GA4 -> Google Ads. Test once with a marked non-customer test, ensuring it is excluded from business lead reporting.
3. Report separate metrics for form submissions, qualified calls, qualified enquiries, booked quotes and won jobs. Never equate GA4 key events or Ads conversions with ledger forms.
4. Check duplicate event firing and consent/cross-domain behaviour. Log all changes before touching Ads bidding or budgets.

Acceptance: one event-to-destination matrix, test evidence, dedupe proof, and reconciled numbers with documented expected differences; no PII in analytics report.

## Workstream B — gyprock (P0)

Target owner: `/services/gyprock-plasterboard-northern-beaches`. Queries include `gyprocker northern beaches`, `gyprock repairers dee why`, `gyprockers near me`, `plasterboard wall installation`.
1. Verify live response, server-rendered canonical/title/H1, robots directives, sitemap, internal links, GSC indexing and indexed URL before proposing copy changes. G1 has no page-scoped GSC row and no registered ownership entry; **this does not prove a page is missing**.
2. Review live SERP intent and service-vs-local intent; document primary query, secondary queries, intended owner and conflicts.
3. Four Stars audit: title, H1, prominent H2, first paragraph against target intent (record the actual scoring rubric/result, not an invented score). Then CTR, conversion UX, fact-check, mobile/technical QA.
4. Preserve an independent gyprock category from general plastering. Use real business photographs only with permission; do not fabricate credentials, reviews, job counts or promised turnaround.
5. Record baseline then monitor at 14/28 days post-release.

Acceptance: indexed and internally linked intended URL; registered owner; query map; scored Four Stars sheet; live CTA and form test.

## Workstream C — durable page/query registry (P0)

G1 `page_ownership` returns `available:false`: no durable registry currently exposed. Establish authoritative query -> URL decisions in project repo and integrate/sync with G1's expected registry contract; **a Markdown list alone must not be described as a working G1 registry**.

Provisional, subject to SERP verification:
| Query group | Intended owner | Status |
|---|---|---|
| plasterer / plastering northern beaches | `/` | HOLD through 2026-10-30; PLASTER-OWNER-001 |
| gyprocker northern beaches / gyprock repair | `/services/gyprock-plasterboard-northern-beaches` | research, indexing check |
| plastering cost sydney | `/plastering-cost-sydney` | audit |
| wall crack repair sydney | `/services/plaster-crack-repair-sydney` | verify competing hole patch URL |
| ceiling repairs sydney | `/services/ceiling-repair-sydney` | HOLD through 2026-11-01; PLASTER-CEILING-OWNER-001 |

Protect experiments: **do not edit or reassign** homepage cluster before 2026-10-30 or ceiling cluster before 2026-11-01.

## Workstream D — cost page (P1)

GSC 2026-07-16 to 2026-10-13: `/plastering-cost-sydney` 543 impressions, 1 click, 0.18% CTR, avg position 8.99.
1. Export page-scoped query list and inspect SERPs; identify primary intent, snippet competition and existing search title.
2. Score actual page title, H1, H2 and opening copy with Four Stars rubric. Record baseline screenshots and mobile form UX.
3. Audit factual claims on live copy (including licence, pricing, guarantee, response times, business address, 15+ years and cost examples). Obtain owner-provided verification before asserting or rewriting claims.
4. Propose ONE measurable title/meta experiment after query/SERP and ownership review, avoiding simultaneous redesign so CTR impact can be measured.
5. Keep prominent free-quote CTA and clear explanations of price ranges, without unsupported guarantees.

Acceptance: query-and-SERP evidence; four-star audit; one approved experiment hypothesis; verified claims; mobile QA; performance follow-up.

## Workstream E — real business trust assets (P1)

- Owner-supplied photo `plastering-northern-beaches-jack.png` is available in the current conversation, **not automatically in GitHub**.
- With image rights and confirmation of who appears, prepare a cropped, web-optimised version; place on homepage or about/trust section without changing frozen target copy.
- Confirm supplied photo reflects actual staff and vehicle; add useful descriptive alt text.
- Request actual project before/after photos and display only verified proof. Do not fabricate ratings/reviews.

## Workstream F — governance and QA

1. Review changes in branch; no automatic production deploy for this planning change.
2. QA: build/test, HTTP 200, canonical, robots, sitemap, internal links, responsive layout, GTM/GA4/Ads dedupe, Supabase ledger and Telegram.
3. Ship only after owner approval and experiment constraints.
4. Measure 14 and 28 days after release. Record all changes in issue #3 and PR.

## Caveats

The G1 audit has several high-priority page conflicts but its keyword aggregation includes varying date windows. Never compare a 90-day page count to a 28-day site total. GSC alone cannot establish generative/AI search visibility.
