import { Link } from 'react-router-dom'
import { homeSummaries } from '../content.js'

/**
 * Condensed home-page teaser for the Approach section. The full four-stage
 * write-up, with the pillars accent, lives on /approach.
 */
export default function ApproachSummary() {
  const s = homeSummaries.approach
  return (
    <section
      className="section section--dark approach-summary"
      aria-labelledby="approach-summary-heading"
    >
      <div className="container approach-summary__inner">
        <div className="approach-summary__lead">
          <p className="eyebrow eyebrow--on-dark">{s.eyebrow}</p>
          <h2 id="approach-summary-heading" className="section__heading">
            {s.heading}
          </h2>
          <p className="section__intro">{s.line}</p>
          <Link to={s.link.to} className="text-link">
            {s.link.label}
          </Link>
        </div>

        <ol className="approach-summary__stages">
          {s.stages.map((name, i) => (
            <li key={name} className="approach-summary__stage">
              <span className="mono approach-summary__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="approach-summary__name">{name}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
