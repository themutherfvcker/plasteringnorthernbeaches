# Plastering Northern Beaches — Agent Rules

Before creating or materially modifying any indexable page, metadata, H1, hero copy, internal-link architecture, schema description, or SEO-targeted content, read:

1. `docs/seo/README.md`
2. `docs/seo/SEO-OPERATING-SYSTEM-v1.1.md`
3. `docs/seo/SEO-METHODOLOGY-BASELINE-v1.0.md`
4. `CLAUDE.md` and `docs/BRIEF.md` for project-specific constraints

These rules apply to Codex and any other implementation agent.

Do not mass-rewrite existing titles. Existing pages require an evidence-based experiment with recorded pre-change state and rollback plan.

For new work:
`QUERY -> SERP -> PAGE OWNERSHIP -> FOUR STARS -> SERP CTR -> PAGE EXPERIENCE -> AUTHORITY/ENTITY -> QA -> SHIP -> MEASURE`

Default title formula:
`TARGET KEYWORD | SEARCHER BENEFIT OR GOAL | BRAND`

Four Stars is the relevance gate; CTR is a separate click layer. Project-specific factual/GBP/NAP/protected-page rules remain stricter where applicable.

---

## Portfolio protocol reference (AI Collaboration Operating Protocol v0.1.2)

This repository is governed by the portfolio AI Collaboration Operating Protocol at `themutherfvcker/ai-operating-system` v0.1.2. Read that protocol before coordinating cross-agent work here. Do not restate or fork it in this repository — reference it. The full canonical protocol lives at `AI-COLLABORATION-OPERATING-PROTOCOL.md` in that repository; the portable bootstrap it derives from is `templates/PROJECT-BOOTSTRAP.md` in the same repository. This section is the single canonical filled-in bootstrap for Plastering Northern Beaches. `CLAUDE.md` in this repo points here rather than duplicating the block.

### Project coordinates

- Repository: `themutherfvcker/plasteringnorthernbeaches`
- Canonical GitHub control channels (per-scope; cardinality per protocol §3 is one anchor per task chosen by scope):
  - Plastering NB project-local execution / control plane: `https://github.com/themutherfvcker/plasteringnorthernbeaches/issues/3` (Project Control Plane — Plastering Northern Beaches)
  - Cross-site / portfolio governance: `https://github.com/themutherfvcker/huntsvillesepticpros/issues/8`
  Each individual task uses exactly one anchor based on its scope; the same task must not be governed concurrently in both. When a task's scope moves between execution and governance, the new comment cross-references the prior anchor.
- Project governance / current-state docs (authoritative within their defined scope):
  - `AGENTS.md` (this file — canonical agent-rules entrypoint)
  - `CLAUDE.md` (Layer 0 session briefing)
  - `docs/BRIEF.md` (project-specific constraints)
  - `docs/seo/README.md`
  - `docs/seo/SEO-OPERATING-SYSTEM-v1.1.md` (versioned cross-repo SEO OS)
  - `docs/seo/SEO-METHODOLOGY-BASELINE-v1.0.md` (locked baseline)
  - `docs/LEADS-002.md` (LEADS-002 pipeline documentation for this repo)
- Agent entrypoints in this repo: `AGENTS.md` (this file — canonical), `CLAUDE.md` (points here).
- Protected surfaces (do not modify without explicit governed authorization): all indexable SEO / metadata / schema / canonical / internal-link surfaces; existing page titles (evidence-based experiment + rollback plan required per this file above); factual / GBP / NAP / licence-number rules; browser-direct Web3Forms behavior; `/api/leads` durable-capture pipeline and form components (`QuoteForm.tsx`, `LeanQuoteForm.tsx`, `LimeQuoteForm.tsx`); Google Ads landing pages; `LEADS-002` central lead pipeline (currently in `OBSERVE`).
- Production authority: Joe (final human authority for credentials, accounts, material business decisions, and production actions; the record of any such approval is a GitHub comment in the appropriate canonical control channel).
- Adopted protocol version: `0.1.2`.

### Coordination rules (short form)

1. Read `AI-COLLABORATION-OPERATING-PROTOCOL.md` at `themutherfvcker/ai-operating-system` first; then this repo's project governance in scope for the task at hand.
2. Newest approved state in the canonical control channel wins on authorization / lifecycle.
3. Git wins on technical reality.
4. Chat / Telegram is convenient but never authoritative. If a decision reached in chat affects governed authorization here, record it in the canonical control channel BEFORE another agent acts on it.
5. Local execution tools (LoopX, per-session task boards) are subordinate to Git and to the canonical control channel. They may carry a pointer to a canonical task but may not confer approval or transition lifecycle states.
6. Findings do not authorize fixes. A diagnosis or audit does not itself authorize a production change. The governed lifecycle is always required.
7. Joe shorthand (per protocol §9): `"CC done"` is a Joe → ChatGPT review trigger — ChatGPT re-reads GitHub + Git, reviews CC's latest `READY_FOR_REVIEW` handoff, and posts `APPROVED` or `REVISE`. CC never approves or revises its own handoff. `"Status"` triggers ground-truth re-read of GitHub + Git by the receiving agent before any response (reporting status confers no approval authority). `"Stop"` ceases action immediately. `"Resume"` / `"go ahead"` / `"yes"` advances only the currently authorized next lifecycle step within the receiving agent's §1 authority. Chat shorthand never overrides GitHub authorization.
8. Analytics evidence routing (per protocol §10): when GSC or GA4 evidence is required in this project, request it from CC via the canonical control channel. CC uses direct read-only access and returns property / date-range / dimensions / filters / sampling context. No credentials, service-account keys, refresh tokens or raw secrets ever enter Git, GitHub, logs, LoopX Evidence or any handoff. No paid-plugin fallback (e.g. GSC Wizard) without explicit Joe authorization recorded in the canonical control channel.

The protocol is a coordination layer only. Every existing Plastering-NB-specific rule in this repository — SEO governance, page-build workflow, factual / GBP / NAP / licence-number rules, protected page titles + evidence-based experiment requirement, browser-direct Web3Forms behavior, LEADS-002 pipeline observation, production authorization boundaries — remains in force. The protocol does not replace any of it.
