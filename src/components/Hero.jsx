import { hero } from '../content.js'
import { FramedLogo } from './Logo.jsx'
import HeroVisual from './HeroVisual.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero__copy">
        <div className="hero__copy-inner">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-heading" className="hero__heading">
            {hero.heading}
            <span className="hero__accent">{hero.subheading}</span>
          </h1>
          <p className="hero__body">{hero.body}</p>
          <div className="btn-row">
            <a href={hero.primary.href} className="btn btn--primary">
              {hero.primary.label}
            </a>
            <a href={hero.secondary.href} className="btn btn--outline-dark">
              {hero.secondary.label}
            </a>
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

      <div className="hero__panel" aria-hidden="true">
        <HeroVisual />
        <div className="hero__panel-overlay" />
        <div className="hero__panel-line" />
        <div className="hero__panel-logo">
          <FramedLogo size={96} tone="dark" />
        </div>
        <div className="hero__panel-caption">
          <span className="mono">EST. MELBOURNE</span>
          <span className="mono">37.81° S / 144.96° E</span>
        </div>
      </div>
    </section>
  )
}
