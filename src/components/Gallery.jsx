import React, { useState } from 'react';
import { galleryItems } from '../data/bethesdaData';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Healthcare', 'Education', 'Relief', 'Elder Care', 'Empowerment'];

  const items = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div className="section-title-wrap">
          <div className="section-badge">
            📸 Field Action Gallery
          </div>
          <h2 className="section-heading">
            Witnessing Compassion in Action
          </h2>
          <p className="section-subheading">
            A glance into our daily efforts on the ground across schools, mobile clinics, and care homes.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                fontSize: '14px',
                fontWeight: '600',
                backgroundColor: activeFilter === cat ? 'var(--brand-primary)' : 'var(--bg-tertiary)',
                color: activeFilter === cat ? '#ffffff' : 'var(--text-secondary)',
                border: '1px solid var(--border-color)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                position: 'relative',
                height: '260px',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, transparent 60%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '20px',
                color: '#ffffff'
              }}>
                <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--brand-accent)', textTransform: 'uppercase' }}>
                  {item.category}
                </span>
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff' }}>
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
