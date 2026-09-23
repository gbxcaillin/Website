import { Link } from 'react-router-dom'
import { education } from '../content.js'
import BookLink from './BookLink.jsx'

/**
 * Dark home-page band for the financial education practice, the counterpart
 * to the Diagnostic strip.
 */
export default function EducationBand() {
  const s = education.home
  return (
    <section className="section section--dark edu-band" aria-labelledby="edu-band-heading">
      <div className="container edu-band__inner">
        <div className="edu-band__lead">
          <p className="eyebrow eyebrow--on-dark">{s.eyebrow}</p>
          <h2 id="edu-band-heading" className="section__heading edu-band__heading">
            {s.heading}
          </h2>
          <p className="section__intro">{s.body}</p>
        </div>
        <div className="edu-band__side">
          <ul className="edu-band__modules">
            {education.modules.map((m) => (
              <li key={m.title}>{m.title}</li>
            ))}
          </ul>
          <div className="btn-row">
            <Link to={s.primary.to} className="btn btn--primary btn--sm">
              {s.primary.label}
            </Link>
            <BookLink to={s.secondary.to} book={!!s.secondary.book} className="btn btn--outline-light btn--sm">
              {s.secondary.label}
            </BookLink>
          </div>
        </div>
      </div>
    </section>
  )
}
