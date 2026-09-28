# PLASTER-GYPROCK-001 — Gyprock page, Ads build sheet and non-homepage SEO review

Status: implementation candidate; no merge, deployment or Google Ads account change authorised by this document.

Control: [Plastering Northern Beaches Issue #3](https://github.com/themutherfvcker/plasteringnorthernbeaches/issues/3)

## Evidence boundary

- Repository baseline: `main` tree `c537e82790bde829e6fa823f226f5d754da77648`.
- GSC: `sc-domain:plasteringnorthernbeaches.com.au`, exported 2026-09-27, settled through 2026-09-25, requested coverage 2026-06-29 through 2026-09-26. The export contains 82 query rows, 8 page rows and 115 query-page rows. GSC top-row and anonymisation limits apply.
- GA4: property `542998454`, exported 2026-09-27, data through 2026-09-26. Conversion/key-event data is not usable in this snapshot (`0` key events); lead quality must be reconciled outside GA4.
- Google Ads: user-supplied native exports for 2026-09-21 through 2026-09-27. Explicit Gyprock terms generated 3 clicks, A$38.28 spend and 1 recorded conversion. This is a small sample and supports a separate ad-group test, not a separate campaign.
- Live-search review performed 2026-09-28 for the principal service intents. Search results vary by user, device and location; the review is directional, not a rank tracker.

## Page-ownership decision

| Intent | Owner |
|---|---|
| plastering / plasterer Northern Beaches | Homepage |
| Gyprock / gyprocker / plasterboard repair and installation | `/services/gyprock-plasterboard-northern-beaches` |
| general ceiling repair | `/services/ceiling-repair-sydney` |
| water-damaged ceiling | `/services/water-damage-ceiling-repair` |
| storm-damaged ceiling | `/services/storm-damage-ceiling-repair` |
| plaster hole repair | `/services/plaster-hole-patch` |
| plaster crack repair | `/services/plaster-crack-repair-sydney` |
| cornice repair and replacement | `/services/cornice-repair-sydney` |
| end-of-lease plaster repair | `/services/end-of-lease-plaster-repair` |
| plastering cost / prices | `/plastering-cost-sydney` |

The homepage remains the general local owner. The new page must remain specifically about Gyprock/plasterboard; it must not become a second general-plasterer page.

## Non-homepage title, slug and heading review

No existing title, slug, H1 or H2 is changed in this task. Proposed experiments require a separately approved baseline, rollback and measurement window.

| Page | Current evidence | Diagnosis | Recommended next action |
|---|---|---|---|
| `/plasterer-northern-beaches` | 273 impressions, 0 clicks, 0% CTR, avg position 49.24 | The slug/title/H1 are individually relevant, but the page duplicates the homepage's general local intent. GSC shows the homepage as the stronger owner for the same query family. This is primarily ownership/cannibalisation, not a wording defect. | Do not mass-rewrite. Decide whether this stays an indexable service hub or becomes a conversion-only secondary page. If retained, test a service-hub title/H1 such as `Plastering Services Northern Beaches` rather than competing for the homepage's exact owner. |
| `/plastering-cost-sydney` | 141 impressions, 0 clicks, avg position 9.83. Several cost queries appear around positions 8–20. | Strongest immediate CTR opportunity. Slug and H1 match question intent. Current title is relevant but reads like a label rather than the searcher's question/benefit. | Keep slug and H1. Run an isolated title-only test: `Plastering Cost Sydney: 2026 Prices by Job | Jack's`. Preserve the current title for rollback and measure for 28 settled days or at least 200 impressions. |
| `/services/ceiling-repair-sydney` | Not present in the 8-row GSC page export. General ceiling-repair queries currently surface the water-damage page. | Title, slug and H1 are aligned, but Google has not established this as the general ceiling owner. Current H2s are conversion-led and provide little explicit coverage of repair types. | First verify indexation and internal-link strength. Then add a useful `Ceiling repairs we handle` section covering cracks, sagging, holes, failed fixings and replacement. Do not change the title until ownership is corrected. |
| `/services/cornice-repair-sydney` | 69 impressions, 1 click, 1.45% CTR, avg position 25.36. Exact-query impressions split between homepage and service page. | Title, slug and H1 match the target. The issue is weak ownership/authority and split signals, not missing keyword repetition. | Protect the current title. Strengthen contextual internal links and make `Cornice repair, replacement and installation` the first service-detail H2 in a later isolated change. |
| `/services/end-of-lease-plaster-repair` | Absent from the current GSC page export. | Slug/title/H1 are aligned. There is not enough first-party evidence to justify a rewrite. | Verify indexation and real demand. Leave copy unchanged until the page earns impressions or paid-search evidence establishes the intent. |
| `/services/plaster-crack-repair-sydney` | 29 impressions, 1 click, 3.45% CTR, avg position 27.14. The live review surfaced the page for the intended query family. | This is the only non-homepage service page with a positive click signal in the current export. Title, slug, H1 and first H2 are well aligned. | Protect it. No title/H1/H2 change now. Improve authority/internal links before considering a CTR experiment. |
| `/services/plaster-hole-patch` | 49 impressions, 0 clicks, avg position 12.06. `patch plaster holes sydney` avg position 8.63; `plaster repairs sydney` position 7. | The title uses the stronger `repair` language, while the slug and H1 use `patch`. The title also contains a concrete price and was surfaced in the live review. | Keep the established slug and current title. After a clean baseline, test H1 only: `Plaster Hole Repair Sydney`, retaining `patch` naturally in the body. Do not redirect the slug for a wording preference. |
| `/services/storm-damage-ceiling-repair` | 42 impressions, 0 clicks, avg position 36.48. | Title, slug and H1 match the narrow intent. Low position and small query volume mean CTR copy is not the primary constraint. | Leave title/H1 unchanged. Verify claims and improve authority/internal linking; do not broaden it into general ceiling repair. |
| `/services/water-damage-ceiling-repair` | 103 impressions, 0 clicks, avg position 39.30. It is also receiving general ceiling and emergency-plastering impressions. | Title, slug and H1 match water damage, but the page is absorbing broader ceiling intent and overlaps with the general and storm pages. | Keep title/H1. Tighten ownership in a later change: water damage only, with contextual links to general ceiling and storm pages. Avoid adding more general ceiling phrases. |

## Priority sequence for the existing pages

1. Resolve the homepage versus `/plasterer-northern-beaches` owner conflict.
2. Run the isolated title test on `/plastering-cost-sydney`.
3. Establish `/services/ceiling-repair-sydney` as the general ceiling owner.
4. Test the plaster-hole H1 only after its baseline window.
5. Protect the crack-repair title/H1 while it is the only non-homepage service page producing an organic click signal.

This sequence follows: `QUERY -> SERP -> PAGE OWNERSHIP -> FOUR STARS -> SERP CTR -> PAGE EXPERIENCE -> AUTHORITY/ENTITY -> QA -> SHIP -> MEASURE`.

## Google Ads build specification

Create this ad group only after the landing page is deployed and verified. Create it paused first. Keep it in the existing Search campaign and shared campaign budget; do not create a separate campaign or change bidding/budget settings.

### Ad group

- Name: `Gyprock & Plasterboard`
- Final URL: `https://www.plasteringnorthernbeaches.com.au/services/gyprock-plasterboard-northern-beaches`
- Display path 1: `gyprock`
- Display path 2: `repair-install`
- Match types: exact and phrase only at launch

### Keywords

```text
[gyprock sydney]
"gyprock sydney"
[gyprocker sydney]
"gyprocker sydney"
[gyprock northern beaches]
"gyprock northern beaches"
[gyprock repair]
"gyprock repair"
[gyprock repair near me]
"gyprock repair near me"
[gyprock installation]
"gyprock installation"
[gyprock installer near me]
"gyprock installer near me"
[plasterboard repair]
"plasterboard repair"
[plasterboard installation]
"plasterboard installation"
"plasterboard work"
```

Do not launch broad match. The campaign's location-presence setting and service area must remain the controlling geographic boundary.

### RSA headlines

All are 30 characters or fewer. Do not pin at launch unless Google requires an asset for policy/completeness.

1. `Gyprock Northern Beaches`
2. `Gyprock Repair & Install`
3. `Local Gyprocker Near You`
4. `Plasterboard Repairs`
5. `Plasterboard Installation`
6. `Gyprock Walls & Ceilings`
7. `Fixed-Price Quote in 24hrs`
8. `Repair, Replace or Install`
9. `Clean, Paint-Ready Finish`
10. `Call Jack for a Free Quote`
11. `Licensed Local Gyprocker`
12. `2-Year Written Guarantee`
13. `Northern Beaches Local`
14. `Small Repairs Welcome`
15. `Renovation Gyprock Experts`

### RSA descriptions

All are 90 characters or fewer.

1. `Gyprock and plasterboard repair, replacement and installation. Get a fixed-price quote.`
2. `Northern Beaches walls, ceilings, holes and damaged sheets. Call Jack for a free quote.`
3. `Clean, paint-ready work backed by a 2-year written workmanship guarantee.`
4. `Small repair or renovation? Tell us what you need and arrange a quote within 24 hours.`

### Negative routing

Use conservative routing. Do not broadly negative `plaster`, `plastering`, `gyprock` or `ceiling`; customers mix those terms.

- Add exact ad-group negatives for the exact intents already owned by other groups, where those groups exist: `[cornice repair]`, `[plaster hole repair]`, `[water damage ceiling repair]`, `[storm damage ceiling repair]`.
- Preserve or add campaign-level research/employment negatives only after checking the existing shared list: `jobs`, `job`, `salary`, `wage`, `course`, `training`, `tafe`, `apprenticeship`, `diy`, `bunnings`, `supplier`, `supplies`, `wholesale`.
- Review search terms at least twice in the first 10 days. Add negatives from real irrelevant terms, not assumptions.

### Measurement and launch gates

1. Landing page returns 200, canonical matches, form submits successfully, phone link works and existing lead-capture behavior is unchanged.
2. Ad group and RSA are created paused and checked for policy/asset errors.
3. Final URL tracking parameters follow the current campaign convention.
4. Conversion reporting is reconciled against qualified calls/forms and won jobs; Google-recorded conversions alone are not the business truth.
5. Activate without changing the shared campaign budget or bidding strategy.
6. First review after 10–14 days, reporting search term -> ad -> landing page -> connected call/form -> won job. Do not judge the test from one conversion.

## Rollback

- Code: revert the eventual merge commit or remove the new page plus its sitemap/service links.
- Ads: pause the Gyprock ad group. Do not delete it; preserve history.
- Existing-page experiments: restore the exact recorded pre-change title/H1 after the agreed measurement gate if the primary metric regresses materially.
