import { useEffect, useRef } from 'react'
import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta, services } from '../content.js'
import { serviceMedia } from '../serviceMedia.js'
import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'

export default function ServicesPage() {
  usePageMeta(pageMeta.services)
  const rootRef = useRef(null)

  // Videos autoplay via the attribute; pause them for reduced-motion users.
  useEffect(() => {
    const reduce =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduce) return
    rootRef.current?.querySelectorAll('video').forEach((v) => v.pause())
  }, [])

  return (
    <>
      <PageHero eyebrow={services.eyebrow} title={services.heading} intro={services.intro} />

      <section className="section section--paper" ref={rootRef}>
        <div className="container">
          <ol className="service-detail-list">
            {services.items.map((s) => {
              const media = serviceMedia[s.number]
              return (
                <li key={s.number} className="service-detail" id={`service-${s.number}`}>
                  <div className="service-detail__lead">
                    <span className="service-detail__number mono" aria-hidden="true">
                      {s.number}
                    </span>
                    <h2 className="service-detail__title">{s.title}</h2>
                    {media && (
                      <div className="service-detail__media" aria-hidden="true">
                        {media.type === 'video' ? (
                          <video
                            className="service-detail__media-el"
                            src={media.mp4}
                            poster={media.poster}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            tabIndex={-1}
                          />
                        ) : (
                          <picture>
                            <source srcSet={media.webp} type="image/webp" />
                            <img
                              className="service-detail__media-el"
                              src={media.jpg}
                              alt=""
                              loading="lazy"
                              width="800"
                              height="450"
                            />
                          </picture>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="service-detail__body">
                    <p className="service-detail__text">{s.detail}</p>
                    <ul className="service-detail__includes">
                      {s.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <CTA />
    </>
  )
}
