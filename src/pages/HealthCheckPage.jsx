import { useState } from 'react'
import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import ToolCTA from '../components/ToolCTA.jsx'
import ToolLeadCapture from '../components/ToolLeadCapture.jsx'

const DIMENSIONS = [
  {
    key: 'finance',
    label: 'Finance & performance',
    questions: [
      'I can see profitability by client, service or product',
      'I review my key numbers at least weekly',
    ],
    observation:
      'Without a clear view of profit by segment, it is easy to keep growing the parts that quietly lose money.',
  },
  {
    key: 'sales',
    label: 'Sales & pipeline',
    questions: [
      'We have a documented, repeatable sales process',
      'I can forecast revenue a quarter ahead with confidence',
    ],
    observation:
      'An undocumented pipeline makes revenue hard to predict and the next quiet quarter hard to see coming.',
  },
  {
    key: 'operations',
    label: 'Operations & process',
    questions: [
      'Our core processes are documented, not just held in heads',
      'Growth does not create bottlenecks or drop quality',
    ],
    observation:
      'Undocumented process is the usual reason growth adds friction and cost instead of profit.',
  },
  {
    key: 'marketing',
    label: 'Marketing & brand',
    questions: [
      'Our positioning is clear and says the same thing everywhere',
      'Marketing happens on a regular rhythm, not in bursts',
    ],
    observation:
      'Inconsistent positioning and stop-start marketing mean good effort leaks away before it compounds.',
  },
  {
    key: 'systems',
    label: 'Systems & data',
    questions: [
      'We have one trusted source of truth for our data',
      'Our tools are integrated, not siloed',
    ],
    observation:
      'Competing versions of the truth slow decisions and quietly erode trust in the numbers.',
  },
  {
    key: 'ai',
    label: 'AI & automation',
    questions: [
      'Repetitive, rule-based tasks are automated where sensible',
      'We have a considered view on where AI adds value',
    ],
    observation:
      'With no view on where AI fits, you risk missing the easy wins and chasing the hype at the same time.',
  },
]

const SCALE = [
  { v: 1, label: 'Strongly disagree' },
  { v: 2, label: 'Disagree' },
  { v: 3, label: 'Neutral' },
  { v: 4, label: 'Agree' },
  { v: 5, label: 'Strongly agree' },
]

const TOTAL = DIMENSIONS.reduce((n, d) => n + d.questions.length, 0)

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

export default function HealthCheckPage() {
  usePageMeta(pageMeta.healthCheck)
  const [answers, setAnswers] = useState({})

  const answered = Object.keys(answers).length
  const complete = answered === TOTAL

  const scores = DIMENSIONS.map((d) => {
    const vals = d.questions.map((_, i) => answers[`${d.key}-${i}`]).filter(Boolean)
    const score = vals.length ? Math.round((vals.reduce((a, b) => a + b, 0) / vals.length) * 20) : 0
    return { ...d, score, done: vals.length === d.questions.length }
  })
  const overall = complete
    ? Math.round(scores.reduce((a, b) => a + b.score, 0) / scores.length)
    : 0
  const tier = overall <= 40 ? 'Foundational' : overall <= 70 ? 'Developing' : 'Strong'
  const weakest = [...scores].sort((a, b) => a.score - b.score).slice(0, 2)

  const captureData = complete
    ? { Overall: `${overall}/100`, Tier: tier, ...Object.fromEntries(scores.map((s) => [s.label, `${s.score}/100`])) }
    : null
  const findingsText = complete
    ? [
        'GBX Professional Services — Business Health Check',
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
        'This is a quick self-assessment. The full GBX Professional Services Health Check goes much deeper. https://gbxps.com/services',
      ].join('\n')
    : ''

  function setAnswer(key, v) {
    setAnswers((s) => ({ ...s, [key]: v }))
  }
  function reset() {
    setAnswers({})
  }

  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="Business Health Check"
        intro="Rate your business across the six areas that most decide performance. In two minutes you get a score, a picture of where you are strong, and a clear sense of where the biggest gains are hiding. It runs entirely in your browser. Nothing you enter is sent anywhere."
      />

      <section className="section section--paper">
        <div className="container tool-layout">
          <form className="scorecard" onSubmit={(e) => e.preventDefault()}>
            {DIMENSIONS.map((d) => (
              <fieldset key={d.key} className="sc-dim">
                <legend className="sc-dim__label">{d.label}</legend>
                {d.questions.map((q, i) => {
                  const key = `${d.key}-${i}`
                  return (
                    <div key={key} className="sc-q">
                      <p className="sc-q__text">{q}</p>
                      <div className="rating" role="group" aria-label={q}>
                        {SCALE.map((s) => (
                          <button
                            key={s.v}
                            type="button"
                            className={`rating__opt ${answers[key] === s.v ? 'rating__opt--on' : ''}`}
                            aria-pressed={answers[key] === s.v}
                            title={s.label}
                            onClick={() => setAnswer(key, s.v)}
                          >
                            {s.v}
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </fieldset>
            ))}
            <div className="rating-legend mono">
              <span>1 = Strongly disagree</span>
              <span>5 = Strongly agree</span>
            </div>
          </form>

          <aside className="sc-result">
            {!complete ? (
              <div className="sc-result__pending">
                <p className="eyebrow">Your result</p>
                <p className="sc-result__progress mono">
                  {answered} / {TOTAL} answered
                </p>
                <p className="sc-result__hint">Answer every statement to see your score.</p>
                <div className="sc-progress" aria-hidden="true">
                  <span style={{ width: `${(answered / TOTAL) * 100}%` }} />
                </div>
              </div>
            ) : (
              <div className="sc-result__done">
                <div className="sc-result__top">
                  <Ring score={overall} />
                  <div>
                    <p className="eyebrow">Overall</p>
                    <p className="sc-result__tier">{tier}</p>
                  </div>
                </div>

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

                <button type="button" className="text-link sc-reset" onClick={reset}>
                  Start again
                </button>
              </div>
            )}
          </aside>
        </div>

        <div className="container">
          <ToolCTA
            heading="Your Health Check in two minutes. Ours goes much deeper."
            body="This is a quick self-assessment. The full GBX Professional Services Health Check reviews your numbers, systems and processes in depth, then turns the gaps into a prioritised plan you can act on."
            secondary={{ label: 'See our services', to: '/services' }}
          />
        </div>
      </section>
    </>
  )
}
