import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Heart, ShieldCheck } from 'lucide-react';

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
          }, 550);
        });
      });
    }, 550);
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
          animation: `${animName} 0.55s cubic-bezier(0.65, 0, 0.35, 1) forwards`,
        }}>
          {/* Dark base */}
          <div style={{
            position: 'absolute', inset: 0,
            background: '#090d16',
          }} />

          {/* Glowing central aura */}
          <div style={{
            position: 'absolute',
            width: '400px', height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(2,132,199,0.22) 0%, transparent 70%)',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          {/* Center content */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '14px',
            padding: '24px',
          }}>
            
            {/* Pulsing Heart Logo Badge */}
            <div style={{
              position: 'relative',
              width: '84px', height: '84px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '6px',
            }}>
              <div style={{
                position: 'absolute', inset: '-8px',
                borderRadius: '50%',
                border: '2px solid rgba(56, 189, 248, 0.4)',
                animation: 'pulseExpand 1.8s cubic-bezier(0, 0.2, 0.8, 1) infinite',
              }} />
              <div style={{
                position: 'absolute', inset: '-8px',
                borderRadius: '50%',
                border: '2px solid rgba(56, 189, 248, 0.4)',
                animation: 'pulseExpand 1.8s cubic-bezier(0, 0.2, 0.8, 1) 0.5s infinite',
              }} />
              <div style={{
                width: '72px', height: '72px',
                borderRadius: '22px',
                background: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 30px rgba(56, 189, 248, 0.4)',
                position: 'relative', zIndex: 2,
              }}>
                <Heart size={34} fill="#ffffff" color="#ffffff" style={{ animation: 'heartBeat 1.2s ease-in-out infinite' }} />
              </div>
            </div>

            {/* Brand Title */}
            <div style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '26px', fontWeight: '800',
              letterSpacing: '-0.02em', color: '#ffffff',
            }}>
              BETHESDA <span style={{ color: '#38bdf8' }}>TRUST</span>
            </div>

            {/* Subtitle */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontSize: '13px', fontWeight: '600', color: '#94a3b8',
              marginBottom: '10px',
            }}>
              <ShieldCheck size={14} color="#38bdf8" />
              <span>Charitable Non-Profit · Restoring Dignity</span>
            </div>

            {/* Shimmer bar */}
            <div style={{
              width: '140px', height: '4px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.1)',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                width: '60%', height: '100%',
                borderRadius: '9999px',
                background: 'linear-gradient(90deg, transparent, #38bdf8, transparent)',
                animation: 'shimmer 1.1s ease-in-out infinite',
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
        @keyframes heartBeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.15); }
          28% { transform: scale(1); }
          42% { transform: scale(1.1); }
          70% { transform: scale(1); }
        }
        @keyframes pulseExpand {
          0% {
            transform: scale(0.85);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
        @keyframes shimmer {
          0%   { left: -60%; }
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
