import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../data/bethesdaData';
import Card from '@mui/material/Card';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);
  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '840px' }}>

        <div className="section-title-wrap">
          <div className="section-badge">❓ FAQ</div>
          <h2 className="section-heading">Got Questions?</h2>
          <p className="section-subheading">
            Learn about tax exemptions, transparency, and how your contributions make an impact.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((item, idx) => (
            <Card
              key={idx}
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                bgcolor: 'var(--bg-card)',
                border: '1px solid var(--border-glass)',
                transition: 'all 0.3s ease',
                boxShadow: openIdx === idx ? 'var(--shadow-md)' : 'none',
              }}
            >
              <button
                onClick={() => toggle(idx)}
                style={{
                  width: '100%',
                  padding: '18px 22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '14px',
                  textAlign: 'left',
                  backgroundColor: 'transparent',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <HelpCircle size={18} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {item.q}
                  </span>
                </div>
                <ChevronDown
                  size={18}
                  style={{
                    color: 'var(--text-muted)',
                    transform: openIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0,
                  }}
                />
              </button>

              {openIdx === idx && (
                <div style={{
                  padding: '0 22px 18px 50px',
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '14px',
                  backgroundColor: 'var(--bg-tertiary)',
                }}>
                  {item.a}
                </div>
              )}
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
