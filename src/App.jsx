import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Preloader from './components/Preloader';
import ThemeTransitionOverlay from './components/ThemeTransitionOverlay';
import ScrollEnhancements from './components/ScrollEnhancements';
import WhatsAppButton from './components/WhatsAppButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { TransitionProvider, usePageTransition } from './components/PageTransition';

import HomePage from './pages/HomePage';
import LeadershipPage from './pages/LeadershipPage';
import CalculatorPage from './pages/CalculatorPage';
import AboutPage from './pages/AboutPage';
import TransparencyPage from './pages/TransparencyPage';
import DonatePage from './pages/DonatePage';
import ContactPage from './pages/ContactPage';

function AppInner() {
  const [theme, setTheme] = useState('light');
  const [isThemeSwitching, setIsThemeSwitching] = useState(false);
  const [targetTheme, setTargetTheme] = useState('dark');
  const { navigateTo } = usePageTransition();

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

  // All "Donate" actions now navigate to the /donate page with curtain
  const handleOpenDonate = () => navigateTo('/donate');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
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
      <TransitionProvider>
        <AppInner />
      </TransitionProvider>
    </BrowserRouter>
  );
}
