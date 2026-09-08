# Keystone Commercial Partners

Website for Tom Randazzo's commercial HVAC and mechanical service-growth practice.

The site is designed to help a referred contractor verify three things quickly:

- Keystone specializes in commercial mechanical service
- The service model connects maintenance agreements to repairs, projects, upgrades, and replacements
- Tom works directly with the contractor's people to assess, build, and run the system

## Pages

- Home
- Service Model
- How We Work
- About
- Privacy

## Local development

Requires Node.js 22 or later.

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run lint
npm test
npm run build:pages
```

`npm run build` creates the hosted application. `npm run build:pages` creates the static GitHub Pages version in `dist-pages/`.
