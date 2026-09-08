import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Leadership from './components/Leadership.jsx'
import Approach from './components/Approach.jsx'
import Reach from './components/Reach.jsx'
import Contact from './components/Contact.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Leadership />
        <Approach />
        <Reach />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
