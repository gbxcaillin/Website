import { reach } from '../content.js'
import citiesWebp from '../assets/cities.webp'
import citiesJpg from '../assets/cities.jpg'

export default function Reach({ showHeading = true }) {
  const groups = reach.cities.reduce((acc, c) => {
    acc[c.region] = acc[c.region] || []
    acc[c.region].push(c)
    return acc
  }, {})

  return (
    <section className="section section--paper reach-section" aria-labelledby="reach-heading">
      <div className="container">
        {showHeading && (
          <div className="section__head">
            <p className="eyebrow">{reach.eyebrow}</p>
            <h2 id="reach-heading" className="section__heading">
              {reach.heading}
            </h2>
            <p className="section__intro">{reach.intro}</p>
          </div>
        )}
      </div>

      <div className="reach-band">
        <picture>
          <source srcSet={citiesWebp} type="image/webp" />
          <img
            className="reach-band__img"
            src={citiesJpg}
            alt="Night skylines of hubs in the GBX partner network: Melbourne, Sydney, Brisbane, Adelaide, Singapore, Dubai, Boston, New York and Hong Kong."
            width="1584"
            height="672"
            loading="lazy"
          />
        </picture>
      </div>

      <div className="container">
        <div className="city-groups">
          {Object.entries(groups).map(([region, cities]) => (
            <div key={region} className="city-group">
              <p className="city-group__region mono">{region}</p>
              <ul className="city-list">
                {cities.map((c) => (
                  <li key={c.name} className={`city ${c.hq ? 'city--hq' : ''}`}>
                    {c.name}
                    {c.hq && <span className="city__tag mono">HQ</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
