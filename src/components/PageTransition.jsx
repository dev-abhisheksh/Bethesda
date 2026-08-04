import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

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

      // one paint frame so the new page renders under the curtain
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

  const curtainStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 99999,
    background: 'linear-gradient(135deg, #0284c7 0%, #10b981 100%)',
    pointerEvents: 'all',
  };

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}

      {phase === 'covering' && (
        <div style={{
          ...curtainStyle,
          animation: 'curtainCover 0.55s cubic-bezier(0.65, 0, 0.35, 1) forwards',
        }} />
      )}

      {phase === 'revealing' && (
        <div style={{
          ...curtainStyle,
          animation: 'curtainReveal 0.55s cubic-bezier(0.65, 0, 0.35, 1) forwards',
        }} />
      )}

      {/* Inject keyframes directly — no external CSS needed */}
      <style>{`
        @keyframes curtainCover {
          0%   { transform: translateY(100%); }
          100% { transform: translateY(0%); }
        }
        @keyframes curtainReveal {
          0%   { transform: translateY(0%); }
          100% { transform: translateY(-100%); }
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
