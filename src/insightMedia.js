// Cover art for insights. One generated, on-brand cover per category, plus an
// optional per-article override for when a real photo is worth using.
//
// To give a single article its own image: add the files to src/assets, import
// them here, and add an entry to `articleCovers` keyed by the article slug.
// Anything not listed there falls back to its category cover.
import aiWebp from './assets/insight-ai.webp'
import aiJpg from './assets/insight-ai.jpg'
import marketingWebp from './assets/insight-marketing.webp'
import marketingJpg from './assets/insight-marketing.jpg'
import analyticsWebp from './assets/insight-analytics.webp'
import analyticsJpg from './assets/insight-analytics.jpg'
import toolsWebp from './assets/insight-business-tools.webp'
import toolsJpg from './assets/insight-business-tools.jpg'
import salesWebp from './assets/insight-sales.webp'
import salesJpg from './assets/insight-sales.jpg'
import investmentWebp from './assets/insight-investment.webp'
import investmentJpg from './assets/insight-investment.jpg'
import educationWebp from './assets/insight-education.webp'
import educationJpg from './assets/insight-education.jpg'

export const categoryCovers = {
  ai: { webp: aiWebp, jpg: aiJpg },
  marketing: { webp: marketingWebp, jpg: marketingJpg },
  analytics: { webp: analyticsWebp, jpg: analyticsJpg },
  'business-tools': { webp: toolsWebp, jpg: toolsJpg },
  sales: { webp: salesWebp, jpg: salesJpg },
  investment: { webp: investmentWebp, jpg: investmentJpg },
  education: { webp: educationWebp, jpg: educationJpg },
}

// Per-article overrides: { [slug]: { webp, jpg, alt } }
export const articleCovers = {}

export function coverFor(article) {
  return articleCovers[article.slug] || categoryCovers[article.category] || null
}
