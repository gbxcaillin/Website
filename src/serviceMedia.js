// Shared media for each service, keyed by the service `number` in content.js.
// Used by the home Services cards and the full Services page so the imagery
// stays in sync across both.

// Animated (MP4) thumbnails
import analyticsMp4 from './assets/svc-analytics.mp4'
import analyticsPoster from './assets/svc-analytics-poster.jpg'
import salesMp4 from './assets/svc-sales.mp4'
import salesPoster from './assets/svc-sales-poster.jpg'
import investmentMp4 from './assets/svc-investment.mp4'
import investmentPoster from './assets/svc-investment-poster.jpg'
import aiMp4 from './assets/svc-ai.mp4'
import aiPoster from './assets/svc-ai-poster.jpg'
// Static (WebP + JPEG) thumbnails
import consultingWebp from './assets/svc-consulting.webp'
import consultingJpg from './assets/svc-consulting.jpg'
import brandWebp from './assets/svc-brand.webp'
import brandJpg from './assets/svc-brand.jpg'
import educationWebp from './assets/svc-education.webp'
import educationJpg from './assets/svc-education.jpg'

export const serviceMedia = {
  '01': { type: 'video', mp4: analyticsMp4, poster: analyticsPoster },
  '02': { type: 'image', webp: consultingWebp, jpg: consultingJpg },
  '03': { type: 'video', mp4: salesMp4, poster: salesPoster },
  '04': { type: 'image', webp: brandWebp, jpg: brandJpg },
  '05': { type: 'video', mp4: investmentMp4, poster: investmentPoster },
  '06': { type: 'image', webp: educationWebp, jpg: educationJpg },
  '07': { type: 'video', mp4: aiMp4, poster: aiPoster },
}
