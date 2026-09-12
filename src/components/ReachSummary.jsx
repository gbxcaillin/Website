import { Link } from 'react-router-dom'
import { homeSummaries } from '../content.js'
import citiesWebp from '../assets/cities.webp'
import citiesJpg from '../assets/cities.jpg'

/**
 * Condensed home-page teaser for the Reach section. The full city network
 * lives on /reach.
 */
export default function ReachSummary() {
  const r = homeSummaries.reach
  return (
    <section
      className="section section--paper reach-summary"
      aria-labelledby="reach-summary-heading"
    >
      <div className="container reach-summary__head">
        <div>
          <p className="eyebrow">{r.eyebrow}</p>
          <h2 id="reach-summary-heading" className="section__heading">
            {r.heading}
          </h2>
          <p className="section__intro">{r.line}</p>
        </div>
        <div className="reach-summary__aside">
          <p className="reach-summary__stat mono">{r.stat}</p>
          <Link to={r.link.to} className="text-link">
            {r.link.label}
          </Link>
        </div>
      </div>

      <div className="reach-band">
        <picture>
          <source srcSet={citiesWebp} type="image/webp" />
          <img
            className="reach-band__img"
            src={citiesJpg}
            alt="Night skylines of hubs in the GBX partner network across Australia, Asia, the Middle East and North America."
            width="1584"
            height="672"
            loading="lazy"
          />
        </picture>
      </div>
    </section>
  )
}
