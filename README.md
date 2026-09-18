# Vogon Partners OÜ public website

Static Astro site for **Vogon Partners OÜ**.

Owner approved go-live on **2026-09-18**. This repo is the public site source. DNS and Cloudflare Pages binding are handled outside the repo.

Canonical page meaning comes from Brand **`public-copy-v1`**, plus Owner HA/security/compliance copy (2026-09-18). Do not invent claims, client names, pricing, ROI, or a live Trip URL.

History: the first scaffold commits were staging-only (noindex, no public DNS). That posture ended with Owner go-live approval.

## Run locally

Requires **Node.js 22.12+**.

```sh
npm install
npm run dev
```

Dev server: [http://localhost:4321](http://localhost:4321)

```sh
npm run build
npm run preview
```

`npm run build` writes static files to **`dist/`**.

## Cloudflare Pages

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | `22` (or current LTS ≥ 22.12) |
| Root directory | repository root |

## Routes

| Path | Notes |
| --- | --- |
| `/` | Homepage (positioning Candidate A) |
| `/about` | Company facts |
| `/services` | Two exploratory offers plus compliance coming soon |
| `/services/smart-environment` | Smart environments (What we do, NucBox, Security) |
| `/services/ai-operations` | AI-assisted operational improvement |
| `/showroom` | Index of Trip and Move |
| `/showroom/trip` | Trip, GitHub only |
| `/showroom/move` | Move, GitHub + move-easy.org |
| `/insights` | Intro + empty state |
| `/contact` | mailto CTAs |

Primary nav: Home · Services · Showroom · Insights · Contact.

## HOLDs (do not invent)

- `/insights/:slug` article pages
- Trip live URL / demo CTA
- Legal pages beyond the minimal footer
- Analytics, cookie banners, ads
- Screenshots and architecture diagrams (text-first)
- Site B / second-household identity, occupant names, device counts
- Deeper smart-environment project documentation
- Compliance consulting as a live offer (teaser only)

## Brand gaps noted, not filled

- **Showroom index** has no dedicated public-copy block; the page assembles existing Home/Services sentences and links Trip + Move.
- **Trip/Move “what this does not prove”** callouts restate boundaries already in public copy (product engineering is not consulting delivery or client outcomes).
- No Owner-supplied logo; wordmark is plain text, not a lockup.

## Stack

Astro (static, TypeScript) + plain CSS design tokens (“Inspectable calm”: warm off-white, near-black ink, one muted steel accent). No UI kit, almost no motion, no analytics.

Primary CTA: `mailto:joel@vogonpartners.com` with soft subjects (`Smart environment: discovery`, `AI-ops: discovery`, `Showroom: Trip/Move`, `Compliance: coming soon`).
