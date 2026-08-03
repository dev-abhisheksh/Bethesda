import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../data/bethesdaData';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        
        <div className="section-title-wrap">
          <div className="section-badge">
            ❓ Frequently Asked Questions
          </div>
          <h2 className="section-heading">
            Got Questions? We Have Answers.
          </h2>
          <p className="section-subheading">
            Learn more about tax exemptions, donor transparency, and how your contributions make an impact.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                transition: 'var(--transition)'
              }}
            >
              <button
                onClick={() => toggle(idx)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  textAlign: 'left',
                  backgroundColor: 'transparent',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <HelpCircle size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {item.q}
                  </span>
                </div>
                <ChevronDown
                  size={20}
                  style={{
                    color: 'var(--text-muted)',
                    transform: openIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </button>

              {openIdx === idx && (
                <div style={{
                  padding: '0 24px 20px 56px',
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '16px',
                  backgroundColor: 'var(--bg-tertiary)'
                }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
