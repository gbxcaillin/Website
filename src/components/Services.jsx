import { services } from '../content.js'

export default function Services() {
  return (
    <section className="section section--paper" id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">{services.eyebrow}</p>
          <h2 id="services-heading" className="section__heading">
            {services.heading}
          </h2>
          <p className="section__intro">{services.intro}</p>
        </div>

        <ol className="service-grid">
          {services.items.map((s) => (
            <li key={s.number} className="service-card">
              <span className="service-card__number mono" aria-hidden="true">
                {s.number}
              </span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__body">{s.body}</p>
              <a href="#contact" className="text-link">
                Discuss this service
              </a>
            </li>
          ))}
          <li className="service-card service-card--note">
            <p className="eyebrow">Regulated sectors</p>
            <p className="service-card__body">
              We have particular depth with Australian Financial Services Licence holders and the
              practices that operate under them. Compliance is designed into the process, not added
              at the end.
            </p>
          </li>
        </ol>
      </div>
    </section>
  )
}
