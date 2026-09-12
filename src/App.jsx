import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import LeadershipPage from './pages/LeadershipPage.jsx'
import ApproachPage from './pages/ApproachPage.jsx'
import ReachPage from './pages/ReachPage.jsx'
import ToolsPage from './pages/ToolsPage.jsx'
import HealthCheckPage from './pages/HealthCheckPage.jsx'
import UnitEconomicsPage from './pages/UnitEconomicsPage.jsx'
import AiReadinessPage from './pages/AiReadinessPage.jsx'
import PositioningPage from './pages/PositioningPage.jsx'
import InsightsPage from './pages/InsightsPage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="leadership" element={<LeadershipPage />} />
          <Route path="approach" element={<ApproachPage />} />
          <Route path="reach" element={<ReachPage />} />
          <Route path="tools" element={<ToolsPage />} />
          <Route path="tools/health-check" element={<HealthCheckPage />} />
          <Route path="tools/unit-economics" element={<UnitEconomicsPage />} />
          <Route path="tools/ai-readiness" element={<AiReadinessPage />} />
          <Route path="tools/positioning" element={<PositioningPage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="insights/:slug" element={<ArticlePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
