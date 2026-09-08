import { approach } from '../content.js'

export default function Approach({ showHeading = true }) {
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

        <ol className="steps">
          {approach.steps.map((step) => (
            <li key={step.number} className="step">
              <span className="step__number mono" aria-hidden="true">
                {step.number}
              </span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
