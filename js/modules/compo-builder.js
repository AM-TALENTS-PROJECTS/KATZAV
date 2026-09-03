/**
 * compo-builder.js — Builder sandwich interactif "La Compo"
 * Gestion des sélections, compteurs, suppléments de prix et résumé.
 */

// Configuration des étapes
const PRIX_BASE = 15;

const STEPS = [
  {
    id: 'pain',
    max: 1,
    label: 'pain',
    options: [
      { value: 'classique', label: 'Classique', extra: 0 },
      { value: 'sesame',    label: 'Sésame',    extra: 0 },
      { value: 'olives',    label: 'Olives noires', extra: 0 },
      { value: 'klub',      label: 'Klub',       extra: 0 },
      { value: 'baguette',  label: 'Baguette',   extra: 0 },
      { value: 'halla',     label: 'Halla',      extra: 0 },
    ],
  },
  {
    id: 'garnitures',
    max: 3,
    label: 'garniture(s)',
    options: [
      { value: 'salade',           label: 'Salade',              extra: 0 },
      { value: 'roquette',         label: 'Roquette',            extra: 0 },
      { value: 'choux',            label: 'Choux rouge pickles', extra: 0 },
      { value: 'coleslaw',         label: 'Coleslaw',            extra: 0 },
      { value: 'cornichons',       label: 'Cornichons',          extra: 0 },
      { value: 'guacamole',        label: 'Guacamole',           extra: 0 },
      { value: 'oignons-crispy',   label: 'Oignons crispy',      extra: 0 },
      { value: 'confit-oignons',   label: 'Confit d\'oignons',   extra: 0 },
      { value: 'pickles-oignons',  label: 'Pickles d\'oignons rouges', extra: 0 },
      { value: 'avocat',           label: 'Avocat',               extra: 1.5 },
    ],
  },
  {
    id: 'charcuteries',
    max: 3,
    label: 'charcuterie(s)',
    options: [
      { value: 'dinde',      label: 'Dinde',                extra: 0 },
      { value: 'pastrami',   label: 'Pastrami de bœuf',    extra: 0 },
      { value: 'pickel-ny',  label: 'Pickel de bœuf NY',   extra: 0 },
      { value: 'rosette',    label: 'Rosette',              extra: 0 },
      { value: 'veau-os',    label: 'Veau à l\'os',         extra: 2 },
      { value: 'saucisse',   label: 'Saucisse',             extra: 2 },
    ],
  },
  {
    id: 'sauces',
    max: 2,
    label: 'sauce(s)',
    options: [
      { value: 'mayo',          label: 'Mayo',           extra: 0 },
      { value: 'ketchup',       label: 'Ketchup',        extra: 0 },
      { value: 'harissa',       label: 'Harissa',        extra: 0 },
      { value: 'moutarde',      label: 'Moutarde',       extra: 0 },
      { value: 'bbq',           label: 'BBQ',            extra: 0 },
      { value: 'moutarde-miel', label: 'Moutarde miel',  extra: 0 },
      { value: 'tartare',       label: 'Tartare',        extra: 0 },
      { value: 'katzav',        label: 'Sauce Katzav',   extra: 0 },
      { value: 'mayo-spicy',    label: 'Mayo spicy',     extra: 0 },
      { value: 'mayo-truffee',  label: 'Mayo truffée',   extra: 1 },
    ],
  },
];

// État des sélections : Map<stepId, Set<value>>
const selections = new Map();
STEPS.forEach((step) => selections.set(step.id, new Set()));

/**
 * Calcule le prix total en fonction des sélections.
 * @returns {number}
 */
function calculatePrice() {
  let total = PRIX_BASE;

  STEPS.forEach((step) => {
    const selected = selections.get(step.id);
    step.options.forEach((opt) => {
      if (selected.has(opt.value) && opt.extra > 0) {
        total += opt.extra;
      }
    });
  });

  return total;
}

/**
 * Met à jour l'affichage du prix total.
 */
function updatePriceDisplay() {
  const priceEl = document.querySelector('.compo__price-total');
  if (!priceEl) return;

  const newPrice = calculatePrice();
  priceEl.textContent = `${newPrice}€`;

  // Animation pulse
  priceEl.classList.add('is-updated');
  setTimeout(() => priceEl.classList.remove('is-updated'), 300);
}

/**
 * Met à jour le compteur restant d'une étape.
 * @param {string} stepId
 * @param {number} max
 */
function updateCounter(stepId, max) {
  const counter = document.querySelector(`[data-step="${stepId}"] .compo__step-counter`);
  if (!counter) return;

  const count = selections.get(stepId).size;
  const remaining = max - count;

  if (remaining <= 0) {
    counter.textContent = 'Maximum atteint';
  } else {
    counter.textContent = `${remaining} restant${remaining > 1 ? 's' : ''}`;
  }
}

/**
 * Met à jour l'état désactivé des options d'une étape.
 * @param {string} stepId
 * @param {number} max
 */
function updateDisabledState(stepId, max) {
  const stepEl = document.querySelector(`[data-step="${stepId}"]`);
  if (!stepEl) return;

  const isMaxReached = selections.get(stepId).size >= max;
  const warning = stepEl.querySelector('.compo__step-warning');
  const options = stepEl.querySelectorAll('.compo__option');

  options.forEach((btn) => {
    const isSelected = btn.classList.contains('is-selected');
    if (isMaxReached && !isSelected) {
      btn.classList.add('is-disabled');
      btn.setAttribute('aria-disabled', 'true');
    } else {
      btn.classList.remove('is-disabled');
      btn.removeAttribute('aria-disabled');
    }
  });

  if (warning) {
    if (isMaxReached) {
      warning.classList.add('is-visible');
    } else {
      warning.classList.remove('is-visible');
    }
  }
}

/**
 * Gère le clic sur une option.
 * @param {HTMLElement} btn - Le bouton option
 * @param {string} stepId
 * @param {string} value
 * @param {number} max
 */
function handleOptionClick(btn, stepId, value, max) {
  const stepSelections = selections.get(stepId);
  const isSelected = stepSelections.has(value);
  const isMaxReached = stepSelections.size >= max;

  // Si déjà sélectionné : désélectionner
  if (isSelected) {
    stepSelections.delete(value);
    btn.classList.remove('is-selected');
    btn.setAttribute('aria-pressed', 'false');
  } else if (!isMaxReached) {
    // Si max non atteint et choix unique (pain) : désélectionner les autres
    if (max === 1) {
      stepSelections.clear();
      const stepEl = document.querySelector(`[data-step="${stepId}"]`);
      stepEl.querySelectorAll('.compo__option').forEach((b) => {
        b.classList.remove('is-selected');
        b.setAttribute('aria-pressed', 'false');
      });
    }
    // Sélectionner
    stepSelections.add(value);
    btn.classList.add('is-selected');
    btn.setAttribute('aria-pressed', 'true');
  }

  updateCounter(stepId, max);
  updateDisabledState(stepId, max);
  updatePriceDisplay();
}

/**
 * Rend une étape du builder dans le DOM.
 * @param {Object} step - Définition de l'étape
 * @param {number} index - Numéro d'étape (1-indexé)
 * @returns {HTMLElement}
 */
function renderStep(step, index) {
  const stepEl = document.createElement('div');
  stepEl.className = 'compo__step';
  stepEl.setAttribute('data-step', step.id);

  const headerEl = document.createElement('div');
  headerEl.className = 'compo__step-header';
  headerEl.innerHTML = `
    <span class="compo__step-number">0${index}</span>
    <h3 class="compo__step-title">${getStepTitle(step.id)}</h3>
    <span class="compo__step-limit">${step.max === 1 ? 'Choix unique' : `${step.max} max`}</span>
    <span class="compo__step-counter">${step.max} restant${step.max > 1 ? 's' : ''}</span>
  `;

  const optionsEl = document.createElement('div');
  optionsEl.className = 'compo__options';
  optionsEl.setAttribute('role', 'group');
  optionsEl.setAttribute('aria-label', `Choisir ${step.label}`);

  step.options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = 'compo__option';
    btn.setAttribute('type', 'button');
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('data-value', opt.value);

    let label = opt.label;
    if (opt.extra > 0) {
      label += ` <span class="compo__option-extra">(+${opt.extra}€)</span>`;
    }
    btn.innerHTML = label;

    btn.addEventListener('click', () => {
      handleOptionClick(btn, step.id, opt.value, step.max);
    });

    optionsEl.appendChild(btn);
  });

  const warningEl = document.createElement('p');
  warningEl.className = 'compo__step-warning';
  warningEl.setAttribute('aria-live', 'polite');
  warningEl.textContent = `Maximum de ${step.max} ${step.label} atteint. Désélectionnez pour changer.`;

  stepEl.appendChild(headerEl);
  stepEl.appendChild(optionsEl);
  stepEl.appendChild(warningEl);

  return stepEl;
}

/**
 * Retourne le titre d'une étape en français.
 * @param {string} id
 * @returns {string}
 */
function getStepTitle(id) {
  const titles = {
    pain:        'TON PAIN',
    garnitures:  'TES GARNITURES',
    charcuteries: 'TES CHARCUTERIES',
    sauces:      'TES SAUCES',
  };
  return titles[id] || id.toUpperCase();
}

/**
 * Initialise le builder La Compo.
 */
export function initCompoBuilder() {
  const stepsContainer = document.querySelector('.compo__steps');
  if (!stepsContainer) return;

  // Vider le conteneur
  stepsContainer.innerHTML = '';

  // Rendre chaque étape
  STEPS.forEach((step, index) => {
    const stepEl = renderStep(step, index + 1);
    stepsContainer.appendChild(stepEl);
  });

  // Affichage initial du prix
  updatePriceDisplay();
}
