import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import ToolCTA from '../components/ToolCTA.jsx'
import ToolWizard from '../components/ToolWizard.jsx'
import ToolLeadCapture from '../components/ToolLeadCapture.jsx'

const DIMENSIONS = [
  {
    key: 'usecases',
    label: 'Use cases',
    question: 'Do you know where AI could add real value in your business?',
    step: 'Start by mapping where time and money actually go. The best AI use cases hide in your most repetitive, rule-based work.',
  },
  {
    key: 'data',
    label: 'Data',
    question: 'Is your data organised, accessible and reasonably clean?',
    step: 'Get to one organised, accessible source of truth first. AI is only as useful as the data it can reach.',
  },
  {
    key: 'process',
    label: 'Process',
    question: 'Are your key processes documented enough to automate or augment?',
    step: 'Document your core processes before automating them. You cannot reliably augment what is not written down.',
  },
  {
    key: 'governance',
    label: 'Governance',
    question: 'Do you have clear rules for safe, compliant and responsible AI use?',
    step: 'Put a short, plain policy in place: what data is off limits, what a human must review, and who owns each use.',
  },
  {
    key: 'capability',
    label: 'Capability',
    question: 'Does your team have the skills and confidence to adopt AI?',
    step: 'Build confidence with small, low-risk wins and light training before betting on anything large.',
  },
]

const OPTIONS = [
  { value: 4, label: 'Yes' },
  { value: 3, label: 'Mostly there' },
  { value: 2, label: 'Getting started' },
  { value: 1, label: 'Not yet' },
]

const optLabel = Object.fromEntries(OPTIONS.map((o) => [o.value, o.label]))

const steps = DIMENSIONS.map((d) => ({
  id: d.key,
  kind: 'choice',
  eyebrow: d.label,
  question: d.question,
  options: OPTIONS,
}))

function results(answers, restart) {
  const score = Math.round(
    (DIMENSIONS.reduce((a, d) => a + (answers[d.key] || 0), 0) / (DIMENSIONS.length * 4)) * 100
  )
  const tier = score <= 40 ? 'Exploring' : score <= 70 ? 'Preparing' : 'Ready'
  const tierBlurb = {
    Exploring:
      'AI is still an open question here. That is fine. The goal now is to find the one or two places it could genuinely help, and to get the basics in place.',
    Preparing:
      'The foundations are forming. Close the gaps below and you will be ready to adopt AI with confidence rather than hope.',
    Ready:
      'You have the groundwork to adopt AI deliberately. The next step is a focused plan so the investment pays off.',
  }[tier]
  const gaps = DIMENSIONS.filter((d) => (answers[d.key] || 0) <= 2)

  const captureData = {
    Readiness: tier,
    Score: `${score}/100`,
    ...Object.fromEntries(DIMENSIONS.map((d) => [d.label, optLabel[answers[d.key]] || 'Not answered'])),
  }
  const findingsText = [
    'GBX Professional Services: AI Readiness Assessment',
    new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }),
    '',
    `Readiness: ${tier} (${score}/100)`,
    '',
    'Your answers:',
    ...DIMENSIONS.map((d) => `- ${d.label}: ${optLabel[answers[d.key]] || 'Not answered'}`),
    '',
    ...(gaps.length ? ['Close these first:', ...gaps.map((d) => `- ${d.label}: ${d.step}`), ''] : []),
    'Our Business AI Readiness work turns this into a governed roadmap. https://gbxps.com/services',
  ].join('\n')

  return (
    <div className="tool-outcome">
      <div className="sc-result sc-result--wide">
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
        <button type="button" className="text-link sc-reset" onClick={restart}>
          Start again
        </button>
      </div>

      <ToolCTA
        heading="Readiness is the start. A plan is what pays off."
        body="This tells you roughly where you stand. Our Business AI Readiness work turns that into a specific, governed roadmap: the use cases worth pursuing, the guardrails to put around them, and the capability to make it stick."
        secondary={{ label: 'Business AI Readiness', to: '/services' }}
      />
    </div>
  )
}

export default function AiReadinessPage() {
  usePageMeta(pageMeta.aiReadiness)
  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="AI Readiness Assessment"
        intro="Five quick questions across the things that actually decide whether AI adoption succeeds: use cases, data, process, governance and capability. One tap each, then your readiness tier and the gaps to close first. Runs entirely in your browser."
      />
      <section className="section section--paper">
        <div className="container">
          <ToolWizard steps={steps} results={results} />
        </div>
      </section>
    </>
  )
}
