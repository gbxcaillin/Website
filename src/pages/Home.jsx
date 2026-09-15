import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import BrandFilm from '../components/BrandFilm.jsx'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Divider from '../components/Divider.jsx'
import ApproachSummary from '../components/ApproachSummary.jsx'
import DiagnosticStrip from '../components/DiagnosticStrip.jsx'
import TwoPaths from '../components/TwoPaths.jsx'
import EducationBand from '../components/EducationBand.jsx'
import ReachSummary from '../components/ReachSummary.jsx'
import CaseStudiesTeaser from '../components/CaseStudiesTeaser.jsx'
import HomeTools from '../components/HomeTools.jsx'
import CTA from '../components/CTA.jsx'

export default function Home() {
  usePageMeta(pageMeta.home)
  return (
    <>
      {/* Philosophy and the animated mark open the page. */}
      <BrandFilm />
      <Hero />
      {/* Two practices, equal billing. */}
      <TwoPaths />
      {/* The seven disciplines stay in full; the rest is summarised with a link out. */}
      <Services />
      <Divider />
      <ApproachSummary />
      {/* The packaged entry offer, with the free Health Check as the smaller first step. */}
      <DiagnosticStrip />
      <EducationBand />
      <ReachSummary />
      <CaseStudiesTeaser />
      <HomeTools />
      <CTA />
    </>
  )
}
