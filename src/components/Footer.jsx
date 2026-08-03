import React from 'react';
import Card from '@mui/material/Card';
import { Heart, ShieldCheck, ExternalLink, ArrowUp } from 'lucide-react';
import { trustInfo } from '../data/bethesdaData';
import { smoothScrollTo } from '../utils/smoothScroll';

export default function Footer({ onOpenDonate }) {
  const scrollToTop = () => {
    smoothScrollTo('#hero', 1000, 0);
  };

  return (
    <footer style={{
      backgroundColor: '#0a0f1d',
      color: '#94a3b8',
      padding: '72px 0 32px 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      fontSize: '14px'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: '40px',
          marginBottom: '56px'
        }} className="footer-grid">
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}>
                <Heart size={22} fill="#ffffff" />
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: '800', color: '#ffffff' }}>
                BETHESDA <span style={{ color: '#10b981' }}>TRUST</span>
              </div>
            </div>

            <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '20px', maxWidth: '360px' }}>
              {trustInfo.tagline}. Dedicated to orphan education, elder shelter, free medical relief, and zero-hunger initiatives.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ padding: '4px 12px', borderRadius: 'var(--radius-full)', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399', fontSize: '12px', fontWeight: '700' }}>
                80G Certified
              </span>
              <span style={{ padding: '4px 12px', borderRadius: 'var(--radius-full)', backgroundColor: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', fontSize: '12px', fontWeight: '700' }}>
                FCRA Approved
              </span>
              <span style={{ padding: '4px 12px', borderRadius: 'var(--radius-full)', backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', fontSize: '12px', fontWeight: '700' }}>
                12A Registered
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '700', marginBottom: '20px' }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#hero" style={{ color: '#cbd5e1' }}>Home</a>
              <a href="#causes" style={{ color: '#cbd5e1' }}>Our Causes</a>
              <a href="#impact" style={{ color: '#cbd5e1' }}>Impact Metrics</a>
              <a href="#calculator" style={{ color: '#cbd5e1' }}>Impact Calculator</a>
            </div>
          </div>

          {/* Governance & Trust */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '700', marginBottom: '20px' }}>Governance</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#transparency" style={{ color: '#cbd5e1' }}>100% Financial Audits</a>
              <a href="#faq" style={{ color: '#cbd5e1' }}>Tax Exemption (80G)</a>
              <a href="#volunteer" style={{ color: '#cbd5e1' }}>Volunteer Network</a>
              <a href="#contact" style={{ color: '#cbd5e1' }}>Head Office Location</a>
            </div>
          </div>

          {/* Direct Support Card */}
          <Card sx={{ borderRadius: 4, bgcolor: 'var(--bg-card)', border: '1px solid var(--border-glass)' }} style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px'
          }}>
            <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>Transform a Life Today</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '20px' }}>
              Your tax-deductible contribution provides hot meals, medicines, and schooling immediately.
            </p>
            <button
              onClick={() => onOpenDonate()}
              className="btn btn-accent"
              style={{ width: '100%', padding: '12px', fontSize: '15px' }}
            >
              <Heart size={16} fill="#ffffff" />
              <span>Donate Now</span>
            </button>
          </Card>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '13px',
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} Bethesda Charitable Trust. All rights reserved. Registered under Indian Trusts Act.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>Reg ID: {trustInfo.registration.trustReg}</span>
            <button
              onClick={scrollToTop}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
