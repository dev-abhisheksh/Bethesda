import React from 'react';
import LeadershipSection from '../components/LeadershipSection';
import { Heart, Users, Award, Star } from 'lucide-react';

export default function LeadershipPage() {
  return (
    <main>
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
