# Keystone Commercial Partners Website

Static single-page website for Keystone Commercial Partners.

## What this is

This repo contains the first deployable Keystone Commercial Partners homepage.

Positioning:

> Commercial architecture for owner-led companies. Operating value today. Enterprise value at exit.

The site is designed for owner-led companies that need stronger structure around sales process, pricing discipline, account management, pipeline visibility, commercial role clarity, owner independence, and enterprise value.

## Files

- `index.html` - main website
- `privacy.html` - placeholder privacy page
- `robots.txt` - crawler instructions
- `sitemap.xml` - basic sitemap
- `.github/workflows/pages.yml` - GitHub Pages deployment workflow

## Local preview

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## GitHub Pages deployment

This repo includes a GitHub Pages workflow. To enable it:

1. Go to repository Settings.
2. Open Pages.
3. Under Build and deployment, choose GitHub Actions.
4. The workflow will deploy the static site from the repo root.

## Before launch

Replace or confirm these items:

- Final domain in `sitemap.xml` and `robots.txt`
- Diagnostic CTA email address in `index.html`
- Final privacy language in `privacy.html`
- Any real case studies or proof points
- Analytics, form handler, CRM, or calendar embed

## Notes

This is intentionally simple: HTML, CSS, and a small mobile navigation script inside `index.html`. That keeps hosting cheap and GitHub Pages-friendly.
