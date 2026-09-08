import { brand } from '../content.js'

/**
 * Premium dark brand moment: the animated GBX mark, centered on void black.
 * The video is muted, looping and autoplaying so it reads as motion identity,
 * not media. A static poster covers the load and any browser that blocks
 * autoplay. Motion is suppressed for users who prefer reduced motion.
 */
export default function BrandFilm() {
  return (
    <section className="brand-film" aria-label="GBX brand mark">
      <div className="brand-film__inner">
        <video
          className="brand-film__video"
          src="/media/logo-animation.mp4"
          poster="/media/logo-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <p className="eyebrow eyebrow--on-dark brand-film__eyebrow">{brand.eyebrow}</p>
        <p className="brand-film__line">{brand.line}</p>
      </div>
    </section>
  )
}
