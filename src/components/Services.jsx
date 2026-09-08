import { Link } from 'react-router-dom'
import { services } from '../content.js'

/**
 * Compact services grid used on the home page. `showHeading` lets a page hide the
 * built-in section heading when it supplies its own.
 */
export default function Services({ showHeading = true }) {
  return (
    <section className="section section--paper" aria-labelledby="services-heading">
      <div className="container">
        {showHeading && (
          <div className="section__head">
            <p className="eyebrow">{services.eyebrow}</p>
            <h2 id="services-heading" className="section__heading">
              {services.heading}
            </h2>
            <p className="section__intro">{services.intro}</p>
          </div>
        )}

        <ol className="service-grid">
          {services.items.map((s) => (
            <li key={s.number} className="service-card">
              <span className="service-card__number mono" aria-hidden="true">
                {s.number}
              </span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__body">{s.body}</p>
              <Link to="/services" className="text-link">
                Learn more
              </Link>
            </li>
          ))}
          <li className="service-card service-card--note">
            <p className="eyebrow">Regulated sectors</p>
            <p className="service-card__body">
              We have particular depth with Australian Financial Services Licence holders and the
              practices that operate under them. Compliance is designed into the process, not added
              at the end.
            </p>
            <Link to="/services" className="text-link">
              View all services
            </Link>
          </li>
        </ol>
      </div>
    </section>
  )
}
