import React, { useState, useEffect } from 'react';
import { X, Heart, ShieldCheck, CheckCircle2, CreditCard, Lock, Printer, Download, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { trustInfo } from '../data/bethesdaData';

export default function DonationModal({ isOpen, onClose, initialCause = '', initialAmount = 50 }) {
  const [frequency, setFrequency] = useState('one-time');
  const [amount, setAmount] = useState(initialAmount);
  const [customAmount, setCustomAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [step, setStep] = useState(1); // 1: Form, 2: Receipt Success
  
  // Donor Form state
  const [donor, setDonor] = useState({
    name: '',
    email: '',
    phone: '',
    pan: '',
  });

  const currencySymbols = { USD: '$', INR: '₹', EUR: '€', GBP: '£' };

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

    // Trigger confetti animation!
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log(err);
    }

    setStep(2); // Go to receipt step
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
      <div className="glass-card" style={{
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: 'var(--radius-xl)',
        maxWidth: '560px',
        width: '100%',
        padding: '32px',
        position: 'relative',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--border-color)',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
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
          }}
        >
          <X size={20} />
        </button>

        {step === 1 ? (
          <div>
            {/* Header */}
            <div style={{ textCenter: 'center', marginBottom: '24px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 14px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--brand-light)',
                color: 'var(--brand-primary)',
                fontSize: '13px',
                fontWeight: '700',
                marginBottom: '8px'
              }}>
                <Heart size={14} fill="var(--brand-primary)" /> Tax-Deductible Donation
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: '800' }}>
                {initialCause ? `Support ${initialCause}` : 'Make a Lifesaving Donation'}
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                Every contribution directly supports food, education, and elder care.
              </p>
            </div>

            {/* Frequency Toggle */}
            <div style={{
              display: 'flex',
              backgroundColor: 'var(--bg-tertiary)',
              padding: '4px',
              borderRadius: 'var(--radius-full)',
              marginBottom: '24px',
            }}>
              <button
                onClick={() => setFrequency('one-time')}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '14px',
                  fontWeight: '700',
                  backgroundColor: frequency === 'one-time' ? 'var(--brand-primary)' : 'transparent',
                  color: frequency === 'one-time' ? '#ffffff' : 'var(--text-secondary)',
                  transition: 'var(--transition)'
                }}
              >
                One-Time Gift
              </button>
              <button
                onClick={() => setFrequency('monthly')}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '14px',
                  fontWeight: '700',
                  backgroundColor: frequency === 'monthly' ? 'var(--brand-primary)' : 'transparent',
                  color: frequency === 'monthly' ? '#ffffff' : 'var(--text-secondary)',
                  transition: 'var(--transition)'
                }}
              >
                ❤️ Monthly Impact Partner
              </button>
            </div>

            {/* Amount Presets */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                Select Gift Amount ({currencySymbols[currency]})
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '12px' }}>
                {[15, 35, 60, 120, 250, 500].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handlePresetClick(val)}
                    style={{
                      padding: '12px',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '16px',
                      fontWeight: '700',
                      backgroundColor: amount === val && !customAmount ? 'var(--brand-primary)' : 'var(--bg-tertiary)',
                      color: amount === val && !customAmount ? '#ffffff' : 'var(--text-primary)',
                      border: amount === val && !customAmount ? '1px solid var(--brand-primary)' : '1px solid var(--border-color)',
                      transition: 'var(--transition)'
                    }}
                  >
                    {currencySymbols[currency]}{val}
                  </button>
                ))}
              </div>

              {/* Custom Input */}
              <input
                type="number"
                placeholder={`Or enter custom amount in ${currency}...`}
                value={customAmount}
                onChange={handleCustomChange}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  fontSize: '15px'
                }}
              />
            </div>

            {/* Donor Information Form */}
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                <div>
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
                <div>
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px', color: 'var(--text-secondary)' }}>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={donor.phone}
                    onChange={(e) => setDonor({ ...donor, phone: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '4px', color: 'var(--text-secondary)' }}>PAN / Tax ID (for 80G Tax Exemption)</label>
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
                style={{ width: '100%', padding: '16px', fontSize: '17px' }}
              >
                <Lock size={18} />
                <span>Donate {currencySymbols[currency]}{amount} Now ({frequency})</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-muted)', marginTop: '14px' }}>
                <ShieldCheck size={14} style={{ color: 'var(--brand-primary)' }} />
                <span>256-bit Bank Grade Security • Section 80G Tax Receipt</span>
              </div>
            </form>
          </div>
        ) : (
          /* Step 2: Digital Tax Receipt Success State */
          <div style={{ textAlign: 'center', padding: '12px 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              color: 'var(--brand-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <h2 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '6px', color: 'var(--text-primary)' }}>
              Thank You, {donor.name}!
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--brand-primary)', fontWeight: '600', marginBottom: '24px' }}>
              Your generous gift of {currencySymbols[currency]}{amount} is transforming lives today.
            </p>

            {/* Official Digital Receipt Card */}
            <div style={{
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              textAlign: 'left',
              marginBottom: '24px',
              fontSize: '14px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '12px' }}>
                <strong>Bethesda Charitable Trust</strong>
                <span style={{ color: 'var(--brand-primary)', fontWeight: '700' }}>OFFICIAL DONATION RECEIPT</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px', fontSize: '13px' }}>
                <div><span style={{ color: 'var(--text-muted)' }}>Receipt No:</span> <strong>{receiptId}</strong></div>
                <div><span style={{ color: 'var(--text-muted)' }}>Date:</span> <strong>{currentDate}</strong></div>
                <div><span style={{ color: 'var(--text-muted)' }}>Donor Name:</span> <strong>{donor.name}</strong></div>
                <div><span style={{ color: 'var(--text-muted)' }}>Tax Exempt ID:</span> <strong>{donor.pan || 'N/A'}</strong></div>
                <div><span style={{ color: 'var(--text-muted)' }}>80G Reg No:</span> <strong>REG-TN/2016/8842</strong></div>
                <div><span style={{ color: 'var(--text-muted)' }}>Deduction Status:</span> <strong>100% Valid</strong></div>
              </div>
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '15px', fontWeight: '700' }}>Total Contributed:</span>
                <span style={{ fontSize: '22px', fontWeight: '800', color: 'var(--brand-primary)' }}>{currencySymbols[currency]}{amount}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => window.print()}
                className="btn btn-outline"
                style={{ flex: 1, padding: '12px' }}
              >
                <Printer size={16} /> Print Receipt
              </button>
              <button
                onClick={onClose}
                className="btn btn-primary"
                style={{ flex: 1, padding: '12px' }}
              >
                Close & Return
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
