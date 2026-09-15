import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import ToolCTA from '../components/ToolCTA.jsx'
import ToolWizard from '../components/ToolWizard.jsx'
import ToolLeadCapture from '../components/ToolLeadCapture.jsx'

const money = new Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
  maximumFractionDigits: 0,
})

const steps = [
  { id: 'revenue', kind: 'input', inputType: 'number', prefix: '$', eyebrow: 'Revenue', question: 'What is your average monthly revenue per customer?', placeholder: '200' },
  { id: 'lifespan', kind: 'input', inputType: 'number', eyebrow: 'Lifespan', question: 'How many months does a customer stay, on average?', placeholder: '24' },
  { id: 'margin', kind: 'input', inputType: 'number', suffix: '%', eyebrow: 'Margin', question: 'What is your gross margin?', help: 'Revenue left after the direct cost of delivering, as a percentage.', placeholder: '60' },
  { id: 'spend', kind: 'input', inputType: 'number', prefix: '$', eyebrow: 'Spend', question: 'How much did you spend on sales and marketing in a recent period?', placeholder: '5000' },
  { id: 'customers', kind: 'input', inputType: 'number', eyebrow: 'New customers', question: 'How many new customers did that spend win?', placeholder: '10' },
]

function ratioRead(r) {
  if (r < 1) return ['Losing money', 'You are spending more to win a customer than they are worth. This is the first thing to fix.']
  if (r < 3) return ['Thin', 'Workable, but there is little margin for error. Small gains in retention or acquisition cost matter a lot here.']
  if (r <= 5) return ['Healthy', 'A sustainable base to scale from. Most strong businesses sit around here.']
  return ['Very strong', 'Excellent economics. You may even be under-investing in growth and leaving demand on the table.']
}
function paybackRead(m) {
  if (m <= 12) return ['Good', 'You recover the cost of winning a customer within a year, which keeps cash healthy as you grow.']
  if (m <= 18) return ['Watch it', 'A payback this long ties up cash and makes fast growth harder to fund.']
  return ['Long', 'Cash is locked up for a long time before each customer pays off. Growth will strain the bank balance.']
}

function compute(a) {
  const n = (x) => parseFloat(a[x])
  const revenue = n('revenue'), lifespan = n('lifespan'), margin = n('margin'), spend = n('spend'), customers = n('customers')
  if ([revenue, lifespan, margin, spend, customers].some((x) => !Number.isFinite(x))) return null
  if (revenue <= 0 || lifespan <= 0 || margin <= 0 || customers <= 0) return null
  const monthlyGP = revenue * (margin / 100)
  const ltv = monthlyGP * lifespan
  const cac = spend / customers
  const ratio = cac > 0 ? ltv / cac : 0
  const payback = monthlyGP > 0 ? cac / monthlyGP : 0
  return { monthlyGP, ltv, cac, ratio, payback }
}

function results(answers, restart) {
  const r = compute(answers)

  if (!r) {
    return (
      <div className="tool-outcome">
        <div className="sc-result sc-result--wide">
          <p className="sc-result__hint">
            We need a value above zero for revenue, lifespan, margin and new customers to calculate.
          </p>
          <button type="button" className="text-link sc-reset" onClick={restart}>
            Start again
          </button>
        </div>
      </div>
    )
  }

  const captureData = {
    'Avg monthly revenue per customer': `$${answers.revenue}`,
    'Avg customer lifespan (months)': answers.lifespan,
    'Gross margin (%)': answers.margin,
    'Spend (period)': `$${answers.spend}`,
    'New customers (period)': answers.customers,
    'Lifetime value': money.format(r.ltv),
    'Acquisition cost': money.format(r.cac),
    'LTV:CAC': `${r.ratio.toFixed(1)}:1`,
    'Payback (months)': r.payback.toFixed(1),
  }
  const findingsText = [
    'GBX Professional Services: Unit Economics Calculator',
    new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }),
    '',
    'Your inputs:',
    `- Average monthly revenue per customer: $${answers.revenue}`,
    `- Average customer lifespan: ${answers.lifespan} months`,
    `- Gross margin: ${answers.margin}%`,
    `- Sales & marketing spend (period): $${answers.spend}`,
    `- New customers won: ${answers.customers}`,
    '',
    'Your results:',
    `- Lifetime value (LTV): ${money.format(r.ltv)}`,
    `- Acquisition cost (CAC): ${money.format(r.cac)}`,
    `- LTV : CAC: ${r.ratio.toFixed(1)} : 1 (${ratioRead(r.ratio)[0]})`,
    `- Payback: ${r.payback.toFixed(1)} months (${paybackRead(r.payback)[0]})`,
    '',
    `LTV:CAC read: ${ratioRead(r.ratio)[1]}`,
    `Payback read: ${paybackRead(r.payback)[1]}`,
    '',
    'Improving these is exactly the kind of work we do. https://gbxps.com/services',
  ].join('\n')

  return (
    <div className="tool-outcome">
      <div className="calc-result calc-result--wide">
        <div className="result-tiles">
          <div className="result-tile">
            <span className="result-tile__label mono">Lifetime value</span>
            <span className="result-tile__value">{money.format(r.ltv)}</span>
          </div>
          <div className="result-tile">
            <span className="result-tile__label mono">Acquisition cost</span>
            <span className="result-tile__value">{money.format(r.cac)}</span>
          </div>
          <div className="result-tile result-tile--hero">
            <span className="result-tile__label mono">LTV : CAC</span>
            <span className="result-tile__value">{r.ratio.toFixed(1)} : 1</span>
          </div>
          <div className="result-tile">
            <span className="result-tile__label mono">Payback</span>
            <span className="result-tile__value">{r.payback.toFixed(1)} mo</span>
          </div>
        </div>

        <div className="calc-read">
          <div className="calc-read__item">
            <p className="calc-read__tag mono">LTV : CAC &middot; {ratioRead(r.ratio)[0]}</p>
            <p className="calc-read__body">{ratioRead(r.ratio)[1]}</p>
          </div>
          <div className="calc-read__item">
            <p className="calc-read__tag mono">Payback &middot; {paybackRead(r.payback)[0]}</p>
            <p className="calc-read__body">{paybackRead(r.payback)[1]}</p>
          </div>
          <p className="calc-read__note">
            Gross profit per customer per month: {money.format(r.monthlyGP)}. A common rule of thumb is an LTV
            to CAC ratio around 3:1 and payback inside 12 months, but the right targets depend on your model.
          </p>
        </div>

        <ToolLeadCapture
          toolName="Unit Economics Calculator"
          data={captureData}
          findingsText={findingsText}
        />
        <button type="button" className="text-link sc-reset" onClick={restart}>
          Start again
        </button>
      </div>

      <ToolCTA
        heading="The numbers are the easy part. Moving them is the work."
        body="This shows you whether the model works. Improving it, better pricing, lower acquisition cost, stronger retention, is exactly the kind of work we do with clients. If your ratio or payback looks off, let us take a proper look."
        secondary={{ label: 'See our services', to: '/services' }}
      />
    </div>
  )
}

export default function UnitEconomicsPage() {
  usePageMeta(pageMeta.unitEconomics)
  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="Unit Economics Calculator"
        intro="Answer five quick questions and see whether your growth is actually profitable: the lifetime value of a customer, what it costs to win one, the ratio between them, and how long it takes to pay back. Runs entirely in your browser."
      />
      <section className="section section--paper">
        <div className="container">
          <ToolWizard steps={steps} results={results} />
        </div>
      </section>
    </>
  )
}
