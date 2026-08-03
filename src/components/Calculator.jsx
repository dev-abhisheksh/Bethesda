import React, { useState } from 'react';
import { Calculator as CalcIcon, Heart, Sparkles, CheckCircle } from 'lucide-react';
import { impactCalculatorTiers } from '../data/bethesdaData';

export default function Calculator({ onOpenDonate }) {
  const [selectedAmount, setSelectedAmount] = useState(60);

  // Find tier or calculate dynamic impact
  const currentTier = impactCalculatorTiers.find(t => t.amount === selectedAmount) || {
    amount: selectedAmount,
    impact: `Provides $${selectedAmount} worth of vital food, medicine, and emergency supplies to destitute families.`
  };

  return (
    <section id="calculator" className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center',
        }} className="calc-grid">
          
          {/* Left Column Description */}
          <div>
            <div className="section-badge">
              🧮 Interactive Impact Calculator
            </div>
            <h2 className="section-heading">
              See the Power of Your Contribution
            </h2>
            <p className="section-subheading" style={{ marginBottom: '32px' }}>
              At Bethesda Trust, every single dollar is stretched to maximize impact. Adjust the slider or pick an amount to see exactly how your gift transforms lives in real-time.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'var(--brand-light)', color: 'var(--brand-primary)', flexShrink: 0 }}>
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700' }}>Direct Field Deployment</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>88% of every donation goes straight into procuring food, medicine, and educational supplies.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'var(--brand-light)', color: 'var(--brand-primary)', flexShrink: 0 }}>
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700' }}>Verified Tax Benefit</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Receive an instant official 80G tax receipt for 50% tax exemption on your income.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Interactive Slider Card */}
          <div className="glass-card" style={{ padding: '32px', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CalcIcon size={24} style={{ color: 'var(--brand-primary)' }} />
                <span style={{ fontSize: '18px', fontWeight: '700' }}>Choose Donation Amount</span>
              </div>
              <span style={{ fontSize: '13px', color: 'var(--brand-accent)', fontWeight: '700' }}>Tax Exemption Eligible</span>
            </div>

            {/* Quick Amount Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '24px' }} className="preset-grid">
              {impactCalculatorTiers.map((tier) => (
                <button
                  key={tier.amount}
                  onClick={() => setSelectedAmount(tier.amount)}
                  style={{
                    padding: '12px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '16px',
                    fontWeight: '700',
                    backgroundColor: selectedAmount === tier.amount ? 'var(--brand-primary)' : 'var(--bg-tertiary)',
                    color: selectedAmount === tier.amount ? '#ffffff' : 'var(--text-primary)',
                    border: selectedAmount === tier.amount ? '1px solid var(--brand-primary)' : '1px solid var(--border-color)',
                    transition: 'var(--transition)'
                  }}
                >
                  ${tier.amount}
                </button>
              ))}
            </div>

            {/* Range Slider */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '14px', fontWeight: '600', color: 'var(--text-secondary)' }}>
                <span>Slide custom amount:</span>
                <strong style={{ fontSize: '18px', color: 'var(--brand-primary)' }}>${selectedAmount}</strong>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={selectedAmount}
                onChange={(e) => setSelectedAmount(Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '4px',
                  accentColor: 'var(--brand-primary)',
                  cursor: 'pointer'
                }}
              />
            </div>

            {/* Dynamic Result Output Card */}
            <div style={{
              padding: '20px',
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%)',
              border: '1.5px dashed var(--brand-primary)',
              marginBottom: '24px',
              textAlign: 'center',
            }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--brand-primary)', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px' }}>
                <Sparkles size={16} /> Real-World Impact Result
              </div>
              <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.3' }}>
                {currentTier.impact}
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={() => onOpenDonate('', selectedAmount)}
              className="btn btn-accent"
              style={{ width: '100%', padding: '16px', fontSize: '16px' }}
            >
              <Heart size={18} fill="#ffffff" />
              <span>Donate ${selectedAmount} & Make This Impact</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
