(() => {
  if (window.__helzerx3dLoaded) return;
  window.__helzerx3dLoaded = true;

  const SELECTOR = [
    '.hx-3d-card',
    '.bento-card',
    '.ServerRow__StatusIndicatorBox-sc-1ibsw91-2',
    '.option-radio > img'
  ].join(',');

  let rafPending = false;
  let lastEvent = null;

  function applySpotlight(e) {
    rafPending = false;
    if (!e || !e.target || typeof e.target.closest !== 'function') return;
    const card = e.target.closest(SELECTOR);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x.toFixed(1)}px`);
    card.style.setProperty('--mouse-y', `${y.toFixed(1)}px`);
  }

  document.addEventListener('pointermove', (e) => {
    if (document.documentElement.getAttribute('data-hx-spotlight') === '0') return;
    lastEvent = e;
    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(() => applySpotlight(lastEvent));
    }
  }, { passive: true });
})();
