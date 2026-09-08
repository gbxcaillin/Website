# GBX Professional Services website

Marketing site for GBX PS Pty Ltd. Multi-page Vite + React (React Router), no
backend, deploys to Cloudflare Pages.

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

## Pages

Client-side routed with `react-router-dom`. Each page has its own URL, title and
meta description.

| Route         | Page                |
| ------------- | ------------------- |
| `/`           | Home                |
| `/services`   | Services (expanded) |
| `/leadership` | Leadership          |
| `/approach`   | Approach            |
| `/reach`      | Global reach        |
| `/contact`    | Contact             |
| any other     | 404                 |

`public/_redirects` (`/* /index.html 200`) makes deep links resolve on
Cloudflare Pages, so refreshing or sharing e.g. `/services` works.

## Editing content

Almost all copy lives in `src/content.js`, including nav, per-page meta, and the
firm details (address, email, ABN, copyright) in the `site` object.

- Contact form: replace `formspreeEndpoint` in `src/content.js` with your
  Formspree form URL.
- Leadership: `leadership.people`. Anders Torcello has been removed for now and
  the three remaining anchors renumbered. Add him back as a fourth entry when
  ready.

Copy rule: no em dashes. Use commas, periods, en dashes or restructure the
sentence.

## Media assets

Optimized brand assets live in `src/assets/` (images, imported and fingerprinted
by Vite) and `public/media/` (the logo video, served as a static file).

- Hero panel photo: `src/assets/office.webp` / `.jpg`, used in
  `src/components/Hero.jsx`.
- Global reach city band: `src/assets/cities.webp` / `.jpg`, used in
  `src/components/Reach.jsx`.
- Animated logo, brand-film moment: `public/media/logo-animation.mp4`
  (primary) with `public/media/logo-loop.gif` as the fallback when a browser
  cannot play the video, and `public/media/logo-poster.jpg` for the initial
  load and for visitors who prefer reduced motion. Used in
  `src/components/BrandFilm.jsx`.
- Animated logo, footer mark: `public/media/logo-mark.gif` in
  `src/components/Footer.jsx`. This GIF plays the logo build once and holds on
  the finished framed mark, so it settles into the resting brand logo. All GIFs
  were generated from the supplied MP4.

Per the brand brief the header keeps its light horizontal text lockup; the
animated framed-square mark is reserved for the footer and brand moments, which
are on dark backgrounds where it belongs.

To swap any of these, drop in a replacement of the same name (keep both a `.webp`
and a `.jpg` for the photos, and regenerate the GIFs from a new MP4 if the
animation changes).

## Deploy to Cloudflare Pages

| Setting          | Value           |
| ---------------- | --------------- |
| Framework preset | Vite            |
| Build command    | `npm run build` |
| Output directory | `dist`          |
| Node version     | 18 or later     |

`public/_headers` adds basic security headers and `public/_redirects` provides
the single-page-app fallback.
