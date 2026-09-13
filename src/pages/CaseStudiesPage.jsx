import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta, caseStudiesPage, caseStudies } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'

export default function CaseStudiesPage() {
  usePageMeta(pageMeta.caseStudies)
  const shown = caseStudies.filter((c) => c.published)

  return (
    <>
      <PageHero
        eyebrow={caseStudiesPage.eyebrow}
        title={caseStudiesPage.heading}
        intro={caseStudiesPage.intro}
      />

      <section className="section section--paper">
        <div className="container">
          {shown.length === 0 ? (
            <p className="section__intro">{caseStudiesPage.empty}</p>
          ) : (
            <ul className="case-grid">
              {shown.map((c) => (
                <li key={c.slug} className="case-card">
                  <Link to={`/case-studies/${c.slug}`} className="case-card__link">
                    <div className="case-card__meta mono">
                      <span>{c.sector}</span>
                      {c.clientType === 'in-house' && <span className="case-card__tag">In-house</span>}
                    </div>
                    <h2 className="case-card__title">{c.client}</h2>
                    <p className="case-card__summary">{c.summary}</p>
                    {c.metrics && c.metrics[0] && (
                      <p className="case-card__metric">
                        <span className="case-card__metric-value">{c.metrics[0].value}</span>{' '}
                        <span className="case-card__metric-label">{c.metrics[0].label}</span>
                      </p>
                    )}
                    <span className="text-link">Read the story</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CTA />
    </>
  )
}
