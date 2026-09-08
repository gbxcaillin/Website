import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Approach from '../components/Approach.jsx'
import BrandFilm from '../components/BrandFilm.jsx'
import Reach from '../components/Reach.jsx'
import CTA from '../components/CTA.jsx'

export default function Home() {
  usePageMeta(pageMeta.home)
  return (
    <>
      <Hero />
      <Services />
      <Approach />
      <BrandFilm />
      <Reach />
      <CTA />
    </>
  )
}
