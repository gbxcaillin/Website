import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta, legal } from '../content.js'

function formatDate(iso) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function PrivacyPage() {
  usePageMeta(pageMeta.privacy)
  const p = legal.privacy
  return (
    <article className="section section--paper article">
      <div className="container article__inner">
        <p className="eyebrow">Legal</p>
        <h1 className="article__title">{p.title}</h1>
        <p className="article__meta mono">Last updated {formatDate(p.updated)}</p>

        <div className="article__body">
          <p className="article__p">{p.intro}</p>
          {p.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="article__h">{s.heading}</h2>
              {s.paragraphs.map((para, i) => (
                <p key={i} className="article__p">
                  {para}
                </p>
              ))}
              {s.list && (
                <ul className="legal-list">
                  {s.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}
