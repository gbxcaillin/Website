import { Link } from 'react-router-dom'
import { education } from '../content.js'

/**
 * Directly under the hero: the two practices with equal billing.
 */
export default function TwoPaths() {
  const p = education.paths
  return (
    <section className="section section--soft two-paths" aria-labelledby="two-paths-heading">
      <div className="container">
        <h2 id="two-paths-heading" className="two-paths__heading">
          {p.heading}
        </h2>
        <div className="two-paths__grid">
          {p.items.map((item) => (
            <div key={item.title} className="two-paths__card">
              <p className="eyebrow">{item.eyebrow}</p>
              <h3 className="two-paths__title">{item.title}</h3>
              <p className="two-paths__body">{item.body}</p>
              <div className="btn-row">
                <Link to={item.link.to} className="btn btn--primary btn--sm">
                  {item.link.label}
                </Link>
                <Link to={item.alt.to} className="btn btn--outline-dark btn--sm">
                  {item.alt.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
