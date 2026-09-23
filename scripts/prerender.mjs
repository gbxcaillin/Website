// Browser-free prerender for the GBX Professional Services site.
//
// After `vite build`, this writes a real HTML file for every known route with
// per-page <title>, description, canonical, Open Graph/Twitter tags, JSON-LD,
// and a crawlable body (the page's key text; full text for articles). The React
// app still boots and takes over #root for real visitors, so this only helps
// crawlers and AI answer engines that do not run JavaScript. Also writes
// sitemap.xml. No headless browser required.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import * as C from '../src/content.js'
import { articles, insightCategories } from '../src/insights.js'
import { sectors, doors, win, toolTypes, levels } from '../src/aiGuide.js'

const SITE_URL = (process.env.SITE_URL || 'https://gbxps.com').replace(/\/$/, '')
const DIST = 'dist'
const template = readFileSync(join(DIST, 'index.html'), 'utf8')

const catLabel = Object.fromEntries(insightCategories.map((c) => [c.slug, c.label]))

function esc(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
function fmtDate(iso) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}
function jsonld(obj) {
  return `<script type="application/ld+json">${JSON.stringify(obj)}</script>`
}
function blocks(body) {
  return body
    .map((b) => (b.type === 'h' ? `<h2>${esc(b.text)}</h2>` : `<p>${esc(b.text)}</p>`))
    .join('')
}

// ---- Structured data helpers (SEO + answer-engine attribution) ----

// A light reference to the firm, reused as provider/worksFor across nodes.
const ORG_REF = { '@type': 'ProfessionalService', name: C.site.name, url: SITE_URL + '/' }

function breadcrumbJsonLd(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: SITE_URL + t.path,
    })),
  }
}

// A Person node per leader, so search and answer engines can attribute people.
function leadershipJsonLd() {
  return C.leadership.people.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: p.name,
    jobTitle: `${p.lead} (${p.role})`,
    description: p.body,
    worksFor: ORG_REF,
    url: `${SITE_URL}/leadership`,
  }))
}

// Each tool is a free, browser-based web application: very citable for AEO.
function toolJsonLd(name, tagline, path) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name,
      description: tagline,
      url: SITE_URL + path,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web browser',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
      provider: ORG_REF,
    },
    breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Tools & Insights', path: '/tools' },
      { name, path },
    ]),
  ]
}

// The services page lists the disciplines; expose them as an ItemList of Services.
function servicesJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Services',
      itemListElement: C.services.items.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: s.title,
          description: s.detail || s.body,
          provider: ORG_REF,
          areaServed: 'Worldwide',
        },
      })),
    },
  ]
}

// FAQPage schema from a { heading, items:[{q,a}] } block. The same items are
// rendered visibly on the page, which is what Google's FAQ markup requires.
function faqJsonLd(faq) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

// Crawlable FAQ markup for the prerendered body (mirrors the on-page section).
function faqSection(faq) {
  return `<section><h2>${esc(faq.heading)}</h2><dl>${faq.items
    .map((f) => `<dt>${esc(f.q)}</dt><dd>${esc(f.a)}</dd>`)
    .join('')}</dl></section>`
}

// Fill a breadcrumb for any page that does not already carry one.
function autoBreadcrumb(route) {
  if (route.path === '/') return null
  const segs = route.path.split('/').filter(Boolean)
  const section = { tools: 'Tools & Insights', insights: 'Insights', 'case-studies': 'Case studies' }
  const trail = [{ name: 'Home', path: '/' }]
  if (segs.length > 1 && section[segs[0]]) trail.push({ name: section[segs[0]], path: `/${segs[0]}` })
  const leaf = (route.meta && route.meta.title ? route.meta.title : segs[segs.length - 1])
    .replace(/\s*\|.*$/, '')
    .trim()
  if (trail[trail.length - 1].path !== route.path) trail.push({ name: leaf, path: route.path })
  return breadcrumbJsonLd(trail)
}

// ---- Body snippets (crawlable text; React replaces this for real users) ----

function homeBody() {
  const { hero, brand, services, approach, reach, cta } = C
  return `<main>
    <p>${esc(hero.eyebrow)}</p>
    <h1>${esc(hero.heading + hero.subheading)}</h1>
    <p>${esc(hero.body)}</p>
    <p>${esc(brand.line)}</p>
    <section><h2>${esc(services.heading)}</h2><p>${esc(services.intro)}</p>
      <ul>${services.items.map((s) => `<li><h3>${esc(s.title)}</h3><p>${esc(s.body)}</p></li>`).join('')}</ul></section>
    <section><h2>${esc(approach.heading)}</h2><p>${esc(approach.intro)}</p>
      <ol>${approach.steps.map((s) => `<li><h3>${esc(s.title)}</h3><p>${esc(s.body)}</p></li>`).join('')}</ol></section>
    <section><h2>${esc(C.education.home.heading)}</h2><p>${esc(C.education.home.body)}</p><a href="/education">${esc(C.education.home.primary.label)}</a></section>
    <section><h2>${esc(C.diagnostic.home.heading)}</h2><p>${esc(C.diagnostic.home.body)}</p><a href="/diagnostic">${esc(C.diagnostic.home.primary.label)}</a></section>
    <section><h2>${esc(reach.heading)}</h2><p>${esc(reach.intro)}</p></section>
    <section><h2>${esc(cta.heading)}</h2><p>${esc(cta.body)}</p><a href="/contact">${esc(cta.primary.label)}</a></section>
  </main>`
}
function servicesBody() {
  const { services } = C
  return `<main><p>${esc(services.eyebrow)}</p><h1>${esc(services.heading)}</h1><p>${esc(services.intro)}</p>
    ${services.items
      .map(
        (s) =>
          `<section id="service-${s.number}"><h2>${esc(s.title)}</h2><p>${esc(s.detail)}</p>
        <ul>${s.includes.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></section>`
      )
      .join('')}${faqSection(services.faq)}</main>`
}
function approachBody() {
  const { approach } = C
  return `<main><p>${esc(approach.eyebrow)}</p><h1>${esc(approach.heading)}</h1><p>${esc(approach.intro)}</p>
    <ol>${approach.steps
      .map((s) => `<li><h2>${esc(s.title)}</h2><p>${esc(s.body)}</p><p>${esc(s.detail)}</p></li>`)
      .join('')}</ol>
    <section><h2>${esc(approach.principles.heading)}</h2>
      <ul>${approach.principles.items
        .map((p) => `<li><h3>${esc(p.title)}</h3><p>${esc(p.body)}</p></li>`)
        .join('')}</ul></section></main>`
}
function leadershipBody() {
  const { leadership } = C
  return `<main><p>${esc(leadership.eyebrow)}</p><h1>${esc(leadership.heading)}</h1><p>${esc(leadership.intro)}</p>
    <ul>${leadership.people
      .map(
        (p) =>
          `<li><h2>${esc(p.name)}</h2><p>${esc(p.lead)}. ${esc(p.role)}.</p><p>${esc(p.body)}</p>${
            p.quals && p.quals.length
              ? `<ul>${p.quals.map((q) => `<li>${esc(q)}</li>`).join('')}</ul>`
              : ''
          }</li>`
      )
      .join('')}</ul></main>`
}
function reachBody() {
  const { reach } = C
  return `<main><p>${esc(reach.eyebrow)}</p><h1>${esc(reach.heading)}</h1><p>${esc(reach.intro)}</p>
    <section><h2>${esc(reach.details.heading)}</h2>
      <ul>${reach.details.items
        .map((d) => `<li><h3>${esc(d.title)}</h3><p>${esc(d.body)}</p></li>`)
        .join('')}</ul></section>
    <p>${reach.cities.map((c) => esc(c.name)).join(', ')}</p></main>`
}
function toolsBody() {
  const { toolsPage } = C
  return `<main><p>${esc(toolsPage.eyebrow)}</p><h1>${esc(toolsPage.heading)}</h1><p>${esc(toolsPage.intro)}</p>
    <section><h2>Tools</h2><ul>${toolsPage.tools
      .map(
        (t) =>
          `<li><h3>${esc(t.name)}</h3><p>${esc(t.tagline)}</p><p>${esc(t.body)}</p><a href="${t.href || t.to}">${esc(t.cta)}</a></li>`
      )
      .join('')}</ul></section>
    <section><h2>Insights</h2><ul>${articles
      .slice(0, 8)
      .map((a) => `<li><a href="/insights/${a.slug}">${esc(a.title)}</a><p>${esc(a.summary)}</p></li>`)
      .join('')}</ul></section></main>`
}
function insightsBody() {
  return `<main><p>Insights</p><h1>Ideas from our work, worth sharing.</h1>
    <p>Short, practical articles across the areas we work in, from AI and analytics to sales, marketing and financial education.</p>
    <ul>${articles
      .map(
        (a) =>
          `<li><a href="/insights/${a.slug}"><h2>${esc(a.title)}</h2></a><p>${esc(catLabel[a.category])} · ${fmtDate(a.date)}</p><p>${esc(a.summary)}</p></li>`
      )
      .join('')}</ul></main>`
}
function contactBody() {
  const { contact, site } = C
  return `<main><p>${esc(contact.eyebrow)}</p><h1>${esc(contact.heading)}</h1><p>${esc(contact.intro)}</p>
    <p>Email: <a href="mailto:${esc(site.email)}">${esc(site.email)}</a></p>
    <p>Office: ${esc(site.address)}</p></main>`
}
function diagnosticBody() {
  const d = C.diagnostic
  const w = C.whyUs
  return `<main><p>${esc(d.eyebrow)}</p><h1>${esc(d.heading)}</h1><p>${esc(d.intro)}</p>
    <section><h2>${esc(d.forWhom.heading)}</h2><p>${esc(d.forWhom.body)}</p><h3>${esc(d.pace.heading)}</h3><p>${esc(d.pace.body)}</p><p>${esc(d.price.label)}: ${esc(d.price.value)}. ${esc(d.price.note)}</p></section>
    <section><h2>${esc(d.ladder.heading)}</h2><ol>${d.ladder.steps
      .map((s) => `<li><h3>${esc(s.title)}</h3><p>${esc(s.cost)}. ${esc(s.body)}</p></li>`)
      .join('')}</ol></section>
    <section><h2>${esc(d.included.heading)}</h2><ul>${d.included.items
      .map((i) => `<li><h3>${esc(i.title)}</h3><p>${esc(i.body)}</p></li>`)
      .join('')}</ul></section>
    <section><h2>${esc(d.outcomes.heading)}</h2><ul>${d.outcomes.items.map((o) => `<li>${esc(o)}</li>`).join('')}</ul></section>
    <section><h2>${esc(d.compare.heading)}</h2><p>${esc(d.compare.intro)}</p>${d.compare.columns
      .map((c) => `<h3>${esc(c.title)}</h3><ul>${c.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`)
      .join('')}</section>
    <section><h2>${esc(w.heading)}</h2><ul>${w.items
      .map((i) => `<li><h3>${esc(i.title)}</h3><p>${esc(i.body)}</p></li>`)
      .join('')}</ul></section>
    <section><h2>${esc(d.faq.heading)}</h2>${d.faq.items
      .map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`)
      .join('')}</section></main>`
}
function diagnosticJsonLd() {
  const d = C.diagnostic
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: d.name,
      provider: { '@type': 'ProfessionalService', name: C.site.name, url: SITE_URL },
      serviceType: 'Business performance diagnostic',
      areaServed: 'Worldwide',
      description: C.pageMeta.diagnostic.description,
      url: `${SITE_URL}/diagnostic`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: d.faq.items.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]
}
function educationBody() {
  const e = C.education
  return `<main><p>${esc(e.eyebrow)}</p><h1>${esc(e.heading)}</h1><p>${esc(e.intro)}</p>
    ${e.programs.map((pr) => `<section><h2>${esc(pr.name)}</h2><p>${esc(pr.audience)}</p><p>${esc(pr.body)}</p><ul>${pr.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></section>`).join('')}
    <section><h2>${esc(e.modulesHeading)}</h2><p>${esc(e.modulesIntro)}</p><ol>${e.modules.map((m) => `<li><h3>${esc(m.title)}</h3><p>${esc(m.body)}</p></li>`).join('')}</ol></section>
    <section><h2>${esc(e.formats.heading)}</h2><ul>${e.formats.items.map((f) => `<li><h3>${esc(f.name)}</h3><p>${esc(f.detail)}</p></li>`).join('')}</ul></section>
    <section><h2>${esc(e.why.heading)}</h2><ul>${e.why.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></section>
    <p>${esc(e.pricing.label)}: ${esc(e.pricing.value)}. ${esc(e.pricing.note)}</p>
    <p>${esc(e.compliance)}</p>
    <section><h2>${esc(e.cta.heading)}</h2><p>${esc(e.cta.body)}</p><a href="/contact">${esc(e.cta.primary.label)}</a></section>
    ${faqSection(e.faq)}</main>`
}
function educationJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'The Financial Fluency Program',
      provider: { '@type': 'ProfessionalService', name: C.site.name, url: SITE_URL },
      serviceType: 'Financial education workshops',
      audience: { '@type': 'Audience', audienceType: 'Employers and advice practices' },
      areaServed: 'Australia',
      description: C.pageMeta.education.description,
      url: `${SITE_URL}/education`,
    },
  ]
}
function willAiHelpBody() {
  const meta = C.pageMeta.willAiHelp
  return `<main><p>Tools</p><h1>Will AI actually help your business?</h1><p>${esc(meta.description)}</p>
    <section><h2>The six doors</h2><ol>${doors.map((d) => `<li><h3>${esc(d.q)}</h3><p>${esc(d.why)}</p><p>If no: ${esc(d.no.h)} ${esc(d.no.t)}</p></li>`).join('')}</ol><p>Yes to all six: ${esc(win.h)} ${esc(win.t)}</p></section>
    <section><h2>What AI tools actually means</h2><ul>${toolTypes.map((t) => `<li><h3>${esc(t.name)}</h3><p>${esc(t.fit)}</p></li>`).join('')}</ul></section>
    <section><h2>Three sensible levels</h2><ol>${levels.map((l) => `<li><h3>${esc(l.name)}</h3><ul>${l.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul><p>${esc(l.warn)}</p></li>`).join('')}</ol></section>
    <section><h2>Compliance changes the answer</h2>${sectors.map((s) => `<h3>${esc(s.label)}</h3><ul>${s.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul><p>${esc(s.verdict)}</p>`).join('')}</section>
    <a href="/contact">Start a conversation</a></main>`
}
function caseIndexBody() {
  const cp = C.caseStudiesPage
  const shown = C.caseStudies.filter((c) => c.published)
  return `<main><p>${esc(cp.eyebrow)}</p><h1>${esc(cp.heading)}</h1><p>${esc(cp.intro)}</p>
    <ul>${shown
      .map(
        (c) =>
          `<li><a href="/case-studies/${c.slug}"><h2>${esc(c.client)}</h2></a><p>${esc(c.sector)}</p><p>${esc(c.summary)}</p></li>`
      )
      .join('')}</ul></main>`
}

function caseBody(c) {
  const blocks = (h, arr) =>
    arr && arr.length ? `<h2>${esc(h)}</h2>${arr.map((x) => `<p>${esc(x)}</p>`).join('')}` : ''
  return `<main><article>
    <p>${c.clientType === 'in-house' ? 'In-house project' : 'Case study'}</p>
    <h1>${esc(c.client)}</h1>
    <p>${esc(c.summary)}</p>
    <p>${esc(c.sector)}${c.services && c.services.length ? ' · ' + esc(c.services.join(', ')) : ''}${c.timeframe ? ' · ' + esc(c.timeframe) : ''}</p>
    ${c.metrics && c.metrics.length ? `<ul>${c.metrics.map((m) => `<li>${esc(m.value)} ${esc(m.label)}</li>`).join('')}</ul>` : ''}
    ${blocks('The situation', c.situation)}
    ${blocks('What we did', c.approach)}
    ${blocks('The outcome', c.outcome)}
    ${c.quote ? `<blockquote><p>${esc(c.quote.text)}</p><cite>${esc(c.quote.attribution || '')}</cite></blockquote>` : ''}
  </article></main>`
}

function privacyBody() {
  const p = C.legal.privacy
  return `<main><p>Legal</p><h1>${esc(p.title)}</h1><p>${esc(p.intro)}</p>
    ${p.sections
      .map(
        (s) =>
          `<section><h2>${esc(s.heading)}</h2>${s.paragraphs.map((x) => `<p>${esc(x)}</p>`).join('')}${
            s.list ? `<ul>${s.list.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>` : ''
          }</section>`
      )
      .join('')}</main>`
}

function articleBody(a) {
  return `<main><article>
    <p>${esc(catLabel[a.category] || 'Insights')}</p>
    <h1>${esc(a.title)}</h1>
    <p>${fmtDate(a.date)}${a.readingTime ? ' · ' + esc(a.readingTime) : ''}</p>
    ${blocks(a.body)}
  </article></main>`
}

// ---- Route list ----

const publisher = {
  '@type': 'Organization',
  name: 'GBX Professional Services',
  url: SITE_URL + '/',
  logo: { '@type': 'ImageObject', url: SITE_URL + '/apple-touch-icon.png' },
}

function toolPageBody(slug, meta) {
  const t = C.toolsPage.tools.find((x) => x.slug === slug)
  return `<main><p>Tools</p><h1>${esc(t ? t.name : meta.title)}</h1>
    ${t ? `<p>${esc(t.tagline)}</p><p>${esc(t.body)}</p>` : `<p>${esc(meta.description)}</p>`}
    <p>Runs entirely in your browser. Nothing you enter is sent anywhere.</p>
    <a href="/contact">Start a conversation</a></main>`
}

const routes = [
  { path: '/', meta: C.pageMeta.home, body: homeBody() },
  { path: '/services', meta: C.pageMeta.services, body: servicesBody(), jsonld: [...servicesJsonLd(), faqJsonLd(C.services.faq)] },
  { path: '/diagnostic', meta: C.pageMeta.diagnostic, body: diagnosticBody(), jsonld: diagnosticJsonLd() },
  { path: '/education', meta: C.pageMeta.education, body: educationBody(), jsonld: [...educationJsonLd(), faqJsonLd(C.education.faq)] },
  { path: '/leadership', meta: C.pageMeta.leadership, body: leadershipBody(), jsonld: leadershipJsonLd() },
  { path: '/approach', meta: C.pageMeta.approach, body: approachBody() },
  { path: '/reach', meta: C.pageMeta.reach, body: reachBody() },
  { path: '/tools', meta: C.pageMeta.tools, body: toolsBody() },
  { path: '/tools/health-check', meta: C.pageMeta.healthCheck, body: toolPageBody('health-check', C.pageMeta.healthCheck) },
  { path: '/tools/unit-economics', meta: C.pageMeta.unitEconomics, body: toolPageBody('unit-economics', C.pageMeta.unitEconomics) },
  { path: '/tools/ai-readiness', meta: C.pageMeta.aiReadiness, body: toolPageBody('ai-readiness', C.pageMeta.aiReadiness) },
  { path: '/tools/positioning', meta: C.pageMeta.positioning, body: toolPageBody('positioning', C.pageMeta.positioning) },
  { path: '/tools/pipeline-gap', meta: C.pageMeta.pipelineGap, body: toolPageBody('pipeline-gap', C.pageMeta.pipelineGap) },
  { path: '/tools/capacity', meta: C.pageMeta.capacity, body: toolPageBody('capacity', C.pageMeta.capacity) },
  { path: '/tools/automation', meta: C.pageMeta.automation, body: toolPageBody('automation', C.pageMeta.automation) },
  { path: '/tools/capability', meta: C.pageMeta.capability, body: toolPageBody('capability', C.pageMeta.capability) },
  { path: '/tools/kpi-starter', meta: C.pageMeta.kpiStarter, body: toolPageBody('kpi-starter', C.pageMeta.kpiStarter) },
  { path: '/tools/wellbeing-check', meta: C.pageMeta.wellbeingCheck, body: toolPageBody('wellbeing-check', C.pageMeta.wellbeingCheck) },
  { path: '/tools/will-ai-help', meta: C.pageMeta.willAiHelp, body: willAiHelpBody() },
  { path: '/tools/marketing-rhythm', meta: C.pageMeta.marketingRhythm, body: toolPageBody('marketing-rhythm', C.pageMeta.marketingRhythm) },
  { path: '/insights', meta: C.pageMeta.insights, body: insightsBody() },
  { path: '/case-studies', meta: C.pageMeta.caseStudies, body: caseIndexBody() },
  { path: '/privacy-policy', meta: C.pageMeta.privacy, body: privacyBody() },
  { path: '/contact', meta: C.pageMeta.contact, body: contactBody() },
]

// Attach WebApplication + breadcrumb schema to every interactive tool page.
for (const route of routes) {
  if (/^\/tools\/.+/.test(route.path)) {
    const t = C.toolsPage.tools.find((x) => (x.to || x.href) === route.path)
    if (t) route.jsonld = [...(route.jsonld || []), ...toolJsonLd(t.name, t.tagline, route.path)]
  }
}

for (const a of articles) {
  routes.push({
    path: `/insights/${a.slug}`,
    meta: { title: `${a.title} | GBX Professional Services`, description: a.summary },
    lastmod: a.date,
    body: articleBody(a),
    jsonld: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: a.title,
        description: a.summary,
        datePublished: a.date,
        dateModified: a.date,
        articleSection: catLabel[a.category],
        inLanguage: 'en-AU',
        author: publisher,
        publisher,
        url: `${SITE_URL}/insights/${a.slug}`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/insights/${a.slug}` },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Tools & Insights', item: `${SITE_URL}/tools` },
          { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE_URL}/insights` },
          { '@type': 'ListItem', position: 3, name: a.title, item: `${SITE_URL}/insights/${a.slug}` },
        ],
      },
    ],
  })
}

for (const c of C.caseStudies.filter((x) => x.published)) {
  routes.push({
    path: `/case-studies/${c.slug}`,
    meta: {
      title: `${c.client} | Case study | GBX Professional Services`,
      description: c.summary,
    },
    body: caseBody(c),
  })
}

// ---- Emit ----

function setMetaTag(html, re, replacement) {
  if (!re.test(html)) console.warn(`  ! meta pattern not found: ${re}`)
  return html.replace(re, replacement)
}

function render(route) {
  const url = SITE_URL + route.path
  const title = route.meta.title
  const desc = route.meta.description || ''
  let html = template
  html = setMetaTag(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
  html = setMetaTag(
    html,
    /(<meta name="description" content=")[^"]*(")/,
    `$1${esc(desc)}$2`
  )
  html = setMetaTag(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
  html = setMetaTag(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
  html = setMetaTag(
    html,
    /(<meta property="og:description" content=")[^"]*(")/,
    `$1${esc(desc)}$2`
  )
  html = setMetaTag(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
  html = setMetaTag(html, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
  html = setMetaTag(
    html,
    /(<meta name="twitter:description" content=")[^"]*(")/,
    `$1${esc(desc)}$2`
  )
  // Ensure every non-home page carries a breadcrumb trail.
  const ld = route.jsonld ? [...route.jsonld] : []
  if (!ld.some((n) => n && n['@type'] === 'BreadcrumbList')) {
    const bc = autoBreadcrumb(route)
    if (bc) ld.push(bc)
  }
  if (ld.length) {
    html = html.replace('<!--HEAD-INJECT-->', ld.map(jsonld).join(''))
  }
  // Wrap the crawlable stub so the pre-hydration critical CSS can hold it out
  // of view; React clears #root on mount and paints the real styled app.
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"><div data-prerender>${route.body}</div></div>`
  )
  return html
}

let count = 0
for (const route of routes) {
  const rel = route.path === '/' ? 'index.html' : `${route.path.replace(/^\//, '')}/index.html`
  const out = join(DIST, rel)
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, render(route))
  count++
}

// ---- sitemap.xml ----
const urls = routes.map((r) => {
  const loc = SITE_URL + r.path
  const lastmod = r.lastmod ? `\n    <lastmod>${r.lastmod}</lastmod>` : ''
  const priority = r.path === '/' ? '1.0' : r.path.startsWith('/insights/') ? '0.6' : '0.8'
  return `  <url>\n    <loc>${loc}</loc>${lastmod}\n    <priority>${priority}</priority>\n  </url>`
})
// The hosted Prompt Optimizer is a real static page too.
urls.push(`  <url>\n    <loc>${SITE_URL}/tools/prompt-optimizer/</loc>\n    <priority>0.7</priority>\n  </url>`)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
writeFileSync(join(DIST, 'sitemap.xml'), sitemap)

console.log(`Prerendered ${count} routes; wrote sitemap.xml with ${urls.length} URLs. Base: ${SITE_URL}`)
