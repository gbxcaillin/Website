/**
 * Branded PDF for the "Download your results" button on every interactive tool.
 *
 * The tools all hand ToolLeadCapture the same shape of report: a plain-text
 * block whose first line is "GBX Professional Services: <Tool>", then a date,
 * then a mix of section headings (a short line ending in a colon), bullet lines
 * ("- label: value"), body paragraphs, a link line, and a disclaimer. Rather
 * than redesign each tool, this reads that block and lays it out to the GBX
 * brand: a dark header carrying the mark, a serif title, an accented score when
 * one is present, the findings with real typographic hierarchy, and a footer
 * with the firm's details. Vector text, so it stays crisp and the file is small.
 *
 * jsPDF is imported lazily inside downloadResultsPdf so it is not in the initial
 * bundle; the button is a late, opt-in action.
 */

// GBX palette (mirrors :root in styles.css)
const TEAL = [46, 139, 110]
const DEEP = [26, 92, 74]
const VOID = [10, 10, 10]
const PAPER = [255, 253, 248]
const INK = [26, 26, 26]
const MUTE = [122, 122, 122]
const LINE = [214, 210, 200]

const FIRM = {
  name: 'GBX Professional Services',
  address: '260 Spencer Street, Melbourne VIC 3000',
  email: 'admin@gbxps.com',
  url: 'gbxps.com',
  abn: 'ABN 45 674 252 905',
}

// A4 in points
const PAGE = { w: 595.28, h: 841.89 }
const M = 54 // side margin
const CONTENT_W = PAGE.w - M * 2

/** Draw the GBX mark: teal "GBX" centred in a thin square frame. The full firm
 * name sits in the footer, so the mark stays clean and does not crowd the title. */
function drawMark(doc, x, y, size, onDark) {
  doc.setDrawColor(...(onDark ? [255, 253, 248] : DEEP))
  doc.setLineWidth(0.8)
  doc.rect(x, y, size, size)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...TEAL)
  doc.setFontSize(size * 0.4)
  doc.text('GBX', x + size / 2, y + size * 0.62, { align: 'center' })
}

function drawHeader(doc, toolTitle, dateStr) {
  const bandH = 128
  doc.setFillColor(...VOID)
  doc.rect(0, 0, PAGE.w, bandH, 'F')
  // teal seam under the band
  doc.setFillColor(...TEAL)
  doc.rect(0, bandH, PAGE.w, 3, 'F')
  drawMark(doc, M, 34, 60, true)
  // eyebrow + title, right of the mark
  const tx = M + 84
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setCharSpace(2)
  doc.setTextColor(...TEAL)
  doc.text('YOUR RESULTS', tx, 56)
  doc.setCharSpace(0)
  doc.setFont('times', 'normal')
  doc.setFontSize(22)
  doc.setTextColor(255, 253, 248)
  const title = doc.splitTextToSize(toolTitle, PAGE.w - tx - M)
  doc.text(title, tx, 80)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(180, 180, 178)
  doc.text(dateStr, tx, 80 + title.length * 22)
  return bandH + 30
}

function drawFooter(doc) {
  const y = PAGE.h - 46
  doc.setDrawColor(...LINE)
  doc.setLineWidth(0.6)
  doc.line(M, y, PAGE.w - M, y)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7.5)
  doc.setTextColor(...MUTE)
  doc.text(`${FIRM.name}  ·  ${FIRM.address}`, M, y + 14)
  doc.text(`${FIRM.email}  ·  ${FIRM.abn}`, M, y + 25)
  doc.setTextColor(...DEEP)
  doc.text(FIRM.url, PAGE.w - M, y + 14, { align: 'right' })
}

/** Pull a leading "N/100" score and its tier from the report, if present. */
function findScore(lines) {
  for (const raw of lines.slice(0, 8)) {
    const m = raw.match(/(\d{1,3})\s*\/\s*100/)
    if (m && /score|result|readiness|overall/i.test(raw)) {
      const tier = raw.match(/\(([^)]+)\)/)
      return { value: Math.max(0, Math.min(100, +m[1])), tier: tier ? tier[1] : '', raw }
    }
  }
  return null
}

function drawScore(doc, score, y) {
  const num = String(score.value)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(46)
  doc.setTextColor(...TEAL)
  doc.text(num, M, y + 34)
  const numW = doc.getTextWidth(num)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(14)
  doc.setTextColor(...MUTE)
  doc.text('/100', M + numW + 4, y + 34)
  if (score.tier) {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.setTextColor(...INK)
    doc.text(score.tier, M + numW + 46, y + 22)
  }
  // meter
  const barY = y + 46
  doc.setFillColor(...LINE)
  doc.rect(M, barY, CONTENT_W, 5, 'F')
  doc.setFillColor(...TEAL)
  doc.rect(M, barY, (CONTENT_W * score.value) / 100, 5, 'F')
  return barY + 26
}

export function buildResultsPdf(doc, { toolName, lines }) {
  const clean = lines.map((l) => l.replace(/\s+$/, ''))
  // first line is "GBX Professional Services: <Tool>", second is the date
  const titleLine = clean[0] || toolName
  const toolTitle = titleLine.replace(/^GBX Professional Services:\s*/i, '') || toolName
  const dateStr =
    clean[1] && /\d/.test(clean[1])
      ? clean[1]
      : new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
  let body = clean.slice(2)
  // drop a leading blank
  while (body.length && body[0] === '') body = body.slice(1)

  let y = drawHeader(doc, toolTitle, dateStr)
  drawFooter(doc)

  const score = findScore(body)
  if (score) {
    y = drawScore(doc, score, y)
    // remove the score line from the body flow (it is now the headline)
    body = body.filter((l) => l !== score.raw)
    while (body.length && body[0] === '') body = body.slice(1)
  }

  const bottom = PAGE.h - 70
  const isHeading = (l) => l.length > 0 && l.length <= 48 && l.endsWith(':')
  const isBullet = (l) => l.startsWith('- ')
  const isUrl = (l) => /https?:\/\//i.test(l)
  const isDisclaimer = (l) => /general information|does not hold|afsl|not personal|licence/i.test(l)

  const ensure = (need) => {
    if (y + need > bottom) {
      doc.addPage()
      drawFooter(doc)
      y = 60
    }
  }

  for (const line of body) {
    if (line === '') {
      y += 8
      continue
    }
    if (isHeading(line)) {
      ensure(30)
      y += 6
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(8.5)
      doc.setCharSpace(1.5)
      doc.setTextColor(...DEEP)
      doc.text(line.replace(/:$/, '').toUpperCase(), M, y)
      doc.setCharSpace(0)
      y += 16
      continue
    }
    if (isBullet(line)) {
      const text = line.slice(2)
      const colon = text.indexOf(': ')
      doc.setFillColor(...TEAL)
      const dashY = y - 3
      doc.rect(M + 2, dashY, 6, 1.6, 'F')
      const tx = M + 16
      const tw = CONTENT_W - 16
      if (colon > 0 && colon < 42) {
        const label = text.slice(0, colon + 1)
        const value = text.slice(colon + 2)
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(10)
        doc.setTextColor(...INK)
        const lw = doc.getTextWidth(label + ' ')
        const wrapped = doc.splitTextToSize(value, tw - lw)
        ensure(wrapped.length * 13 + 4)
        doc.text(label, tx, y)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(...INK)
        doc.text(wrapped, tx + lw, y)
        y += wrapped.length * 13 + 3
      } else {
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(10)
        doc.setTextColor(...INK)
        const wrapped = doc.splitTextToSize(text, tw)
        ensure(wrapped.length * 13 + 4)
        doc.text(wrapped, tx, y)
        y += wrapped.length * 13 + 3
      }
      continue
    }
    // plain paragraph (or link, or disclaimer)
    const muted = isDisclaimer(line)
    doc.setFont('helvetica', muted ? 'italic' : 'normal')
    doc.setFontSize(muted ? 8.5 : 10.5)
    doc.setTextColor(...(muted ? MUTE : isUrl(line) ? DEEP : INK))
    const wrapped = doc.splitTextToSize(line, CONTENT_W)
    ensure(wrapped.length * (muted ? 11 : 14) + 4)
    doc.text(wrapped, M, y)
    y += wrapped.length * (muted ? 11 : 14) + 4
  }
  return doc
}

export async function downloadResultsPdf({ toolName, findingsText }) {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ unit: 'pt', format: 'a4' })
  const lines = String(findingsText || '').split('\n')
  buildResultsPdf(doc, { toolName, lines })
  const slug = toolName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  doc.save(`gbx-${slug}-results.pdf`)
}
