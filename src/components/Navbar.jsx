import React, { useState, useEffect } from 'react';
import { Heart, Sun, Moon, Menu, X, Phone, ShieldCheck, ChevronRight } from 'lucide-react';
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
            <span><strong>100% Tax Deductible (Section 80G & 12A Certified)</strong> • FCRA Approved</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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
        padding: isScrolled ? '12px 0' : '18px 0',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Brand Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
              color: '#ffffff'
            }}>
              <Heart size={24} fill="#ffffff" />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                BETHESDA <span style={{ color: 'var(--brand-primary)' }}>TRUST</span>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Charitable Organization
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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

            <button
              onClick={() => onOpenDonate()}
              className="btn btn-accent"
              style={{ padding: '10px 22px', fontSize: '15px' }}
            >
              <Heart size={18} fill="#ffffff" />
              <span>Donate Now</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-lg)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 0',
                  borderBottom: '1px solid var(--border-color)'
                }}
              >
                <span>{link.name}</span>
                <ChevronRight size={18} style={{ color: 'var(--text-muted)' }} />
              </a>
            ))}
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
