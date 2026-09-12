// Cloudflare Pages Function: POST /api/tool-lead
//
// Receives submissions from the interactive tools and the contact form, logs
// them to a D1 database, and emails the owner plus (for tools) the visitor via
// Resend. Every external step is best effort, so a missing binding degrades
// gracefully rather than losing the request.
//
// Configure in Cloudflare Pages -> Settings:
//   D1 binding      DB              (Functions -> D1 database bindings)
//   Env / secret    RESEND_API_KEY  (encrypted)   enables email
//   Env             MAIL_FROM       e.g. "GBX Professional Services <noreply@gbxps.com>"
//   Env             MAIL_TO         owner inbox, defaults to admin@gbxps.com
// See docs/lead-capture-setup.md for the full walkthrough.

const OWNER_DEFAULT = 'admin@gbxps.com'
const FROM_DEFAULT = 'GBX Professional Services <onboarding@resend.dev>'

export async function onRequestPost(context) {
  const { request, env } = context

  let body
  try {
    body = await request.json()
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400)
  }

  if (body._gotcha) return json({ ok: true }) // honeypot: pretend success

  const email = String(body.email || '').trim()
  if (!email || !email.includes('@')) return json({ ok: false, error: 'invalid_email' }, 400)

  const record = {
    created_at: new Date().toISOString(),
    kind: String(body.kind || 'tool'),
    source: String(body.source || 'Unknown'),
    email,
    name: body.name ? String(body.name) : '',
    fields: body.fields && typeof body.fields === 'object' ? body.fields : {},
    summary: body.summary ? String(body.summary) : '',
    page: body.page ? String(body.page) : '',
    ip: request.headers.get('CF-Connecting-IP') || '',
    user_agent: request.headers.get('User-Agent') || '',
  }

  // 1. Log to D1 (best effort)
  if (env.DB) {
    try {
      await env.DB.prepare(
        `INSERT INTO leads (created_at, kind, source, email, name, fields, summary, page, ip, user_agent)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
        .bind(
          record.created_at,
          record.kind,
          record.source,
          record.email,
          record.name,
          JSON.stringify(record.fields),
          record.summary,
          record.page,
          record.ip,
          record.user_agent
        )
        .run()
    } catch (e) {
      console.error('D1 insert failed:', e)
    }
  }

  // 2. Email owner + visitor (best effort)
  if (env.RESEND_API_KEY) {
    const from = env.MAIL_FROM || FROM_DEFAULT
    const owner = env.MAIL_TO || OWNER_DEFAULT
    const fieldsText = Object.entries(record.fields)
      .map(([k, v]) => `- ${k}: ${v}`)
      .join('\n')

    await sendEmail(env, {
      from,
      to: owner,
      reply_to: email,
      subject: `[GBX] ${record.source} — ${email}`,
      text: `New ${record.source} submission\n\nFrom: ${record.name || '(no name)'} <${email}>\nPage: ${record.page}\nTime: ${record.created_at}\n\n${fieldsText}\n\n${record.summary}`,
    }).catch((e) => console.error('owner email failed:', e))

    const greeting = `Hi${record.name ? ' ' + record.name : ''},`
    const visitorText =
      record.kind === 'contact'
        ? `${greeting}\n\nThanks for getting in touch with GBX Professional Services. We have received your message and will reply within two business days.\n\nGBX Professional Services\nhttps://gbxps.com`
        : `${greeting}\n\nThanks for using our ${record.source}. Here are your results.\n\n${record.summary}\n\nA quick note: a tool like this is a starting point, not the full picture. If anything here rings true, we would be glad to take a proper look with you.\n\nGBX Professional Services\nhttps://gbxps.com`

    await sendEmail(env, {
      from,
      to: email,
      subject:
        record.kind === 'contact'
          ? 'We received your enquiry — GBX Professional Services'
          : `Your ${record.source} results — GBX Professional Services`,
      text: visitorText,
    }).catch((e) => console.error('visitor email failed:', e))
  }

  return json({ ok: true })
}

async function sendEmail(env, payload) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(`resend ${res.status}: ${await res.text()}`)
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}
