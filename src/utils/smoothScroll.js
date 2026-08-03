import { animate } from 'animejs';

/**
 * Smoothly scrolls to a target selector or element using Anime.js v4
 * @param {string|HTMLElement} target - Selector string (e.g., "#causes") or DOM element
 * @param {number} duration - Scroll animation duration in ms (default 900ms)
 * @param {number} offset - Vertical offset compensation (e.g., -70 for fixed header)
 */
export const smoothScrollTo = (target, duration = 900, offset = -70) => {
  let element = null;

  if (typeof target === 'string') {
    element = document.querySelector(target);
  } else if (target instanceof HTMLElement) {
    element = target;
  }

  if (!element) return;

  const targetPosition = Math.max(0, element.getBoundingClientRect().top + window.pageYOffset + offset);
  const startPosition = window.pageYOffset;

  const scrollObj = { y: startPosition };

  animate(scrollObj, {
    y: targetPosition,
    duration: duration,
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
        smoothScrollTo(targetId, 900, -70);
      }
    }
  };

  document.addEventListener('click', handleLinkClick);
  return () => document.removeEventListener('click', handleLinkClick);
};
