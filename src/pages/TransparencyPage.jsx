import React from 'react';
import Transparency from '../components/Transparency';
import FAQSection from '../components/FAQSection';
import { ShieldCheck, FileText, BarChart2 } from 'lucide-react';

export default function TransparencyPage() {
  return (
    <main>
      {/* How Funds Are Used */}
      <div className="container" style={{ padding: '64px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '16px' }}>
          {[
            { icon: <BarChart2 size={24} />, pct: '88%', label: 'Directly to Programs', color: 'var(--brand-primary)' },
            { icon: <FileText size={24} />, pct: '7%', label: 'Administration', color: '#f59e0b' },
            { icon: <ShieldCheck size={24} />, pct: '5%', label: 'Fundraising & Outreach', color: '#8b5cf6' },
          ].map((item) => (
            <div key={item.label} style={{
              padding: '28px',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ color: item.color, marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
              <div style={{ fontSize: '36px', fontWeight: '900', color: item.color, marginBottom: '6px' }}>{item.pct}</div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: '600' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Transparency Section + FAQ */}
      <Transparency />
      <FAQSection />
    </main>
  );
}
