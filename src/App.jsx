import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Preloader from './components/Preloader';
import ThemeTransitionOverlay from './components/ThemeTransitionOverlay';
import ScrollEnhancements from './components/ScrollEnhancements';
import WhatsAppButton from './components/WhatsAppButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';

import HomePage from './pages/HomePage';
import LeadershipPage from './pages/LeadershipPage';
import CalculatorPage from './pages/CalculatorPage';
import AboutPage from './pages/AboutPage';
import TransparencyPage from './pages/TransparencyPage';
import DonatePage from './pages/DonatePage';

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
  const [donateOpen, setDonateOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(2500);

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

  const handleOpenDonate = (causeTitle = '', amountVal = 2500) => {
    setSelectedCause(causeTitle);
    setSelectedAmount(amountVal);
    setDonateOpen(true);
  };

  const handleCloseDonate = () => setDonateOpen(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <ScrollToTop />
      <Preloader />
      <ThemeTransitionOverlay active={isThemeSwitching} targetTheme={targetTheme} />
      <ScrollEnhancements />
      <WhatsAppButton />

      <Navbar theme={theme} toggleTheme={toggleTheme} onOpenDonate={handleOpenDonate} />

      <Routes>
        <Route path="/" element={<HomePage onOpenDonate={handleOpenDonate} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/calculator" element={<CalculatorPage onOpenDonate={handleOpenDonate} />} />
        <Route path="/transparency" element={<TransparencyPage />} />
        <Route path="/donate" element={<DonatePage onOpenDonate={handleOpenDonate} />} />
      </Routes>

      <Footer onOpenDonate={handleOpenDonate} />

      <DonationModal
        isOpen={donateOpen}
        onClose={handleCloseDonate}
        initialCause={selectedCause}
        initialAmount={selectedAmount}
      />
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
