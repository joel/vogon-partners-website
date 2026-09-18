# Vogon Partners OÜ — public website

Static Astro site for **Vogon Partners OÜ**.

**This scaffold is not a publish.** Staging implementation only. No public DNS, ads, analytics, or go-live. External launch needs a separate written Owner approval.

Canonical page meaning comes from Brand **`public-copy-v1`** (Publication Candidate, 2026-09-13). Implementers must not invent claims, client names, pricing, ROI, or live Trip URLs.

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

## Cloudflare Pages (staging)

Do **not** bind a production custom domain. Preview / `*.pages.dev` only until Owner go-live approval.

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | `22` (or current LTS ≥ 22.12) |
| Root directory | repository root |

No Wrangler production routes or custom-domain config are included on purpose.

## Routes

| Path | Notes |
| --- | --- |
| `/` | Homepage (positioning Candidate A) |
| `/about` | Company facts |
| `/services` | Two exploratory offers |
| `/services/smart-environment` | Smart environments |
| `/services/ai-operations` | AI-assisted operational improvement |
| `/showroom` | Index of Trip and Move |
| `/showroom/trip` | Trip — GitHub only |
| `/showroom/move` | Move — GitHub + move-easy.org |
| `/insights` | Intro + empty state |
| `/contact` | mailto CTAs |

Primary nav: Home · Services · Showroom · Insights · Contact.

## HOLDs (do not invent)

- `/insights/:slug` article pages
- Trip live URL / demo CTA
- Legal pages beyond the minimal footer
- Analytics, cookie banners, ads
- Production custom domain / public DNS
- Screenshots and architecture diagrams (text-first staging)

## Brand gaps noted, not filled

These are missing from Brand public copy or still Owner-gated. The site does **not** invent replacements:

- **Home Assistant forum field notes** are named in public copy, but no canonical URL was supplied in the handoff. The sentence is on `/services/smart-environment`; only the ZHA PR and Starlink stack are linked.
- **`geerlingguy/internet-pi` PR 665** is on the allowed-link list but is not in public-copy page bodies, so it is not surfaced.
- **Showroom index** has no dedicated public-copy block; the page assembles existing Home/Services sentences and links Trip + Move.
- **Trip/Move “what this does not prove”** callouts restate boundaries already in public copy (product engineering ≠ consulting delivery / client outcomes).
- No Owner-supplied logo; wordmark is plain text, not a lockup.

## Stack

Astro (static, TypeScript) + plain CSS design tokens (“Inspectable calm”: warm off-white, near-black ink, one muted steel accent). No UI kit, almost no motion, no analytics.

Primary CTA: `mailto:joel@vogonpartners.com` with the soft subjects from the Brand handoff.
