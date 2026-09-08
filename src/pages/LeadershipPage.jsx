import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta, leadership } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import Leadership from '../components/Leadership.jsx'
import CTA from '../components/CTA.jsx'

export default function LeadershipPage() {
  usePageMeta(pageMeta.leadership)
  return (
    <>
      <PageHero eyebrow={leadership.eyebrow} title={leadership.heading} intro={leadership.intro} />
      <Leadership showHeading={false} />
      <CTA />
    </>
  )
}
