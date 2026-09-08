import { cta } from '../content.js'

export default function CTA() {
  return (
    <section className="cta" aria-labelledby="cta-heading">
      <div className="container cta__inner">
        <div>
          <h2 id="cta-heading" className="cta__heading">
            {cta.heading}
          </h2>
          <p className="cta__body">{cta.body}</p>
        </div>
        <div className="btn-row btn-row--end">
          <a href={cta.primary.href} className="btn btn--primary">
            {cta.primary.label}
          </a>
          <a href={cta.secondary.href} className="btn btn--outline-light">
            {cta.secondary.label}
          </a>
        </div>
      </div>
    </section>
  )
}
