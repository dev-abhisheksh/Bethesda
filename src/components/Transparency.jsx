import React from 'react';
import { ShieldCheck, CheckCircle, Download, PieChart, Lock } from 'lucide-react';
import { financialBreakdown } from '../data/bethesdaData';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Transparency() {
  return (
    <section id="transparency" className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">

        <div className="section-title-wrap">
          <div className="section-badge">🛡️ Financial Transparency</div>
          <h2 className="section-heading">Where Every Dollar Goes</h2>
          <p className="section-subheading">
            Accounts audited annually by certified independent auditors.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }} className="transparency-grid">

          {/* Fund Allocation Chart Card */}
          <Card sx={{ borderRadius: 4, p: 4, bgcolor: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid var(--border-glass)', boxShadow: 'var(--shadow-md)' }}>
            <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <PieChart size={22} style={{ color: 'var(--brand-primary)' }} />
                  <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: 'var(--font-heading)', fontSize: 'clamp(16px, 2.5vw, 20px)' }}>Fund Allocation</Typography>
                </div>
                <span style={{ fontSize: '12px', padding: '3px 10px', borderRadius: '9999px', backgroundColor: 'var(--brand-light)', color: 'var(--brand-primary)', fontWeight: 700 }}>
                  FY 2024–25
                </span>
              </div>

              {/* Stacked Bar */}
              <div style={{ width: '100%', height: '20px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '9999px', overflow: 'hidden', display: 'flex', marginBottom: '28px', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.08)' }}>
                {financialBreakdown.allocations.map((a) => (
                  <div key={a.name} style={{ width: `${a.percentage}%`, height: '100%', backgroundColor: a.color }} />
                ))}
              </div>

              {/* Legend */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {financialBreakdown.allocations.map((a) => (
                  <div key={a.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: a.color, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '14px' }}>{a.name}</Typography>
                    </div>
                    <Typography variant="body2" sx={{ fontWeight: 800, color: a.color, fontSize: '18px' }}>{a.percentage}%</Typography>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Compliance Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ padding: '10px', borderRadius: '14px', backgroundColor: 'rgba(16,185,129,0.15)', color: 'var(--brand-primary)' }}>
                <ShieldCheck size={26} />
              </div>
              <div>
                <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: 'var(--font-heading)', fontSize: 'clamp(18px, 3vw, 22px)', color: 'var(--text-primary)' }}>
                  Government Certified
                </Typography>
                <Typography variant="body2" sx={{ color: 'var(--text-muted)', fontSize: '13px' }}>Full tax exemption benefits</Typography>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {financialBreakdown.transparencyGuarantees.map((g, i) => (
                <Card key={i} sx={{ borderRadius: 3, bgcolor: 'var(--bg-card)', border: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', gap: '12px', px: 2.5, py: 1.5, boxShadow: 'none' }}>
                  <CheckCircle size={18} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '14px' }}>{g}</Typography>
                </Card>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                onClick={() => alert("Downloading Bethesda Trust Audited Financial Report (FY 2024-25).pdf...")}
                className="btn btn-outline"
                style={{ padding: '12px 20px', fontSize: '14px' }}
              >
                <Download size={16} /> Download Audit Report
              </button>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>
                <Lock size={14} /> 256-bit SSL
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .transparency-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
