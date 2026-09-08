import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta, reach } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import Reach from '../components/Reach.jsx'
import CTA from '../components/CTA.jsx'

export default function ReachPage() {
  usePageMeta(pageMeta.reach)
  return (
    <>
      <PageHero eyebrow={reach.eyebrow} title={reach.heading} intro={reach.intro} />
      <Reach showHeading={false} />
      <CTA />
    </>
  )
}
