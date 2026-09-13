import { Link } from 'react-router-dom'
import { caseStudiesPage, caseStudies } from '../content.js'

/**
 * Home-page "Selected work" teaser. Renders only once there are at least two
 * published case studies, so it stays hidden until there is real work to show.
 */
export default function CaseStudiesTeaser() {
  const published = caseStudies.filter((c) => c.published)
  const featured = published.filter((c) => c.featured)
  const shown = (featured.length >= 2 ? featured : published).slice(0, 3)
  if (published.length < 2) return null

  return (
    <section className="section section--paper" aria-labelledby="home-work-heading">
      <div className="container">
        <div className="insights-head">
          <div>
            <p className="eyebrow">{caseStudiesPage.homeHeading}</p>
            <h2 id="home-work-heading" className="section__heading">
              {caseStudiesPage.heading}
            </h2>
          </div>
          <Link to="/case-studies" className="text-link">
            View all work
          </Link>
        </div>
        <ul className="case-grid">
          {shown.map((c) => (
            <li key={c.slug} className="case-card">
              <Link to={`/case-studies/${c.slug}`} className="case-card__link">
                <div className="case-card__meta mono">
                  <span>{c.sector}</span>
                </div>
                <h3 className="case-card__title">{c.client}</h3>
                <p className="case-card__summary">{c.summary}</p>
                <span className="text-link">Read the story</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
