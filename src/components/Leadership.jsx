import { Link } from 'react-router-dom'
import { leadership } from '../content.js'

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
          {leadership.people.map((p) => (
            <li key={p.name} className="person-card">
              {/*
                Photo slot. Until consistent portraits are ready, we use a dark abstract
                role card as the brief directs. To add a photo, replace the <div> with
                <img className="person-card__photo" src="..." alt={p.name} />.
              */}
              <div className="person-card__portrait" aria-hidden="true">
                <span className="person-card__initials">{p.initials}</span>
                <span className="person-card__number mono">{p.number}</span>
                <span className="person-card__line" />
              </div>
              <div className="person-card__body">
                <h3 className="person-card__name">{p.name}</h3>
                <p className="person-card__role">{p.role}</p>
                <p className="person-card__desc">{p.body}</p>
                <Link to="/contact" className="text-link">
                  Work with {p.name.split(' ')[0]}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
