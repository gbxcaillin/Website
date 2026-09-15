import { Link } from 'react-router-dom'
import { diagnostic } from '../content.js'

/**
 * Compact home-page band pointing at the packaged entry offer, with the free
 * Health Check as the smaller first step.
 */
export default function DiagnosticStrip() {
  const s = diagnostic.home
  return (
    <section className="section section--soft diag-strip" aria-labelledby="diag-strip-heading">
      <div className="container diag-strip__inner">
        <div className="diag-strip__lead">
          <p className="eyebrow">{s.eyebrow}</p>
          <h2 id="diag-strip-heading" className="section__heading diag-strip__heading">
            {s.heading}
          </h2>
          <p className="section__intro">{s.body}</p>
        </div>
        <div className="btn-row diag-strip__actions">
          <Link to={s.primary.to} className="btn btn--primary">
            {s.primary.label}
          </Link>
          <Link to={s.secondary.to} className="btn btn--outline-dark">
            {s.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
