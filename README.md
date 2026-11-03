# Epic Seven Steam Guide (independent scaffold)

Unofficial English-first info site for **Epic Seven on Steam**: store entry, STOVE↔Steam transfer, Foundry schedule/rewards, updates log, Steam notes, FAQ.

**Not affiliated with Smilegate, STOVE, Valve, or Steam.**

## Local path

`/workspace/cf-migrate/epic7-steam-guide`

## Stack

- Next.js 14 App Router
- Static export: `output: 'export'`, `trailingSlash: true`, `images.unoptimized`
- Deploy target: Cloudflare Pages (static `out/`; project `epicsevensteam`, branch `master`)

## Scripts

```bash
npm install
npm run build    # writes out/
npm run start    # serve out/ locally
npm run dev      # next dev
```

## Domain status

- **Live apex:** https://epicsevensteam.com (Cloudflare Registrar → Cloudflare Pages project `epicsevensteam`, branch `master`)
- **www:** redirects to apex
- Candidates considered earlier: `epic-seven-steam.com`, `epic7steam.com`, `epicsevenfoundry.com`
- L1 locales: `en` (default), `ko`, `ja`, `/zh-tw/` (zh-Hant)

## Deploy to Cloudflare Pages

Pushes to `master` are built by the Cloudflare Pages project `epicsevensteam` from the repo root. `npm run build` writes `out/`. Do not push this repo to Vercel.

Optional env when needed:

```
NEXT_PUBLIC_SITE_ORIGIN=https://epicsevensteam.com
```

## Pages

| Path | Purpose |
|------|---------|
| `/` | Burst homepage: Steam CTA, transfer diagram, Foundry snapshot, FAQ+JSON-LD |
| `/steam-transfer/` | Deep transfer + demo conflict recovery |
| `/foundry/` | Schedule (Guild War ~11/21 watch, WA 12/10) + rewards |
| `/updates/` | Living heroes/events log + editor template |
| `/steam-notes/` | Steam-specific client / anti-cheat / langs / specs |
| `/faq/` | Expanded FAQ + troubleshooting |
| `/demo-delete-warning/` | Official demo deletion risk |
| `/about/`, `/privacy/` | Independent disclosure; privacy@ via Cloudflare Email Routing |

## Hard rules

- Do not impersonate official sites; independence notice on every page
- Outbound to Steam store + STOVE FAQ/announcements only for account actions
- No piracy, cracks, or gray codes
- When a page’s cited STOVE/Steam dates, Transfer steps, or Foundry calendar change, update that page’s `Last verified` date; do not bump the date only to look fresh.
