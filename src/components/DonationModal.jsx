import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import { X, Heart, ShieldCheck, CheckCircle2, Lock, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DonationModal({ isOpen, onClose, initialCause = '', initialAmount = 2500 }) {
  const [frequency, setFrequency] = useState('one-time');
  const [amount, setAmount] = useState(initialAmount);
  const [customAmount, setCustomAmount] = useState('');
  const [currency] = useState('INR');
  const [step, setStep] = useState(1); // 1: Form, 2: Receipt Success

  const [donor, setDonor] = useState({
    name: '',
    email: '',
    phone: '',
    pan: '',
  });

  const currencySymbols = { INR: '₹', USD: '$', EUR: '€', GBP: '£' };

  useEffect(() => {
    if (initialAmount) setAmount(initialAmount);
  }, [initialAmount]);

  if (!isOpen) return null;

  const handlePresetClick = (val) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount(Number(e.target.value) || 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount <= 0) return alert('Please enter a valid donation amount');
    if (!donor.name || !donor.email) return alert('Please fill in your name and email');

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }

    setStep(2);
  };

  const resetModal = () => {
    setStep(1);
    onClose();
  };

  const receiptId = `BTH-2026-${Math.floor(100000 + Math.random() * 900000)}`;
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      overflowY: 'auto'
    }}>
      <Card className="modal-container" sx={{ borderRadius: 4, bgcolor: 'var(--bg-card)', border: '1px solid var(--border-glass)' }} style={{
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: 'var(--radius-xl)',
        maxWidth: '560px',
        width: '100%',
        position: 'relative',
        boxShadow: 'var(--shadow-lg)',
        padding: '32px 28px',
        maxHeight: '90vh',
        overflowY: 'auto',
        animation: 'modalPop 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        
        {/* Close Button */}
        <button
          onClick={resetModal}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-tertiary)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--border-color)',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {step === 1 ? (
          <div>
            {/* Modal Header */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, var(--brand-primary) 0%, #10b981 100%)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px auto',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)'
              }}>
                <Heart size={26} fill="#ffffff" />
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '4px', color: 'var(--text-primary)' }}>
                {initialCause ? `Support ${initialCause}` : 'Make a Lifesaving Donation'}
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                100% Tax Deductible under Section 80G · 12A Certified
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              
              {/* Frequency Toggle */}
              <div style={{
                display: 'flex',
                padding: '4px',
                backgroundColor: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-full)',
                marginBottom: '20px'
              }}>
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  style={{
                    flex: 1,
                    padding: '10px 8px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '13px',
                    fontWeight: '700',
                    backgroundColor: frequency === 'one-time' ? 'var(--brand-primary)' : 'transparent',
                    color: frequency === 'one-time' ? '#ffffff' : 'var(--text-secondary)',
                    transition: 'var(--transition)'
                  }}
                >
                  ⚡ One-Time Gift
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  style={{
                    flex: 1,
                    padding: '10px 8px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '13px',
                    fontWeight: '700',
                    backgroundColor: frequency === 'monthly' ? 'var(--brand-primary)' : 'transparent',
                    color: frequency === 'monthly' ? '#ffffff' : 'var(--text-secondary)',
                    transition: 'var(--transition)'
                  }}
                >
                  ❤️ Monthly Partner
                </button>
              </div>

              {/* Amount Presets */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  Select Gift Amount ({currencySymbols[currency]})
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '12px' }} className="preset-grid">
                  {[500, 1500, 2500, 5000, 10000, 25000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handlePresetClick(val)}
                      style={{
                        padding: '10px 4px',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '14px',
                        fontWeight: '700',
                        backgroundColor: amount === val && !customAmount ? 'var(--brand-primary)' : 'var(--bg-tertiary)',
                        color: amount === val && !customAmount ? '#ffffff' : 'var(--text-primary)',
                        border: amount === val && !customAmount ? '1px solid var(--brand-primary)' : '1px solid var(--border-color)',
                        transition: 'var(--transition)'
                      }}
                    >
                      ₹{val.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>

                {/* Custom Input */}
                <input
                  type="number"
                  placeholder={`Or custom amount in ${currency}...`}
                  value={customAmount}
                  onChange={handleCustomChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontSize: '14px'
                  }}
                />
              </div>

              {/* Donor Information Form */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                <div style={{ flex: '1 1 200px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px', color: 'var(--text-secondary)' }}>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={donor.name}
                    onChange={(e) => setDonor({ ...donor, name: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                  />
                </div>
                <div style={{ flex: '1 1 200px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px', color: 'var(--text-secondary)' }}>Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={donor.email}
                    onChange={(e) => setDonor({ ...donor, email: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
                <div style={{ flex: '1 1 200px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px', color: 'var(--text-secondary)' }}>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={donor.phone}
                    onChange={(e) => setDonor({ ...donor, phone: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                  />
                </div>
                <div style={{ flex: '1 1 200px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px', color: 'var(--text-secondary)' }}>PAN / Tax ID (for 80G Receipt)</label>
                  <input
                    type="text"
                    placeholder="ABCDE1234F"
                    value={donor.pan}
                    onChange={(e) => setDonor({ ...donor, pan: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn btn-accent"
                style={{ width: '100%', padding: '14px', fontSize: '16px' }}
              >
                <Lock size={18} />
                <span>Donate ₹{amount.toLocaleString('en-IN')} Now ({frequency})</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-muted)', marginTop: '12px' }}>
                <ShieldCheck size={14} style={{ color: 'var(--brand-primary)' }} />
                <span>256-bit Security • Section 80G Tax Receipt</span>
              </div>
            </form>
          </div>
        ) : (
          /* Step 2: Digital Tax Receipt Success State */
          <div style={{ textAlign: 'center', padding: '12px 0' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              color: 'var(--brand-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto'
            }}>
              <CheckCircle2 size={32} />
            </div>

            <h2 style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: '800', marginBottom: '4px', color: 'var(--text-primary)' }}>
              Thank You, {donor.name}!
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--brand-primary)', fontWeight: '600', marginBottom: '20px' }}>
              Your generous contribution of ₹{amount.toLocaleString('en-IN')} has been received.
            </p>

            {/* Tax Receipt Card */}
            <div style={{
              padding: '20px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              textAlign: 'left',
              marginBottom: '24px',
              fontSize: '13px'
            }}>
              <div style={{ fontWeight: '800', color: 'var(--brand-primary)', marginBottom: '12px', fontSize: '14px' }}>
                📄 OFFICIAL 80G TAX DEDUCTION RECEIPT
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }} className="receipt-grid">
                <div><strong>Receipt No:</strong> {receiptId}</div>
                <div><strong>Date:</strong> {currentDate}</div>
                <div><strong>Donor Name:</strong> {donor.name}</div>
                <div><strong>PAN Ref:</strong> {donor.pan || 'N/A'}</div>
                <div><strong>Status:</strong> Tax Exempt (80G)</div>
                <div><strong>Email:</strong> {donor.email}</div>
              </div>
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', fontWeight: '700' }}>Total Contributed:</span>
                <span style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', fontWeight: '800', color: 'var(--brand-primary)' }}>₹{amount.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => alert(`Receipt #${receiptId} has been sent to ${donor.email}`)}
                className="btn btn-outline"
                style={{ flex: 1, padding: '12px', fontSize: '14px' }}
              >
                <Printer size={16} />
                <span>Print / Email Receipt</span>
              </button>
              <button
                onClick={resetModal}
                className="btn btn-primary"
                style={{ flex: 1, padding: '12px', fontSize: '14px' }}
              >
                Done
              </button>
            </div>
          </div>
        )}

      </Card>
    </div>
  );
}
