import { Link, useParams } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import { articles, insightCategories } from '../content.js'
import NotFound from './NotFound.jsx'

const catLabel = Object.fromEntries(insightCategories.map((c) => [c.slug, c.label]))

function formatDate(iso) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function ArticlePage() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)

  usePageMeta(
    article
      ? {
          title: `${article.title} | GBX Professional Services`,
          description: article.summary,
        }
      : { title: 'Article not found | GBX Professional Services', description: '' }
  )

  if (!article) return <NotFound />

  return (
    <article className="section section--paper article">
      <div className="container article__inner">
        {article.category && catLabel[article.category] ? (
          <Link to={`/insights?category=${article.category}`} className="eyebrow eyebrow--link">
            {catLabel[article.category]}
          </Link>
        ) : (
          <p className="eyebrow">Insights</p>
        )}
        <h1 className="article__title">{article.title}</h1>
        <p className="article__meta mono">
          {formatDate(article.date)}
          {article.readingTime && ` · ${article.readingTime}`}
        </p>

        <div className="article__body">
          {article.body.map((block, i) =>
            block.type === 'h' ? (
              <h2 key={i} className="article__h">
                {block.text}
              </h2>
            ) : (
              <p key={i} className="article__p">
                {block.text}
              </p>
            )
          )}
        </div>

        {article.tool && (
          <aside className="article-tool">
            <div>
              <h2 className="article-tool__heading">{article.tool.heading}</h2>
              <p className="article-tool__body">{article.tool.body}</p>
            </div>
            <a href={article.tool.href} className="btn btn--primary btn--sm article-tool__cta">
              {article.tool.label}
            </a>
          </aside>
        )}

        <p className="article__back">
          <Link to="/tools" className="text-link">
            Back to Tools &amp; Insights
          </Link>
        </p>
      </div>
    </article>
  )
}
