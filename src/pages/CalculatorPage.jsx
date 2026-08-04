import React from 'react';
import Calculator from '../components/Calculator';
import { TrendingUp, Heart, Zap, Calculator as CalcIcon } from 'lucide-react';

export default function CalculatorPage({ onOpenDonate }) {
  return (
    <main>
      {/* Calculator Component */}
      <Calculator onOpenDonate={onOpenDonate} />

      {/* Quick Stats */}
      <div style={{ background: 'var(--bg-secondary)', padding: '56px 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '28px', textAlign: 'center' }}>
            {[
              { icon: <Heart size={26} />, value: '₹500', label: 'Feeds a family for a day' },
              { icon: <Zap size={26} />, value: '₹2,500', label: 'Educates a child for a month' },
              { icon: <TrendingUp size={26} />, value: '₹10,000', label: 'Full medical check-up camp' },
              { icon: <CalcIcon size={26} />, value: '₹50,000', label: 'Builds a school desk & chair set' },
            ].map((s) => (
              <div key={s.label} style={{
                padding: '24px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ color: 'var(--brand-primary)', marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                <div style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '6px' }}>{s.value}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
