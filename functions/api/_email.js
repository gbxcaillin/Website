/**
 * Branded HTML emails for the tool and contact submissions.
 *
 * Email clients strip <style> and modern CSS, so everything here is table-based
 * with inline styles and web-safe fonts (Georgia for the serif accent, Arial for
 * body), echoing the GBX site: dark header, teal accents, warm off-white paper.
 * The underscore filename keeps this out of the Pages Functions routing table;
 * tool-lead.js imports it. Named exports are also handy for local preview.
 */

const TEAL = '#2E8B6E'
const DEEP = '#1A5C4A'
const VOID = '#0A0A0A'
const PAPER = '#FFFDF8'
const SOFT = '#F6F3EC'
const INK = '#1A1A1A'
const MUTE = '#7A7A7A'
const LINE = '#E4E0D8'

const FIRM = {
  name: 'GBX Professional Services',
  address: '260 Spencer Street, Melbourne VIC 3000',
  email: 'admin@gbxps.com',
  url: 'https://gbxps.com',
  urlLabel: 'gbxps.com',
  abn: 'ABN 45 674 252 905',
  philosophy: 'Combining insight with impact for sustainable business growth.',
  booking: 'https://bookings.cloud.microsoft/book/GBXProfessionalServices2@openbookwealth.com.au/',
}

export function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function linkify(s) {
  return escapeHtml(s).replace(
    /(https?:\/\/[^\s]+)/g,
    (m) => `<a href="${m}" style="color:${DEEP};text-decoration:underline;">${m.replace(/^https?:\/\//, '')}</a>`
  )
}

/** Turn a plain-text report (the tools' findingsText body) into branded HTML. */
export function summaryToHtml(text) {
  const lines = String(text || '').split('\n').map((l) => l.replace(/\s+$/, ''))
  // drop the "GBX Professional Services: ..." title and the date line if present
  let body = lines
  if (body[0] && /^GBX Professional Services:/i.test(body[0])) body = body.slice(1)
  if (body[0] && /\d{4}$|\d{1,2}\s\w+\s\d{4}/.test(body[0]) && body[0].length < 40) body = body.slice(1)
  while (body.length && body[0] === '') body = body.slice(1)

  const out = []
  const isHeading = (l) => l.length > 0 && l.length <= 48 && l.endsWith(':')
  const isBullet = (l) => l.startsWith('- ')
  const isScore = (l) => /(\d{1,3})\s*\/\s*100/.test(l) && /score|result|readiness|overall/i.test(l)
  const isDisc = (l) => /general information|does not hold|afsl|not personal|licence/i.test(l)

  for (const line of body) {
    if (line === '') continue
    if (isScore(line)) {
      const m = line.match(/(\d{1,3})\s*\/\s*100/)
      const tier = line.match(/\(([^)]+)\)/)
      out.push(
        `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 18px;">
          <tr><td style="background:${SOFT};border-left:3px solid ${TEAL};padding:14px 18px;">
            <span style="font-family:Georgia,serif;font-size:30px;font-weight:bold;color:${TEAL};">${escapeHtml(m[1])}</span>
            <span style="font-family:Arial,sans-serif;font-size:14px;color:${MUTE};">/100</span>
            ${tier ? `<span style="font-family:Arial,sans-serif;font-size:13px;color:${INK};font-weight:bold;">&nbsp;&nbsp;${escapeHtml(tier[1])}</span>` : ''}
          </td></tr>
        </table>`
      )
      continue
    }
    if (isHeading(line)) {
      out.push(
        `<p style="margin:18px 0 6px;font-family:Arial,sans-serif;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:${DEEP};font-weight:bold;">${escapeHtml(line.replace(/:$/, ''))}</p>`
      )
      continue
    }
    if (isBullet(line)) {
      const t = line.slice(2)
      const c = t.indexOf(': ')
      const inner =
        c > 0 && c < 42
          ? `<strong style="color:${INK};">${escapeHtml(t.slice(0, c + 1))}</strong> ${linkify(t.slice(c + 2))}`
          : linkify(t)
      out.push(
        `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
          <td width="16" valign="top" style="font-family:Arial,sans-serif;color:${TEAL};font-size:15px;line-height:22px;">&bull;</td>
          <td style="font-family:Arial,sans-serif;font-size:15px;line-height:22px;color:${INK};padding-bottom:4px;">${inner}</td>
        </tr></table>`
      )
      continue
    }
    out.push(
      `<p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:${isDisc(line) ? '12px' : '15px'};line-height:${isDisc(line) ? '18px' : '22px'};color:${isDisc(line) ? MUTE : INK};${isDisc(line) ? 'font-style:italic;' : ''}">${linkify(line)}</p>`
    )
  }
  return out.join('\n')
}

/** Wrap body HTML in the branded shell: dark header, teal seam, footer. */
export function wrapEmail({ eyebrow, title, preheader, bodyHtml, cta }) {
  const ctaHtml = cta
    ? `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0 4px;"><tr>
         <td style="background:${TEAL};border-radius:4px;">
           <a href="${cta.href}" style="display:inline-block;padding:12px 22px;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;color:#ffffff;text-decoration:none;">${escapeHtml(cta.label)}</a>
         </td></tr></table>`
    : ''
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:${SOFT};">
  <span style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader || '')}</span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${SOFT};padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:${PAPER};border:1px solid ${LINE};border-radius:8px;overflow:hidden;">
        <tr><td style="background:${VOID};padding:24px 32px;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr>
            <td valign="middle" width="104" style="width:104px;">
              <img src="${FIRM.url}/media/logo-poster.jpg" width="104" height="104" alt="${FIRM.name}" style="display:block;border:0;outline:none;text-decoration:none;width:104px;height:104px;" />
            </td>
            <td valign="middle" style="padding-left:22px;">
              <p style="margin:0 0 7px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${TEAL};">Our philosophy</p>
              <p style="margin:0;font-family:Georgia,serif;font-size:16px;line-height:23px;color:${PAPER};font-style:italic;">${escapeHtml(FIRM.philosophy)}</p>
            </td>
          </tr></table>
        </td></tr>
        <tr><td style="height:3px;background:${TEAL};line-height:3px;font-size:0;">&nbsp;</td></tr>
        <tr><td style="padding:30px 32px 8px;">
          ${eyebrow ? `<p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${TEAL};">${escapeHtml(eyebrow)}</p>` : ''}
          ${title ? `<h1 style="margin:0 0 4px;font-family:Georgia,serif;font-size:24px;font-weight:normal;color:${INK};">${escapeHtml(title)}</h1>` : ''}
        </td></tr>
        <tr><td style="padding:8px 32px 8px;">
          ${bodyHtml}
          ${ctaHtml}
        </td></tr>
        <tr><td style="padding:20px 32px 28px;border-top:1px solid ${LINE};">
          <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:12px;color:${MUTE};">${FIRM.name} &nbsp;&middot;&nbsp; ${FIRM.address}</p>
          <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:${MUTE};"><a href="mailto:${FIRM.email}" style="color:${DEEP};text-decoration:none;">${FIRM.email}</a> &nbsp;&middot;&nbsp; <a href="${FIRM.url}" style="color:${DEEP};text-decoration:none;">${FIRM.urlLabel}</a> &nbsp;&middot;&nbsp; ${FIRM.abn}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`
}

/** The results email sent to the visitor. */
export function visitorEmail(record) {
  const name = record.name ? ` ${record.name}` : ''
  if (record.kind === 'contact') {
    return wrapEmail({
      eyebrow: 'Thank you',
      title: 'We have your enquiry',
      preheader: 'We received your message and will reply within two business days.',
      bodyHtml: `<p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:15px;line-height:22px;color:${INK};">Hi${escapeHtml(name)},</p>
        <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:15px;line-height:22px;color:${INK};">Thanks for getting in touch with GBX Professional Services. We have received your message and will reply within two business days.</p>`,
      cta: { label: 'Visit the site', href: FIRM.url },
    })
  }
  if (record.kind === 'newsletter') {
    return wrapEmail({
      eyebrow: 'Subscribed',
      title: 'You are on the list',
      preheader: 'Practical ideas on performance, AI, sales and marketing.',
      bodyHtml: `<p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:15px;line-height:22px;color:${INK};">Hi${escapeHtml(name)},</p>
        <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:15px;line-height:22px;color:${INK};">Thanks for subscribing to insights from GBX Professional Services. You will hear from us occasionally with practical ideas on performance, AI, sales and marketing, and you can unsubscribe any time.</p>`,
      cta: { label: 'Explore the tools', href: `${FIRM.url}/tools` },
    })
  }
  return wrapEmail({
    eyebrow: 'Your results',
    title: record.source,
    preheader: `Your ${record.source} results from GBX Professional Services.`,
    bodyHtml: `<p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;line-height:22px;color:${INK};">Hi${escapeHtml(name)}, thanks for using our ${escapeHtml(record.source)}. Here are your results.</p>
      ${summaryToHtml(record.summary)}
      <p style="margin:16px 0 0;font-family:Arial,sans-serif;font-size:14px;line-height:21px;color:${INK};">A tool like this is a starting point, not the full picture. If anything here rings true, we would be glad to take a proper look with you.</p>`,
    cta: { label: 'Book a call', href: FIRM.booking },
  })
}

/** The notification email sent to the owner. */
export function ownerEmail(record) {
  const rows = Object.entries(record.fields || {})
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;font-family:Arial,sans-serif;font-size:13px;color:${MUTE};vertical-align:top;">${escapeHtml(k)}</td><td style="padding:4px 0;font-family:Arial,sans-serif;font-size:13px;color:${INK};">${escapeHtml(v)}</td></tr>`
    )
    .join('')
  return wrapEmail({
    eyebrow: 'New submission',
    title: record.source,
    preheader: `${record.source}: ${record.email}`,
    bodyHtml: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 16px;">
        <tr><td style="padding:4px 12px 4px 0;font-family:Arial,sans-serif;font-size:13px;color:${MUTE};">From</td><td style="padding:4px 0;font-family:Arial,sans-serif;font-size:13px;color:${INK};">${escapeHtml(record.name || '(no name)')} &lt;<a href="mailto:${escapeHtml(record.email)}" style="color:${DEEP};">${escapeHtml(record.email)}</a>&gt;</td></tr>
        <tr><td style="padding:4px 12px 4px 0;font-family:Arial,sans-serif;font-size:13px;color:${MUTE};">Time</td><td style="padding:4px 0;font-family:Arial,sans-serif;font-size:13px;color:${INK};">${escapeHtml(record.created_at)}</td></tr>
        ${record.page ? `<tr><td style="padding:4px 12px 4px 0;font-family:Arial,sans-serif;font-size:13px;color:${MUTE};">Page</td><td style="padding:4px 0;font-family:Arial,sans-serif;font-size:13px;color:${INK};">${escapeHtml(record.page)}</td></tr>` : ''}
        ${rows}
      </table>
      ${summaryToHtml(record.summary)}`,
  })
}
