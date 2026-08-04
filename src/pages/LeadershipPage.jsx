import React from 'react';
import LeadershipSection from '../components/LeadershipSection';
import { Heart, Users, Award, Star } from 'lucide-react';

export default function LeadershipPage() {
  return (
    <main style={{ paddingTop: '20px' }}>
      {/* Page Hero Banner */}
      <div style={{
        background: 'radial-gradient(circle at 60% 40%, rgba(2,132,199,0.15) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(16,185,129,0.1) 0%, transparent 50%)',
        padding: '72px 0 48px',
        textAlign: 'center',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container">
          <div className="section-badge" style={{ justifyContent: 'center', display: 'flex', margin: '0 auto 16px' }}>
            <Users size={14} /> Our Team
          </div>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: '800',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '16px'
          }}>
            Meet Our <span style={{ color: 'var(--brand-primary)' }}>Leadership</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto', lineHeight: '1.6' }}>
            The dedicated trustees and directors who guide Bethesda Trust with integrity, compassion, and transparency.
          </p>
        </div>
      </div>

      {/* Leadership Cards */}
      <LeadershipSection />

      {/* Values Strip */}
      <div style={{ background: 'var(--bg-secondary)', padding: '56px 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {[
              { icon: <Heart size={28} />, label: 'Compassion First', desc: 'Every decision rooted in care' },
              { icon: <Award size={28} />, label: '25+ Years', desc: 'Of trusted governance' },
              { icon: <Users size={28} />, label: '50+ Trustees', desc: 'Across India & abroad' },
              { icon: <Star size={28} />, label: 'Zero Corruption', desc: 'Full audit transparency' },
            ].map((v) => (
              <div key={v.label}>
                <div style={{ color: 'var(--brand-primary)', marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>{v.icon}</div>
                <div style={{ fontWeight: '700', fontSize: '16px', color: 'var(--text-primary)', marginBottom: '6px' }}>{v.label}</div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
