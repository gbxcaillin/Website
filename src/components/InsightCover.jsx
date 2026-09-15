import { coverFor } from '../insightMedia.js'

/**
 * Category (or per-article) cover image for an insight. Decorative by default:
 * the surrounding card or header already carries the title.
 */
export default function InsightCover({ article, className = '', priority = false }) {
  const c = coverFor(article)
  if (!c) return null
  return (
    <picture className={`insight-cover ${className}`}>
      <source srcSet={c.webp} type="image/webp" />
      <img
        src={c.jpg}
        alt={c.alt || ''}
        width="1200"
        height="675"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : undefined}
      />
    </picture>
  )
}
