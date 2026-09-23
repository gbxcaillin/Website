/**
 * Reusable FAQ section. Renders a definition list of question/answer pairs,
 * matching the site's section rhythm. The same {q, a} items also feed the
 * FAQPage structured data emitted by scripts/prerender.mjs, so what a reader
 * sees and what a search or answer engine reads stay in step.
 *
 * Props:
 *  - heading: section heading (defaults to "Common questions")
 *  - items: array of { q, a }
 *  - id: unique slug for the heading anchor (avoids duplicate ids on a page)
 *  - tone: section surface class suffix ("paper" | "soft"), default "paper"
 */
export default function Faq({ heading = 'Common questions', items, id = 'faq', tone = 'paper' }) {
  if (!items || !items.length) return null
  const headingId = `${id}-heading`
  return (
    <section className={`section section--${tone} faq`} aria-labelledby={headingId}>
      <div className="container">
        <h2 id={headingId} className="section__heading">
          {heading}
        </h2>
        <dl className="faq__list">
          {items.map((f) => (
            <div key={f.q} className="faq__item">
              <dt className="faq__q">{f.q}</dt>
              <dd className="faq__a">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
