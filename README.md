# Keystone Commercial Partners

Website for Tom Randazzo's commercial HVAC and mechanical service-growth practice.

The page is built around one idea: a maintenance agreement creates scheduled revenue, puts technicians inside the building, earns the first call, and leads to the next repair, retrofit, or replacement.

## Main page

- Owner situations Tom usually walks into
- Five-step maintenance-base loop
- Structure, pricing, selling, renewing, and operating support
- Three-part engagement
- Career proof and background
- Thirty-minute service review form
- Twelve-question Service Base Scorecard

## Forms

Service review submissions and requested scorecard breakdowns are saved to D1 through `/api/leads`. The public GitHub Pages build posts to the same hosted endpoint.

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

`npm run build` creates the hosted application. `npm run build:pages` creates the static GitHub Pages version in `dist-pages/`.
