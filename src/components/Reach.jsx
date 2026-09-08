import { reach } from '../content.js'
import ReachVisual from './ReachVisual.jsx'

export default function Reach() {
  const groups = reach.cities.reduce((acc, c) => {
    acc[c.region] = acc[c.region] || []
    acc[c.region].push(c)
    return acc
  }, {})

  return (
    <section className="section section--paper" id="reach" aria-labelledby="reach-heading">
      <div className="container reach">
        <div className="reach__visual">
          <ReachVisual cities={reach.cities} />
        </div>
        <div className="reach__copy">
          <p className="eyebrow">{reach.eyebrow}</p>
          <h2 id="reach-heading" className="section__heading">
            {reach.heading}
          </h2>
          <p className="section__intro">{reach.intro}</p>

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
      </div>
    </section>
  )
}
