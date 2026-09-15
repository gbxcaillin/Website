import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta, diagnostic as d } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import WhyUs from '../components/WhyUs.jsx'

function StepLink({ link }) {
  if (link.to.startsWith('#')) {
    return (
      <a href={link.to} className="text-link">
        {link.label}
      </a>
    )
  }
  return (
    <Link to={link.to} className="text-link">
      {link.label}
    </Link>
  )
}

export default function DiagnosticPage() {
  usePageMeta(pageMeta.diagnostic)

  return (
    <>
      <PageHero eyebrow={d.eyebrow} title={d.heading} intro={d.intro} />

      {/* Who it is for + the price card */}
      <section className="section section--paper diag">
        <div className="container diag__top">
          <div className="diag__for">
            <p className="eyebrow">{d.name}</p>
            <h2 className="diag__h">{d.forWhom.heading}</h2>
            <p className="diag__p">{d.forWhom.body}</p>
            <div className="diag__pace">
              <p className="eyebrow">{d.pace.eyebrow}</p>
              <h3 className="diag__pace-heading">{d.pace.heading}</h3>
              <p className="diag__pace-body">{d.pace.body}</p>
            </div>
          </div>
          <aside className="diag__price" aria-label="Fee">
            <p className="mono diag__price-label">{d.price.label}</p>
            <p className="diag__price-value">{d.price.value}</p>
            <p className="diag__price-note">{d.price.note}</p>
            <Link to={d.cta.primary.to} className="btn btn--primary btn--sm">
              {d.cta.primary.label}
            </Link>
          </aside>
        </div>
      </section>

      {/* The ladder */}
      <section className="section section--soft diag-ladder" aria-labelledby="ladder-heading">
        <div className="container">
          <h2 id="ladder-heading" className="section__heading diag__section-heading">
            {d.ladder.heading}
          </h2>
          <ol className="diag-ladder__list">
            {d.ladder.steps.map((s) => (
              <li key={s.number} className="diag-ladder__step">
                <div className="diag-ladder__meta">
                  <span className="mono diag-ladder__num" aria-hidden="true">
                    {s.number}
                  </span>
                  <span className={`diag-ladder__cost ${s.cost === 'Free' ? 'diag-ladder__cost--free' : ''}`}>
                    {s.cost}
                  </span>
                </div>
                <h3 className="diag-ladder__title">{s.title}</h3>
                <p className="diag-ladder__body">{s.body}</p>
                <StepLink link={s.link} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What is included */}
      <section className="section section--paper" id="included" aria-labelledby="included-heading">
        <div className="container">
          <h2 id="included-heading" className="section__heading diag__section-heading">
            {d.included.heading}
          </h2>
          <ul className="diag-incl">
            {d.included.items.map((item) => (
              <li key={item.title} className="diag-incl__item">
                <h3 className="diag-incl__title">{item.title}</h3>
                <p className="diag-incl__body">{item.body}</p>
              </li>
            ))}
          </ul>

          <div className="diag-outcomes">
            <h2 className="diag__h">{d.outcomes.heading}</h2>
            <ul className="legal-list diag-outcomes__list">
              {d.outcomes.items.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How we compare */}
      <section className="section section--soft" aria-labelledby="compare-heading">
        <div className="container">
          <div className="section__head">
            <h2 id="compare-heading" className="section__heading diag__section-heading">
              {d.compare.heading}
            </h2>
            <p className="section__intro">{d.compare.intro}</p>
          </div>
          <div className="diag-compare">
            {d.compare.columns.map((col, i) => (
              <div key={col.title} className={`diag-compare__col ${i === 1 ? 'diag-compare__col--not' : ''}`}>
                <h3 className="diag-compare__title">{col.title}</h3>
                <ul className="diag-compare__list">
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />

      {/* FAQ */}
      <section className="section section--paper" aria-labelledby="faq-heading">
        <div className="container diag-faq">
          <h2 id="faq-heading" className="section__heading diag__section-heading">
            {d.faq.heading}
          </h2>
          <dl className="diag-faq__list">
            {d.faq.items.map((f) => (
              <div key={f.q} className="diag-faq__item">
                <dt className="diag-faq__q">{f.q}</dt>
                <dd className="diag-faq__a">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="cta" aria-labelledby="diag-cta-heading">
        <div className="container cta__inner">
          <div>
            <h2 id="diag-cta-heading" className="cta__heading">
              {d.cta.heading}
            </h2>
            <p className="cta__body">{d.cta.body}</p>
          </div>
          <div className="btn-row btn-row--end">
            <Link to={d.cta.primary.to} className="btn btn--primary">
              {d.cta.primary.label}
            </Link>
            <Link to={d.cta.secondary.to} className="btn btn--outline-light">
              {d.cta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
