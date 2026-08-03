import React, { useState, useEffect } from 'react';
import { Heart, Sun, Moon, Menu, X, Phone, ShieldCheck, ChevronRight, Users } from 'lucide-react';
import { trustInfo } from '../data/bethesdaData';

export default function Navbar({ theme, toggleTheme, onOpenDonate, onOpenVolunteer }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Causes', href: '#causes' },
    { name: 'Impact', href: '#impact' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Transparency', href: '#transparency' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      {/* ── Top Banner ── */}
      <div className="nav-top-banner">
        <div className="container top-banner-inner">
          <div className="top-banner-left">
            <ShieldCheck size={15} color="#6ee7b7" />
            <span><strong>100% Tax Deductible</strong> · 80G & 12A</span>
          </div>
          <div className="top-banner-links">
            <a href={`tel:${trustInfo.contact.phone}`}>
              <Phone size={13} /> {trustInfo.contact.phone}
            </a>
            <button onClick={onOpenVolunteer}>Volunteer →</button>
          </div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header className={`nav-header ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="container nav-row">
          {/* Logo */}
          <a href="#hero" className="nav-logo">
            <div className="nav-logo-icon">
              <Heart size={20} fill="#fff" />
            </div>
            <div className="nav-logo-text">
              <span className="nav-logo-title">BETHESDA <em>TRUST</em></span>
              <span className="nav-logo-sub">Charitable Non-Profit</span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="nav-desktop">
            {navLinks.map((l) => (
              <a key={l.name} href={l.href} className="nav-link">{l.name}</a>
            ))}
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            <button onClick={toggleTheme} className="nav-theme-btn" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={18} color="#fbbf24" /> : <Moon size={18} />}
            </button>
            <button onClick={() => onOpenDonate()} className="btn btn-accent nav-donate-btn">
              <Heart size={15} fill="#fff" /> Donate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="nav-hamburger"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div className={`nav-overlay ${mobileMenuOpen ? 'nav-overlay-open' : ''}`} onClick={closeMobile}>
        <div className={`nav-drawer ${mobileMenuOpen ? 'nav-drawer-open' : ''}`} onClick={e => e.stopPropagation()}>
          <div className="nav-drawer-label">Navigation</div>
          {navLinks.map((l) => (
            <a key={l.name} href={l.href} className="nav-drawer-link" onClick={closeMobile}>
              <span>{l.name}</span>
              <ChevronRight size={16} color="var(--brand-primary)" />
            </a>
          ))}
          <div className="nav-drawer-actions">
            <button onClick={() => { closeMobile(); onOpenDonate(); }} className="btn btn-accent" style={{ width: '100%' }}>
              <Heart size={16} fill="#fff" /> Donate Now
            </button>
            <button onClick={() => { closeMobile(); onOpenVolunteer(); }} className="btn btn-outline" style={{ width: '100%' }}>
              <Users size={16} /> Join as Volunteer
            </button>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Top Banner ── */
        .nav-top-banner {
          background: linear-gradient(90deg, #0284c7, #0369a1);
          color: #fff; padding: 6px 0; font-size: 12px; font-weight: 500;
        }
        .top-banner-inner {
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 6px;
        }
        .top-banner-left { display: flex; align-items: center; gap: 6px; }
        .top-banner-links { display: flex; align-items: center; gap: 14px; }
        .top-banner-links a { display: inline-flex; align-items: center; gap: 4px; color: #fff; }
        .top-banner-links button {
          color: #e0f2fe; font-weight: 600; text-decoration: underline; font-size: 12px;
        }

        /* ── Header ── */
        .nav-header {
          position: sticky; top: 0; z-index: 200;
          background: var(--bg-primary); backdrop-filter: blur(16px);
          border-bottom: 1px solid transparent;
          padding: 14px 0; transition: var(--transition);
        }
        .nav-header.nav-scrolled {
          background: var(--bg-glass); border-bottom-color: var(--border-glass);
          padding: 10px 0;
        }
        .nav-row { display: flex; align-items: center; justify-content: space-between; }

        /* Logo */
        .nav-logo { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .nav-logo-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: linear-gradient(135deg, #0284c7, #38bdf8);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 3px 10px rgba(2,132,199,0.3);
        }
        .nav-logo-title {
          font-family: var(--font-heading); font-size: 17px; font-weight: 800;
          letter-spacing: -0.02em; color: var(--text-primary);
        }
        .nav-logo-title em { font-style: normal; color: var(--brand-primary); }
        .nav-logo-sub {
          display: block; font-size: 10px; color: var(--text-muted);
          font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;
        }

        /* Desktop Nav */
        .nav-desktop { display: flex; align-items: center; gap: 22px; }
        .nav-link {
          font-size: 14px; font-weight: 600; color: var(--text-secondary);
          transition: color 0.2s ease;
        }
        .nav-link:hover { color: var(--brand-primary); }

        /* Actions */
        .nav-actions { display: flex; align-items: center; gap: 10px; }
        .nav-theme-btn {
          width: 38px; height: 38px; border-radius: 50%;
          background: var(--bg-tertiary); border: 1px solid var(--border-color);
          display: flex; align-items: center; justify-content: center;
        }
        .nav-donate-btn { padding: 8px 16px !important; font-size: 13px !important; }

        /* Hamburger — hidden on desktop */
        .nav-hamburger {
          display: none;
          width: 42px; height: 42px; border-radius: 12px;
          background: var(--bg-tertiary); border: 1px solid var(--border-color);
          align-items: center; justify-content: center; color: var(--text-primary);
          transition: var(--transition);
        }

        /* ── Mobile Overlay ── */
        .nav-overlay {
          position: fixed; inset: 0; z-index: 300;
          background: rgba(15,23,42,0.5); backdrop-filter: blur(6px);
          opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
        }
        .nav-overlay-open { opacity: 1; pointer-events: auto; }

        /* ── Mobile Drawer ── */
        .nav-drawer {
          position: absolute; top: 0; right: 0;
          width: min(320px, 85vw); height: 100%;
          background: var(--bg-secondary); border-left: 1px solid var(--border-color);
          box-shadow: -8px 0 30px rgba(0,0,0,0.15);
          padding: 24px 20px; overflow-y: auto;
          display: flex; flex-direction: column; gap: 10px;
          transform: translateX(100%); transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-drawer-open { transform: translateX(0); }
        .nav-drawer-label {
          font-size: 11px; font-weight: 700; color: var(--text-muted);
          text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px;
        }
        .nav-drawer-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 13px 14px; border-radius: var(--radius-md);
          background: var(--bg-tertiary); font-size: 16px; font-weight: 700;
          color: var(--text-primary); transition: var(--transition);
        }
        .nav-drawer-link:active { background: var(--brand-light); }
        .nav-drawer-actions {
          display: flex; flex-direction: column; gap: 10px;
          margin-top: auto; padding-top: 16px;
          border-top: 1px solid var(--border-color);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .nav-desktop { display: none !important; }
          .nav-donate-btn { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (max-width: 480px) {
          .top-banner-inner { flex-direction: column; text-align: center; }
          .top-banner-links { justify-content: center; flex-wrap: wrap; }
          .nav-logo-title { font-size: 15px; }
          .nav-logo-sub { font-size: 9px; }
          .nav-logo-icon { width: 34px; height: 34px; }
        }
      `}</style>
    </>
  );
}
