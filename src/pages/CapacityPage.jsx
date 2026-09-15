import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import ToolCTA from '../components/ToolCTA.jsx'
import ToolWizard from '../components/ToolWizard.jsx'
import ToolLeadCapture from '../components/ToolLeadCapture.jsx'

const money = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 })
const TARGET = 75
const WEEKS = 46

const steps = [
  { id: 'people', kind: 'input', inputType: 'number', eyebrow: 'Team', question: 'How many people in the business do client work?', help: 'Fee earners, advisers, consultants or practitioners. Not admin or leadership-only roles.', placeholder: '8' },
  { id: 'hours', kind: 'input', inputType: 'number', eyebrow: 'Hours', question: 'How many hours a week could each of them realistically bill?', help: 'Available client hours, not total hours worked. Around 30 is common.', placeholder: '30' },
  { id: 'util', kind: 'input', inputType: 'number', suffix: '%', eyebrow: 'Utilisation', question: 'What share of those hours is actually billed or delivered today?', placeholder: '55' },
  { id: 'rate', kind: 'input', inputType: 'number', prefix: '$', eyebrow: 'Rate', question: 'What is your average revenue per delivered hour?', help: 'Hourly rate, or annual fee revenue divided by delivered hours.', placeholder: '250' },
]

function compute(a) {
  const n = (x) => parseFloat(a[x])
  const people = n('people'), hours = n('hours'), util = n('util'), rate = n('rate')
  if ([people, hours, util, rate].some((x) => !Number.isFinite(x))) return null
  if (people <= 0 || hours <= 0 || util < 0 || util > 100 || rate <= 0) return null
  const capacityHours = people * hours * WEEKS
  const fullRevenue = capacityHours * rate
  const current = fullRevenue * (util / 100)
  const atTarget = fullRevenue * (TARGET / 100)
  const onTable = Math.max(0, atTarget - current)
  const perPoint = fullRevenue / 100
  const idleHoursWeek = people * hours * (1 - util / 100)
  return { capacityHours, fullRevenue, current, atTarget, onTable, perPoint, idleHoursWeek }
}

function utilRead(u) {
  if (u < 50) return ['Low', 'More than half of available client time is going unbilled. That is usually a mix of admin creep, unclear scope and work that is done but never charged.']
  if (u < 65) return ['Typical', 'This is where many professional-services firms sit. The gap to a strong practice is process, not effort: tighter scoping, cleaner handoffs and fewer interruptions.']
  if (u <= 80) return ['Strong', 'Utilisation is healthy. The next gains come from pricing, mix and leverage rather than more hours.']
  return ['Stretched', 'Very high utilisation often means no time for improvement, training or business development, and a real burnout risk. Capacity may be the constraint on growth.']
}

function results(answers, restart) {
  const r = compute(answers)
  if (!r) {
    return (
      <div className="tool-outcome">
        <div className="sc-result sc-result--wide">
          <p className="sc-result__hint">We need a team size, billable hours and rate above zero, and a utilisation between 0 and 100 to calculate.</p>
          <button type="button" className="text-link sc-reset" onClick={restart}>Start again</button>
        </div>
      </div>
    )
  }
  const util = parseFloat(answers.util)
  const [tag, read] = utilRead(util)
  const captureData = {
    'Client-facing people': answers.people,
    'Billable hours per week each': answers.hours,
    'Utilisation (%)': answers.util,
    'Revenue per hour': `$${answers.rate}`,
    'Current annual delivered revenue': money.format(r.current),
    'Revenue at 75% utilisation': money.format(r.atTarget),
    'Left on the table per year': money.format(r.onTable),
    'Value of one utilisation point': money.format(r.perPoint),
    'Unbilled hours per week': r.idleHoursWeek.toFixed(0),
    'Read': tag,
  }
  const findingsText = [
    'GBX Professional Services: Capacity and Profit Calculator',
    new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }),
    '',
    'Your inputs:',
    `- Client-facing people: ${answers.people}`,
    `- Billable hours per week each: ${answers.hours}`,
    `- Utilisation today: ${answers.util}%`,
    `- Revenue per delivered hour: $${answers.rate}`,
    '',
    'Your results (46 working weeks):',
    `- Delivered revenue today: ${money.format(r.current)}`,
    `- Revenue at a ${TARGET}% utilisation target: ${money.format(r.atTarget)}`,
    `- Left on the table each year: ${money.format(r.onTable)}`,
    `- Each utilisation point is worth: ${money.format(r.perPoint)} a year`,
    `- Unbilled client hours each week: ${r.idleHoursWeek.toFixed(0)}`,
    '',
    `Read: ${tag}. ${read}`,
    '',
    'Finding where that time goes and getting it back is what the Performance Diagnostic does. https://gbxps.com/diagnostic',
  ].join('\n')

  return (
    <div className="tool-outcome">
      <div className="calc-result calc-result--wide">
        <div className="result-tiles">
          <div className="result-tile">
            <span className="result-tile__label mono">Delivered today</span>
            <span className="result-tile__value">{money.format(r.current)}</span>
          </div>
          <div className="result-tile">
            <span className="result-tile__label mono">At {TARGET}% utilisation</span>
            <span className="result-tile__value">{money.format(r.atTarget)}</span>
          </div>
          <div className="result-tile result-tile--hero">
            <span className="result-tile__label mono">Left on the table / yr</span>
            <span className="result-tile__value">{money.format(r.onTable)}</span>
          </div>
          <div className="result-tile">
            <span className="result-tile__label mono">Each point is worth</span>
            <span className="result-tile__value">{money.format(r.perPoint)}</span>
          </div>
        </div>
        <div className="calc-read">
          <div className="calc-read__item">
            <p className="calc-read__tag mono">Utilisation &middot; {tag}</p>
            <p className="calc-read__body">{read}</p>
          </div>
          <p className="calc-read__note">
            About {r.idleHoursWeek.toFixed(0)} available client hours a week are currently unbilled across the team. The {TARGET}% benchmark is a common target for well-run practices, but the right figure depends on your model and the mix of work.
          </p>
        </div>
        <ToolLeadCapture toolName="Capacity and Profit Calculator" data={captureData} findingsText={findingsText} />
        <button type="button" className="text-link sc-reset" onClick={restart}>Start again</button>
      </div>
      <ToolCTA
        heading="The revenue is already in the building. The Diagnostic finds it."
        body="Unbilled time is rarely laziness. It is process, scope creep, admin and systems friction. The Performance Diagnostic traces where the hours go and hands you a plan to get them back."
        primary={{ label: 'See the Diagnostic', to: '/diagnostic' }}
        secondary={{ label: 'Start a conversation', to: '/contact' }}
      />
    </div>
  )
}

export default function CapacityPage() {
  usePageMeta(pageMeta.capacity)
  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="Capacity & Profit Calculator"
        intro="Four numbers show how much revenue your team could deliver, how much it delivers today, and what each point of utilisation is worth. Most firms find a surprising amount of revenue already sitting in the building. Runs entirely in your browser."
      />
      <section className="section section--paper">
        <div className="container">
          <ToolWizard steps={steps} results={results} />
        </div>
      </section>
    </>
  )
}
