import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'
import { pageMeta } from '../content.js'
import PageHero from '../components/PageHero.jsx'
import PromptOptimizer from '../components/PromptOptimizer.jsx'

export default function PromptOptimizerPage() {
  usePageMeta(pageMeta.promptOptimizer)
  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="Prompt Optimizer"
        intro="Describe what you want an AI to do and this tool rewrites it into a clear, structured prompt using proven prompt-engineering practice. It runs entirely in your browser. Nothing you type is sent anywhere."
      />

      <section className="section section--paper">
        <div className="container">
          <PromptOptimizer />
          <p className="tool-back">
            <Link to="/tools" className="text-link">
              Back to Tools &amp; Insights
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
