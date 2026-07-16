# Keystone Commercial Partners

Website for Keystone's commercial and industrial HVAC service-program advisory practice.

The site is built around one paid entry engagement, the Service Program Assessment, and one free mid-funnel tool, the 12-question Shop Self-Score.

## Public routes

- `/` homepage
- `/assessment` paid assessment offer
- `/self-score` interactive directional score
- `/about` Tom Randazzo's operating background
- `/book` qualified fit-call form
- `/privacy` privacy notice

## Local development

Requires Node.js 22 or later.

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run lint
npm run build
npm run build:pages
```

`npm run build` creates the Vinext/Cloudflare artifact. `npm run build:pages` creates the static multi-page site in `dist-pages/` for GitHub Pages.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` installs the locked dependencies, runs the static build and deploys `dist-pages/`. The custom domain is preserved through `public/CNAME`.

## Forms

The fit-call form prepares a direct email in the visitor's email app. Nothing is sent until the visitor presses send. The self-score is calculated locally in the browser and does not collect or transmit answers.

## Content and design

- Audience: $3M–$15M commercial and industrial mechanical contractors
- Primary conversion: book a 30-minute fit conversation
- Secondary conversion: complete the free Shop Self-Score
- Visual system: graphite and steel-blue instrument panels with a restrained orange status accent
- Photography: custom, rights-safe commercial mechanical-room, rooftop and BAS imagery
- Core framework: eight weighted service-program dimensions
