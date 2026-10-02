# PLASTER-OWNER-001 — Consolidate general Northern Beaches plasterer intent

Status: review candidate; no production deployment authorised by this document.

Control: GitHub Issue #3.

## Query and ownership

- Primary query: `plasterer northern beaches`
- Primary intent: commercial / local service
- Confirmed owner: homepage `/`
- Duplicate owner being retired: `/plasterer-northern-beaches`

## GSC baseline

Settled through 2026-09-28.

| URL | Clicks | Impressions | Avg position |
|---|---:|---:|---:|
| Homepage | 21 | 2,091 | 21.68 |
| `/plasterer-northern-beaches` | 0 | 280 | 48.59 |

For the exact query `plasterer northern beaches`, the homepage recorded 138 impressions at ~20.38 while the duplicate URL recorded 24 at ~39.25.

## Hypothesis

Permanently redirecting the weaker duplicate URL and removing internal/sitemap/GEO references to it will consolidate general local-plasterer signals onto the homepage without sacrificing qualified traffic.

## Intervention

- Explicit HTTP 301 from `/plasterer-northern-beaches` to `/`.
- Remove duplicate URL from sitemap.
- Route generic Services links to the homepage service grid.
- Route full-home/general plastering links to the homepage.
- Point Drywall/Gyprock-specific homepage card to the dedicated Gyprock page.
- Correct Gyprock breadcrumb parent.
- Update `llms.txt` so the homepage is the declared head-term owner.

## Paid-search safety

Recent Google Ads landing-page evidence showed the homepage as the primary plastering destination and did not identify `/plasterer-northern-beaches` as a paid destination. The Gyprock ad group uses its dedicated Gyprock URL.

## Risk and rollback

Regression risk: LOW–MEDIUM. The retired page has impressions but no GSC clicks in the current 90-day snapshot.

Rollback: remove the redirect and restore the recorded sitemap/internal/GEO references from the pre-change main commit `0a2cf4fe01922297a05f321e7cb33ea9b77163d0`.

## Measurement

- T+14: 2026-10-16
- T+28: 2026-10-30
- T+56: 2026-11-27

Track homepage impressions, clicks, CTR, average position and ranking URL for the core local cluster. The retired URL should trend toward zero impressions as Google recrawls it.
