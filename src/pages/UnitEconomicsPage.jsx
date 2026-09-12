import { useMemo, useState } from 'react'
import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import ToolCTA from '../components/ToolCTA.jsx'
import ToolLeadCapture from '../components/ToolLeadCapture.jsx'

const FIELDS = [
  { key: 'revenue', label: 'Average monthly revenue per customer', prefix: '$', placeholder: '200' },
  { key: 'lifespan', label: 'Average customer lifespan (months)', placeholder: '24' },
  { key: 'margin', label: 'Gross margin', suffix: '%', placeholder: '60' },
  { key: 'spend', label: 'Sales & marketing spend (per period)', prefix: '$', placeholder: '5000' },
  { key: 'customers', label: 'New customers won in that period', placeholder: '10' },
]

const money = new Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
  maximumFractionDigits: 0,
})

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

export default function UnitEconomicsPage() {
  usePageMeta(pageMeta.unitEconomics)
  const [v, setV] = useState({ revenue: '200', lifespan: '24', margin: '60', spend: '5000', customers: '10' })

  const r = useMemo(() => {
    const revenue = parseFloat(v.revenue)
    const lifespan = parseFloat(v.lifespan)
    const margin = parseFloat(v.margin)
    const spend = parseFloat(v.spend)
    const customers = parseFloat(v.customers)
    if ([revenue, lifespan, margin, spend, customers].some((n) => !Number.isFinite(n))) return null
    if (revenue <= 0 || lifespan <= 0 || margin <= 0 || customers <= 0) return null
    const monthlyGP = revenue * (margin / 100)
    const ltv = monthlyGP * lifespan
    const cac = spend / customers
    const ratio = cac > 0 ? ltv / cac : 0
    const payback = monthlyGP > 0 ? cac / monthlyGP : 0
    return { monthlyGP, ltv, cac, ratio, payback }
  }, [v])

  function set(key, val) {
    setV((s) => ({ ...s, [key]: val.replace(/[^0-9.]/g, '') }))
  }

  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="Unit Economics Calculator"
        intro="Enter a few numbers and see whether your growth is actually profitable: the lifetime value of a customer, what it costs to win one, the ratio between them, and how long it takes to pay back. It runs entirely in your browser. Nothing you enter is sent anywhere."
      />

      <section className="section section--paper">
        <div className="container tool-layout">
          <form className="calc" onSubmit={(e) => e.preventDefault()}>
            {FIELDS.map((f) => (
              <label key={f.key} className="field">
                <span className="field__label">{f.label}</span>
                <span
                  className={`calc__input ${f.prefix ? 'calc__input--pre' : ''} ${f.suffix ? 'calc__input--suf' : ''}`}
                >
                  {f.prefix && <span className="calc__affix">{f.prefix}</span>}
                  <input
                    type="text"
                    inputMode="decimal"
                    value={v[f.key]}
                    placeholder={f.placeholder}
                    onChange={(e) => set(f.key, e.target.value)}
                  />
                  {f.suffix && <span className="calc__affix calc__affix--suffix">{f.suffix}</span>}
                </span>
              </label>
            ))}
          </form>

          <aside className="calc-result">
            {!r ? (
              <p className="sc-result__hint">Fill in every field with a value above zero to see your numbers.</p>
            ) : (
              <>
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
                    Gross profit per customer per month: {money.format(r.monthlyGP)}. A common rule of thumb is an
                    LTV to CAC ratio around 3:1 and payback inside 12 months, but the right targets depend on your
                    model.
                  </p>
                </div>

                <ToolLeadCapture
                  toolName="Unit Economics Calculator"
                  data={{
                    'Avg monthly revenue per customer': `$${v.revenue}`,
                    'Avg customer lifespan (months)': v.lifespan,
                    'Gross margin (%)': v.margin,
                    'Spend (period)': `$${v.spend}`,
                    'New customers (period)': v.customers,
                    'Lifetime value': money.format(r.ltv),
                    'Acquisition cost': money.format(r.cac),
                    'LTV:CAC': `${r.ratio.toFixed(1)}:1`,
                    'Payback (months)': r.payback.toFixed(1),
                  }}
                  findingsText={[
                    'GBX Professional Services — Unit Economics Calculator',
                    new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }),
                    '',
                    'Your inputs:',
                    `- Average monthly revenue per customer: $${v.revenue}`,
                    `- Average customer lifespan: ${v.lifespan} months`,
                    `- Gross margin: ${v.margin}%`,
                    `- Sales & marketing spend (period): $${v.spend}`,
                    `- New customers won: ${v.customers}`,
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
                  ].join('\n')}
                />
              </>
            )}
          </aside>
        </div>

        <div className="container">
          <ToolCTA
            heading="The numbers are the easy part. Moving them is the work."
            body="This shows you whether the model works. Improving it, better pricing, lower acquisition cost, stronger retention, is exactly the kind of work we do with clients. If your ratio or payback looks off, let us take a proper look."
            secondary={{ label: 'See our services', to: '/services' }}
          />
        </div>
      </section>
    </>
  )
}
