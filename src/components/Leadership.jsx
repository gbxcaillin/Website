import { Link } from 'react-router-dom'
import { leadership } from '../content.js'
import caillinWebp from '../assets/leader-caillin.webp'
import caillinJpg from '../assets/leader-caillin.jpg'
import roseWebp from '../assets/leader-rose.webp'
import roseJpg from '../assets/leader-rose.jpg'
import patrickWebp from '../assets/leader-patrick.webp'
import patrickJpg from '../assets/leader-patrick.jpg'

const PHOTOS = {
  caillin: { webp: caillinWebp, jpg: caillinJpg },
  rose: { webp: roseWebp, jpg: roseJpg },
  patrick: { webp: patrickWebp, jpg: patrickJpg },
}

export default function Leadership({ showHeading = true }) {
  return (
    <section className="section section--soft" aria-labelledby="leadership-heading">
      <div className="container">
        {showHeading && (
          <div className="section__head">
            <p className="eyebrow">{leadership.eyebrow}</p>
            <h2 id="leadership-heading" className="section__heading">
              {leadership.heading}
            </h2>
            <p className="section__intro">{leadership.intro}</p>
          </div>
        )}

        <ul className="people-grid">
          {leadership.people.map((p) => {
            const photo = PHOTOS[p.photo]
            return (
              <li key={p.name} className="person-card">
                <div className="person-card__portrait">
                  {photo ? (
                    <picture>
                      <source srcSet={photo.webp} type="image/webp" />
                      <img
                        className="person-card__photo"
                        src={photo.jpg}
                        alt={`${p.name}, ${p.lead} at GBX Professional Services`}
                        width="700"
                        height="1050"
                        loading="lazy"
                      />
                    </picture>
                  ) : (
                    <span className="person-card__initials" aria-hidden="true">
                      {p.initials}
                    </span>
                  )}
                  <span className="person-card__number mono" aria-hidden="true">
                    {p.number}
                  </span>
                </div>
                <div className="person-card__body">
                  <p className="person-card__lead">{p.lead}</p>
                  <h3 className="person-card__name">{p.name}</h3>
                  <p className="person-card__role mono">{p.role}</p>
                  <p className="person-card__desc">{p.body}</p>
                  {p.quals && p.quals.length > 0 && (
                    <ul className="person-card__quals">
                      {p.quals.map((q) => (
                        <li key={q}>{q}</li>
                      ))}
                    </ul>
                  )}
                  <Link to="/contact" className="text-link">
                    Work with {p.name.split(' ')[0]}
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
