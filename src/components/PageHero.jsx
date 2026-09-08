/**
 * Light interior page header. Keeps interior pages readable and trust-first,
 * with a thin teal rule and letter-spaced eyebrow for brand continuity.
 */
export default function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="page-hero__title">{title}</h1>
        {intro && <p className="page-hero__intro">{intro}</p>}
      </div>
    </section>
  )
}
