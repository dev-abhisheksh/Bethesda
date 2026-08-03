import { animate } from 'animejs';

/**
 * Smoothly scrolls to a target selector or element using Anime.js v4
 * @param {string|HTMLElement} target - Selector string (e.g., "#causes") or DOM element
 * @param {number} customDuration - Custom duration override (optional)
 * @param {number} offset - Vertical offset compensation (e.g., -70 for fixed header)
 */
export const smoothScrollTo = (target, customDuration = null, offset = -70) => {
  let element = null;

  if (typeof target === 'string') {
    element = document.querySelector(target);
  } else if (target instanceof HTMLElement) {
    element = target;
  }

  if (!element) return;

  const startPosition = window.pageYOffset || document.documentElement.scrollTop;
  const targetPosition = Math.max(0, element.getBoundingClientRect().top + startPosition + offset);
  const distance = Math.abs(targetPosition - startPosition);

  // Dynamic duration calculation: short distance = ~500ms, long distance = ~1000ms
  const calculatedDuration = customDuration || Math.min(1100, Math.max(500, Math.round(distance * 0.4)));

  const scrollObj = { y: startPosition };

  animate(scrollObj, {
    y: targetPosition,
    duration: calculatedDuration,
    ease: 'inOutQuint',
    onUpdate: () => {
      window.scrollTo(0, scrollObj.y);
    }
  });
};

/**
 * Global smooth scroll click handler for links starting with '#'
 */
export const initAnimeSmoothScroll = () => {
  const handleLinkClick = (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (anchor) {
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId !== '#') {
        e.preventDefault();
        smoothScrollTo(targetId, null, -70);
      }
    }
  };

  document.addEventListener('click', handleLinkClick);
  return () => document.removeEventListener('click', handleLinkClick);
};
