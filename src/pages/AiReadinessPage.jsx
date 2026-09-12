import { useState } from 'react'
import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import ToolCTA from '../components/ToolCTA.jsx'
import ToolLeadCapture from '../components/ToolLeadCapture.jsx'

const DIMENSIONS = [
  {
    key: 'usecases',
    label: 'Use cases',
    question: 'We know where AI could add real value in our business.',
    step: 'Start by mapping where time and money actually go. The best AI use cases hide in your most repetitive, rule-based work.',
  },
  {
    key: 'data',
    label: 'Data',
    question: 'Our data is organised, accessible and reasonably clean.',
    step: 'Get to one organised, accessible source of truth first. AI is only as useful as the data it can reach.',
  },
  {
    key: 'process',
    label: 'Process',
    question: 'Our key processes are documented enough to automate or augment.',
    step: 'Document your core processes before automating them. You cannot reliably augment what is not written down.',
  },
  {
    key: 'governance',
    label: 'Governance',
    question: 'We have clear rules for safe, compliant and responsible AI use.',
    step: 'Put a short, plain policy in place: what data is off limits, what a human must review, and who owns each use.',
  },
  {
    key: 'capability',
    label: 'Capability',
    question: 'Our team has the skills and confidence to adopt AI.',
    step: 'Build confidence with small, low-risk wins and light training before betting on anything large.',
  },
]

const OPTIONS = [
  { v: 1, label: 'Not yet' },
  { v: 2, label: 'Getting started' },
  { v: 3, label: 'Mostly there' },
  { v: 4, label: 'Yes' },
]

export default function AiReadinessPage() {
  usePageMeta(pageMeta.aiReadiness)
  const [answers, setAnswers] = useState({})

  const answered = Object.keys(answers).length
  const complete = answered === DIMENSIONS.length
  const score = complete
    ? Math.round((Object.values(answers).reduce((a, b) => a + b, 0) / (DIMENSIONS.length * 4)) * 100)
    : 0
  const tier = score <= 40 ? 'Exploring' : score <= 70 ? 'Preparing' : 'Ready'
  const tierBlurb = {
    Exploring: 'AI is still an open question here. That is fine. The goal now is to find the one or two places it could genuinely help, and to get the basics in place.',
    Preparing: 'The foundations are forming. Close the gaps below and you will be ready to adopt AI with confidence rather than hope.',
    Ready: 'You have the groundwork to adopt AI deliberately. The next step is a focused plan so the investment pays off.',
  }[tier]
  const gaps = complete ? DIMENSIONS.filter((d) => answers[d.key] <= 2) : []

  const optLabel = Object.fromEntries(OPTIONS.map((o) => [o.v, o.label]))
  const captureData = complete
    ? {
        Readiness: tier,
        Score: `${score}/100`,
        ...Object.fromEntries(DIMENSIONS.map((d) => [d.label, optLabel[answers[d.key]]])),
      }
    : null
  const findingsText = complete
    ? [
        'GBX Professional Services — AI Readiness Assessment',
        new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }),
        '',
        `Readiness: ${tier} (${score}/100)`,
        '',
        'Your answers:',
        ...DIMENSIONS.map((d) => `- ${d.label}: ${optLabel[answers[d.key]]}`),
        '',
        ...(gaps.length ? ['Close these first:', ...gaps.map((d) => `- ${d.label}: ${d.step}`), ''] : []),
        'Our Business AI Readiness work turns this into a governed roadmap. https://gbxps.com/services',
      ].join('\n')
    : ''

  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="AI Readiness Assessment"
        intro="Five quick questions across the things that actually decide whether AI adoption succeeds: use cases, data, process, governance and capability. You get a readiness tier and the gaps to close first. It runs entirely in your browser. Nothing you enter is sent anywhere."
      />

      <section className="section section--paper">
        <div className="container tool-layout">
          <form className="scorecard" onSubmit={(e) => e.preventDefault()}>
            {DIMENSIONS.map((d) => (
              <fieldset key={d.key} className="sc-dim">
                <legend className="sc-dim__label">{d.label}</legend>
                <div className="sc-q">
                  <p className="sc-q__text">{d.question}</p>
                  <div className="rating rating--wide" role="group" aria-label={d.question}>
                    {OPTIONS.map((o) => (
                      <button
                        key={o.v}
                        type="button"
                        className={`rating__opt rating__opt--wide ${answers[d.key] === o.v ? 'rating__opt--on' : ''}`}
                        aria-pressed={answers[d.key] === o.v}
                        onClick={() => setAnswers((s) => ({ ...s, [d.key]: o.v }))}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>
              </fieldset>
            ))}
          </form>

          <aside className="sc-result">
            {!complete ? (
              <div className="sc-result__pending">
                <p className="eyebrow">Your result</p>
                <p className="sc-result__progress mono">
                  {answered} / {DIMENSIONS.length} answered
                </p>
                <p className="sc-result__hint">Answer all five to see your readiness tier.</p>
                <div className="sc-progress" aria-hidden="true">
                  <span style={{ width: `${(answered / DIMENSIONS.length) * 100}%` }} />
                </div>
              </div>
            ) : (
              <div className="sc-result__done">
                <p className="eyebrow">Readiness</p>
                <p className="readiness-tier">{tier}</p>
                <div className="sc-progress sc-progress--lg" aria-hidden="true">
                  <span style={{ width: `${score}%` }} />
                </div>
                <p className="readiness-blurb">{tierBlurb}</p>

                {gaps.length > 0 && (
                  <div className="sc-focus">
                    <p className="eyebrow">Close these first</p>
                    {gaps.map((d) => (
                      <div key={d.key} className="sc-focus__item">
                        <h3 className="sc-focus__title">{d.label}</h3>
                        <p className="sc-focus__body">{d.step}</p>
                      </div>
                    ))}
                  </div>
                )}

                <ToolLeadCapture
                  toolName="AI Readiness Assessment"
                  data={captureData}
                  findingsText={findingsText}
                />

                <button type="button" className="text-link sc-reset" onClick={() => setAnswers({})}>
                  Start again
                </button>
              </div>
            )}
          </aside>
        </div>

        <div className="container">
          <ToolCTA
            heading="Readiness is the start. A plan is what pays off."
            body="This tells you roughly where you stand. Our Business AI Readiness work turns that into a specific, governed roadmap: the use cases worth pursuing, the guardrails to put around them, and the capability to make it stick."
            secondary={{ label: 'Business AI Readiness', to: '/services' }}
          />
        </div>
      </section>
    </>
  )
}
