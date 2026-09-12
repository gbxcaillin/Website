import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import BrandFilm from '../components/BrandFilm.jsx'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Divider from '../components/Divider.jsx'
import ApproachSummary from '../components/ApproachSummary.jsx'
import ReachSummary from '../components/ReachSummary.jsx'
import CTA from '../components/CTA.jsx'

export default function Home() {
  usePageMeta(pageMeta.home)
  return (
    <>
      {/* Philosophy and the animated mark open the page. */}
      <BrandFilm />
      <Hero />
      {/* The seven disciplines stay in full; the rest is summarised with a link out. */}
      <Services />
      <Divider />
      <ApproachSummary />
      <ReachSummary />
      <CTA />
    </>
  )
}
