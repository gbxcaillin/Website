// Cloudflare Pages Function: GET /api/benchmarks?tool=health-check
//
// Aggregates Business Health Check submissions stored in D1 (see tool-lead.js)
// into anonymous averages, so the tool can show "how you compare" once there is
// enough data. Nothing personal leaves the database: only counts and averages.
//
// Returns { ok: true, n, overall, dims: { [label]: avg } } or { ok: false }.
// The front end hides the comparison until n reaches MIN_N, so the number is
// never misleading while the sample is small.

const MIN_N = 25
const SOURCES = { 'health-check': 'Business Health Check' }
const SCORE_RE = /^(\d+)\s*\/\s*100$/

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url)
  const source = SOURCES[url.searchParams.get('tool') || 'health-check']
  if (!source || !env.DB) return json({ ok: false })

  try {
    // Latest submission per email so repeat runs do not skew the averages.
    const { results } = await env.DB.prepare(
      `SELECT fields FROM leads
       WHERE kind = 'tool' AND source = ? AND id IN (
         SELECT MAX(id) FROM leads WHERE kind = 'tool' AND source = ? GROUP BY email
       )
       ORDER BY id DESC LIMIT 5000`
    )
      .bind(source, source)
      .all()

    const sums = {}
    const counts = {}
    let n = 0
    for (const row of results || []) {
      let fields
      try {
        fields = JSON.parse(row.fields || '{}')
      } catch {
        continue
      }
      const overall = parseScore(fields.Overall)
      if (overall == null) continue
      n += 1
      for (const [k, v] of Object.entries(fields)) {
        const score = parseScore(v)
        if (score == null) continue
        sums[k] = (sums[k] || 0) + score
        counts[k] = (counts[k] || 0) + 1
      }
    }

    if (n < MIN_N) return json({ ok: true, n, ready: false })

    const dims = {}
    for (const k of Object.keys(sums)) {
      if (k === 'Overall') continue
      dims[k] = Math.round(sums[k] / counts[k])
    }
    return json(
      { ok: true, ready: true, n, overall: Math.round(sums.Overall / counts.Overall), dims },
      { 'Cache-Control': 'public, max-age=3600' }
    )
  } catch (e) {
    console.error('benchmarks failed:', e)
    return json({ ok: false })
  }
}

function parseScore(v) {
  const m = typeof v === 'string' && v.match(SCORE_RE)
  return m ? Number(m[1]) : null
}

function json(obj, extraHeaders = {}) {
  return new Response(JSON.stringify(obj), {
    headers: { 'Content-Type': 'application/json', ...extraHeaders },
  })
}
