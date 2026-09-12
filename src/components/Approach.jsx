import { useEffect, useRef } from 'react'
import { approach } from '../content.js'
import accentMp4 from '../assets/approach-accent.mp4'
import accentPoster from '../assets/approach-accent-poster.jpg'

export default function Approach({ showHeading = true }) {
  const videoRef = useRef(null)

  // Autoplay via the attribute (below); only pause for reduced-motion users.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.pause()
    }
  }, [])

  return (
    <section className="section section--dark" aria-labelledby="approach-heading">
      <div className="container">
        {showHeading && (
          <div className="section__head section__head--dark">
            <p className="eyebrow eyebrow--on-dark">{approach.eyebrow}</p>
            <h2 id="approach-heading" className="section__heading">
              {approach.heading}
            </h2>
            <p className="section__intro">{approach.intro}</p>
          </div>
        )}
      </div>

      {/* Full-bleed accent: the four pillars lighting up, looping. */}
      <div className="approach-accent" aria-hidden="true">
        <video
          ref={videoRef}
          className="approach-accent__media"
          src={accentMp4}
          poster={accentPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
        />
      </div>

      <div className="container">
        <ol className="steps">
          {approach.steps.map((step) => (
            <li key={step.number} className="step">
              <span className="step__number mono" aria-hidden="true">
                {step.number}
              </span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__body">{step.body}</p>
              {step.detail && <p className="step__detail">{step.detail}</p>}
            </li>
          ))}
        </ol>

        {approach.principles && (
          <div className="approach-principles">
            <div className="approach-principles__head">
              <p className="eyebrow eyebrow--on-dark">{approach.principles.eyebrow}</p>
              <h2 className="section__heading">{approach.principles.heading}</h2>
            </div>
            <ul className="principle-grid">
              {approach.principles.items.map((p) => (
                <li key={p.title} className="principle">
                  <h3 className="principle__title">{p.title}</h3>
                  <p className="principle__body">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
