# Epic Seven Steam Guide (independent scaffold)

Unofficial English-first info site for **Epic Seven on Steam**: store entry, STOVE↔Steam transfer, Foundry schedule/rewards, updates log, Steam notes, FAQ.

**Not affiliated with Smilegate, STOVE, Valve, or Steam.**

## Local path

`/workspace/sites/epic7-steam/scaffold`

## Stack

- Next.js 14 App Router
- Static export: `output: 'export'`, `trailingSlash: true`, `images.unoptimized`
- Deploy target: Vercel (static `out/`)

## Scripts

```bash
npm install
npm run build    # writes out/
npm run start    # serve out/ locally
npm run dev      # next dev
```

## Domain status

- **Chosen target:** `epicsevensteam.com` (user-selected)
- **Not purchased / not DNS-connected** (Vercel buy card declined earlier — do not retry paid purchase from this scaffold)
- Candidates (reference only): `epicsevensteam.com`, `epic-seven-steam.com`, `epic7steam.com`, `epicsevenfoundry.com`
- Copy / `sitemap.xml` / `robots.txt` already use `epicsevensteam.com` as the intended canonical host

## Deploy to Vercel (preview, no custom domain)

```bash
cd /workspace/sites/epic7-steam/scaffold
npx vercel --yes          # preview deployment → *.vercel.app
# production alias on vercel.app only if desired:
# npx vercel --prod --yes
```

Or connect the Git repo in Vercel UI → automatic previews.

Optional env when domain is live:

```
NEXT_PUBLIC_SITE_ORIGIN=https://epicsevensteam.com
```

## Attach custom domain after purchase

1. Buy/register `epicsevensteam.com` at your registrar (user payment — not this bot).
2. Vercel project → Settings → Domains → Add `epicsevensteam.com` (+ `www` if wanted).
3. Set DNS as Vercel shows (usually A/`76.76.21.21` or the provided CNAME for `www`).
4. Wait for SSL. Confirm `https://epicsevensteam.com/` serves `out/`.
5. Optional: set `NEXT_PUBLIC_SITE_ORIGIN` and redeploy so metadataBase matches.

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
| `/about/`, `/privacy/` | Independent disclosure; contact placeholders |

## Hard rules

- Do not impersonate official sites; independence notice on every page
- Outbound to Steam store + STOVE FAQ/announcements only for account actions
- No piracy, cracks, or gray codes
