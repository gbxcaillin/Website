import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import ToolCTA from '../components/ToolCTA.jsx'
import ToolWizard from '../components/ToolWizard.jsx'
import ToolLeadCapture from '../components/ToolLeadCapture.jsx'
import HealthBenchmark from '../components/HealthBenchmark.jsx'

const DIMENSIONS = [
  {
    key: 'finance',
    label: 'Finance & performance',
    questions: [
      'I can see profitability by client, service or product.',
      'I review my key numbers at least weekly.',
    ],
    observation:
      'Without a clear view of profit by segment, it is easy to keep growing the parts that quietly lose money.',
  },
  {
    key: 'sales',
    label: 'Sales & pipeline',
    questions: [
      'We have a documented, repeatable sales process.',
      'I can forecast revenue a quarter ahead with confidence.',
    ],
    observation:
      'An undocumented pipeline makes revenue hard to predict and the next quiet quarter hard to see coming.',
  },
  {
    key: 'operations',
    label: 'Operations & process',
    questions: [
      'Our core processes are documented, not just held in heads.',
      'Growth does not create bottlenecks or drop quality.',
    ],
    observation:
      'Undocumented process is the usual reason growth adds friction and cost instead of profit.',
  },
  {
    key: 'marketing',
    label: 'Marketing & brand',
    questions: [
      'Our positioning is clear and says the same thing everywhere.',
      'Marketing happens on a regular rhythm, not in bursts.',
    ],
    observation:
      'Inconsistent positioning and stop-start marketing mean good effort leaks away before it compounds.',
  },
  {
    key: 'systems',
    label: 'Systems & data',
    questions: [
      'We have one trusted source of truth for our data.',
      'Our tools are integrated, not siloed.',
    ],
    observation:
      'Competing versions of the truth slow decisions and quietly erode trust in the numbers.',
  },
  {
    key: 'ai',
    label: 'AI & automation',
    questions: [
      'Repetitive, rule-based tasks are automated where sensible.',
      'We have a considered view on where AI adds value.',
    ],
    observation:
      'With no view on where AI fits, you risk missing the easy wins and chasing the hype at the same time.',
  },
]

const SCALE = [
  { value: 5, label: 'Strongly agree' },
  { value: 4, label: 'Agree' },
  { value: 3, label: 'Neutral' },
  { value: 2, label: 'Disagree' },
  { value: 1, label: 'Strongly disagree' },
]

const steps = DIMENSIONS.flatMap((d) =>
  d.questions.map((q, qi) => ({
    id: `${d.key}-${qi}`,
    kind: 'choice',
    eyebrow: d.label,
    question: q,
    options: SCALE,
  }))
)

function Ring({ score }) {
  const r = 54
  const c = 2 * Math.PI * r
  const offset = c * (1 - score / 100)
  return (
    <svg className="score-ring" viewBox="0 0 130 130" width="130" height="130" aria-hidden="true">
      <circle cx="65" cy="65" r={r} fill="none" stroke="var(--line)" strokeWidth="10" />
      <circle
        cx="65"
        cy="65"
        r={r}
        fill="none"
        stroke="var(--gbx-teal)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={offset}
        transform="rotate(-90 65 65)"
      />
      <text x="65" y="62" textAnchor="middle" className="score-ring__num">
        {score}
      </text>
      <text x="65" y="82" textAnchor="middle" className="score-ring__unit">
        / 100
      </text>
    </svg>
  )
}

function results(answers, restart) {
  const scores = DIMENSIONS.map((d) => {
    const vals = d.questions.map((_, qi) => answers[`${d.key}-${qi}`]).filter(Boolean)
    const score = vals.length ? Math.round((vals.reduce((a, b) => a + b, 0) / vals.length) * 20) : 0
    return { ...d, score }
  })
  const overall = Math.round(scores.reduce((a, b) => a + b.score, 0) / scores.length)
  const tier = overall <= 40 ? 'Foundational' : overall <= 70 ? 'Developing' : 'Strong'
  const weakest = [...scores].sort((a, b) => a.score - b.score).slice(0, 2)

  const captureData = {
    Overall: `${overall}/100`,
    Tier: tier,
    ...Object.fromEntries(scores.map((s) => [s.label, `${s.score}/100`])),
  }
  const findingsText = [
    'GBX Professional Services: Business Health Check',
    new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }),
    '',
    `Overall score: ${overall}/100 (${tier})`,
    '',
    'By area:',
    ...scores.map((s) => `- ${s.label}: ${s.score}/100`),
    '',
    'Where to look first:',
    ...weakest.map((d) => `- ${d.label}: ${d.observation}`),
    '',
    'This is a quick self-assessment. The GBX Professional Services Performance Diagnostic goes much deeper. https://gbxps.com/diagnostic',
  ].join('\n')

  return (
    <div className="tool-outcome">
      <div className="sc-result sc-result--wide">
        <div className="sc-result__top">
          <Ring score={overall} />
          <div>
            <p className="eyebrow">Overall</p>
            <p className="sc-result__tier">{tier}</p>
          </div>
        </div>

        <HealthBenchmark overall={overall} />

        <ul className="dim-bars">
          {scores.map((s) => (
            <li key={s.key} className="dim-bar">
              <span className="dim-bar__label">{s.label}</span>
              <span className="dim-bar__track" aria-hidden="true">
                <span className="dim-bar__fill" style={{ width: `${s.score}%` }} />
              </span>
              <span className="dim-bar__num mono">{s.score}</span>
            </li>
          ))}
        </ul>

        <div className="sc-focus">
          <p className="eyebrow">Where to look first</p>
          {weakest.map((d) => (
            <div key={d.key} className="sc-focus__item">
              <h3 className="sc-focus__title">{d.label}</h3>
              <p className="sc-focus__body">{d.observation}</p>
            </div>
          ))}
        </div>

        <ToolLeadCapture
          toolName="Business Health Check"
          data={captureData}
          findingsText={findingsText}
        />
        <button type="button" className="text-link sc-reset" onClick={restart}>
          Start again
        </button>
      </div>

      <ToolCTA
        heading="Your Health Check in two minutes. The Diagnostic goes much deeper."
        body="This is a quick self-assessment using the same lens as our Performance Diagnostic: ten days at your pace, fixed fee, a review of your numbers, systems and processes, and a 90-day plan you own."
        primary={{ label: 'See the Diagnostic', to: '/diagnostic' }}
        secondary={{ label: 'Start a conversation', to: '/contact' }}
      />
    </div>
  )
}

export default function HealthCheckPage() {
  usePageMeta(pageMeta.healthCheck)
  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="Business Health Check"
        intro="Six areas decide most of how a business performs. Answer one quick statement at a time and get a score, a picture of where you are strong, and where the biggest gains are hiding. Runs entirely in your browser."
      />
      <section className="section section--paper">
        <div className="container">
          <ToolWizard steps={steps} results={results} />
        </div>
      </section>
    </>
  )
}
