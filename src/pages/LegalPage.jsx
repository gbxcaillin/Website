import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta, legal } from '../content.js'

function formatDate(iso) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

// Web addresses in legal text become links: full https:// URLs open in a new
// tab, gbxps.com/... paths stay in the site.
function linkify(text) {
  return text.split(/(https:\/\/[^\s,;)]+[^\s,;).]|gbxps\.com\/[a-z0-9/-]*[a-z0-9])/g).map((part, i) => {
    if (part.startsWith('https://'))
      return (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      )
    if (part.startsWith('gbxps.com/')) return <Link key={i} to={part.slice(9)}>{part}</Link>
    return part
  })
}

// One legal document from `legal` in content.js: `doc` is its key there and in
// pageMeta. `related` lists the documents linked at the end.
export default function LegalPage({ doc }) {
  usePageMeta(pageMeta[doc])
  const p = legal[doc]
  return (
    <article className="section section--paper article">
      <div className="container article__inner">
        <p className="eyebrow">{p.eyebrow || 'Legal'}</p>
        <h1 className="article__title">{p.title}</h1>
        <p className="article__meta mono">
          {p.dateLabel || 'Last updated'} {formatDate(p.updated)}
        </p>

        <div className="article__body">
          <p className="article__p">{linkify(p.intro)}</p>
          {p.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="article__h">{s.heading}</h2>
              {s.paragraphs.map((para, i) => (
                <p key={i} className="article__p">
                  {linkify(para)}
                </p>
              ))}
              {s.list && (
                <ul className="legal-list">
                  {s.list.map((item, i) => (
                    <li key={i}>{linkify(item)}</li>
                  ))}
                </ul>
              )}
              {s.after &&
                s.after.map((para, i) => (
                  <p key={i} className="article__p">
                    {linkify(para)}
                  </p>
                ))}
            </section>
          ))}
          {p.related && (
            <p className="article__p">
              See also{' '}
              {p.related.map((r, i) => (
                <span key={r.to}>
                  {i > 0 && (i === p.related.length - 1 ? ' and ' : ', ')}
                  <Link to={r.to}>{r.label}</Link>
                </span>
              ))}
              .
            </p>
          )}
        </div>
      </div>
    </article>
  )
}
