# plasteringnorthernbeaches.com.au

Northern Beaches Sydney plastering and gyprocking — lead-gen site.

**Status:** scaffold (pre-launch).

## What this is

A rank-and-rent / lead-gen site for plastering and gyprocking services in Sydney's Northern Beaches. Site owner: Joe Lombardo. Lead delivery partner: TBD (single trusted gyprocker).

## Stack

- Next.js App Router · TypeScript · Tailwind CSS
- Hosted on Vercel (auto-deploy from `main`)
- Custom domain: `plasteringnorthernbeaches.com.au`

## Documentation

- **`docs/BRIEF.md`** — full business brief (vision, strategy, conversion flow, partner deal, pre-launch checklist)
- **`CLAUDE.md`** — Layer 0 operational briefing for Claude Code sessions
- **Shared methodology:** `~/.claude/templates/business-seo-system/METHODOLOGY-TEMPLATE.md`

## Local dev

```bash
npm install
npm run dev
```

## Deploy

Push to `main` → Vercel rebuilds. Manual deploys via `vercel --prod` if needed (not normally required).
