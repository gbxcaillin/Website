import { Link } from 'react-router-dom'
import { hero } from '../content.js'
import officeWebp from '../assets/office.webp'
import officeJpg from '../assets/office.jpg'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__copy">
        <div className="hero__copy-inner">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-heading" className="hero__heading">
            {hero.heading}
            <span className="hero__accent">{hero.subheading}</span>
          </h1>
          <p className="hero__body">{hero.body}</p>
          <div className="btn-row">
            <Link to={hero.primary.to} className="btn btn--primary">
              {hero.primary.label}
            </Link>
            <Link to={hero.secondary.to} className="btn btn--outline-dark">
              {hero.secondary.label}
            </Link>
          </div>

          <dl className="hero__stats">
            {hero.stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <dt className="hero__stat-label">{s.label}</dt>
                <dd className="hero__stat-value">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="hero__panel">
        <picture>
          <source srcSet={officeWebp} type="image/webp" />
          <img
            className="hero__panel-img"
            src={officeJpg}
            alt="The GBX Professional Services office in Melbourne, with the firm's mark on the wall and the city skyline beyond."
            width="1536"
            height="1024"
            fetchPriority="high"
          />
        </picture>
        <div className="hero__panel-overlay" aria-hidden="true" />
        <div className="hero__panel-line" aria-hidden="true" />
      </div>
    </section>
  )
}
