// Sync the hosted Prompt Optimizer from the Promptingskills repo.
//
// Fetches index.html from the default branch of gbxcaillin/promptingskills,
// re-applies the two site-integration edits (a "Back to site" link and a home
// link on the GBX wordmark), and writes it to the served location. Run by the
// Sync Prompt Optimizer GitHub Action; safe to run locally too.

import { readFileSync, writeFileSync } from 'node:fs'

const SRC = 'https://api.github.com/repos/gbxcaillin/promptingskills/contents/index.html'
const DEST = 'public/tools/prompt-optimizer/index.html'

// Injected right after the opening <header class="brand-band"> tag.
const BACKLINK = `
  <a href="/" style="position:absolute;top:16px;left:16px;border:1px solid rgba(255,255,255,.35);color:rgba(255,255,255,.85);padding:7px 14px;border-radius:var(--radius);font-family:var(--sans);font-size:.6rem;font-weight:500;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;transition:border-color .2s,color .2s" onmouseover="this.style.borderColor='var(--teal)';this.style.color='#fff'" onmouseout="this.style.borderColor='rgba(255,255,255,.35)';this.style.color='rgba(255,255,255,.85)'">&larr;&nbsp;Back to site</a>`

const WORDMARK_FROM = '<div class="wordmark">GBX</div>'
const WORDMARK_TO =
  '<a href="/" class="wordmark" style="text-decoration:none;color:inherit;display:inline-block">GBX</a>'

const headers = { Accept: 'application/vnd.github.raw', 'User-Agent': 'gbx-sync' }
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`

const res = await fetch(SRC, { headers })
if (!res.ok) {
  console.error(`Fetch failed: ${res.status} ${res.statusText}`)
  process.exit(1)
}
let html = await res.text()

// Sanity check: make sure we actually got the tool, not an error page.
if (!html.includes('Prompt Optimizer') || html.length < 20000) {
  console.error('Fetched content does not look like the tool; aborting.')
  process.exit(1)
}

// Re-apply the site-integration edits. Both target the first (header) match.
if (html.includes('<header class="brand-band">')) {
  html = html.replace('<header class="brand-band">', '<header class="brand-band">' + BACKLINK)
} else {
  console.warn('brand-band header not found; "Back to site" link not injected.')
}
if (html.includes(WORDMARK_FROM)) {
  html = html.replace(WORDMARK_FROM, WORDMARK_TO)
} else {
  console.warn('wordmark not found; home link not injected.')
}

let prev = ''
try {
  prev = readFileSync(DEST, 'utf8')
} catch {
  // First run: destination may not exist yet.
}
if (prev === html) {
  console.log('Prompt Optimizer already up to date.')
  process.exit(0)
}
writeFileSync(DEST, html)
console.log(`Updated ${DEST} (${html.length} bytes).`)
