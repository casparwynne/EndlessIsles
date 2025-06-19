import { generateMapGrid } from './mapGenerator.js';
import { createIslandFromSeed } from './islandGenerator.js';
import { renderIslandHTML } from './islandRenderer.js';

let currentMap = { size: 'medium', seed: '', islands: [] };

function generateIslandHTML(seed) {
  console.log('Generating island details for seed:', seed);
  const island = createIslandFromSeed(seed, getSettings());
  return renderIslandHTML(island, getSettings());
}

function showIslandDetails(seed) {
  const island = createIslandFromSeed(seed, getSettings());
  const details = document.getElementById('island-details');
  const html = renderIslandHTML(island, getSettings());
  details.innerHTML = html;
}


function getSettings() {
  return {
    islandTypes: true,
    mysteries: true,
    inhabitants: true,
    factions: true,
    challenges: true,
    treasures: true,
    features: true,
    size: true,
    effects: true,
    ambience: true,
    weather: true,
  };
}

function generateMap(seed, sizeKey) {
  const stringSeed = typeof seed === 'number' ? seed.toString() : seed || Date.now().toString();
  currentMap = generateMapGrid(
    stringSeed,
    sizeKey,
    showIslandDetails,
    document.getElementById('map-grid').style.display = 'inline-grid',
    document.getElementById('island-details').style.display = 'block'
  );
}

window.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded fired");

  const generateBtn = document.getElementById('generate-map');
  const downloadBtn = document.getElementById('download-map');
  const loadInput = document.getElementById('load-map');

  if (!generateBtn || !downloadBtn || !loadInput) {
    console.error("Required elements not found!");
    return;
  }

  generateBtn.addEventListener('click', () => {
    console.log("Generate button clicked");
    try {
      const seed = document.getElementById('global-seed').value.trim() || Date.now();
      const size = document.getElementById('map-size').value;
      console.log("Using parameters:", { seed, size });
      generateMap(seed, size);
    } catch (error) {
      console.error("Button click handler failed:", error);
    }
  });

  downloadBtn.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(currentMap, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'endless-isles-map.json';
    a.click();
    URL.revokeObjectURL(url);
  });

  loadInput.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.seed && data.size) {
          document.getElementById('global-seed').value = data.seed;
          document.getElementById('map-size').value = data.size;
          generateMap(data.seed, data.size);
        }
      } catch (err) {
        alert('Failed to load map file.');
      }
    };
    reader.readAsText(file);
  });
});

