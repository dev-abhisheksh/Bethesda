import React, { useState, useEffect } from 'react';
import { Heart, Sun, Moon, Menu, X, Phone, ShieldCheck, ChevronRight, Users } from 'lucide-react';
import { trustInfo } from '../data/bethesdaData';

export default function Navbar({ theme, toggleTheme, onOpenDonate, onOpenVolunteer }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Causes', href: '#causes' },
    { name: 'Impact', href: '#impact' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Stories', href: '#stories' },
    { name: 'Transparency', href: '#transparency' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Announcement & Emergency Banner */}
      <div style={{
        background: 'linear-gradient(90deg, #059669 0%, #047857 100%)',
        color: '#ffffff',
        padding: '8px 16px',
        fontSize: '13px',
        fontWeight: '500',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={16} style={{ color: '#6ee7b7' }} />
            <span><strong>100% Tax Deductible (Section 80G & 12A Certified)</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="top-banner-links">
            <a href={`tel:${trustInfo.contact.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#ffffff' }}>
              <Phone size={14} /> {trustInfo.contact.phone}
            </a>
            <button onClick={onOpenVolunteer} style={{ color: '#6ee7b7', fontWeight: '600', textDecoration: 'underline', fontSize: '13px' }}>
              Become a Volunteer →
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'var(--bg-glass)' : 'var(--bg-primary)',
        backdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid var(--border-glass)' : '1px solid transparent',
        transition: 'var(--transition)',
        padding: isScrolled ? '12px 0' : '16px 0',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Brand Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
              color: '#ffffff'
            }}>
              <Heart size={22} fill="#ffffff" />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '19px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                BETHESDA <span style={{ color: 'var(--brand-primary)' }}>TRUST</span>
              </div>
              <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Charitable Non-Profit
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: 'var(--text-secondary)',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & Theme Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-color)'
              }}
            >
              {theme === 'dark' ? <Sun size={20} style={{ color: '#fbbf24' }} /> : <Moon size={20} />}
            </button>

            {/* Desktop Donate Button */}
            <button
              onClick={() => onOpenDonate()}
              className="btn btn-accent desktop-donate-btn"
              style={{ padding: '10px 20px', fontSize: '14px' }}
            >
              <Heart size={16} fill="#ffffff" />
              <span>Donate Now</span>
            </button>

            {/* Mobile Hamburger Toggle Bar */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle Navigation Menu"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: mobileMenuOpen ? 'var(--brand-primary)' : 'var(--bg-tertiary)',
                color: mobileMenuOpen ? '#ffffff' : 'var(--text-primary)',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-color)',
                transition: 'var(--transition)',
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer Overlay */}
        {mobileMenuOpen && (
          <div style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(8px)',
            zIndex: 999,
          }} onClick={() => setMobileMenuOpen(false)}>
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderBottom: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                maxHeight: 'calc(100vh - 80px)',
                overflowY: 'auto',
                animation: 'slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                Navigation Menu
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '17px',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-tertiary)',
                    transition: 'var(--transition)'
                  }}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={18} style={{ color: 'var(--brand-primary)' }} />
                </a>
              ))}

              {/* Mobile Drawer Quick Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDonate();
                  }}
                  className="btn btn-accent"
                  style={{ width: '100%', padding: '14px', fontSize: '16px' }}
                >
                  <Heart size={18} fill="#ffffff" />
                  <span>Donate Now (Tax Relief)</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenVolunteer();
                  }}
                  className="btn btn-outline"
                  style={{ width: '100%', padding: '14px', fontSize: '15px' }}
                >
                  <Users size={18} />
                  <span>Join as Volunteer</span>
                </button>
              </div>

            </div>
          </div>
        )}
      </header>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .desktop-donate-btn { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @media (min-width: 961px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
