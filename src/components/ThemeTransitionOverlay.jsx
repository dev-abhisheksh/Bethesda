import React from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';

export default function ThemeTransitionOverlay({ active, targetTheme }) {
  if (!active) return null;

  const isDarkTarget = targetTheme === 'dark';

  return (
    <div className={`theme-overlay ${isDarkTarget ? 'target-dark' : 'target-light'}`}>
      <div className="theme-overlay-card">
        
        {/* Animated Icon Box */}
        <div className="theme-icon-circle">
          {isDarkTarget ? (
            <Moon size={42} className="theme-anim-icon moon-icon" color="#fbbf24" fill="#fbbf24" />
          ) : (
            <Sun size={44} className="theme-anim-icon sun-icon" color="#f59e0b" fill="#f59e0b" />
          )}
        </div>

        {/* Dynamic Label */}
        <h3 className="theme-overlay-title">
          Switching to {isDarkTarget ? 'Dark' : 'Light'} Mode
        </h3>

        <div className="theme-overlay-sub">
          <Sparkles size={14} style={{ color: isDarkTarget ? '#fbbf24' : '#059669' }} />
          <span>Adjusting UI Design System...</span>
        </div>

      </div>

      <style>{`
        .theme-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          animation: themeOverlayIn 0.75s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .theme-overlay.target-dark {
          background: rgba(10, 15, 29, 0.88);
          color: #ffffff;
        }

        .theme-overlay.target-light {
          background: rgba(248, 250, 252, 0.88);
          color: #0f172a;
        }

        .theme-overlay-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          animation: cardPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .theme-icon-circle {
          width: 84px;
          height: 84px;
          border-radius: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        .target-dark .theme-icon-circle {
          background: rgba(31, 41, 55, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.25);
        }

        .target-light .theme-icon-circle {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 25px rgba(245, 158, 11, 0.25);
        }

        .theme-anim-icon {
          animation: iconSpin 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .theme-overlay-title {
          font-family: 'Outfit', sans-serif;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }

        .theme-overlay-sub {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          opacity: 0.85;
        }

        @keyframes themeOverlayIn {
          0% {
            opacity: 0;
            transform: scale(0.96);
          }
          30% {
            opacity: 1;
            transform: scale(1);
          }
          75% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.02);
          }
        }

        @keyframes cardPop {
          0% {
            transform: scale(0.7) rotate(-10deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes iconSpin {
          0% {
            transform: scale(0.4) rotate(-180deg);
          }
          60% {
            transform: scale(1.2) rotate(15deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
