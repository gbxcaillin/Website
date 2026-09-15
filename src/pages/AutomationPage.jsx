import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import ToolCTA from '../components/ToolCTA.jsx'
import ToolWizard from '../components/ToolWizard.jsx'
import ToolLeadCapture from '../components/ToolLeadCapture.jsx'

const money = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 })
const WEEKS = 46

const TASKS = [
  { key: 'reentry', label: 'Re-keying data between systems', share: 0.7, how: 'Integrations or a simple middleware layer between your CRM, practice software and finance system remove most of this outright.' },
  { key: 'onboarding', label: 'Client onboarding and paperwork', share: 0.55, how: 'Digital forms, e-signatures and templated welcome sequences cut onboarding to a fraction of the time, with a better client experience.' },
  { key: 'reporting', label: 'Building reports and updating spreadsheets', share: 0.7, how: 'A live dashboard drawn from your source systems replaces the monthly scramble, and the numbers stop disagreeing with each other.' },
  { key: 'followup', label: 'Scheduling, reminders and follow-up emails', share: 0.6, how: 'Booking links, automated reminders and nurture sequences handle the routine touches so people only step in when it matters.' },
  { key: 'billing', label: 'Invoicing and chasing payments', share: 0.6, how: 'Automated invoicing from time or milestones, plus scheduled payment reminders, shortens the cash cycle without the awkward calls.' },
  { key: 'drafting', label: 'Drafting routine documents and emails', share: 0.45, how: 'Templates and well-governed AI drafting take the first pass, with a human reviewing rather than writing from scratch.' },
]

const HOURS = [
  { value: 0, label: 'Hardly any' },
  { value: 3, label: 'A few hours' },
  { value: 10, label: 'Around a day' },
  { value: 20, label: 'Two days or more' },
]
const hoursLabel = Object.fromEntries(HOURS.map((o) => [o.value, o.label]))

const steps = [
  ...TASKS.map((t) => ({
    id: t.key,
    kind: 'choice',
    eyebrow: 'Each week, across the team',
    question: `How much time goes on ${t.label.charAt(0).toLowerCase() + t.label.slice(1)}?`,
    options: HOURS,
  })),
  { id: 'cost', kind: 'input', inputType: 'number', prefix: '$', eyebrow: 'Cost', question: 'What does an hour of your team’s time cost, roughly?', help: 'Fully loaded. Around $60 to $90 is common for admin and support roles.', placeholder: '70' },
]

function results(answers, restart) {
  const cost = parseFloat(answers.cost)
  const rows = TASKS.map((t) => {
    const hours = answers[t.key] || 0
    return { ...t, hours, saveable: hours * t.share }
  })
  const totalHours = rows.reduce((a, r) => a + r.hours, 0)
  const saveHours = rows.reduce((a, r) => a + r.saveable, 0)
  const validCost = Number.isFinite(cost) && cost > 0 ? cost : 0
  const annualCost = totalHours * WEEKS * validCost
  const annualSave = saveHours * WEEKS * validCost
  const top = [...rows].filter((r) => r.saveable > 0).sort((a, b) => b.saveable - a.saveable).slice(0, 3)

  if (totalHours === 0) {
    return (
      <div className="tool-outcome">
        <div className="sc-result sc-result--wide">
          <p className="eyebrow">Result</p>
          <p className="readiness-tier">Lean already</p>
          <p className="readiness-blurb">You told us hardly any time goes on routine manual work. Either the business is already well automated, or the time is hiding somewhere else. The Health Check is a good way to find out which.</p>
          <button type="button" className="text-link sc-reset" onClick={restart}>Start again</button>
        </div>
      </div>
    )
  }

  const captureData = {
    ...Object.fromEntries(rows.map((r) => [r.label, hoursLabel[r.hours]])),
    'Hourly cost': validCost ? `$${validCost}` : 'Not given',
    'Manual hours per week': totalHours,
    'Automatable hours per week': saveHours.toFixed(0),
    'Annual cost of manual work': validCost ? money.format(annualCost) : 'n/a',
    'Potential annual value': validCost ? money.format(annualSave) : 'n/a',
    'Top opportunity': top[0] ? top[0].label : 'None',
  }
  const findingsText = [
    'GBX Professional Services: Automation Opportunity Finder',
    new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }),
    '',
    'Your answers (hours per week, across the team):',
    ...rows.map((r) => `- ${r.label}: ${hoursLabel[r.hours]}`),
    '',
    'Your results:',
    `- Manual hours per week: ${totalHours}`,
    `- Hours that could be automated: about ${saveHours.toFixed(0)} a week (${(saveHours * WEEKS).toFixed(0)} a year)`,
    ...(validCost ? [`- Annual cost of that manual work: ${money.format(annualCost)}`, `- Potential annual value of automating it: ${money.format(annualSave)}`] : []),
    '',
    'Where to start:',
    ...top.map((r, i) => `${i + 1}. ${r.label} (about ${r.saveable.toFixed(0)} hours a week). ${r.how}`),
    '',
    'Scoping and building these safely is our process automation and AI readiness work. https://gbxps.com/services',
  ].join('\n')

  return (
    <div className="tool-outcome">
      <div className="calc-result calc-result--wide">
        <div className="result-tiles">
          <div className="result-tile">
            <span className="result-tile__label mono">Manual work / week</span>
            <span className="result-tile__value">{totalHours} hrs</span>
          </div>
          <div className="result-tile">
            <span className="result-tile__label mono">Automatable / year</span>
            <span className="result-tile__value">{(saveHours * WEEKS).toFixed(0)} hrs</span>
          </div>
          <div className="result-tile result-tile--hero">
            <span className="result-tile__label mono">Potential value / year</span>
            <span className="result-tile__value">{validCost ? money.format(annualSave) : `${saveHours.toFixed(0)} hrs / wk`}</span>
          </div>
          <div className="result-tile">
            <span className="result-tile__label mono">Cost of manual work / year</span>
            <span className="result-tile__value">{validCost ? money.format(annualCost) : 'Add a cost'}</span>
          </div>
        </div>
        <div className="sc-focus">
          <p className="eyebrow">Where to start</p>
          {top.map((r) => (
            <div key={r.key} className="sc-focus__item">
              <h3 className="sc-focus__title">{r.label}</h3>
              <p className="sc-focus__body">About {r.saveable.toFixed(0)} hours a week could go. {r.how}</p>
            </div>
          ))}
        </div>
        <p className="calc-read__note">
          Estimates use typical automatable shares for each task type and 46 working weeks. Real results depend on your systems and how consistent the work is, which is exactly what a scoping conversation establishes.
        </p>
        <ToolLeadCapture toolName="Automation Opportunity Finder" data={captureData} findingsText={findingsText} />
        <button type="button" className="text-link sc-reset" onClick={restart}>Start again</button>
      </div>
      <ToolCTA
        heading="The hours are real. So is the risk of automating the wrong thing."
        body="Good automation starts with documented process and a clear view of the data. We scope the opportunities worth taking, build them safely, and leave your team running them."
        primary={{ label: 'See the Diagnostic', to: '/diagnostic' }}
        secondary={{ label: 'Start a conversation', to: '/contact' }}
      />
    </div>
  )
}

export default function AutomationPage() {
  usePageMeta(pageMeta.automation)
  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="Automation Opportunity Finder"
        intro="Six one-tap questions about where your team's week goes, and one number, show how many hours could be automated, what that is worth a year, and the three places to start. Runs entirely in your browser."
      />
      <section className="section section--paper">
        <div className="container">
          <ToolWizard steps={steps} results={results} />
        </div>
      </section>
    </>
  )
}
