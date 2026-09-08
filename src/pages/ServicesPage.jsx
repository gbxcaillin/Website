import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta, services } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'

export default function ServicesPage() {
  usePageMeta(pageMeta.services)
  return (
    <>
      <PageHero eyebrow={services.eyebrow} title={services.heading} intro={services.intro} />

      <section className="section section--paper">
        <div className="container">
          <ol className="service-detail-list">
            {services.items.map((s) => (
              <li key={s.number} className="service-detail" id={`service-${s.number}`}>
                <div className="service-detail__lead">
                  <span className="service-detail__number mono" aria-hidden="true">
                    {s.number}
                  </span>
                  <h2 className="service-detail__title">{s.title}</h2>
                </div>
                <div className="service-detail__body">
                  <p className="service-detail__text">{s.detail}</p>
                  <ul className="service-detail__includes">
                    {s.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTA />
    </>
  )
}
