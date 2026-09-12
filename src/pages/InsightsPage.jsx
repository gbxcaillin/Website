import { Link, useSearchParams } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta, articles, insightCategories } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'

const catLabel = Object.fromEntries(insightCategories.map((c) => [c.slug, c.label]))

function formatDate(iso) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function InsightsPage() {
  usePageMeta(pageMeta.insights)
  const [params, setParams] = useSearchParams()
  const active = params.get('category') || 'all'

  const shown = active === 'all' ? articles : articles.filter((a) => a.category === active)

  function select(slug) {
    if (slug === 'all') setParams({})
    else setParams({ category: slug })
  }

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas from our work, worth sharing."
        intro="Short, practical articles across the areas we work in, from AI and analytics to sales, marketing and financial education. Filter by what interests you."
      />

      <section className="section section--paper">
        <div className="container">
          <div className="filter-row" role="group" aria-label="Filter insights by category">
            <button
              type="button"
              className={`filter-chip ${active === 'all' ? 'filter-chip--active' : ''}`}
              onClick={() => select('all')}
            >
              All
            </button>
            {insightCategories.map((c) => (
              <button
                key={c.slug}
                type="button"
                className={`filter-chip ${active === c.slug ? 'filter-chip--active' : ''}`}
                onClick={() => select(c.slug)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <ul className="article-list">
            {shown.map((a) => (
              <li key={a.slug} className="article-card">
                <Link to={`/insights/${a.slug}`} className="article-card__link">
                  <div className="article-card__meta mono">
                    <span className="article-card__cat">{catLabel[a.category]}</span>
                    <span>{formatDate(a.date)}</span>
                    {a.readingTime && <span>{a.readingTime}</span>}
                  </div>
                  <h2 className="article-card__title">{a.title}</h2>
                  <p className="article-card__summary">{a.summary}</p>
                  <span className="text-link">Read article</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  )
}
