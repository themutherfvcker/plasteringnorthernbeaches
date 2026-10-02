# PLASTER-COST-CTR-001 — Plastering cost SERP title experiment

Status: review candidate; no production deployment authorised by this document.

Control: GitHub Issue #3.

## Query and intent

- Primary query: `plastering cost sydney`
- Primary intent: informational / commercial pricing research
- Owner: `/plastering-cost-sydney`

## GSC baseline

Settled through 2026-09-28.

- Page impressions: 200
- Page clicks: 0
- Page CTR: 0%
- Page average position: 8.87

The page is already achieving page-one visibility. This is therefore a SERP CTR experiment, not a broad relevance rewrite.

## Four Stars baseline

Current production score for `plastering cost sydney`: 63.3 / grade C.

The existing title itself passes the primary-query checks and scores 24.6/25. The experiment intentionally changes only the title; H1, meta description, body copy, schema and URL remain frozen for attribution.

## Experiment

Before:
`Plastering Cost Sydney — 2026 Price Guide | Jack's Plastering`

After:
`Plastering Cost Sydney 2026 | Repairs from $290 + m² Rates`

Hypothesis: preserving the exact query while adding concrete, supportable pricing information will improve qualified organic CTR without materially reducing average position.

The page supports both claims: small repair pricing starts at $290 and full-home plastering includes per-square-metre rates.

## Validation

- Local production build: PASS on Next.js 15.5.19.
- Rendered HTML title: `Plastering Cost Sydney 2026 | Repairs from $290 + m² Rates` (58 characters).
- Four Stars after title change: 63.6 / grade C; title element 25/25.
- First Vercel preview attempt failed inside `next/font` Google Manrope loading, unrelated to the page/title diff; preview was retriggered after local validation.

## Success / rollback

Primary metric: page-level organic CTR.

Guardrails:
- average position does not materially regress;
- `/plastering-cost-sydney` remains the ranking URL for the cost/pricing cluster;
- no reduction in qualified leads attributable to the page.

Review at T+14 for indexing/snippet adoption. Primary decision at T+28 or after at least 200 additional settled impressions, whichever provides the more useful sample.

- T+14: 2026-10-16
- T+28: 2026-10-30
- T+56: 2026-11-27

Rollback: restore the exact pre-test title from main commit `0a2cf4fe01922297a05f321e7cb33ea9b77163d0`. Do not invent a third title during rollback.
