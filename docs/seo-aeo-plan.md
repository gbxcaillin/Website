# GBX Professional Services: SEO and AEO plan

A working plan for search engine optimisation (SEO) and answer engine
optimisation (AEO, being cited by ChatGPT, Claude, Perplexity and Google AI
Overviews). It records what is already in place, what to do next, and who does
each part. Update it as things ship.

Guardrails that apply to everything below:

- Positioning: GBX Professional Services offers professional services to any
  business. Write content for businesses in general, not mainly for advice and
  accounting practices, and use financial firms only as one example among
  several. Do not centre general content on AFSL or financial-services
  compliance.
- Both/and, not replace: the firm's decade of experience in financial advice
  and investment management is credibility, kept visible as depth (it
  underwrites the financial education offering). Broaden the audience without
  diminishing that experience.
- Financial services as a client vertical is distinct from the financial
  education practice. Financial education is a co-equal practice and stays that
  way: financial wellbeing applies to employees in every industry, so it is
  universal, not a financial-services niche. Do not de-emphasise it.
- Always write "GBX Professional Services" in full.
- No em dashes anywhere.
- AFSL appears only as the single necessary disclaimer: GBX Professional
  Services does not hold an AFSL and cannot provide financial product advice.
  Keep it to that, do not dwell on it, and keep all copy general and educational.

---

## Where we are

The site is a prerendered React single page app on Cloudflare Pages. On every
build, `scripts/prerender.mjs` writes a real HTML file per route with crawlable
text, meta tags, structured data and a sitemap. That means both traditional
crawlers and answer engines that do not run JavaScript get real content.

Done:

- Per page `<title>`, meta description, canonical, Open Graph and Twitter tags.
- Crawlable prerendered body for every route.
- `robots.txt` that explicitly welcomes AI crawlers (GPTBot, OAI-SearchBot,
  ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended,
  Applebot-Extended) and points to the sitemap.
- `llms.txt`: a structured, plain-language map of the site for answer engines.
- `sitemap.xml` generated on every build (56 URLs).
- Structured data (JSON-LD):
  - Site wide `ProfessionalService` and `WebSite`, now with `logo`, `image`
    and a `sameAs` link to the LinkedIn company page.
  - `Person` for each of the three leaders.
  - `WebApplication` for every interactive tool (free, browser based).
  - `Service` `ItemList` on the services page.
  - `FAQPage` on the diagnostic, services and education pages.
  - `BreadcrumbList` on every non home page.
  - `BlogPosting` and `BreadcrumbList` on every article.
- Google Search Console: domain property verified, sitemap submitted.
- Cloudflare Web Analytics live.

In progress or pending:

- Bing Webmaster Tools (import from Google Search Console).
- Search Console data accrual (needs roughly one week before it is useful).

---

## The two tracks

SEO gets the site ranked and clicked in Google and Bing. AEO gets the site
quoted by AI answer engines. They overlap. AEO rewards clean structured facts
and self contained answers, which suits this site: free tools, plain language
explainers, and an honest, AFSL aware position.

The single highest leverage habit for both: answer real questions clearly, in
public, in a form both people and machines can parse. That is content plus
structured data, repeated.

---

## Roadmap

### 1. Measurement (you, once)

- [x] Google Search Console domain property verified.
- [x] Sitemap submitted (`https://gbxps.com/sitemap.xml`).
- [ ] Bing Webmaster Tools: sign in, Import from Google Search Console.
- [ ] After roughly a week, review Search Console Performance for the queries
      the site already surfaces for. That data drives step 3.

Requesting indexing by hand is optional and rate limited. The sitemap handles
discovery on its own, so it is fine to skip.

### 2. Structured data and technical (code, mostly done)

- [x] Organization logo, image and LinkedIn `sameAs`.
- [x] Person, WebApplication, Service, breadcrumb and FAQ schema.
- [ ] Validate key pages in the Rich Results Test
      (`https://search.google.com/test/rich-results`) after each deploy.
- [ ] Optional later: per page Open Graph images (today all pages share one).
- [ ] Optional later: sitemap `lastmod` on static pages if we start dating
      content changes.

Not doing, on purpose:

- Sitelinks search box schema. It requires a real on site search endpoint,
  which the site does not have. Faking it produces invalid markup.

### 3. On page content (ongoing, highest compounding value)

FAQ sections. These earn `FAQPage` markup only when the questions are visible
on the page, so content and schema ship together.

- [x] Diagnostic FAQ.
- [x] Services FAQ (five questions, including the AFSL position).
- [x] Education FAQ (five questions, including the advice boundary).
- [x] Home page FAQ (six questions) in the "any business" voice: what GBX does,
      who it works with, how to start, where it works, the financial education
      practice, and the AFSL position.
- [x] AI and compliance FAQ (seven questions) on the "Will AI actually help?"
      guide, written for any business adopting AI (regulated fields, including
      financial services, are one example, not the focus).

Titles and descriptions. Once Search Console has data, rewrite the weakest
performing titles and descriptions in `src/content.js` `pageMeta` toward how
people actually search, without keyword stuffing. Candidate phrasings to test:
"business performance consultant Melbourne", "free AI readiness assessment",
"financial education program for workplaces".

Articles. The `/insights` engine already exists. One or two genuinely useful
articles a month compounds. Each should answer one real question completely, so
it is quotable on its own. Draft topics:

- The compliance questions every business should ask before adopting AI.
- What a ten day business diagnostic actually looks at.
- The six KPIs a business should watch first.
- When AI will not help your business yet, and what to fix first.
- Financial wellbeing at work: what employers can and cannot say (education
  practice).

### 4. Off site (you, ongoing)

- LinkedIn company page: post consistently, link back to tools and articles.
- Directory and partner listings with a consistent name, address and phone.
- Earn links from partners, clients and any guest writing. Answer engines and
  Google both weight domain authority heavily.

---

## How to ship content changes

1. Edit `src/content.js` (FAQ items, page copy, article entries).
2. For a new FAQ section, render `<Faq heading=... items=... id=... />` on the
   page and add `faqJsonLd(...)` plus `faqSection(...)` to that route in
   `scripts/prerender.mjs`, so the visible section and the schema match.
3. `npm run build`, confirm the JSON-LD parses and the crawlable text is
   present, then commit and open a pull request.

---

## Measurement checklist (revisit monthly)

- Search Console: impressions, clicks, average position, top queries and pages.
- Search Console: Pages report for indexing coverage and any errors.
- Rich Results Test: structured data still valid on key templates.
- Bing Webmaster: parallel view, catches issues Google does not surface.
- Answer engines: periodically ask ChatGPT, Claude, Perplexity and Google a few
  buyer questions ("business performance consultant Melbourne", "financial
  education program for staff") and note whether GBX Professional Services is
  cited, and how accurately.
