
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DevelopmentPage from './pages/DevelopmentPage';
import BrandIdentityPage from './pages/BrandIdentityPage';
import DesignSystemsPage from './pages/DesignSystemsPage';
import AiSolutionsPage from './pages/AiSolutionsPage';
import MarketStrategyPage from './pages/MarketStrategyPage';
import VentureAdvisoryPage from './pages/VentureAdvisoryPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import IntelligencePage from './pages/IntelligencePage';
import ManifestoPage from './pages/ManifestoPage';
import CompanyPage from './pages/CompanyPage';
import SupportPage from './pages/SupportPage';
import GenericPage from './pages/GenericPage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Services Hub */}
        <Route path="/services/overview" element={<ServicesPage />} />

        {/* Specific Service Pages */}
        <Route path="/services/development" element={<DevelopmentPage />} />
        <Route path="/services/ai-solutions" element={<AiSolutionsPage />} />
        <Route path="/services/brand-identity" element={<BrandIdentityPage />} />
        <Route path="/services/design-systems" element={<DesignSystemsPage />} />
        <Route path="/services/market-strategy" element={<MarketStrategyPage />} />
        <Route path="/services/venture-advisory" element={<VentureAdvisoryPage />} />
        
        {/* Intelligence Hub */}
        <Route path="/intelligence/overview" element={<IntelligencePage />} />
        
        {/* Company Hub */}
        <Route path="/company/overview" element={<CompanyPage />} />
        <Route path="/company/careers" element={<CareersPage />} />
        <Route path="/company/manifesto" element={<ManifestoPage />} />
        <Route path="/company/faq" element={<SupportPage />} />
        
        {/* Main Contact Page */}
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Generic/Blank Pages for all other links */}
        <Route path="/services/:slug" element={<GenericPage />} />
        <Route path="/company/:slug" element={<GenericPage />} />
        <Route path="/intelligence/:slug" element={<GenericPage />} />
      </Routes>
    </Router>
  );
};

export default App;