import { useState } from 'react'
import { brand } from '../content.js'

/**
 * Premium dark brand moment: the animated GBX mark on void black.
 *
 * The MP4 is the primary, highest-quality source (muted, looped, autoplaying so
 * it reads as motion identity, not media). If a browser cannot play it, we fall
 * back to the looping GIF, which animates everywhere with no autoplay policy to
 * satisfy. A static poster covers the initial load, and reduced-motion users get
 * the still poster instead of either animation.
 */
export default function BrandFilm() {
  const [videoFailed, setVideoFailed] = useState(false)

  return (
    <section className="brand-film" aria-label="GBX brand mark">
      <div className="brand-film__inner">
        {videoFailed ? (
          <img
            className="brand-film__media"
            src="/media/logo-loop.gif"
            alt=""
            aria-hidden="true"
            width="460"
            height="460"
          />
        ) : (
          <video
            className="brand-film__media"
            src="/media/logo-animation.mp4"
            poster="/media/logo-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            onError={() => setVideoFailed(true)}
          />
        )}
        <img
          className="brand-film__still"
          src="/media/logo-poster.jpg"
          alt=""
          aria-hidden="true"
          width="460"
          height="460"
        />
        <p className="eyebrow eyebrow--on-dark brand-film__eyebrow">{brand.eyebrow}</p>
        <p className="brand-film__line">{brand.line}</p>
      </div>
    </section>
  )
}
