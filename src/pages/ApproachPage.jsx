import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta, approach } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import Approach from '../components/Approach.jsx'
import CTA from '../components/CTA.jsx'

export default function ApproachPage() {
  usePageMeta(pageMeta.approach)
  return (
    <>
      <PageHero eyebrow={approach.eyebrow} title={approach.heading} intro={approach.intro} />
      <Approach showHeading={false} />
      <CTA />
    </>
  )
}
