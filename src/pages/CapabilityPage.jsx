import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import ToolCTA from '../components/ToolCTA.jsx'
import ToolWizard from '../components/ToolWizard.jsx'
import ToolLeadCapture from '../components/ToolLeadCapture.jsx'

const AREAS = [
  { key: 'onboarding', label: 'Onboarding', question: 'Do new starters follow a documented onboarding program with clear milestones?', step: 'Write the first 90 days down: what a new starter learns, in what order, and how you know they have learned it.' },
  { key: 'cpd', label: 'CPD and records', question: 'Are continuing professional development hours tracked centrally and kept current?', step: 'Move CPD tracking to one register with owner, due dates and evidence, so nothing is discovered late.' },
  { key: 'technical', label: 'Technical training', question: 'Does the team get regular, structured technical training rather than learning on the job?', step: 'Set a monthly rhythm: one short technical session, one case-based discussion, both recorded for reuse.' },
  { key: 'compliance', label: 'Compliance training', question: 'Is compliance training current for every role, with records you could produce on request?', step: 'Map required training to each role and keep completion evidence in one place. It should take minutes to produce, not days.' },
  { key: 'regchange', label: 'Regulatory change', question: 'When rules change, is the update explained to the team and built into procedures?', step: 'Give regulatory change an owner and a simple loop: what changed, what it means here, what procedure now reads differently.' },
  { key: 'conduct', label: 'Ethics and conduct', question: 'Do you run scenario-based ethics and conduct sessions, not just policy sign-offs?', step: 'Replace the annual sign-off with short, real scenarios discussed as a team. Judgement improves through practice.' },
  { key: 'assessment', label: 'Capability assessment', question: 'Do you know, per person, where capability is strong and where it is thin?', step: 'Build a simple capability matrix by role. It turns training from a calendar into a plan.' },
  { key: 'knowledge', label: 'Knowledge capture', question: 'Is the know-how of experienced people written down, not just held in their heads?', step: 'Capture the ten things only your most experienced people know. Losing one of them should not mean losing the knowledge.' },
]

const OPTIONS = [
  { value: 4, label: 'Yes' },
  { value: 3, label: 'Mostly' },
  { value: 2, label: 'Partly' },
  { value: 1, label: 'No' },
]
const optLabel = Object.fromEntries(OPTIONS.map((o) => [o.value, o.label]))

const steps = AREAS.map((a) => ({ id: a.key, kind: 'choice', eyebrow: a.label, question: a.question, options: OPTIONS }))

function results(answers, restart) {
  const score = Math.round((AREAS.reduce((a, d) => a + (answers[d.key] || 0), 0) / (AREAS.length * 4)) * 100)
  const tier = score <= 45 ? 'Ad hoc' : score <= 75 ? 'Building' : 'Embedded'
  const blurb = {
    'Ad hoc': 'Learning happens, but it depends on individuals and goodwill. That is fragile under audit, under growth and when someone leaves. The good news is that the fixes are mostly structure, not spend.',
    Building: 'The foundations are there. Closing the gaps below turns training from something the business does into something the business can rely on and evidence.',
    Embedded: 'Capability is managed as a system. The next step is using it: linking training to the plan for the business and to the individual, and measuring what it changes.',
  }[tier]
  const gaps = AREAS.filter((d) => (answers[d.key] || 0) <= 2)

  const captureData = {
    Tier: tier,
    Score: `${score}/100`,
    ...Object.fromEntries(AREAS.map((d) => [d.label, optLabel[answers[d.key]] || 'Not answered'])),
  }
  const findingsText = [
    'GBX Professional Services: Team Capability Check',
    new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }),
    '',
    `Result: ${tier} (${score}/100)`,
    blurb,
    '',
    'Your answers:',
    ...AREAS.map((d) => `- ${d.label}: ${optLabel[answers[d.key]] || 'Not answered'}`),
    '',
    ...(gaps.length ? ['Fix these first:', ...gaps.map((d) => `- ${d.label}: ${d.step}`), ''] : []),
    'Designing and delivering the training that closes these gaps is our Financial and Compliance Education work. https://gbxps.com/services',
    '',
    'General information only. GBX Professional Services does not hold an AFSL and does not provide financial product advice.',
  ].join('\n')

  return (
    <div className="tool-outcome">
      <div className="sc-result sc-result--wide">
        <p className="eyebrow">Capability</p>
        <p className="readiness-tier">{tier}</p>
        <div className="sc-progress sc-progress--lg" aria-hidden="true">
          <span style={{ width: `${score}%` }} />
        </div>
        <p className="readiness-blurb">{blurb}</p>
        {gaps.length > 0 && (
          <div className="sc-focus">
            <p className="eyebrow">Fix these first</p>
            {gaps.map((d) => (
              <div key={d.key} className="sc-focus__item">
                <h3 className="sc-focus__title">{d.label}</h3>
                <p className="sc-focus__body">{d.step}</p>
              </div>
            ))}
          </div>
        )}
        <ToolLeadCapture toolName="Team Capability Check" data={captureData} findingsText={findingsText} />
        <button type="button" className="text-link sc-reset" onClick={restart}>Start again</button>
      </div>
      <ToolCTA
        heading="Training that is evidenced, not just scheduled."
        body="We design and deliver technical, compliance and ethics education for advice and professional-services teams, built around your obligations and your people, with the records to prove it happened."
        primary={{ label: 'Talk about training', to: '/contact' }}
        secondary={{ label: 'Education services', to: '/services' }}
      />
    </div>
  )
}

export default function CapabilityPage() {
  usePageMeta(pageMeta.capability)
  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="Team Capability Check"
        intro="Eight one-tap questions on how your practice builds and evidences capability: onboarding, CPD, technical and compliance training, regulatory change, conduct, assessment and knowledge capture. Then a tier and the gaps to fix first. Runs entirely in your browser."
      />
      <section className="section section--paper">
        <div className="container">
          <ToolWizard steps={steps} results={results} />
        </div>
      </section>
    </>
  )
}
