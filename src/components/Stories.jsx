import React, { useState } from 'react';
import { Quote, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { stories } from '../data/bethesdaData';

export default function Stories() {
  const [activeIdx, setActiveIdx] = useState(0);

  const current = stories[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section id="stories" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        <div className="section-title-wrap">
          <div className="section-badge">
            💬 Real Lives Changed
          </div>
          <h2 className="section-heading">
            Stories of Hope & Renewal
          </h2>
          <p className="section-subheading">
            Behind every stat is a real human life given dignity, education, and health.
          </p>
        </div>

        {/* Featured Story Slider Card */}
        <div className="glass-card story-card" style={{
          padding: '36px',
          borderRadius: 'var(--radius-xl)',
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '320px 1fr',
            gap: '40px',
            alignItems: 'center',
          }} className="story-grid">
            
            {/* Story Photo */}
            <div className="story-img-container" style={{ position: 'relative', height: '320px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <img
                src={current.image}
                alt={current.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                padding: '6px 14px',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(8px)',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: '700',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <MapPin size={14} style={{ color: 'var(--brand-primary)' }} />
                <span>{current.location}</span>
              </div>
            </div>

            {/* Story Details & Quote */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <span style={{
                  padding: '4px 12px',
                  backgroundColor: 'var(--brand-light)',
                  color: 'var(--brand-primary)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '13px',
                  fontWeight: '700'
                }}>
                  {current.category}
                </span>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '600' }}>
                  Age: {current.age}
                </span>
              </div>

              <div style={{ position: 'relative', marginBottom: '20px' }}>
                <Quote size={36} style={{ color: 'var(--brand-primary)', opacity: 0.25, position: 'absolute', top: '-10px', left: '-10px' }} />
                <p style={{
                  fontSize: 'clamp(18px, 2.5vw, 22px)',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  lineHeight: '1.4',
                  fontStyle: 'italic',
                  position: 'relative',
                  zIndex: 1,
                  paddingLeft: '16px'
                }}>
                  "{current.quote}"
                </p>
              </div>

              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
                {current.storyText}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-primary)' }}>{current.name}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--brand-primary)', fontWeight: '600' }}>Beneficiary of Bethesda Trust</p>
                </div>

                {/* Slider Controls */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Story"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--bg-tertiary)',
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Story"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--brand-primary)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
