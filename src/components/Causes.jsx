import React, { useState } from 'react';
import { Heart, Users, Target, ArrowUpRight } from 'lucide-react';
import { causes } from '../data/bethesdaData';

export default function Causes({ onOpenDonate }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Education', 'Elder Care', 'Healthcare', 'Food Security', 'Empowerment'];

  const filteredCauses = activeCategory === 'All'
    ? causes
    : causes.filter(c => c.category === activeCategory);

  return (
    <section id="causes" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        <div className="section-title-wrap">
          <div className="section-badge">
            🤝 Urgent Humanitarian Causes
          </div>
          <h2 className="section-heading">
            Choose a Cause & Directly Impact a Life Today
          </h2>
          <p className="section-subheading">
            Your generous contributions fund transparent, audited programs with real-time updates and measurable outcomes.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '48px',
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-full)',
                fontSize: '15px',
                fontWeight: '600',
                backgroundColor: activeCategory === cat ? 'var(--brand-primary)' : 'var(--bg-card)',
                color: activeCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                border: activeCategory === cat ? '1px solid var(--brand-primary)' : '1px solid var(--border-color)',
                boxShadow: activeCategory === cat ? '0 4px 12px rgba(5, 150, 105, 0.25)' : 'none',
                transition: 'var(--transition)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cause Cards Grid */}
        <div className="grid-3">
          {filteredCauses.map((cause) => {
            const percent = Math.min(100, Math.round((cause.raised / cause.goal) * 100));

            return (
              <div
                key={cause.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                }}
              >
                {/* Cause Image & Urgency Badge */}
                <div className="cause-img" style={{ position: 'relative', height: 'clamp(170px, 28vw, 220px)', overflow: 'hidden' }}>
                  <img
                    src={cause.image}
                    alt={cause.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    padding: '6px 14px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: '700',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></span>
                    {cause.urgency}
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    padding: '6px 14px',
                    background: 'var(--brand-light)',
                    color: 'var(--brand-primary)',
                    fontSize: '12px',
                    fontWeight: '700',
                    borderRadius: 'var(--radius-full)'
                  }}>
                    {cause.category}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', fontWeight: '700', marginBottom: '12px', lineHeight: '1.3' }}>
                      {cause.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.5' }}>
                      {cause.shortDesc}
                    </p>

                    {/* Progress Bar */}
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: '700', marginBottom: '6px' }}>
                        <span style={{ color: 'var(--brand-primary)' }}>{percent}% Funded</span>
                        <span style={{ color: 'var(--text-muted)' }}>Goal: ${cause.goal.toLocaleString()}</span>
                      </div>
                      <div style={{
                        width: '100%',
                        height: '10px',
                        backgroundColor: 'var(--bg-tertiary)',
                        borderRadius: 'var(--radius-full)',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${percent}%`,
                          height: '100%',
                          background: 'linear-gradient(90deg, #059669 0%, #10b981 100%)',
                          borderRadius: 'var(--radius-full)',
                          transition: 'width 1s ease-in-out'
                        }}></div>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      backgroundColor: 'var(--bg-tertiary)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '13px',
                      marginBottom: '20px'
                    }}>
                      <div>
                        <span style={{ color: 'var(--text-muted)' }}>Raised: </span>
                        <strong style={{ color: 'var(--text-primary)', fontSize: '15px' }}>${cause.raised.toLocaleString()}</strong>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)' }}>
                        <Users size={14} />
                        <span><strong>{cause.donors}</strong> Donors</span>
                      </div>
                    </div>

                    <div style={{ fontSize: '13px', color: 'var(--brand-primary)', fontWeight: '600', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Target size={15} />
                      <span>{cause.impactPoint}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenDonate(cause.title)}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '14px', fontSize: '15px' }}
                  >
                    <Heart size={18} fill="#ffffff" />
                    <span>Support This Cause</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
