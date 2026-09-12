import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta, toolsPage, articles } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'

function formatDate(iso) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function ToolsPage() {
  usePageMeta(pageMeta.tools)
  return (
    <>
      <PageHero eyebrow={toolsPage.eyebrow} title={toolsPage.heading} intro={toolsPage.intro} />

      <section className="section section--paper">
        <div className="container">
          <p className="eyebrow">{toolsPage.toolsHeading}</p>
          <ul className="tool-grid">
            {toolsPage.tools.map((t) => (
              <li key={t.slug} className="tool-card">
                <h2 className="tool-card__name">{t.name}</h2>
                <p className="tool-card__tagline">{t.tagline}</p>
                <p className="tool-card__body">{t.body}</p>
                <Link to={t.to} className="btn btn--primary btn--sm tool-card__cta">
                  {t.cta}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <p className="eyebrow">{toolsPage.insightsHeading}</p>
          {articles.length === 0 ? (
            <p className="section__intro">{toolsPage.insightsEmpty}</p>
          ) : (
            <ul className="article-list">
              {articles.map((a) => (
                <li key={a.slug} className="article-card">
                  <Link to={`/insights/${a.slug}`} className="article-card__link">
                    <div className="article-card__meta mono">
                      <span>{formatDate(a.date)}</span>
                      {a.readingTime && <span>{a.readingTime}</span>}
                    </div>
                    <h3 className="article-card__title">{a.title}</h3>
                    <p className="article-card__summary">{a.summary}</p>
                    <span className="text-link">Read article</span>
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
