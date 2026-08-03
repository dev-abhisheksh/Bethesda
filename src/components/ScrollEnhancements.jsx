import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';

export default function ScrollEnhancements() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for auto scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-revealed');
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.section, .glass-card, .cause-card, .gallery-item');
    elements.forEach((el) => {
      el.classList.add('scroll-reveal-init');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    smoothScrollTo('#hero', 1000, 0);
  };

  return (
    <>
      {/* ── Top Scroll Progress Bar ── */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ── Floating Back to Top Button ── */}
      <button
        onClick={scrollToTop}
        className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
        aria-label="Scroll back to top"
      >
        <ArrowUp size={20} />
      </button>

      <style>{`
        /* Top Scroll Progress Indicator */
        .scroll-progress-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.05);
          pointer-events: none;
        }
        .scroll-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #059669 0%, #10b981 50%, #fbbf24 100%);
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.8);
          transition: width 0.1s ease-out;
        }

        /* Floating Back to Top Button */
        .back-to-top-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--brand-primary);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          z-index: 150;
          opacity: 0;
          transform: translateY(20px) scale(0.8);
          pointer-events: none;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .back-to-top-btn.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .back-to-top-btn:hover {
          transform: translateY(-4px) scale(1.08);
          box-shadow: 0 12px 30px rgba(16, 185, 129, 0.55);
          background: var(--brand-primary-hover, #047857);
        }

        /* Scroll Reveal Initial & Triggered Animations */
        .scroll-reveal-init {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .scroll-revealed {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        @media (max-width: 640px) {
          .back-to-top-btn {
            bottom: 20px;
            right: 20px;
            width: 42px;
            height: 42px;
          }
        }
      `}</style>
    </>
  );
}
