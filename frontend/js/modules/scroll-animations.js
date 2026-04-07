/**
 * scroll-animations.js — Animations au défilement avec IntersectionObserver
 * Active la classe .is-visible sur les éléments .reveal quand ils entrent dans la vue.
 */

export function initScrollAnimations() {
  // Respecter prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Rendre tous les éléments directement visibles
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  const options = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Ne pas re-observer une fois visible
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Observer tous les éléments .reveal présents dans le DOM initial
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

/**
 * Observe les nouveaux éléments .reveal ajoutés dynamiquement au DOM.
 * À appeler après l'injection de contenu dynamique.
 * @param {NodeList|Array} elements - Éléments à observer
 */
export function observeNewElements(elements) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const options = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach((el) => observer.observe(el));
}
