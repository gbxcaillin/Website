import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta, education as e } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import EducationFlow from '../components/EducationFlow.jsx'
import Faq from '../components/Faq.jsx'
import BookLink from '../components/BookLink.jsx'

export default function EducationPage() {
  usePageMeta(pageMeta.education)
  return (
    <>
      <PageHero eyebrow={e.eyebrow} title={e.heading} intro={e.intro} />

      {/* Two programs */}
      <section className="section section--paper" aria-label="Programs">
        <div className="container">
          <div className="edu-programs">
            {e.programs.map((p) => (
              <article key={p.name} className="edu-program">
                <p className="eyebrow">{p.audience}</p>
                <h2 className="edu-program__name">{p.name}</h2>
                <p className="edu-program__body">{p.body}</p>
                <ul className="edu-program__points">
                  {p.points.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <Link to={p.cta.to} className="btn btn--primary btn--sm">
                  {p.cta.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The five stages, as hover-lift panels */}
      <EducationFlow />

      {/* Modules */}
      <section className="section section--dark" aria-labelledby="modules-heading">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow eyebrow--on-dark">The curriculum</p>
            <h2 id="modules-heading" className="section__heading">
              {e.modulesHeading}
            </h2>
            <p className="section__intro">{e.modulesIntro}</p>
          </div>
          <ol className="why-us__grid edu-modules">
            {e.modules.map((m, i) => (
              <li key={m.title} className="why-us__item">
                <span className="mono why-us__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="why-us__title">{m.title}</h3>
                <p className="why-us__body">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Formats + fees */}
      <section className="section section--soft" aria-labelledby="formats-heading">
        <div className="container diag__top">
          <div>
            <h2 id="formats-heading" className="section__heading diag__section-heading">
              {e.formats.heading}
            </h2>
            <dl className="edu-formats">
              {e.formats.items.map((f) => (
                <div key={f.name} className="edu-format">
                  <dt className="edu-format__name">{f.name}</dt>
                  <dd className="edu-format__detail">{f.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
          <aside className="diag__price" aria-label="Fees">
            <p className="mono diag__price-label">{e.pricing.label}</p>
            <p className="diag__price-value">{e.pricing.value}</p>
            <p className="diag__price-note">{e.pricing.note}</p>
            <BookLink to={e.cta.primary.to} book={!!e.cta.primary.book} className="btn btn--primary btn--sm">
              {e.cta.primary.label}
            </BookLink>
          </aside>
        </div>
      </section>

      {/* Why employers */}
      <section className="section section--paper" aria-labelledby="why-edu-heading">
        <div className="container">
          <h2 id="why-edu-heading" className="section__heading diag__section-heading">
            {e.why.heading}
          </h2>
          <ul className="legal-list edu-why">
            {e.why.items.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <p className="edu-compliance">{e.compliance}</p>
        </div>
      </section>

      <Faq heading={e.faq.heading} items={e.faq.items} id="education-faq" />

      <section className="cta" aria-labelledby="edu-cta-heading">
        <div className="container cta__inner">
          <div>
            <h2 id="edu-cta-heading" className="cta__heading">
              {e.cta.heading}
            </h2>
            <p className="cta__body">{e.cta.body}</p>
          </div>
          <div className="btn-row btn-row--end">
            <BookLink to={e.cta.primary.to} book={!!e.cta.primary.book} className="btn btn--primary">
              {e.cta.primary.label}
            </BookLink>
            <Link to={e.cta.secondary.to} className="btn btn--outline-light">
              {e.cta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
