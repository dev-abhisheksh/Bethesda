import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactCounters from './components/ImpactCounters';
import Causes from './components/Causes';
import Calculator from './components/Calculator';
import Stories from './components/Stories';
import Transparency from './components/Transparency';
import Gallery from './components/Gallery';
import VolunteerSection from './components/VolunteerSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [donateOpen, setDonateOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(50);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenDonate = (causeTitle = '', amountVal = 50) => {
    setSelectedCause(causeTitle);
    setSelectedAmount(amountVal);
    setDonateOpen(true);
  };

  const handleCloseDonate = () => {
    setDonateOpen(false);
  };

  const handleOpenVolunteer = () => {
    const volSection = document.getElementById('volunteer');
    if (volSection) {
      volSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Navigation Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenDonate={handleOpenDonate}
        onOpenVolunteer={handleOpenVolunteer}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenDonate={handleOpenDonate} />
        <ImpactCounters />
        <Causes onOpenDonate={handleOpenDonate} />
        <Calculator onOpenDonate={handleOpenDonate} />
        <Stories />
        <Transparency />
        <Gallery />
        <VolunteerSection />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenDonate={handleOpenDonate} />

      {/* Interactive Modal */}
      <DonationModal
        isOpen={donateOpen}
        onClose={handleCloseDonate}
        initialCause={selectedCause}
        initialAmount={selectedAmount}
      />
    </div>
  );
}
