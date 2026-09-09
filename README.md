# Keystone Commercial Partners

Website for Tom Randazzo's commercial HVAC and mechanical service-growth practice.

The public site is a single-page credibility check for contractor owners and the people they forward the link to.

## Main page

- What Keystone sees most often
- The case for commercial service agreements
- The nine linked decisions behind an agreement program
- How Keystone works and who the engagement fits
- Tom's commercial service background
- Direct phone, email, and a four-field contact form

## Scorecard

The twelve-question Service Base Scorecard lives at `/scorecard`. It is unlinked from public navigation, excluded from the sitemap, and marked `noindex`. Answers and scoring remain in the browser.

## Forms

The contact form opens a preaddressed email to Tom. It requires name and company plus either email or phone, and uses a honeypot and elapsed-time check without a visible CAPTCHA.

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
