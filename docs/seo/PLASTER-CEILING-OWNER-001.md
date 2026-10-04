# PLASTER-CEILING-OWNER-001 — Separate generic ceiling repair from water-damage intent

Status: DEPLOYMENT CANDIDATE
Prepared: 2026-10-04
Measurement freeze through: 2026-11-01

## Query and SERP

Primary query: `ceiling repair`
Secondary cluster:
- `ceiling repairs`
- `ceiling repair sydney`
- `ceiling repair near me`
- `plaster ceiling repair`
- `repair plaster ceilings`
- `sagging ceiling repair` when no water/leak modifier is present

Intent: commercial service / local repair.

SERP review on 2026-10-04 confirms a dedicated ceiling-repair service page is the normal result type. Competing service pages lead with the ceiling problem and repaired outcome rather than a water-damage-only offer.

## Page ownership

Generic ceiling-repair owner:
`/services/ceiling-repair-sydney`

Water/leak-specific owner:
`/services/water-damage-ceiling-repair`

The water-damage page should own queries containing clear water/leak/storm/insurance damage intent. It should not attempt to own dry cracks, holes, age-related plasterboard failure, fixing failure or generic ceiling-repair intent.

## Current Four Stars

Generic owner before intervention:

- Title: `Ceiling Repair Sydney — 24hr Quote | Jack's Plastering` — aligned.
- H1: `Ceiling Repair, Sydney` — aligned.
- Meta: opens with cracked/sagging/water-stained ceiling symptoms and fixed-price ceiling repair — aligned.
- First substantive hero content: explicitly says most ceiling repairs are completed in one visit — aligned.
- H2s: page contains `Recent ceiling repairs across Sydney` and `Ceiling repair — your questions`; first process H2 was only `How it works` — good but improvable.

Conclusion: Four Stars is already strong. Weak Google selection is an ownership/intent-overlap problem, not a reason to stuff the generic page or rewrite its established title/meta.

## GSC baseline

Current 28-day query→page data through 2026-09-29 shows generic ceiling terms being selected on the water-damage page:

| Query | Ranking page | Impressions | Avg position |
|---|---|---:|---:|
| ceiling repairs | /services/water-damage-ceiling-repair | 5 | 10.8 |
| ceiling repairs sydney | /services/water-damage-ceiling-repair | 4 | 33.75 |
| plaster ceiling repair | /services/water-damage-ceiling-repair | 2 | 28.5 |
| plaster ceilings repair | /services/water-damage-ceiling-repair | 1 | 42 |
| repair plaster ceilings | /services/water-damage-ceiling-repair | 1 | 44 |
| sagging ceiling repair | /services/water-damage-ceiling-repair | 1 | 10 |
| patch ceiling plaster | /services/water-damage-ceiling-repair | 1 | 5 |

The intended generic owner was not selected for those current-28-day rows.

## Paid + demand evidence

Google Ads:
- `ceiling repair`: 6 impressions, 1 click, A$15.41 cost, 1 conversion.
- `plaster ceiling repairs near me`: 5 impressions, 1 click.
- `ceiling plasterer`: 5 impressions, 1 click.

Keyword Planner local campaign geography:
- `ceiling repair`: ~140 avg monthly searches, high advertiser competition, high top-of-page bid about A$11.63.
- `ceiling repair near me`: ~90 avg monthly searches.

This is commercially proven demand.

## Hypothesis

Google is selecting the water-damage URL for generic ceiling-repair queries because that page contains a broad diagnostic section explicitly targeting non-water causes such as age-related plasterboard failure, cornice detachment and fixing failure.

Narrowing the water-damage page to leak/moisture/insurance intent, explicitly handing dry/general ceiling problems to the generic owner, and strengthening the generic owner's first H2 should consolidate generic ceiling-repair relevance onto `/services/ceiling-repair-sydney` without damaging water-damage relevance.

## Intervention

1. Keep generic ceiling title, H1 and meta unchanged.
2. Change the generic page's first process H2 from `How it works` to `How our Sydney ceiling repair service works`.
3. Remove the water-damage page's broad non-water diagnostic ownership section.
4. Replace it with a water-specific section covering leak/moisture symptoms and insurance work.
5. Add an explicit contextual handoff from the water-damage page:
   `See general ceiling repair in Sydney → /services/ceiling-repair-sydney`.
6. Tighten the shared Related Services blurb for water damage to leak/storm/brown-stain/insurance intent.

No title/meta/canonical/URL changes. No redirect changes.

## Protection

Do not change either ceiling page's SEO spine or ownership strategy during the measurement window unless there is a factual/legal issue or a material technical regression.

Gyprock/plasterboard-specific terms remain governed by `PLASTER-GYPROCK-001`; this experiment must not override that freeze.

## Measurement

T+14: 2026-10-18
T+28: 2026-11-01
T+56: 2026-11-29

Success signals:
- generic ceiling-repair query variants begin selecting `/services/ceiling-repair-sydney`;
- generic owner's impressions/ranking improve without a material loss of qualified water/leak impressions on the water-damage page;
- water-damage page remains the owner for explicit water/leak/storm damage queries;
- no regression to Gyprock ownership.

Rollback:
restore the pre-intervention versions of:
- `app/services/water-damage-ceiling-repair/page.tsx`
- `app/services/ceiling-repair-sydney/page.tsx`
- `components/RelatedServices.tsx`

from the parent commit immediately before this experiment ships.
