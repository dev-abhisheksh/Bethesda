import React from 'react';
import Card from '@mui/material/Card';
import { Heart, ArrowRight, ShieldCheck, Award, Users, CheckCircle2 } from 'lucide-react';
import { heroData } from '../data/bethesdaData';

export default function Hero({ onOpenDonate }) {
  return (
    <section id="hero" style={{
      position: 'relative',
      padding: '60px 0 80px 0',
      overflow: 'hidden',
      background: 'var(--hero-bg)'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column Content */}
          <div>
            <div className="section-badge">
              {heroData.badge}
            </div>

            <h1 style={{
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: '800',
              lineHeight: '1.15',
              letterSpacing: '-0.03em',
              marginBottom: '20px',
              color: 'var(--text-primary)'
            }}>
              Building a World Where <span style={{
                color: 'var(--brand-primary)',
              }}>No Destitute Lives</span> in Despair
            </h1>

            <p style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '32px',
              maxWidth: '560px'
            }}>
              {heroData.subtitle}
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '36px' }} className="hero-btn-wrap">
              <button
                onClick={() => onOpenDonate()}
                className="btn btn-accent"
                style={{ padding: '14px 28px', fontSize: '15px' }}
              >
                <Heart size={20} fill="#ffffff" />
                <span>{heroData.primaryCTA}</span>
              </button>

              <a
                href="#causes"
                className="btn btn-outline"
                style={{ padding: '14px 28px', fontSize: '15px' }}
              >
                <span>{heroData.secondaryCTA}</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--brand-primary)' }} />
                <span>Section 80G Tax Relief</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--brand-primary)' }} />
                <span>FCRA International</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--brand-primary)' }} />
                <span>88% Field Allocation</span>
              </div>
            </div>
          </div>

          {/* Right Column Visual Media & Card Layering */}
          <div style={{ position: 'relative' }}>
            
            {/* Main Featured Image Card */}
            <Card sx={{ borderRadius: 4, bgcolor: 'var(--bg-card)', border: '1px solid var(--border-glass)' }} style={{
              padding: '10px',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative'
            }}>
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                alt="Bethesda Trust Child Welfare Project"
                style={{
                  width: '100%',
                  height: 'clamp(240px, 35vw, 380px)',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-lg)',
                }}
              />

              {/* In-Image Impact Pill */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                padding: '12px 16px',
                background: 'rgba(15, 23, 42, 0.88)',
                backdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-md)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                flexWrap: 'wrap'
              }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '500' }}>Active Campaign</div>
                  <div style={{ fontSize: '14px', fontWeight: '700' }}>Project Vidya: School Supplies for 500 Kids</div>
                </div>
                <div style={{
                  padding: '4px 12px',
                  background: 'var(--brand-primary)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '12px',
                  fontWeight: '700'
                }}>
                  76% Raised
                </div>
              </div>
            </Card>

            {/* Floating Stat Badge top-right */}
            <Card className="hero-floating-stat" sx={{ borderRadius: 4, bgcolor: 'var(--bg-card)', border: '1px solid var(--border-glass)' }} style={{
              position: 'absolute',
              top: '-16px',
              right: '-16px',
              padding: '14px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: 'var(--shadow-lg)',
              borderRadius: 'var(--radius-md)'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: 'var(--brand-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--brand-primary)'
              }}>
                <Award size={22} />
              </div>
              <div>
                <div style={{ fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: '800', color: 'var(--text-primary)' }}>85,000+</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600' }}>Lives Impacted</div>
              </div>
            </Card>

            {/* Floating Donor Trust Badge bottom-left */}
            <Card className="hero-floating-trust" sx={{ borderRadius: 4, bgcolor: 'var(--bg-card)', border: '1px solid var(--border-glass)' }} style={{
              position: 'absolute',
              bottom: '-16px',
              left: '-16px',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: 'var(--shadow-lg)',
              borderRadius: 'var(--radius-md)'
            }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--brand-primary)'
              }}>
                <Users size={18} />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)' }}>25,000+ Global Donors</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Verified Non-Profit Trust</div>
              </div>
            </Card>

          </div>

        </div>
      </div>
    </section>
  );
}
