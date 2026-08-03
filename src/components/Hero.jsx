import React from 'react';
import { Heart, ArrowRight, ShieldCheck, Award, Users, CheckCircle2 } from 'lucide-react';
import { heroData } from '../data/bethesdaData';

export default function Hero({ onOpenDonate }) {
  return (
    <section id="hero" style={{
      position: 'relative',
      padding: '80px 0 100px 0',
      overflow: 'hidden',
      background: 'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.12) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(245, 158, 11, 0.08) 0%, transparent 40%)'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column Content */}
          <div>
            <div className="section-badge">
              {heroData.badge}
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: '800',
              lineHeight: '1.15',
              letterSpacing: '-0.03em',
              marginBottom: '24px',
              color: 'var(--text-primary)'
            }}>
              Building a World Where <span style={{
                background: 'linear-gradient(135deg, var(--brand-primary) 0%, #059669 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>No Destitute Lives</span> in Despair
            </h1>

            <p style={{
              fontSize: '19px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '36px',
              maxWidth: '560px'
            }}>
              {heroData.subtitle}
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <button
                onClick={() => onOpenDonate()}
                className="btn btn-accent"
                style={{ padding: '16px 36px', fontSize: '17px' }}
              >
                <Heart size={20} fill="#ffffff" />
                <span>{heroData.primaryCTA}</span>
              </button>

              <a
                href="#causes"
                className="btn btn-outline"
                style={{ padding: '16px 32px', fontSize: '17px' }}
              >
                <span>{heroData.secondaryCTA}</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', pt: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--brand-primary)' }} />
                <span>Section 80G Tax Relief</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--brand-primary)' }} />
                <span>FCRA International</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--brand-primary)' }} />
                <span>88% Field Allocation</span>
              </div>
            </div>
          </div>

          {/* Right Column Visual Media & Card Layering */}
          <div style={{ position: 'relative' }}>
            
            {/* Main Featured Image Card */}
            <div className="glass-card" style={{
              padding: '12px',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                alt="Bethesda Trust Child Welfare Project"
                style={{
                  width: '100%',
                  height: '380px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-lg)',
                }}
              />

              {/* In-Image Impact Pill */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                padding: '16px 20px',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-md)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '500' }}>Active Campaign</div>
                  <div style={{ fontSize: '16px', fontWeight: '700' }}>Project Vidya: School Supplies for 500 Kids</div>
                </div>
                <div style={{
                  padding: '6px 14px',
                  background: 'var(--brand-primary)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '13px',
                  fontWeight: '700'
                }}>
                  76% Raised
                </div>
              </div>
            </div>

            {/* Floating Floating Stat Badge top-right */}
            <div className="glass-card" style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              boxShadow: 'var(--shadow-lg)',
              borderRadius: 'var(--radius-md)'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f59e0b'
              }}>
                <Award size={24} />
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)' }}>85,000+</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600' }}>Lives Impacted</div>
              </div>
            </div>

            {/* Floating Donor Trust Badge bottom-left */}
            <div className="glass-card" style={{
              position: 'absolute',
              bottom: '-20px',
              left: '-20px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: 'var(--shadow-lg)',
              borderRadius: 'var(--radius-md)'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--brand-primary)'
              }}>
                <Users size={20} />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)' }}>25,000+ Global Donors</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Verified Non-Profit Trust</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
