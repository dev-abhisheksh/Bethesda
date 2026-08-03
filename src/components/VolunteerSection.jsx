import React, { useState } from 'react';
import { Users, Heart, CheckCircle2, Send, Clock, Globe } from 'lucide-react';
import { trustInfo } from '../data/bethesdaData';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function VolunteerSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Teaching & Education',
    availability: 'Weekends',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="volunteer" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="volunteer-grid">
          
          {/* Left Description */}
          <div>
            <div className="section-badge">
              🌟 Join Hands With Us
            </div>
            <h2 className="section-heading">
              Become a Bethesda Volunteer or Partner
            </h2>
            <p className="section-subheading" style={{ marginBottom: '32px' }}>
              Whether you can offer 2 hours a week teaching children, medical expertise, or corporate CSR sponsorship, your skills can change lives forever.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ padding: '10px', borderRadius: '12px', backgroundColor: 'var(--brand-light)', color: 'var(--brand-primary)' }}>
                  <Users size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700' }}>Active Volunteer Network</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Over 1,200+ passionate volunteers supporting field operations across cities.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ padding: '10px', borderRadius: '12px', backgroundColor: 'var(--brand-light)', color: 'var(--brand-primary)' }}>
                  <Clock size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700' }}>Flexible Roles</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Remote mentoring, weekend food drives, medical camps, or digital marketing support.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ padding: '10px', borderRadius: '12px', backgroundColor: 'var(--brand-light)', color: 'var(--brand-primary)' }}>
                  <Globe size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700' }}>Official Certificate of Volunteering</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Earn recognized volunteer hours certification for college or career.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <Card sx={{ borderRadius: 4, p: '36px', bgcolor: 'var(--bg-card)', border: '1px solid var(--border-glass)', boxShadow: 'var(--shadow-md)' }}>
            <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: 'clamp(18px, 4vw, 22px)', fontWeight: '800', marginBottom: '6px' }}>Volunteer Application</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>Fill out your details and our team will get in touch within 24 hours.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '6px', color: 'var(--text-secondary)' }}>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div className="form-flex-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    <div style={{ flex: '1 1 250px', minWidth: 0 }}>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '6px', color: 'var(--text-secondary)' }}>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                      />
                    </div>
                    <div style={{ flex: '1 1 250px', minWidth: 0 }}>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '6px', color: 'var(--text-secondary)' }}>Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                      />
                    </div>
                  </div>

                  <div className="form-flex-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    <div style={{ flex: '1 1 250px', minWidth: 0 }}>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '6px', color: 'var(--text-secondary)' }}>Preferred Field</label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                      >
                        <option>Teaching & Education</option>
                        <option>Elderly Care Companion</option>
                        <option>Medical & Nursing Relief</option>
                        <option>Food Distribution Drive</option>
                        <option>Digital Marketing & Tech</option>
                      </select>
                    </div>
                    <div style={{ flex: '1 1 250px', minWidth: 0 }}>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '6px', color: 'var(--text-secondary)' }}>Availability</label>
                      <select
                        value={formData.availability}
                        onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                      >
                        <option>Weekends Only</option>
                        <option>Weekdays (Part-time)</option>
                        <option>Full-Time On-site</option>
                        <option>Remote / Virtual</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '6px', color: 'var(--text-secondary)' }}>Why do you want to join Bethesda Trust?</label>
                    <textarea
                      rows="3"
                      placeholder="Share a short note about your motivation..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                  <span>Submit Application</span>
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: 'var(--brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: 'clamp(18px, 4vw, 24px)', fontWeight: '800', marginBottom: '8px' }}>Application Received!</h3>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  Thank you, <strong>{formData.name}</strong>. Our volunteer coordinator will reach out to you via email within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ padding: '10px 24px' }}>
                  Submit Another Form
                </button>
              </div>
            )}
            </CardContent>
          </Card>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .volunteer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
