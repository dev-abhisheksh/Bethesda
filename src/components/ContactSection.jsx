import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Shield } from 'lucide-react';
import { trustInfo } from '../data/bethesdaData';

export default function ContactSection() {
  const [formSent, setFormSent] = useState(false);
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    setNewsletterSent(true);
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }} className="contact-grid">
          
          {/* Left Column Information */}
          <div>
            <div className="section-badge">
              📍 Contact & Headquarters
            </div>
            <h2 className="section-heading">
              Get in Touch With Bethesda Trust
            </h2>
            <p className="section-subheading" style={{ marginBottom: '32px' }}>
              Have questions about tax receipts, corporate partnerships, or visiting our elder care home? We'd love to hear from you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ padding: '12px', borderRadius: '14px', backgroundColor: 'var(--brand-light)', color: 'var(--brand-primary)', flexShrink: 0 }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700' }}>Head Office Address</h4>
                  <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>{trustInfo.contact.address}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ padding: '12px', borderRadius: '14px', backgroundColor: 'var(--brand-light)', color: 'var(--brand-primary)', flexShrink: 0 }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700' }}>Direct Phone Helpline</h4>
                  <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>{trustInfo.contact.phone} / {trustInfo.contact.altPhone}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ padding: '12px', borderRadius: '14px', backgroundColor: 'var(--brand-light)', color: 'var(--brand-primary)', flexShrink: 0 }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700' }}>Official Email</h4>
                  <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>{trustInfo.contact.email}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ padding: '12px', borderRadius: '14px', backgroundColor: 'var(--brand-light)', color: 'var(--brand-primary)', flexShrink: 0 }}>
                  <Clock size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700' }}>Working Hours</h4>
                  <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>{trustInfo.contact.workingHours}</p>
                </div>
              </div>
            </div>

            {/* Newsletter Box */}
            <div className="glass-card" style={{ padding: '24px', borderRadius: 'var(--radius-lg)' }}>
              <h4 style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: '700', marginBottom: '6px' }}>Subscribe to Field Updates</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Receive monthly impact reports and photos directly in your inbox. No spam.
              </p>
              {!newsletterSent ? (
                <form onSubmit={handleNewsletter} className="newsletter-form" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ flex: '1 1 200px', minWidth: 0, padding: '10px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                  />
                  <button type="submit" className="btn btn-primary" style={{ padding: '10px 18px', fontSize: '14px' }}>
                    Subscribe
                  </button>
                </form>
              ) : (
                <div style={{ fontSize: '14px', color: 'var(--brand-primary)', fontWeight: '700' }}>
                  ✓ Thank you! You're subscribed to quarterly field updates.
                </div>
              )}
            </div>

          </div>

          {/* Right Column Contact Form */}
          <div className="glass-card" style={{ padding: '36px', borderRadius: 'var(--radius-xl)' }}>
            {!formSent ? (
              <form onSubmit={handleFormSubmit}>
                <h3 style={{ fontSize: 'clamp(18px, 4vw, 22px)', fontWeight: '800', marginBottom: '6px' }}>Send Us a Message</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>We typically respond to inquiries within 4-6 hours.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '6px', color: 'var(--text-secondary)' }}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '6px', color: 'var(--text-secondary)' }}>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '6px', color: 'var(--text-secondary)' }}>Subject</label>
                    <input
                      type="text"
                      placeholder="Inquiry about 80G tax receipt / CSR partnership"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '6px', color: 'var(--text-secondary)' }}>Your Message *</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="How can we assist you?"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '14px', fontSize: '16px' }}
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: 'var(--brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: '800', marginBottom: '8px' }}>Message Sent!</h3>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  Thank you for reaching out to Bethesda Charitable Trust. Our team will get back to you shortly.
                </p>
                <button onClick={() => setFormSent(false)} className="btn btn-outline" style={{ padding: '10px 24px' }}>
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
