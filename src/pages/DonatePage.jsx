import React, { useEffect } from 'react';
import DonationModal from '../components/DonationModal';
import { Heart, ShieldCheck, CheckCircle2, Star, Zap, Users } from 'lucide-react';

const tiers = [
  { label: 'Supporter', amount: 500, desc: 'Feeds a family for a day', color: '#10b981', icon: <Heart size={20} /> },
  { label: 'Champion', amount: 2500, desc: 'Educates a child for a month', color: '#0284c7', icon: <Star size={20} />, popular: true },
  { label: 'Guardian', amount: 10000, desc: 'Full medical camp for 20 families', color: '#8b5cf6', icon: <ShieldCheck size={20} /> },
  { label: 'Patron', amount: 50000, desc: 'Builds a classroom corner', color: '#f59e0b', icon: <Zap size={20} /> },
];

export default function DonatePage({ onOpenDonate }) {
  // Automatically open the modal when this page is visited
  useEffect(() => {
    // Small delay to let layout render first
    const t = setTimeout(() => onOpenDonate('', 2500), 300);
    return () => clearTimeout(t);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main style={{ paddingTop: '20px' }}>
      {/* Page Hero Banner */}
      <div style={{
        background: 'radial-gradient(circle at 60% 30%, rgba(16,185,129,0.15) 0%, transparent 55%), radial-gradient(circle at 10% 80%, rgba(245,158,11,0.1) 0%, transparent 50%)',
        padding: '72px 0 56px',
        textAlign: 'center',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container">
          <div className="section-badge" style={{ justifyContent: 'center', display: 'flex', margin: '0 auto 16px' }}>
            <Heart size={14} fill="currentColor" /> Donate
          </div>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: '800',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '16px'
          }}>
            Transform a Life <span style={{ color: 'var(--brand-primary)' }}>Today</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto 36px', lineHeight: '1.6' }}>
            100% tax-deductible. Every rupee reaches those who need it most — verified and transparent.
          </p>

          {/* Trust chips */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['80G Tax Deductible', 'FCRA Approved', 'Secure Payments', '25,000+ Donors'].map((t) => (
              <span key={t} style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                padding: '6px 14px', borderRadius: 'var(--radius-full)',
                background: 'var(--bg-card)', border: '1px solid var(--border-color)',
                color: 'var(--text-secondary)', fontSize: '13px', fontWeight: '600'
              }}>
                <CheckCircle2 size={13} color="var(--brand-primary)" /> {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Giving Tiers */}
      <div className="container" style={{ padding: '64px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px' }}>
            Choose Your Impact Level
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>Click any tier to open the secure donation form</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', maxWidth: '960px', margin: '0 auto' }}>
          {tiers.map((tier) => (
            <button
              key={tier.label}
              onClick={() => onOpenDonate('', tier.amount)}
              style={{
                position: 'relative',
                padding: '28px 24px',
                borderRadius: 'var(--radius-xl)',
                background: 'var(--bg-card)',
                border: `2px solid ${tier.popular ? tier.color : 'var(--border-color)'}`,
                textAlign: 'left',
                cursor: 'pointer',
                boxShadow: tier.popular ? `0 8px 30px ${tier.color}22` : 'var(--shadow-sm)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 16px 40px ${tier.color}33`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = tier.popular ? `0 8px 30px ${tier.color}22` : 'var(--shadow-sm)';
              }}
            >
              {tier.popular && (
                <span style={{
                  position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                  background: tier.color, color: '#fff', fontSize: '11px', fontWeight: '800',
                  padding: '3px 12px', borderRadius: 'var(--radius-full)', letterSpacing: '0.06em', whiteSpace: 'nowrap'
                }}>MOST POPULAR</span>
              )}
              <div style={{ color: tier.color, marginBottom: '14px' }}>{tier.icon}</div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>{tier.label}</div>
              <div style={{ fontSize: '30px', fontWeight: '900', color: 'var(--text-primary)', marginBottom: '8px' }}>₹{tier.amount.toLocaleString('en-IN')}</div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{tier.desc}</div>
            </button>
          ))}
        </div>

        {/* Custom amount CTA */}
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <button
            onClick={() => onOpenDonate()}
            className="btn btn-accent"
            style={{ padding: '14px 36px', fontSize: '16px' }}
          >
            <Heart size={18} fill="#fff" /> Donate a Custom Amount
          </button>
        </div>
      </div>

      {/* Why Donate Section */}
      <div style={{ background: 'var(--bg-secondary)', padding: '56px 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '36px' }}>
            Why Thousands Trust Bethesda Trust
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {[
              { icon: <ShieldCheck size={22} />, label: '88% Field Impact', desc: 'Almost every rupee goes directly to beneficiaries' },
              { icon: <CheckCircle2 size={22} />, label: 'Annual Audits', desc: 'Independently verified financials, every year' },
              { icon: <Users size={22} />, label: '85,000+ Lives', desc: 'Real people impacted across 12 states' },
              { icon: <Star size={22} />, label: '25+ Years Trust', desc: 'Serving since 1998 with zero controversies' },
            ].map((item) => (
              <div key={item.label} style={{
                padding: '24px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                textAlign: 'center'
              }}>
                <div style={{ color: 'var(--brand-primary)', marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                <div style={{ fontWeight: '700', fontSize: '15px', color: 'var(--text-primary)', marginBottom: '6px' }}>{item.label}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
