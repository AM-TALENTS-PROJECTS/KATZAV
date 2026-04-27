/**
 * menu-tabs.js — Gestion des onglets de la carte
 * Navigation par onglets sans rechargement de page.
 */

export function initMenuTabs() {
  const tabContainer = document.querySelector('.menu__tabs');
  const panels = document.querySelectorAll('.menu__panel');

  if (!tabContainer || panels.length === 0) return;

  const tabs = tabContainer.querySelectorAll('.menu__tab');

  /**
   * Active un onglet et affiche le panneau correspondant.
   * @param {HTMLElement} activeTab - L'onglet à activer
   */
  function activateTab(activeTab) {
    // Désactiver tous les onglets et panneaux
    tabs.forEach((tab) => {
      tab.classList.remove('is-active');
      tab.setAttribute('aria-selected', 'false');
    });

    panels.forEach((panel) => {
      if (panel.id === 'panel-tishabeav') return;
      panel.classList.remove('is-active');
      panel.setAttribute('hidden', '');
    });

    // Activer l'onglet sélectionné
    activeTab.classList.add('is-active');
    activeTab.setAttribute('aria-selected', 'true');

    // Afficher le panneau correspondant
    const targetId = activeTab.getAttribute('aria-controls');
    const targetPanel = document.getElementById(targetId);
    if (targetPanel) {
      targetPanel.classList.add('is-active');
      targetPanel.removeAttribute('hidden');
    }

    // Scroller l'onglet dans la vue (pour mobile)
    activeTab.scrollIntoView({ inline: 'nearest', block: 'nearest' });
  }

  // Écouteurs sur chaque onglet
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activateTab(tab));

    // Navigation clavier (flèches gauche/droite)
    tab.addEventListener('keydown', (e) => {
      const allTabs = [...tabs];
      const currentIndex = allTabs.indexOf(tab);

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextTab = allTabs[(currentIndex + 1) % allTabs.length];
        nextTab.focus();
        activateTab(nextTab);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevTab = allTabs[(currentIndex - 1 + allTabs.length) % allTabs.length];
        prevTab.focus();
        activateTab(prevTab);
      }
    });
  });

  // Activer le premier onglet par défaut
  if (tabs.length > 0) {
    activateTab(tabs[0]);
  }
}
