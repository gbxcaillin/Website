// Records commercial clip 6: the home page brand mark animating alone on black,
// then the live site fading up into the bottom of the frame with gbxps.com.
//
// Steps (run from the repo root):
//   1. npm run build && npx vite preview --port 4173 --host 127.0.0.1   (in another shell)
//   2. Extract the logo animation at 24fps into logoframes/:
//        ffmpeg -i public/media/logo-animation.mp4 -vf fps=24 logoframes/l%04d.png
//   3. node scripts/record-endcard-clip.mjs   (needs scripts/fonts/site-embedded.css)
//   4. ffmpeg -framerate 24 -i frames6/f%04d.png -c:v libx264 -pix_fmt yuv420p \
//        -crf 18 docs/commercial/clip6-endcard-screencap.mp4
//
// Timeline (7s): 0 to 4s logo alone, 4 to 5.4s logo eases up while the site
// rises and fades in at the bottom, 5 to 5.8s GBXPS.COM fades in, then hold.
import { chromium } from 'playwright-core'
import { readFileSync, mkdirSync, rmSync } from 'node:fs'
const S = process.cwd()
const fontCss = readFileSync(new URL('./fonts/site-embedded.css', import.meta.url), 'utf8')
const FPS = 24, TOTAL = 7.0, N = Math.round(TOTAL * FPS), LOGO_FRAMES = 120
const b = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium' })
const ctx = await b.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 })
const p = await ctx.newPage()
await p.route('https://fonts.googleapis.com/**', (r) => r.fulfill({ status: 200, contentType: 'text/css', body: fontCss }))
await p.route('https://fonts.gstatic.com/**', (r) => r.abort())

// 1. Grab the live home page (header + hero) as the "website" that rises in.
await p.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' })
await p.evaluate(async () => { await document.fonts.ready })
const bfBottom = await p.evaluate(() => document.querySelector('.brand-film').getBoundingClientRect().bottom + window.scrollY)
await p.evaluate((y) => window.scrollTo(0, y), bfBottom)
await p.waitForTimeout(400)
await p.screenshot({ path: 'site-hero.png', animations: 'disabled' })

// 2. Compose the end card: logo alone, then the site fades into the bottom of the frame.
rmSync('frames6', { recursive: true, force: true }); mkdirSync('frames6')
const html = `<!doctype html><html><head><style>${fontCss}
html,body{margin:0;width:1920px;height:1080px;background:#000;overflow:hidden;font-family:'DM Mono',monospace}
#logo{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:520px;height:520px;display:block}
#url{position:absolute;left:0;right:0;text-align:center;top:0;color:#F5F1E8;font-size:22px;letter-spacing:.32em;opacity:0}
#site{position:absolute;left:50%;top:1080px;width:1240px;height:698px;transform:translateX(-50%);opacity:0;border-radius:14px 14px 0 0;overflow:hidden;box-shadow:0 -20px 80px rgba(46,139,110,.18),0 0 0 1px rgba(245,241,232,.14)}
#site img{display:block;width:1240px;height:auto}
</style></head><body>
<img id="logo" src="/__cap/logoframes/l0001.png">
<div id="url">GBXPS.COM</div>
<div id="site"><img src="/__cap/site-hero.png"></div>
</body></html>`
await p.route('http://127.0.0.1:4173/__cap/**', (r) => {
  const u = new URL(r.request().url()); const f = u.pathname.replace('/__cap/', '')
  if (f === 'index.html') return r.fulfill({ status: 200, contentType: 'text/html', body: html })
  return r.fulfill({ status: 200, contentType: 'image/png', body: readFileSync(f) })
})
await p.goto('http://127.0.0.1:4173/__cap/index.html', { waitUntil: 'load' })
await p.evaluate(async () => { await document.fonts.ready })
await p.waitForTimeout(200)
const ease = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
const clamp01 = (t) => Math.max(0, Math.min(1, t))
for (let i = 0; i < N; i++) {
  const t = i / FPS
  const lf = Math.min(i, LOGO_FRAMES - 1) + 1
  const m = ease(clamp01((t - 4.0) / 1.4))          // logo moves up and shrinks
  const s = ease(clamp01((t - 4.3) / 1.4))          // site rises and fades in
  const u = ease(clamp01((t - 5.0) / 0.8))          // url fades in
  const logoTop = 540 - 250 * m, logoSize = 520 - 150 * m
  const siteTop = 1080 - 460 * s
  await p.evaluate(([src, logoTop, logoSize, siteTop, s, u]) => {
    const l = document.getElementById('logo'); if (l.getAttribute('src') !== src) { l.src = src } l.style.top = logoTop + 'px'; l.style.width = l.style.height = logoSize + 'px'
    const site = document.getElementById('site'); site.style.top = siteTop + 'px'; site.style.opacity = s
    const url = document.getElementById('url'); url.style.top = (logoTop + logoSize / 2 + 26) + 'px'; url.style.opacity = u
  }, [`/__cap/logoframes/l${String(lf).padStart(4, '0')}.png`, logoTop, logoSize, siteTop, s, u])
  await p.evaluate(() => document.getElementById('logo').decode().catch(() => {}))
  if (i === 0) await p.waitForTimeout(300)
  await p.screenshot({ path: `frames6/f${String(i).padStart(4, '0')}.png`, animations: 'disabled' })
}
await b.close()
console.log('frames', N)
