import React, { useState, useEffect } from 'react';
import { Heart, ShieldCheck, Sparkles } from 'lucide-react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Lock body scroll while loader is active
    document.body.style.overflow = 'hidden';

    // Fast smooth progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 6;
        return next > 100 ? 100 : next;
      });
    }, 80);

    // Trigger fade out when progress reaches 100%
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1700);

    // Remove preloader from DOM after fade animation
    const removeTimer = setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = '';
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (isDone) return null;

  return (
    <div 
      className={`preloader-overlay ${isFading ? 'preloader-fade-out' : ''}`}
      aria-label="Loading Bethesda Trust Website"
    >
      <div className="preloader-content">
        
        {/* Pulsing Heart Logo Badge */}
        <div className="preloader-logo-wrapper">
          <div className="preloader-pulse-ring" />
          <div className="preloader-pulse-ring delay-1" />
          <div className="preloader-icon-box">
            <Heart size={36} fill="#ffffff" color="#ffffff" className="preloader-heart-icon" />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="preloader-title">
          BETHESDA <span>TRUST</span>
        </h1>
        
        <div className="preloader-subtitle">
          <ShieldCheck size={14} color="var(--brand-primary)" />
          <span>Charitable Non-Profit · Restoring Dignity</span>
        </div>

        {/* Progress Bar Container */}
        <div className="preloader-bar-track">
          <div 
            className="preloader-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage & Tagline */}
        <div className="preloader-footer-row">
          <span className="preloader-quote">
            <Sparkles size={13} style={{ color: '#f59e0b' }} /> Together, we transform lives
          </span>
          <span className="preloader-percent">{progress}%</span>
        </div>

      </div>

      {/* Preloader Specific Styles */}
      <style>{`
        .preloader-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0284c7 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          opacity: 1;
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .preloader-fade-out {
          opacity: 0;
          transform: scale(1.04);
          pointer-events: none;
        }

        .preloader-content {
          max-width: 380px;
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Pulse rings */
        .preloader-logo-wrapper {
          position: relative;
          width: 88px;
          height: 88px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        .preloader-pulse-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid rgba(56, 189, 248, 0.5);
          animation: pulseExpand 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        .preloader-pulse-ring.delay-1 {
          animation-delay: 0.6s;
        }
        .preloader-icon-box {
          width: 72px;
          height: 72px;
          border-radius: 22px;
          background: linear-gradient(135deg, #0284c7 0%, #38bdf8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 30px rgba(56, 189, 248, 0.45);
          position: relative;
          z-index: 2;
        }
        .preloader-heart-icon {
          animation: heartBeat 1.2s ease-in-out infinite;
        }

        /* Typography */
        .preloader-title {
          font-family: 'Outfit', sans-serif;
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin-bottom: 6px;
        }
        .preloader-title span {
          color: #38bdf8;
        }
        .preloader-subtitle {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: #e0f2fe;
          margin-bottom: 32px;
        }

        /* Progress Bar */
        .preloader-bar-track {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 9999px;
          overflow: hidden;
          margin-bottom: 14px;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
        }
        .preloader-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #0284c7 0%, #38bdf8 50%, #7dd3fc 100%);
          border-radius: 9999px;
          transition: width 0.15s ease-out;
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.6);
        }

        /* Footer Row */
        .preloader-footer-row {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          font-weight: 600;
          color: #e0f2fe;
        }
        .preloader-quote {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #bae6fd;
        }
        .preloader-percent {
          font-weight: 800;
          color: #38bdf8;
          font-family: monospace;
          font-size: 13px;
        }

        /* Keyframe Animations */
        @keyframes heartBeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.18); }
          28% { transform: scale(1); }
          42% { transform: scale(1.12); }
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
      `}</style>
    </div>
  );
}
