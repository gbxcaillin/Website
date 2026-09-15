import { useState } from 'react'
import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import ToolCTA from '../components/ToolCTA.jsx'
import ToolWizard from '../components/ToolWizard.jsx'
import ToolLeadCapture from '../components/ToolLeadCapture.jsx'

const FIELDS = [
  { id: 'brand', label: 'business name', eyebrow: 'Your business', question: 'What is your business called?', placeholder: 'Acme Advisory' },
  { id: 'audience', label: 'audience', eyebrow: 'Audience', question: 'Who do you help?', placeholder: 'growing professional-services firms' },
  { id: 'need', label: 'need', eyebrow: 'The problem', question: 'What problem or goal do they have?', placeholder: 'want to grow without adding chaos' },
  { id: 'category', label: 'category', eyebrow: 'Category', question: 'What kind of business are you?', placeholder: 'business consultancy' },
  { id: 'benefit', label: 'outcome', eyebrow: 'The outcome', question: 'What outcome do you deliver?', placeholder: 'run sharper and grow with discipline' },
  { id: 'difference', label: 'difference', eyebrow: 'Difference', question: 'What makes you different?', placeholder: 'stay close to the work and own the result' },
  { id: 'alternative', label: 'alternative', eyebrow: 'Alternative', question: 'What is the main alternative they consider?', placeholder: 'large firms that hand you to junior teams' },
]

const steps = FIELDS.map((f) => ({
  id: f.id,
  kind: 'input',
  eyebrow: f.eyebrow,
  question: f.question,
  placeholder: f.placeholder,
  required: false,
}))

function build(a) {
  const g = (id) => {
    const f = FIELDS.find((x) => x.id === id)
    return a[id] && a[id].trim() ? a[id].trim() : `[${f.label}]`
  }
  const brand = g('brand')
  return {
    positioning: `For ${g('audience')} who ${g('need')}, ${brand} is a ${g('category')} that helps them ${g('benefit')}. Unlike ${g('alternative')}, ${brand} ${g('difference')}.`,
    oneLine: `${brand} helps ${g('audience')} ${g('benefit')}.`,
    elevator: `${brand} is a ${g('category')} for ${g('audience')}. We help them ${g('benefit')}, and unlike ${g('alternative')}, we ${g('difference')}.`,
  }
}

function Outputs({ out }) {
  const [copied, setCopied] = useState('')
  const OUTPUTS = [
    { key: 'positioning', label: 'Positioning statement', text: out.positioning },
    { key: 'oneLine', label: 'One-line pitch', text: out.oneLine },
    { key: 'elevator', label: 'Elevator version', text: out.elevator },
  ]
  async function copy(which, text) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(which)
      setTimeout(() => setCopied(''), 1800)
    } catch {
      setCopied('')
    }
  }
  return (
    <div className="pos-outputs">
      {OUTPUTS.map((o) => (
        <div key={o.key} className="pos-block">
          <div className="pos-block__head">
            <span className="field__label">{o.label}</span>
            <button type="button" className="text-link pos-block__copy" onClick={() => copy(o.key, o.text)}>
              {copied === o.key ? 'Copied' : 'Copy'}
            </button>
          </div>
          <p className="pos-block__text">{o.text}</p>
        </div>
      ))}
    </div>
  )
}

function results(answers, restart) {
  const out = build(answers)
  const findingsText = [
    'GBX Professional Services: Positioning Statement Builder',
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
    <div className="tool-outcome">
      <div className="calc-result calc-result--wide">
        <Outputs out={out} />
        <ToolLeadCapture
          toolName="Positioning Statement Builder"
          data={{ Positioning: out.positioning, 'One-line': out.oneLine, Elevator: out.elevator }}
          findingsText={findingsText}
        />
        <button type="button" className="text-link sc-reset" onClick={restart}>
          Start again
        </button>
      </div>

      <ToolCTA
        heading="A clear sentence is the start. A brand is the work."
        body="This gives you a usable draft. Pressure-testing your positioning against the market, then turning it into messaging, identity and campaigns, is exactly what our Brand & Marketing work does."
        secondary={{ label: 'See our services', to: '/services' }}
      />
    </div>
  )
}

export default function PositioningPage() {
  usePageMeta(pageMeta.positioning)
  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="Positioning Statement Builder"
        intro="Answer six short prompts, one at a time, and get a positioning statement, a one-line pitch and an elevator version you can use straight away. Runs entirely in your browser."
      />
      <section className="section section--paper">
        <div className="container">
          <ToolWizard steps={steps} results={results} />
        </div>
      </section>
    </>
  )
}
