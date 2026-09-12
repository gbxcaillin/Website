/**
 * Service card thumbnail. Two kinds:
 *  - 'video': a tiny muted MP4 (converted from the source GIF). It shows its poster
 *    frame at rest and only plays while the parent card is hovered/focused, driven by
 *    Services.jsx. preload="none" keeps it off the wire until it actually plays.
 *  - 'image': a static WebP with a JPEG fallback.
 * Decorative, so aria-hidden and empty alt.
 */
export default function ServiceThumb({ thumb }) {
  if (!thumb) return <div className="svc-thumb svc-thumb--placeholder" aria-hidden="true" />

  return (
    <div className="svc-thumb" aria-hidden="true">
      {thumb.type === 'video' ? (
        <video
          className="svc-thumb__media"
          src={thumb.mp4}
          poster={thumb.poster}
          muted
          loop
          playsInline
          preload="none"
          tabIndex={-1}
        />
      ) : (
        <picture>
          <source srcSet={thumb.webp} type="image/webp" />
          <img
            className="svc-thumb__media"
            src={thumb.jpg}
            alt=""
            loading="lazy"
            width="800"
            height="450"
          />
        </picture>
      )}
    </div>
  )
}
