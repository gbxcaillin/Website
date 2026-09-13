import { Link, useParams } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import { caseStudies } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import ToolCTA from '../components/ToolCTA.jsx'
import NotFound from './NotFound.jsx'

function Section({ heading, blocks }) {
  if (!blocks || !blocks.length) return null
  return (
    <section className="case__section">
      <h2 className="case__h">{heading}</h2>
      {blocks.map((b, i) => (
        <p key={i} className="case__p">
          {b}
        </p>
      ))}
    </section>
  )
}

export default function CaseStudyPage() {
  const { slug } = useParams()
  const c = caseStudies.find((x) => x.slug === slug && x.published)

  usePageMeta(
    c
      ? { title: `${c.client} | Case study | GBX Professional Services`, description: c.summary }
      : { title: 'Case study not found | GBX Professional Services', description: '' }
  )

  if (!c) return <NotFound />

  return (
    <>
      <PageHero
        eyebrow={c.clientType === 'in-house' ? 'In-house project' : 'Case study'}
        title={c.client}
        intro={c.summary}
      />

      <section className="section section--paper">
        <div className="container case">
          <div className="case__facts">
            {c.sector && (
              <div className="case__fact">
                <dt className="mono">Sector</dt>
                <dd>{c.sector}</dd>
              </div>
            )}
            {c.services && c.services.length > 0 && (
              <div className="case__fact">
                <dt className="mono">Services</dt>
                <dd>{c.services.join(', ')}</dd>
              </div>
            )}
            {c.timeframe && (
              <div className="case__fact">
                <dt className="mono">Timeframe</dt>
                <dd>{c.timeframe}</dd>
              </div>
            )}
          </div>

          {c.metrics && c.metrics.length > 0 && (
            <ul className="case__metrics">
              {c.metrics.map((m, i) => (
                <li key={i} className="case__metric">
                  <span className="case__metric-value">{m.value}</span>
                  <span className="case__metric-label">{m.label}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="case__body">
            <Section heading="The situation" blocks={c.situation} />
            <Section heading="What we did" blocks={c.approach} />
            <Section heading="The outcome" blocks={c.outcome} />

            {c.quote && (
              <blockquote className="case__quote">
                <p className="case__quote-text">&ldquo;{c.quote.text}&rdquo;</p>
                {c.quote.attribution && (
                  <cite className="case__quote-cite">{c.quote.attribution}</cite>
                )}
              </blockquote>
            )}

            {c.link &&
              (c.link.external ? (
                <p className="case__link">
                  <a href={c.link.href} className="text-link">
                    {c.link.label}
                  </a>
                </p>
              ) : (
                <p className="case__link">
                  <Link to={c.link.href} className="text-link">
                    {c.link.label}
                  </Link>
                </p>
              ))}
          </div>

          <ToolCTA
            heading="Could we do the same for you?"
            body="If this looks like the kind of problem you are facing, let us take a proper look together and tell you plainly whether we can help."
            secondary={{ label: 'More work', to: '/case-studies' }}
          />
        </div>
      </section>
    </>
  )
}
