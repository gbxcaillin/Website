import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import ToolCTA from '../components/ToolCTA.jsx'
import ToolWizard from '../components/ToolWizard.jsx'
import ToolLeadCapture from '../components/ToolLeadCapture.jsx'

// Questions are about the organisation's program, never about anyone's own
// money. See docs/content-protocol.md section 5.
const AREAS = [
  { key: 'offer', label: 'Current offer', question: 'Does your organisation offer any financial education to staff today?', step: 'Start with one plain-language session on a topic staff already ask about. Super is the usual first choice.' },
  { key: 'questions', label: 'Questions', question: 'Do super, salary sacrifice or pay questions regularly land on HR or payroll?', step: 'Give those questions somewhere to go: a session, a plain-language explainer and a clear referral path to licensed advice.' },
  { key: 'stress', label: 'Visibility', question: 'Do you have a sense of where money stress is showing up in your workforce?', step: 'Ask, anonymously, in your next engagement survey. Two questions are enough to see the shape of it.' },
  { key: 'onboarding', label: 'Onboarding', question: 'Is super explained to new starters beyond handing them a form?', step: 'A twenty-minute explainer at induction prevents years of confusion and a stream of payroll questions.' },
  { key: 'eap', label: 'Support', question: 'Does your employee assistance program cover financial counselling, and do staff know?', step: 'Check the EAP contract and tell people what is in it. Coverage nobody knows about is coverage nobody uses.' },
  { key: 'managers', label: 'Managers', question: 'Are managers equipped to point a struggling team member to help without giving advice?', step: 'A one-page guide for managers: what to say, what not to say, and where to send people.' },
  { key: 'moments', label: 'Life moments', question: 'Do you support staff through big financial moments, such as parental leave, a first home or approaching retirement?', step: 'Map the moments your workforce is hitting this year and put one session against each.' },
  { key: 'budget', label: 'Budget', question: 'Is there a wellbeing budget that could fund financial education?', step: 'Financial education is usually the cheapest wellbeing spend per head. Put it against the budget you already have.' },
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
  const tier = score <= 45 ? 'Starting' : score <= 75 ? 'Building' : 'Leading'
  const blurb = {
    Starting: 'Money is not yet part of how your organisation supports people, which is common and easy to change. One session on a topic staff already ask about is the fastest, cheapest first step.',
    Building: 'There is a foundation. Closing the gaps below turns occasional support into a program people know about, use and mention when they talk about working here.',
    Leading: 'Your organisation already treats financial wellbeing seriously. The next step is a structured program with a rhythm, so it holds when the people who champion it move on.',
  }[tier]
  const gaps = AREAS.filter((d) => (answers[d.key] || 0) <= 2)

  const captureData = {
    Tier: tier,
    Score: `${score}/100`,
    ...Object.fromEntries(AREAS.map((d) => [d.label, optLabel[answers[d.key]] || 'Not answered'])),
  }
  const findingsText = [
    'GBX Professional Services: Workplace Financial Wellbeing Check',
    new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }),
    '',
    `Result: ${tier} (${score}/100)`,
    blurb,
    '',
    'Your answers:',
    ...AREAS.map((d) => `- ${d.label}: ${optLabel[answers[d.key]] || 'Not answered'}`),
    '',
    ...(gaps.length ? ['Close these first:', ...gaps.map((d) => `- ${d.label}: ${d.step}`), ''] : []),
    'The Financial Fluency Program brings plain-language financial education to your workplace. Book a free 30-minute taster. https://gbxps.com/education',
    '',
    'General information only. GBX Professional Services does not hold an AFSL and does not provide financial product advice.',
  ].join('\n')

  return (
    <div className="tool-outcome">
      <div className="sc-result sc-result--wide">
        <p className="eyebrow">Financial wellbeing support</p>
        <p className="readiness-tier">{tier}</p>
        <div className="sc-progress sc-progress--lg" aria-hidden="true">
          <span style={{ width: `${score}%` }} />
        </div>
        <p className="readiness-blurb">{blurb}</p>
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
        <ToolLeadCapture toolName="Workplace Financial Wellbeing Check" data={captureData} findingsText={findingsText} />
        <button type="button" className="text-link sc-reset" onClick={restart}>Start again</button>
      </div>
      <ToolCTA
        heading="See how we teach before you decide anything."
        body="The Financial Fluency Program brings plain-language money education to your workplace as a staff benefit. Start with a free 30-minute taster on Microsoft Teams for your team."
        primary={{ label: 'Book a free taster', to: '/contact' }}
        secondary={{ label: 'Explore the programs', to: '/education' }}
      />
    </div>
  )
}

export default function WellbeingCheckPage() {
  usePageMeta(pageMeta.wellbeingCheck)
  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="Workplace Financial Wellbeing Check"
        intro="Eight one-tap questions for HR and people leaders about the financial education and support your organisation offers today. Nothing about anyone's own money. Then a tier and the gaps to close first. Runs entirely in your browser."
      />
      <section className="section section--paper">
        <div className="container">
          <ToolWizard steps={steps} results={results} />
        </div>
      </section>
    </>
  )
}
