/**
 * main.js — Point d'entrée JavaScript du site Katzav Delicatessen
 * Initialise tous les modules au chargement du DOM.
 */

import { initMenuTabs }        from './modules/menu-tabs.js';
import { initCompoBuilder }    from './modules/compo-builder.js';
import { initScrollAnimations } from './modules/scroll-animations.js';

/**
 * Initialise le menu hamburger mobile.
 */
function initMobileMenu() {
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Fermer le menu en cliquant sur un lien
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Fermer avec Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      hamburger.focus();
    }
  });
}

/**
 * Gère le changement d'apparence de la nav au défilement.
 * (Effet de fond renforcé quand on scrolle)
 */
function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 50) {
      nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.6)';
    } else {
      nav.style.boxShadow = 'none';
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/**
 * Lien "Commander" dans la nav → scroll vers les boutons de livraison du hero.
 */
function initOrderCTA() {
  const navCtas = document.querySelectorAll('[data-scroll-to]');

  navCtas.forEach((cta) => {
    cta.addEventListener('click', (e) => {
      const targetId = cta.getAttribute('data-scroll-to');
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
}

/**
 * Animation de mise à jour du prix dans La Compo.
 * Pulsation sur le montant quand il change.
 */
function initPricePulse() {
  const priceEl = document.querySelector('.compo__price-total');
  if (!priceEl) return;

  const observer = new MutationObserver(() => {
    priceEl.classList.remove('is-updated');
    void priceEl.offsetWidth; // Force reflow pour reset animation
    priceEl.classList.add('is-updated');

    setTimeout(() => {
      priceEl.classList.remove('is-updated');
    }, 300);
  });

  observer.observe(priceEl, { childList: true, subtree: true, characterData: true });
}

/**
 * Initialisation globale au chargement du DOM.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Modules UI
  initMobileMenu();
  initNavScroll();
  initOrderCTA();

  // Modules fonctionnels
  initMenuTabs();
  initCompoBuilder();

  // Animations
  initScrollAnimations();
  initPricePulse();
});

document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('tisha-toggle');
  var tishaSection = document.getElementById('tisha-section');
  var mainSection = document.getElementById('main-menu-section');

  if (!btn || !tishaSection || !mainSection) return;

  var tishaTabs = tishaSection.querySelectorAll('.tisha__tab');
  var tishaPanels = tishaSection.querySelectorAll('.menu__panel');

  function activateTishaTab(activeTab) {
    tishaTabs.forEach(function(t) {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
    });
    tishaPanels.forEach(function(p) {
      p.classList.remove('is-active');
      p.setAttribute('hidden', '');
    });
    activeTab.classList.add('is-active');
    activeTab.setAttribute('aria-selected', 'true');
    var target = document.getElementById(activeTab.getAttribute('aria-controls'));
    if (target) {
      target.classList.add('is-active');
      target.removeAttribute('hidden');
    }
  }

  tishaTabs.forEach(function(tab) {
    tab.addEventListener('click', function() { activateTishaTab(tab); });
  });

  btn.addEventListener('click', function() {
    var isHidden = tishaSection.hasAttribute('hidden');
    if (isHidden) {
      tishaSection.removeAttribute('hidden');
      mainSection.style.display = 'none';
      btn.textContent = '✡ CARTE SPÉCIALE TISHA BEAV — Cliquez pour fermer';
      if (!tishaSection.querySelector('.tisha__tab.is-active') && tishaTabs.length > 0) {
        activateTishaTab(tishaTabs[0]);
      }
    } else {
      tishaSection.setAttribute('hidden', '');
      mainSection.style.display = '';
      btn.textContent = '✡ CARTE SPÉCIALE TISHA BEAV — Cliquez pour voir';
    }
  });
});

