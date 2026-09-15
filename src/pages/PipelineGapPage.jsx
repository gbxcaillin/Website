import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import ToolCTA from '../components/ToolCTA.jsx'
import ToolWizard from '../components/ToolWizard.jsx'
import ToolLeadCapture from '../components/ToolLeadCapture.jsx'

const money = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 })
const num = (x) => Math.round(x).toLocaleString('en-AU')

const steps = [
  { id: 'target', kind: 'input', inputType: 'number', prefix: '$', eyebrow: 'Target', question: 'How much new revenue do you want to win in the next 12 months?', help: 'New business only, not renewals or existing retainers.', placeholder: '500000' },
  { id: 'deal', kind: 'input', inputType: 'number', prefix: '$', eyebrow: 'Deal size', question: 'What is the average first-year value of a new client?', placeholder: '12000' },
  { id: 'win', kind: 'input', inputType: 'number', suffix: '%', eyebrow: 'Win rate', question: 'What share of qualified opportunities do you win?', help: 'Proposals or first meetings that turn into a client.', placeholder: '30' },
  { id: 'leads', kind: 'input', inputType: 'number', eyebrow: 'Leads today', question: 'How many qualified new leads do you get in a typical month?', placeholder: '6' },
  { id: 'cycle', kind: 'input', inputType: 'number', eyebrow: 'Sales cycle', question: 'How many days from first contact to signed, on average?', placeholder: '45' },
]

function compute(a) {
  const n = (x) => parseFloat(a[x])
  const target = n('target'), deal = n('deal'), win = n('win'), leads = n('leads'), cycle = n('cycle')
  if ([target, deal, win, leads, cycle].some((x) => !Number.isFinite(x))) return null
  if (target <= 0 || deal <= 0 || win <= 0 || win > 100 || leads < 0 || cycle <= 0) return null
  const dealsYear = target / deal
  const dealsMonth = dealsYear / 12
  const leadsMonth = dealsMonth / (win / 100)
  const gap = leadsMonth - leads
  const requiredWin = leads > 0 ? Math.min(100, (dealsMonth / leads) * 100) : 100
  const monthsToFirst = cycle / 30
  const onTrackRevenue = leads * (win / 100) * deal * 12
  return { dealsYear, dealsMonth, leadsMonth, gap, requiredWin, monthsToFirst, onTrackRevenue }
}

function gapRead(r, win) {
  if (r.gap <= 0) return ['On track', 'Your current lead flow supports the target, provided the win rate holds. The work now is protecting conversion and shortening the cycle.']
  const pct = (r.gap / Math.max(r.leadsMonth, 1)) * 100
  if (pct < 25) return ['Close', 'A modest lift in lead flow or a few points of win rate closes the gap. Small, systematic changes will do it.']
  if (pct < 60) return ['Significant gap', 'Lead flow needs to grow materially, or conversion has to improve a lot. Usually it takes both, and a documented sales process.']
  return ['Large gap', `On current numbers you would reach ${money.format(r.onTrackRevenue)} of new revenue, well short of target. Either the target, the offer or the lead engine needs rethinking.`]
}

function results(answers, restart) {
  const r = compute(answers)
  if (!r) {
    return (
      <div className="tool-outcome">
        <div className="sc-result sc-result--wide">
          <p className="sc-result__hint">We need a target, deal size, a win rate between 1 and 100, and a sales cycle above zero to calculate.</p>
          <button type="button" className="text-link sc-reset" onClick={restart}>Start again</button>
        </div>
      </div>
    )
  }
  const [tag, read] = gapRead(r, parseFloat(answers.win))
  const captureData = {
    'New revenue target': `$${answers.target}`,
    'Average first-year value': `$${answers.deal}`,
    'Win rate (%)': answers.win,
    'Qualified leads per month': answers.leads,
    'Sales cycle (days)': answers.cycle,
    'Deals needed per year': num(r.dealsYear),
    'Leads needed per month': r.leadsMonth.toFixed(1),
    'Lead gap per month': r.gap > 0 ? r.gap.toFixed(1) : '0',
    'Win rate needed at current leads (%)': r.requiredWin.toFixed(0),
    'Read': tag,
  }
  const findingsText = [
    'GBX Professional Services: Pipeline Gap Calculator',
    new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }),
    '',
    'Your inputs:',
    `- New revenue target (12 months): $${answers.target}`,
    `- Average first-year client value: $${answers.deal}`,
    `- Win rate: ${answers.win}%`,
    `- Qualified leads per month today: ${answers.leads}`,
    `- Sales cycle: ${answers.cycle} days`,
    '',
    'Your results:',
    `- New clients needed: ${num(r.dealsYear)} a year (${r.dealsMonth.toFixed(1)} a month)`,
    `- Qualified leads needed: ${r.leadsMonth.toFixed(1)} a month`,
    `- Gap versus today: ${r.gap > 0 ? r.gap.toFixed(1) + ' more leads a month' : 'none, you are covered'}`,
    `- Win rate needed if leads stay the same: ${r.requiredWin.toFixed(0)}%`,
    `- Revenue on current numbers: ${money.format(r.onTrackRevenue)}`,
    '',
    `Read: ${tag}. ${read}`,
    '',
    'Building the lead engine and the sales process to close the gap is our Sales Enablement work. https://gbxps.com/services',
  ].join('\n')

  return (
    <div className="tool-outcome">
      <div className="calc-result calc-result--wide">
        <div className="result-tiles">
          <div className="result-tile">
            <span className="result-tile__label mono">New clients needed</span>
            <span className="result-tile__value">{num(r.dealsYear)} / yr</span>
          </div>
          <div className="result-tile">
            <span className="result-tile__label mono">Leads needed</span>
            <span className="result-tile__value">{r.leadsMonth.toFixed(1)} / mo</span>
          </div>
          <div className="result-tile result-tile--hero">
            <span className="result-tile__label mono">Lead gap</span>
            <span className="result-tile__value">{r.gap > 0 ? `+${r.gap.toFixed(1)} / mo` : 'Covered'}</span>
          </div>
          <div className="result-tile">
            <span className="result-tile__label mono">Win rate needed today</span>
            <span className="result-tile__value">{r.requiredWin.toFixed(0)}%</span>
          </div>
        </div>
        <div className="calc-read">
          <div className="calc-read__item">
            <p className="calc-read__tag mono">Pipeline &middot; {tag}</p>
            <p className="calc-read__body">{read}</p>
          </div>
          <p className="calc-read__note">
            With a {answers.cycle}-day cycle, leads generated this month become revenue in about {r.monthsToFirst.toFixed(1)} months, so the lead engine has to be running well before the revenue is due.
          </p>
        </div>
        <ToolLeadCapture toolName="Pipeline Gap Calculator" data={captureData} findingsText={findingsText} />
        <button type="button" className="text-link sc-reset" onClick={restart}>Start again</button>
      </div>
      <ToolCTA
        heading="Knowing the gap is step one. Closing it is a system."
        body="A repeatable, compliance-aware lead engine and a documented sales process are what turn a target into a forecast. That is our Sales Enablement work, and the Diagnostic is where it starts."
        primary={{ label: 'See the Diagnostic', to: '/diagnostic' }}
        secondary={{ label: 'Start a conversation', to: '/contact' }}
      />
    </div>
  )
}

export default function PipelineGapPage() {
  usePageMeta(pageMeta.pipelineGap)
  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="Pipeline Gap Calculator"
        intro="Five quick numbers show how many clients and qualified leads your revenue target really needs, how far your current lead flow falls short, and what win rate would close the gap without more leads. Runs entirely in your browser."
      />
      <section className="section section--paper">
        <div className="container">
          <ToolWizard steps={steps} results={results} />
        </div>
      </section>
    </>
  )
}
