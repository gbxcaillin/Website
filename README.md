# GBX Professional Services website

Marketing site for GBX PS Pty Ltd. Static Vite + React, no backend, deploys to Cloudflare Pages.

## Preview locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (normally http://localhost:5173).

To check the production build:

```bash
npm run build
npm run preview
```

## Editing content

All copy lives in `src/content.js`. Components in `src/components/` only render what that file provides.

- Contact form: replace `formspreeEndpoint` in `src/content.js` with your Formspree form URL.
- Firm details, ABN and email: `site` and `footer` objects in `src/content.js`.
- Hero visual: `src/components/HeroVisual.jsx` is an SVG. Swap for an `<img>` inside `Hero.jsx` when photography is ready.
- Leadership photos: see the comment in `src/components/Leadership.jsx`.

Copy rule: no em dashes. Use commas, periods, en dashes or restructure the sentence.

## Deploy to Cloudflare Pages

| Setting          | Value          |
| ---------------- | -------------- |
| Framework preset | Vite           |
| Build command    | `npm run build` |
| Output directory | `dist`         |
| Node version     | 18 or later    |

`public/_headers` adds basic security headers on Cloudflare.
