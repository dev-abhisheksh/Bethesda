import React from 'react';
import { Utensils, GraduationCap, HeartHandshake, Stethoscope } from 'lucide-react';
import { impactMetrics } from '../data/bethesdaData';

export default function ImpactCounters() {
  const iconMap = {
    Utensils: <Utensils size={32} />,
    GraduationCap: <GraduationCap size={32} />,
    HeartHandshake: <HeartHandshake size={32} />,
    Stethoscope: <Stethoscope size={32} />,
  };

  return (
    <section id="impact" className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div className="section-title-wrap">
          <div className="section-badge">
            📊 Measured Real-World Impact
          </div>
          <h2 className="section-heading">
            Transforming Compassion into Concrete Results
          </h2>
          <p className="section-subheading">
            Every donation translates directly into meals, education, medical surgeries, and shelter for those who need it most.
          </p>
        </div>

        <div className="grid-4">
          {impactMetrics.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: '32px 24px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Icon Header */}
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                backgroundColor: `${item.color}15`,
                color: item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
              }}>
                {iconMap[item.icon]}
              </div>

              {/* Counter Value */}
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '38px',
                fontWeight: '800',
                color: 'var(--text-primary)',
                marginBottom: '4px',
                letterSpacing: '-0.02em',
              }}>
                {item.value.toLocaleString()}{item.suffix}
              </div>

              {/* Title */}
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '10px' }}>
                {item.label}
              </h3>

              {/* Description */}
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
