(function () {
  'use strict';

  function initTishaToggle() {
    var btn = document.getElementById('tisha-toggle');
    var tishaSection = document.getElementById('tisha-section');
    var mainSection = document.getElementById('main-menu-section');

    if (!btn || !tishaSection || !mainSection) return;

    var tishaTabs = Array.prototype.slice.call(
      tishaSection.querySelectorAll('.tisha__tab')
    );
    var tishaPanels = Array.prototype.slice.call(
      tishaSection.querySelectorAll('.menu__panel')
    );

    function activateTishaTab(activeTab) {
      tishaTabs.forEach(function (t) {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tishaPanels.forEach(function (p) {
        p.classList.remove('is-active');
        p.hidden = true;
      });
      activeTab.classList.add('is-active');
      activeTab.setAttribute('aria-selected', 'true');
      var targetId = activeTab.getAttribute('aria-controls');
      var target = document.getElementById(targetId);
      if (target) {
        target.classList.add('is-active');
        target.hidden = false;
      }
    }

    tishaTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activateTishaTab(tab);
      });
    });

    btn.addEventListener('click', function () {
      var opening = tishaSection.hidden;
      if (opening) {
        tishaSection.hidden = false;
        mainSection.hidden = true;
        btn.textContent = '✡ CARTE SPÉCIALE TISHA BEAV — Cliquez pour fermer';
        var hasActive = tishaTabs.some(function (t) {
          return t.classList.contains('is-active');
        });
        if (tishaTabs.length > 0 && !hasActive) {
          activateTishaTab(tishaTabs[0]);
        }
      } else {
        tishaSection.hidden = true;
        mainSection.hidden = false;
        btn.textContent = '✡ CARTE SPÉCIALE TISHA BEAV — Cliquez pour voir';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTishaToggle);
  } else {
    initTishaToggle();
  }
}());
