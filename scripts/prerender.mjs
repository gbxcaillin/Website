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
      .join('')}</main>`
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
          `<li><h2>${esc(p.name)}</h2><p>${esc(p.lead)}. ${esc(p.role)}.</p><p>${esc(p.body)}</p></li>`
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
  { path: '/services', meta: C.pageMeta.services, body: servicesBody() },
  { path: '/leadership', meta: C.pageMeta.leadership, body: leadershipBody() },
  { path: '/approach', meta: C.pageMeta.approach, body: approachBody() },
  { path: '/reach', meta: C.pageMeta.reach, body: reachBody() },
  { path: '/tools', meta: C.pageMeta.tools, body: toolsBody() },
  { path: '/tools/health-check', meta: C.pageMeta.healthCheck, body: toolPageBody('health-check', C.pageMeta.healthCheck) },
  { path: '/tools/unit-economics', meta: C.pageMeta.unitEconomics, body: toolPageBody('unit-economics', C.pageMeta.unitEconomics) },
  { path: '/tools/ai-readiness', meta: C.pageMeta.aiReadiness, body: toolPageBody('ai-readiness', C.pageMeta.aiReadiness) },
  { path: '/insights', meta: C.pageMeta.insights, body: insightsBody() },
  { path: '/contact', meta: C.pageMeta.contact, body: contactBody() },
]

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
  if (route.jsonld && route.jsonld.length) {
    html = html.replace('<!--HEAD-INJECT-->', route.jsonld.map(jsonld).join(''))
  }
  html = html.replace('<div id="root"></div>', `<div id="root">${route.body}</div>`)
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
