import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import Contact from '../components/Contact.jsx'

export default function ContactPage() {
  usePageMeta(pageMeta.contact)
  return <Contact />
}
