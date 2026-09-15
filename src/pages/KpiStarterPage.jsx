import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import ToolCTA from '../components/ToolCTA.jsx'
import ToolWizard from '../components/ToolWizard.jsx'
import ToolLeadCapture from '../components/ToolLeadCapture.jsx'

const steps = [
  {
    id: 'type', kind: 'choice', eyebrow: 'Business', question: 'What kind of business is it?',
    options: [
      { value: 'advice', label: 'Financial advice practice' },
      { value: 'accounting', label: 'Accounting, legal or other licensed practice' },
      { value: 'consulting', label: 'Consulting, agency or services firm' },
      { value: 'other', label: 'Something else' },
    ],
  },
  {
    id: 'goal', kind: 'choice', eyebrow: 'Goal', question: 'What matters most in the next 12 months?',
    options: [
      { value: 'revenue', label: 'Grow revenue' },
      { value: 'margin', label: 'Improve profit and margin' },
      { value: 'capacity', label: 'Free up capacity' },
      { value: 'retention', label: 'Keep and grow existing clients' },
    ],
  },
  {
    id: 'sales', kind: 'choice', eyebrow: 'New business', question: 'Where does most new work come from?',
    options: [
      { value: 'referral', label: 'Referrals and word of mouth' },
      { value: 'inbound', label: 'Website, search and content' },
      { value: 'outbound', label: 'Outreach and networking' },
      { value: 'mixed', label: 'A bit of everything' },
    ],
  },
  {
    id: 'size', kind: 'choice', eyebrow: 'Team', question: 'How big is the team?',
    options: [
      { value: 'solo', label: 'Just me' },
      { value: 'small', label: '2 to 5' },
      { value: 'mid', label: '6 to 20' },
      { value: 'large', label: 'More than 20' },
    ],
  },
  {
    id: 'reporting', kind: 'choice', eyebrow: 'Reporting', question: 'How do you look at your numbers today?',
    options: [
      { value: 'none', label: 'Mostly gut feel' },
      { value: 'spreadsheet', label: 'A spreadsheet, now and then' },
      { value: 'monthly', label: 'A monthly report' },
      { value: 'dashboard', label: 'A live dashboard' },
    ],
  },
]
const labelOf = (id, v) => (steps.find((s) => s.id === id).options.find((o) => o.value === v) || {}).label || 'Not answered'

// KPI library. Each has a definition, a target hint and a cadence.
const KPI = {
  revenuePerClient: { name: 'Revenue per client', def: 'Total fee revenue divided by active clients.', target: 'Track the trend. A rising figure with stable client numbers means the offer is getting stronger.', cadence: 'Monthly' },
  grossMargin: { name: 'Gross margin by service', def: 'Revenue less the direct cost of delivering, for each service line.', target: 'Above 50% for advisory work is common. The point is to see which lines quietly lose money.', cadence: 'Monthly' },
  utilisation: { name: 'Utilisation', def: 'Delivered or billable hours as a share of available client hours.', target: 'Around 65% to 75% for a well-run practice. Below 55% usually means process friction.', cadence: 'Weekly' },
  pipeline: { name: 'Qualified pipeline', def: 'Number and value of opportunities with a real next step.', target: 'Cover three times next quarter’s new revenue target.', cadence: 'Weekly' },
  winRate: { name: 'Win rate', def: 'Proposals or first meetings that become clients.', target: 'Above 30% is healthy. A falling rate usually means qualification, not selling, is the problem.', cadence: 'Monthly' },
  leadSource: { name: 'Leads by source', def: 'New qualified leads each month, split by where they came from.', target: 'Know your top two sources and their cost. Everything else is a guess.', cadence: 'Monthly' },
  referralRate: { name: 'Referral rate', def: 'Share of new clients introduced by existing clients or partners.', target: 'Above 40% in advice and professional services is a sign of a healthy book.', cadence: 'Quarterly' },
  webConversion: { name: 'Enquiry conversion', def: 'Website visits that become enquiries, and enquiries that become meetings.', target: 'Above 1% visit-to-enquiry is solid for a services site. Watch the meeting rate more.', cadence: 'Monthly' },
  retention: { name: 'Client retention', def: 'Clients still with you 12 months on, as a share of those you started with.', target: 'Above 90% for ongoing service relationships. Every point is worth more than a new client.', cadence: 'Quarterly' },
  nps: { name: 'Client satisfaction', def: 'A short, regular pulse: would they recommend you, and why.', target: 'Read the comments, not just the score. Fix the theme that appears twice.', cadence: 'Quarterly' },
  reviewCompletion: { name: 'Review completion', def: 'Scheduled client reviews delivered on time.', target: 'Above 95%. A missed review is the first sign of a client at risk.', cadence: 'Monthly' },
  cashDays: { name: 'Debtor days', def: 'Average days from invoice to payment.', target: 'Under 30. Rising debtor days are an early warning on both cash and client satisfaction.', cadence: 'Monthly' },
  revenuePerHead: { name: 'Revenue per person', def: 'Total revenue divided by full-time equivalent staff.', target: 'Compare year on year. Growth without this rising is growth in headcount, not in the business.', cadence: 'Quarterly' },
  adminHours: { name: 'Admin hours per client', def: 'Non-billable time spent per client on onboarding, compliance and servicing.', target: 'Falling. This is where automation and process work show up first.', cadence: 'Monthly' },
  turnaround: { name: 'Turnaround time', def: 'Days from client request to delivered work, by work type.', target: 'Set a standard per work type and measure against it. Clients notice consistency more than speed.', cadence: 'Weekly' },
  capacityForward: { name: 'Booked capacity', def: 'Share of next month’s available hours already committed.', target: 'Around 70% to 80%. Above 90% means no room for new work or improvement.', cadence: 'Weekly' },
}

function pick(a) {
  const set = []
  const add = (k) => { if (!set.includes(k)) set.push(k) }
  // Core by goal
  if (a.goal === 'revenue') ['pipeline', 'winRate', 'leadSource', 'revenuePerClient'].forEach(add)
  if (a.goal === 'margin') ['grossMargin', 'utilisation', 'revenuePerHead', 'cashDays'].forEach(add)
  if (a.goal === 'capacity') ['utilisation', 'adminHours', 'turnaround', 'capacityForward'].forEach(add)
  if (a.goal === 'retention') ['retention', 'nps', 'reviewCompletion', 'revenuePerClient'].forEach(add)
  // By sales motion
  if (a.sales === 'referral') add('referralRate')
  if (a.sales === 'inbound') add('webConversion')
  if (a.sales === 'outbound') add('pipeline')
  if (a.sales === 'mixed') add('leadSource')
  // By type
  if (a.type === 'advice' || a.type === 'accounting') add('reviewCompletion')
  if (a.type === 'consulting') add('utilisation')
  // Always finish with a money metric
  add('grossMargin')
  add('cashDays')
  return set.slice(0, 6).map((k) => KPI[k])
}

function rhythm(a) {
  if (a.reporting === 'dashboard') return 'You already have a live view. The work now is making sure it shows these six and that the team looks at it in a short weekly rhythm.'
  if (a.reporting === 'monthly') return 'Keep the monthly report, but move the weekly measures above into a one-page view you check every Monday. Monthly is too slow for pipeline and utilisation.'
  if (a.reporting === 'spreadsheet') return 'Start with one sheet, six numbers, updated every Friday. Thirty minutes a week. Once the habit holds for a quarter, it is worth automating.'
  return 'Start smaller than this list if you need to: pick the three that map to your goal and look at them every week. Gut feel is fine for judgement, but it cannot see a trend forming.'
}

function results(answers, restart) {
  const kpis = pick(answers)
  const note = rhythm(answers)
  const captureData = {
    Business: labelOf('type', answers.type),
    Goal: labelOf('goal', answers.goal),
    'New business': labelOf('sales', answers.sales),
    Team: labelOf('size', answers.size),
    Reporting: labelOf('reporting', answers.reporting),
    'Recommended KPIs': kpis.map((k) => k.name).join('; '),
  }
  const findingsText = [
    'GBX Professional Services: KPI Starter Kit',
    new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }),
    '',
    `For a ${labelOf('type', answers.type).toLowerCase()} whose priority is to ${labelOf('goal', answers.goal).toLowerCase()}, with most new work from ${labelOf('sales', answers.sales).toLowerCase()}.`,
    '',
    'Your six KPIs:',
    ...kpis.flatMap((k, i) => [`${i + 1}. ${k.name} (${k.cadence})`, `   What: ${k.def}`, `   Target: ${k.target}`]),
    '',
    `Reporting rhythm: ${note}`,
    '',
    'Building the scorecard, the dashboard and the reporting rhythm around these is our Business Analytics and Performance work. https://gbxps.com/services',
  ].join('\n')

  return (
    <div className="tool-outcome">
      <div className="sc-result sc-result--wide">
        <p className="eyebrow">Your starter kit</p>
        <p className="readiness-tier">Six KPIs, one page.</p>
        <p className="readiness-blurb">
          Chosen for a {labelOf('type', answers.type).toLowerCase()} whose priority is to {labelOf('goal', answers.goal).toLowerCase()}. Each one has a plain definition, a target to aim at and how often to look.
        </p>
        <ol className="kpi-list">
          {kpis.map((k) => (
            <li key={k.name} className="kpi">
              <div className="kpi__head">
                <h3 className="kpi__name">{k.name}</h3>
                <span className="kpi__cadence mono">{k.cadence}</span>
              </div>
              <p className="kpi__def">{k.def}</p>
              <p className="kpi__target"><span className="mono">Target</span> {k.target}</p>
            </li>
          ))}
        </ol>
        <div className="sc-focus">
          <p className="eyebrow">Reporting rhythm</p>
          <p className="sc-focus__body">{note}</p>
        </div>
        <ToolLeadCapture toolName="KPI Starter Kit" data={captureData} findingsText={findingsText} />
        <button type="button" className="text-link sc-reset" onClick={restart}>Start again</button>
      </div>
      <ToolCTA
        heading="Six numbers on a page is the start. Trusting them is the work."
        body="A scorecard only helps if the numbers are right, come from one source and get looked at on a rhythm. We build the dashboards, the data plumbing and the reporting habit, then hand them over."
        primary={{ label: 'See the Diagnostic', to: '/diagnostic' }}
        secondary={{ label: 'Start a conversation', to: '/contact' }}
      />
    </div>
  )
}

export default function KpiStarterPage() {
  usePageMeta(pageMeta.kpiStarter)
  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="KPI Starter Kit"
        intro="Five one-tap questions about your business, your goal and how you win work return the six numbers worth watching, each with a plain definition, a target and a cadence. Runs entirely in your browser."
      />
      <section className="section section--paper">
        <div className="container">
          <ToolWizard steps={steps} results={results} />
        </div>
      </section>
    </>
  )
}
