import { useMemo, useState } from 'react'
import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import ToolCTA from '../components/ToolCTA.jsx'
import ToolLeadCapture from '../components/ToolLeadCapture.jsx'

const FIELDS = [
  { key: 'brand', label: 'Your business name', placeholder: 'Acme Advisory' },
  { key: 'audience', label: 'Who you help', placeholder: 'growing professional-services firms' },
  { key: 'need', label: 'The problem or goal they have', placeholder: 'want to grow without adding chaos' },
  { key: 'category', label: 'What you are', placeholder: 'business consultancy' },
  { key: 'benefit', label: 'The outcome you deliver', placeholder: 'run sharper and grow with discipline' },
  { key: 'difference', label: 'What makes you different', placeholder: 'stay close to the work and are accountable for the result' },
  { key: 'alternative', label: 'The main alternative they consider', placeholder: 'large firms that hand you to junior teams' },
]

const EMPTY = Object.fromEntries(FIELDS.map((f) => [f.key, '']))

function build(s) {
  const g = (k) => (s[k].trim() ? s[k].trim() : `[${FIELDS.find((f) => f.key === k).label.toLowerCase()}]`)
  const brand = g('brand')
  return {
    positioning: `For ${g('audience')} who ${g('need')}, ${brand} is a ${g('category')} that helps them ${g('benefit')}. Unlike ${g('alternative')}, ${brand} ${g('difference')}.`,
    oneLine: `${brand} helps ${g('audience')} ${g('benefit')}.`,
    elevator: `${brand} is a ${g('category')} for ${g('audience')}. We help them ${g('benefit')}, and unlike ${g('alternative')}, we ${g('difference')}.`,
  }
}

export default function PositioningPage() {
  usePageMeta(pageMeta.positioning)
  const [state, setState] = useState(EMPTY)
  const [copied, setCopied] = useState('')

  const out = useMemo(() => build(state), [state])
  const started = Object.values(state).some((v) => v.trim())

  function set(key, val) {
    setState((s) => ({ ...s, [key]: val }))
    setCopied('')
  }
  async function copy(which, text) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(which)
      setTimeout(() => setCopied(''), 1800)
    } catch {
      setCopied('')
    }
  }

  const OUTPUTS = [
    { key: 'positioning', label: 'Positioning statement', text: out.positioning },
    { key: 'oneLine', label: 'One-line pitch', text: out.oneLine },
    { key: 'elevator', label: 'Elevator version', text: out.elevator },
  ]

  const findingsText = [
    'GBX Professional Services — Positioning Statement Builder',
    new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }),
    '',
    'Positioning statement:',
    out.positioning,
    '',
    'One-line pitch:',
    out.oneLine,
    '',
    'Elevator version:',
    out.elevator,
    '',
    'A clear statement is the start. Sharpening positioning and turning it into a brand is what we do. https://gbxps.com/services',
  ].join('\n')

  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="Positioning Statement Builder"
        intro="Answer six short prompts and get a positioning statement, a one-line pitch and an elevator version you can use straight away. It builds them live as you type, entirely in your browser. Nothing you enter is sent anywhere."
      />

      <section className="section section--paper">
        <div className="container tool-layout">
          <form className="calc" onSubmit={(e) => e.preventDefault()}>
            {FIELDS.map((f) => (
              <label key={f.key} className="field">
                <span className="field__label">{f.label}</span>
                <input
                  type="text"
                  value={state[f.key]}
                  placeholder={f.placeholder}
                  onChange={(e) => set(f.key, e.target.value)}
                />
              </label>
            ))}
          </form>

          <aside className="calc-result">
            <div className="pos-outputs">
              {OUTPUTS.map((o) => (
                <div key={o.key} className="pos-block">
                  <div className="pos-block__head">
                    <span className="field__label">{o.label}</span>
                    <button
                      type="button"
                      className="text-link pos-block__copy"
                      onClick={() => copy(o.key, o.text)}
                    >
                      {copied === o.key ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <p className="pos-block__text">{o.text}</p>
                </div>
              ))}
            </div>

            {started && (
              <ToolLeadCapture
                toolName="Positioning Statement Builder"
                data={{
                  Positioning: out.positioning,
                  'One-line': out.oneLine,
                  Elevator: out.elevator,
                }}
                findingsText={findingsText}
              />
            )}
          </aside>
        </div>

        <div className="container">
          <ToolCTA
            heading="A clear sentence is the start. A brand is the work."
            body="This gives you a usable draft. Pressure-testing your positioning against the market, then turning it into messaging, identity and campaigns, is exactly what our Brand & Marketing work does."
            secondary={{ label: 'See our services', to: '/services' }}
          />
        </div>
      </section>
    </>
  )
}
