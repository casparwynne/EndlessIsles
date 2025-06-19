import { createIslandFromSeed } from './islandGenerator.js';
import { renderIslandHTML } from './islandRenderer.js';
import { hashStringToNumber } from './seedUtils.js';
import { toggleSettings, resetSettings, copyToClipboard, printIsland, setupCollapsibles } from './uiControls.js';

function getSettingsFromDOM() {
  return {
    islandTypes: document.getElementById('toggle-islandTypes').checked,
    mysteries: document.getElementById('toggle-mysteries').checked,
    inhabitants: document.getElementById('toggle-inhabitants').checked,
    factions: document.getElementById('toggle-factions').checked,
    challenges: document.getElementById('toggle-challenges').checked,
    treasures: document.getElementById('toggle-treasures').checked,
    features: document.getElementById('toggle-features').checked,
    size: document.getElementById('toggle-size').checked,
    effects: document.getElementById('toggle-effects').checked,
    ambience: document.getElementById('toggle-ambience').checked,
    weather: document.getElementById('toggle-weather').checked,
  };
}

function generateIsland(seedInput = null) {
  let seed = seedInput || Date.now();
  if (typeof seed === 'string') {
    seed = hashStringToNumber(seed);
  }
  document.getElementById('seedDisplay').textContent = `Using seed: ${seed}`;

  const settings = getSettingsFromDOM();
  const island = createIslandFromSeed(seed, settings);
  const html = renderIslandHTML(island, settings);

  const output = document.getElementById('output');
  output.innerHTML = html;
  output.style.display = 'block';
  output.style.opacity = 0;
  setTimeout(() => {
    output.style.transition = 'opacity 0.8s ease-in-out';
    output.style.opacity = 1;
    output.scrollIntoView({ behavior: 'smooth' });
  }, 50);
}

window.addEventListener('DOMContentLoaded', () => {
  setupCollapsibles();
  toggleSettings();
  document.getElementById('toggleButton')?.addEventListener('click', toggleSettings);
  document.getElementById('generateBtn')?.addEventListener('click', () => {
    const seedInput = document.getElementById('seedInput').value.trim();
    generateIsland(seedInput || null);
  });

  document.getElementById('resetBtn')?.addEventListener('click', resetSettings);
  document.getElementById('copyBtn')?.addEventListener('click', copyToClipboard);
  document.getElementById('printBtn')?.addEventListener('click', printIsland);

  const urlSeed = new URLSearchParams(window.location.search).get('seed');
  if (urlSeed) generateIsland(urlSeed);
});
