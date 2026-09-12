import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../content.js'
import ServiceThumb from './ServiceThumb.jsx'

// Animated (MP4, plays on hover) thumbnails
import analyticsMp4 from '../assets/svc-analytics.mp4'
import analyticsPoster from '../assets/svc-analytics-poster.jpg'
import salesMp4 from '../assets/svc-sales.mp4'
import salesPoster from '../assets/svc-sales-poster.jpg'
import investmentMp4 from '../assets/svc-investment.mp4'
import investmentPoster from '../assets/svc-investment-poster.jpg'
import aiMp4 from '../assets/svc-ai.mp4'
import aiPoster from '../assets/svc-ai-poster.jpg'
// Static thumbnails (WebP + JPEG)
import consultingWebp from '../assets/svc-consulting.webp'
import consultingJpg from '../assets/svc-consulting.jpg'
import brandWebp from '../assets/svc-brand.webp'
import brandJpg from '../assets/svc-brand.jpg'
import educationWebp from '../assets/svc-education.webp'
import educationJpg from '../assets/svc-education.jpg'

// Keyed by the service `number` in content.js.
const THUMBS = {
  '01': { type: 'video', mp4: analyticsMp4, poster: analyticsPoster },
  '02': { type: 'image', webp: consultingWebp, jpg: consultingJpg },
  '03': { type: 'video', mp4: salesMp4, poster: salesPoster },
  '04': { type: 'image', webp: brandWebp, jpg: brandJpg },
  '05': { type: 'video', mp4: investmentMp4, poster: investmentPoster },
  '06': { type: 'image', webp: educationWebp, jpg: educationJpg },
  '07': { type: 'video', mp4: aiMp4, poster: aiPoster },
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Thumbnails autoplay by default. Hovering a card pauses its video; leaving resumes it.
function pauseThumb(e) {
  const v = e.currentTarget.querySelector('video')
  if (v) v.pause()
}
function resumeThumb(e) {
  if (prefersReducedMotion()) return
  const v = e.currentTarget.querySelector('video')
  if (v) v.play().catch(() => {})
}

export default function Services({ showHeading = true }) {
  const gridRef = useRef(null)
  // Thumbnails autoplay via the attribute; pause them for reduced-motion users.
  useEffect(() => {
    if (!prefersReducedMotion()) return
    gridRef.current?.querySelectorAll('video').forEach((v) => v.pause())
  }, [])

  return (
    <section className="section section--paper" aria-labelledby="services-heading">
      <div className="container">
        {showHeading && (
          <div className="section__head">
            <p className="eyebrow">{services.eyebrow}</p>
            <h2 id="services-heading" className="section__heading">
              {services.heading}
            </h2>
            <p className="section__intro">{services.intro}</p>
          </div>
        )}

        <ol className="service-grid" ref={gridRef}>
          {services.items.map((s) => (
            <li
              key={s.number}
              className="service-card service-card--has-thumb"
              onMouseEnter={pauseThumb}
              onMouseLeave={resumeThumb}
            >
              <ServiceThumb thumb={THUMBS[s.number]} />
              <span className="service-card__number mono" aria-hidden="true">
                {s.number}
              </span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__body">{s.body}</p>
              <Link to="/services" className="text-link">
                Learn more
              </Link>
            </li>
          ))}
          <li className="service-card service-card--note">
            <p className="eyebrow">Regulated sectors</p>
            <p className="service-card__body">
              We work alongside Australian Financial Services Licence holders and the practices that
              operate under them, strengthening the business around their obligations. GBX
              Professional Services is not an AFSL holder and does not provide financial services.
            </p>
            <Link to="/services" className="text-link">
              View all services
            </Link>
          </li>
        </ol>
      </div>
    </section>
  )
}
