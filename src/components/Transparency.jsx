import React from 'react';
import { ShieldCheck, FileText, CheckCircle, Download, PieChart, Lock } from 'lucide-react';
import { financialBreakdown } from '../data/bethesdaData';

export default function Transparency() {
  return (
    <section id="transparency" className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div className="section-title-wrap">
          <div className="section-badge">
            🛡️ 100% Financial Transparency
          </div>
          <h2 className="section-heading">
            Where Every Single Dollar Goes
          </h2>
          <p className="section-subheading">
            We hold ourselves to the highest standards of financial integrity. Our accounts are audited annually by certified independent auditors.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="transparency-grid">
          
          {/* Visual Breakdown Progress Chart Card */}
          <div className="glass-card" style={{ padding: '36px', borderRadius: 'var(--radius-xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <PieChart size={24} style={{ color: 'var(--brand-primary)' }} />
                <h3 style={{ fontSize: '20px', fontWeight: '800' }}>Fund Allocation Breakdown</h3>
              </div>
              <span style={{ fontSize: '13px', padding: '4px 12px', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--brand-light)', color: 'var(--brand-primary)', fontWeight: '700' }}>
                FY 2024-2025 Audit
              </span>
            </div>

            {/* Stacked Progress Bar */}
            <div style={{
              width: '100%',
              height: '24px',
              backgroundColor: 'var(--bg-tertiary)',
              borderRadius: 'var(--radius-full)',
              overflow: 'hidden',
              display: 'flex',
              marginBottom: '32px',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
            }}>
              {financialBreakdown.allocations.map((alloc) => (
                <div
                  key={alloc.name}
                  style={{
                    width: `${alloc.percentage}%`,
                    height: '100%',
                    backgroundColor: alloc.color,
                    title: `${alloc.name}: ${alloc.percentage}%`
                  }}
                ></div>
              ))}
            </div>

            {/* Allocation List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {financialBreakdown.allocations.map((alloc) => (
                <div key={alloc.name} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: alloc.color, marginTop: '4px', flexShrink: 0 }}></span>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '700' }}>{alloc.name}</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{alloc.description}</p>
                    </div>
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: '800', color: alloc.color }}>
                    {alloc.percentage}%
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column Compliance & Guarantees */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ padding: '12px', borderRadius: '16px', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: 'var(--brand-primary)' }}>
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: '800' }}>Government Certified Trust</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Registered non-profit with full tax exemption benefits</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {financialBreakdown.transparencyGuarantees.map((guarantee, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px', borderRadius: 'var(--radius-md)' }}>
                  <CheckCircle size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>{guarantee}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => alert("Downloading Bethesda Trust Audited Financial Report (FY 2024-25).pdf...")}
                className="btn btn-outline"
                style={{ padding: '14px 24px', fontSize: '15px' }}
              >
                <Download size={18} />
                <span>Download FY25 Audit Report (PDF)</span>
              </button>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)', fontWeight: '600' }}>
                <Lock size={16} /> 256-bit SSL Encrypted Payments
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .transparency-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
