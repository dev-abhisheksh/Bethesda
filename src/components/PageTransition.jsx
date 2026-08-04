import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Heart } from 'lucide-react';

/* ── Context ── */
const TransitionContext = createContext(null);
export const usePageTransition = () => useContext(TransitionContext);

/* ── Provider + Curtain overlay ── */
export function TransitionProvider({ children }) {
  const navigate = useNavigate();
  const [phase, setPhase] = useState('idle'); // idle | covering | revealing
  const busy = useRef(false);

  const navigateTo = useCallback((path) => {
    if (busy.current) return;
    if (window.location.pathname === path) return;

    busy.current = true;
    setPhase('covering');

    setTimeout(() => {
      navigate(path);
      window.scrollTo(0, 0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPhase('revealing');

          setTimeout(() => {
            setPhase('idle');
            busy.current = false;
          }, 600);
        });
      });
    }, 600);
  }, [navigate]);

  const isVisible = phase !== 'idle';
  const animName = phase === 'covering' ? 'curtainCover' : 'curtainReveal';

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}

      {isVisible && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100vw', height: '100vh',
          zIndex: 99999,
          overflow: 'hidden',
          animation: `${animName} 0.6s cubic-bezier(0.65, 0, 0.35, 1) forwards`,
        }}>
          {/* Dark base */}
          <div style={{
            position: 'absolute', inset: 0,
            background: '#0a0f1d',
          }} />

          {/* Floating orbs */}
          <div style={{
            position: 'absolute',
            width: '300px', height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(2,132,199,0.35) 0%, transparent 70%)',
            top: '10%', left: '-5%',
            animation: 'orbFloat1 1.8s ease-in-out infinite alternate',
          }} />
          <div style={{
            position: 'absolute',
            width: '250px', height: '250px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)',
            bottom: '5%', right: '-3%',
            animation: 'orbFloat2 2s ease-in-out infinite alternate',
          }} />
          <div style={{
            position: 'absolute',
            width: '180px', height: '180px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)',
            top: '40%', right: '15%',
            animation: 'orbFloat3 1.5s ease-in-out infinite alternate',
          }} />

          {/* Center content */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '16px',
          }}>
            {/* Pulsing ring behind heart */}
            <div style={{
              position: 'relative',
              width: '72px', height: '72px',
            }}>
              <div style={{
                position: 'absolute', inset: '-12px',
                borderRadius: '50%',
                border: '2px solid rgba(2,132,199,0.3)',
                animation: 'pulseRing 1.2s ease-out infinite',
              }} />
              <div style={{
                position: 'absolute', inset: '-6px',
                borderRadius: '50%',
                border: '1.5px solid rgba(16,185,129,0.25)',
                animation: 'pulseRing 1.2s ease-out 0.3s infinite',
              }} />
              <div style={{
                width: '72px', height: '72px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0284c7, #10b981)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 40px rgba(2,132,199,0.4), 0 0 80px rgba(16,185,129,0.2)',
                animation: 'heartBounce 0.8s ease-in-out infinite alternate',
              }}>
                <Heart size={32} fill="#ffffff" color="#ffffff" />
              </div>
            </div>

            {/* Text */}
            <div style={{
              color: '#ffffff', fontWeight: '800',
              fontSize: '18px', letterSpacing: '0.08em',
              fontFamily: 'system-ui, sans-serif',
              textTransform: 'uppercase',
              opacity: 0.9,
            }}>
              BETHESDA <span style={{ color: '#38bdf8' }}>TRUST</span>
            </div>

            {/* Shimmer bar */}
            <div style={{
              width: '120px', height: '3px',
              borderRadius: '3px',
              background: 'rgba(255,255,255,0.1)',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                width: '50%', height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.8), transparent)',
                animation: 'shimmer 1s ease-in-out infinite',
              }} />
            </div>
          </div>
        </div>
      )}

      {/* Keyframes */}
      <style>{`
        @keyframes curtainCover {
          0%   { transform: translateY(100%); }
          100% { transform: translateY(0%); }
        }
        @keyframes curtainReveal {
          0%   { transform: translateY(0%); }
          100% { transform: translateY(-100%); }
        }
        @keyframes orbFloat1 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(30px, -20px) scale(1.15); }
        }
        @keyframes orbFloat2 {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-25px, 15px) scale(1.1); }
        }
        @keyframes orbFloat3 {
          0%   { transform: translate(0, 0) scale(0.9); }
          100% { transform: translate(15px, -30px) scale(1.05); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes heartBounce {
          0%   { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        @keyframes shimmer {
          0%   { left: -50%; }
          100% { left: 100%; }
        }
      `}</style>
    </TransitionContext.Provider>
  );
}

/* ── Drop-in replacement for <Link> ── */
export function TransitionLink({ to, children, className, style, onClick }) {
  const { navigateTo } = usePageTransition();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    navigateTo(to);
  };

  return (
    <RouterLink to={to} className={className} style={style} onClick={handleClick}>
      {children}
    </RouterLink>
  );
}
