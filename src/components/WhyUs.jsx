import { whyUs } from '../content.js'

/**
 * The positioning block: the six things a prospect should compare us on.
 * Rendered on the Services page and the Diagnostic page.
 */
export default function WhyUs({ dark = true }) {
  return (
    <section
      className={`section ${dark ? 'section--dark' : 'section--soft'} why-us`}
      aria-labelledby="why-us-heading"
    >
      <div className="container">
        <div className="section__head">
          <p className={`eyebrow ${dark ? 'eyebrow--on-dark' : ''}`}>{whyUs.eyebrow}</p>
          <h2 id="why-us-heading" className="section__heading">
            {whyUs.heading}
          </h2>
          <p className="section__intro">{whyUs.intro}</p>
        </div>
        <ul className="why-us__grid">
          {whyUs.items.map((item, i) => (
            <li key={item.title} className="why-us__item">
              <span className="mono why-us__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="why-us__title">{item.title}</h3>
              <p className="why-us__body">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
