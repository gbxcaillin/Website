import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import DiagnosticPage from './pages/DiagnosticPage.jsx'
import EducationPage from './pages/EducationPage.jsx'
import WellbeingCheckPage from './pages/WellbeingCheckPage.jsx'
import WillAiHelpPage from './pages/WillAiHelpPage.jsx'
import LeadershipPage from './pages/LeadershipPage.jsx'
import ApproachPage from './pages/ApproachPage.jsx'
import ReachPage from './pages/ReachPage.jsx'
import ToolsPage from './pages/ToolsPage.jsx'
import HealthCheckPage from './pages/HealthCheckPage.jsx'
import UnitEconomicsPage from './pages/UnitEconomicsPage.jsx'
import AiReadinessPage from './pages/AiReadinessPage.jsx'
import PositioningPage from './pages/PositioningPage.jsx'
import PipelineGapPage from './pages/PipelineGapPage.jsx'
import CapacityPage from './pages/CapacityPage.jsx'
import AutomationPage from './pages/AutomationPage.jsx'
import CapabilityPage from './pages/CapabilityPage.jsx'
import KpiStarterPage from './pages/KpiStarterPage.jsx'
import MarketingRhythmPage from './pages/MarketingRhythmPage.jsx'
import InsightsPage from './pages/InsightsPage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import CaseStudiesPage from './pages/CaseStudiesPage.jsx'
import CaseStudyPage from './pages/CaseStudyPage.jsx'
import PrivacyPage from './pages/PrivacyPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import BookPage from './pages/BookPage.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="diagnostic" element={<DiagnosticPage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="leadership" element={<LeadershipPage />} />
          <Route path="approach" element={<ApproachPage />} />
          <Route path="reach" element={<ReachPage />} />
          <Route path="tools" element={<ToolsPage />} />
          <Route path="tools/health-check" element={<HealthCheckPage />} />
          <Route path="tools/unit-economics" element={<UnitEconomicsPage />} />
          <Route path="tools/ai-readiness" element={<AiReadinessPage />} />
          <Route path="tools/positioning" element={<PositioningPage />} />
          <Route path="tools/pipeline-gap" element={<PipelineGapPage />} />
          <Route path="tools/capacity" element={<CapacityPage />} />
          <Route path="tools/automation" element={<AutomationPage />} />
          <Route path="tools/capability" element={<CapabilityPage />} />
          <Route path="tools/kpi-starter" element={<KpiStarterPage />} />
          <Route path="tools/wellbeing-check" element={<WellbeingCheckPage />} />
          <Route path="tools/will-ai-help" element={<WillAiHelpPage />} />
          <Route path="tools/marketing-rhythm" element={<MarketingRhythmPage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="insights/:slug" element={<ArticlePage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="case-studies/:slug" element={<CaseStudyPage />} />
          <Route path="privacy-policy" element={<PrivacyPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="book" element={<BookPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
