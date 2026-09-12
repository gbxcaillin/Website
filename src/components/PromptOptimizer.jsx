import { useMemo, useState } from 'react'

/**
 * Client-side prompt optimizer. Takes a rough task plus optional framing and
 * assembles a structured, best-practice prompt (role, context, task,
 * constraints, output format). Everything runs in the browser. Nothing the
 * user types is sent anywhere.
 */

const EMPTY = {
  task: '',
  role: '',
  context: '',
  audience: '',
  tone: '',
  format: '',
  avoid: '',
}

const PRESETS = [
  {
    label: 'Summarise a document',
    values: {
      task: 'Summarise the document below into the key points a busy decision-maker needs.',
      role: 'an experienced business analyst',
      audience: 'a time-poor company director',
      tone: 'clear and neutral',
      format: 'A one-line takeaway, then 5 bullet points, then any risks or open questions.',
      avoid: 'jargon and filler',
      context: 'Paste the document text after the task.',
    },
  },
  {
    label: 'Draft a client email',
    values: {
      task: 'Draft a short, professional email responding to the client message below.',
      role: 'a senior client-relationship manager',
      audience: 'a valued but cautious client',
      tone: 'warm, confident and concise',
      format: 'A subject line, then 3 short paragraphs, then a clear next step.',
      avoid: 'over-promising and legalistic language',
      context: 'Paste the client message and any relevant background after the task.',
    },
  },
  {
    label: 'Analyse some data',
    values: {
      task: 'Analyse the data below and tell me what is actually going on and what I should do about it.',
      role: 'a rigorous data analyst',
      audience: 'a non-technical manager',
      tone: 'plain and honest',
      format: 'Headline finding, 3 to 5 supporting observations, then recommended actions.',
      avoid: 'unsupported claims and false precision',
      context: 'Paste the figures, and note what each column means, after the task.',
    },
  },
]

function buildPrompt(s) {
  const lines = []
  lines.push(`You are ${s.role.trim() || 'an expert assistant'}.`)
  lines.push('')

  if (s.context.trim()) {
    lines.push('## Context')
    lines.push(s.context.trim())
    lines.push('')
  }

  lines.push('## Task')
  lines.push(s.task.trim() || '[Describe clearly and specifically what you want done.]')
  lines.push('')

  const constraints = []
  if (s.audience.trim()) constraints.push(`Write for this audience: ${s.audience.trim()}.`)
  if (s.tone.trim()) constraints.push(`Use a ${s.tone.trim()} tone.`)
  if (s.avoid.trim()) constraints.push(`Avoid: ${s.avoid.trim()}.`)
  if (constraints.length) {
    lines.push('## Constraints')
    constraints.forEach((c) => lines.push(`- ${c}`))
    lines.push('')
  }

  if (s.format.trim()) {
    lines.push('## Output format')
    lines.push(s.format.trim())
    lines.push('')
  }

  lines.push('If anything is unclear or missing, ask me before you begin.')
  return lines.join('\n').trim()
}

const FIELDS = [
  { key: 'task', label: 'What do you want the AI to do?', hint: 'Required. Be specific.', type: 'textarea', rows: 3, required: true },
  { key: 'role', label: 'Who should the AI be?', hint: 'A role or expertise, e.g. "a senior compliance analyst".', type: 'input' },
  { key: 'context', label: 'Context', hint: 'Background the AI cannot see. Who it is for, what has happened.', type: 'textarea', rows: 3 },
  { key: 'audience', label: 'Audience', hint: 'Who will read the output.', type: 'input' },
  { key: 'tone', label: 'Tone', hint: 'e.g. formal, plain, warm, technical.', type: 'input' },
  { key: 'format', label: 'Output format', hint: 'The shape you want back: a list, table, email, JSON.', type: 'textarea', rows: 2 },
  { key: 'avoid', label: 'Things to avoid', hint: 'What you do not want.', type: 'input' },
]

export default function PromptOptimizer() {
  const [state, setState] = useState(EMPTY)
  const [copied, setCopied] = useState(false)

  const prompt = useMemo(() => buildPrompt(state), [state])

  function update(key, value) {
    setState((s) => ({ ...s, [key]: value }))
    setCopied(false)
  }

  function applyPreset(values) {
    setState({ ...EMPTY, ...values })
    setCopied(false)
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="optimizer">
      <div className="optimizer__form">
        <div className="optimizer__presets">
          <span className="optimizer__presets-label mono">Start from an example</span>
          <div className="optimizer__preset-row">
            {PRESETS.map((p) => (
              <button
                key={p.label}
                type="button"
                className="chip"
                onClick={() => applyPreset(p.values)}
              >
                {p.label}
              </button>
            ))}
            <button type="button" className="chip chip--ghost" onClick={() => applyPreset(EMPTY)}>
              Clear
            </button>
          </div>
        </div>

        {FIELDS.map((f) => (
          <label key={f.key} className="field">
            <span className="field__label">
              {f.label}
              {!f.required && <span className="field__hint"> {f.hint}</span>}
            </span>
            {f.required && <span className="field__hint field__hint--block">{f.hint}</span>}
            {f.type === 'textarea' ? (
              <textarea
                rows={f.rows}
                value={state[f.key]}
                onChange={(e) => update(f.key, e.target.value)}
              />
            ) : (
              <input
                type="text"
                value={state[f.key]}
                onChange={(e) => update(f.key, e.target.value)}
              />
            )}
          </label>
        ))}
      </div>

      <div className="optimizer__output">
        <div className="optimizer__output-head">
          <span className="field__label">Your optimized prompt</span>
          <button type="button" className="btn btn--sm btn--primary" onClick={copy}>
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <pre className="optimizer__result" aria-live="polite">
          {prompt}
        </pre>
        <p className="optimizer__note">
          This runs entirely in your browser. Nothing you type is sent to us or anyone else.
        </p>
      </div>
    </div>
  )
}
