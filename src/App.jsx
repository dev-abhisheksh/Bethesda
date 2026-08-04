import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Preloader from './components/Preloader';
import ThemeTransitionOverlay from './components/ThemeTransitionOverlay';
import ScrollEnhancements from './components/ScrollEnhancements';
import WhatsAppButton from './components/WhatsAppButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import LeadershipPage from './pages/LeadershipPage';
import CalculatorPage from './pages/CalculatorPage';
import AboutPage from './pages/AboutPage';
import TransparencyPage from './pages/TransparencyPage';
import DonatePage from './pages/DonatePage';
import ContactPage from './pages/ContactPage';

// Scroll to top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppInner() {
  const [theme, setTheme] = useState('light');
  const [isThemeSwitching, setIsThemeSwitching] = useState(false);
  const [targetTheme, setTargetTheme] = useState('dark');
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    if (isThemeSwitching) return;
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTargetTheme(nextTheme);
    setIsThemeSwitching(true);
    setTimeout(() => setTheme(nextTheme), 280);
    setTimeout(() => setIsThemeSwitching(false), 750);
  };

  // All "Donate" actions now navigate to the /donate page
  const handleOpenDonate = () => navigate('/donate');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <ScrollToTop />
      <Preloader />
      <ThemeTransitionOverlay active={isThemeSwitching} targetTheme={targetTheme} />
      <ScrollEnhancements />
      <WhatsAppButton />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<HomePage onOpenDonate={handleOpenDonate} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/calculator" element={<CalculatorPage onOpenDonate={handleOpenDonate} />} />
        <Route path="/transparency" element={<TransparencyPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
