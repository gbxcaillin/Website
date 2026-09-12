import dividerWebp from '../assets/divider.webp'
import dividerJpg from '../assets/divider.jpg'

/**
 * Slim full-bleed transition band (dark surface with a teal seam). Purely
 * decorative punctuation between sections.
 */
export default function Divider() {
  return (
    <div className="divider-band" aria-hidden="true">
      <picture>
        <source srcSet={dividerWebp} type="image/webp" />
        <img src={dividerJpg} alt="" width="1600" height="533" loading="lazy" />
      </picture>
    </div>
  )
}
