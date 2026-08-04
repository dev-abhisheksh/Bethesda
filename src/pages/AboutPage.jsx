import React from 'react';
import Gallery from '../components/Gallery';
import VolunteerSection from '../components/VolunteerSection';
import ContactSection from '../components/ContactSection';
import { Info, Globe, MapPin, Mail } from 'lucide-react';
import { trustInfo } from '../data/bethesdaData';

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '20px' }}>
      {/* Page Hero Banner */}
      <div style={{
        background: 'radial-gradient(circle at 50% 30%, rgba(16,185,129,0.12) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(2,132,199,0.08) 0%, transparent 50%)',
        padding: '72px 0 48px',
        textAlign: 'center',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container">

          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: '800',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '16px'
          }}>
            About <span style={{ color: 'var(--brand-primary)' }}>Bethesda Trust</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto 32px', lineHeight: '1.6' }}>
            {trustInfo.tagline} — empowering the most vulnerable through education, nutrition, healthcare, and sustainable livelihoods.
          </p>

          {/* Quick Contact Chips */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`mailto:${trustInfo.contact.email}`} style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '8px 16px', borderRadius: 'var(--radius-full)',
              background: 'var(--bg-card)', border: '1px solid var(--border-color)',
              color: 'var(--text-primary)', fontSize: '14px', fontWeight: '600'
            }}>
              <Mail size={14} color="var(--brand-primary)" /> {trustInfo.contact.email}
            </a>
            <span style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '8px 16px', borderRadius: 'var(--radius-full)',
              background: 'var(--bg-card)', border: '1px solid var(--border-color)',
              color: 'var(--text-primary)', fontSize: '14px', fontWeight: '600'
            }}>
              <MapPin size={14} color="var(--brand-primary)" /> {trustInfo.contact.city}, {trustInfo.contact.state}
            </span>
            <span style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '8px 16px', borderRadius: 'var(--radius-full)',
              background: 'var(--bg-card)', border: '1px solid var(--border-color)',
              color: 'var(--text-primary)', fontSize: '14px', fontWeight: '600'
            }}>
              <Globe size={14} color="var(--brand-primary)" /> Est. {trustInfo.established}
            </span>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container" style={{ padding: '64px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
          {[
            {
              title: 'Our Mission',
              color: 'var(--brand-primary)',
              text: 'To reach the unreached — providing food security, quality education, free medical care, and dignified housing to orphans, elders, and the destitute across rural and semi-urban India.'
            },
            {
              title: 'Our Vision',
              color: '#f59e0b',
              text: 'A society where no child goes to sleep hungry, no elder lives without shelter, and every family has access to healthcare — regardless of faith, caste, or economic status.'
            },
            {
              title: 'Our Values',
              color: '#8b5cf6',
              text: 'Transparency in every rupee spent. Compassion in every action taken. Accountability to our donors, beneficiaries, and the communities we serve. Faith that drives hope.'
            },
          ].map((item) => (
            <div key={item.title} style={{
              padding: '28px',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{ width: '4px', height: '32px', borderRadius: '2px', background: item.color, marginBottom: '16px' }} />
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <Gallery />

      {/* Volunteer & Contact */}
      <VolunteerSection />
      <ContactSection />
    </main>
  );
}
