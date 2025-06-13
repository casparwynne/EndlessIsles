import { createIslandFromSeed, renderIslandHTML } from './script.js';

const defaultSettings = {
  islandTypes: true, mysteries: true, inhabitants: true, factions: true,
  challenges: true, treasures: true, features: true, size: true,
  effects: true, ambience: true, weather: true
};

window.generateIslandHTML = (seed) => {
  const island = createIslandFromSeed(seed, defaultSettings);
  return renderIslandHTML(island, defaultSettings);
};

const mapSizes = {
  small: { size: 9, islands: 10 },
  medium: { size: 15, islands: 20 },
  large: { size: 21, islands: 35 }
};

let currentMap = { size: 'medium', seed: '', islands: [] };

function seededRandom(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i);
    h |= 0;
  }
  return () => {
    h ^= h << 13;
    h ^= h >> 17;
    h ^= h << 5;
    return ((h >>> 0) / 4294967296);
  };
}

function generateMap(sizeKey, seedInput) {
  const grid = document.getElementById("map-grid");
  const details = document.getElementById("island-details");
  details.innerHTML = '';

  const { size, islands } = mapSizes[sizeKey];
  grid.style.setProperty('--grid-size', size);

  const seed = seedInput || Math.random().toString(36).substring(2, 10);
  const rand = seededRandom(seed);

  currentMap = { size: sizeKey, seed, islands: [] };

  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${size}, 36px)`;
  grid.style.gridTemplateRows = `repeat(${size}, 36px)`;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.x = x;
      cell.dataset.y = y;
      grid.appendChild(cell);
    }
  }

  const center = Math.floor(size / 2);
  const centerCell = grid.querySelector(`.cell[data-x='${center}'][data-y='${center}']`);
  centerCell.classList.add("flotilla");
  centerCell.textContent = "Flotilla";

  const used = new Set([`${center}-${center}`]);

  for (let i = 0; i < islands; i++) {
    let x, y, key;
    do {
      x = Math.floor(rand() * size);
      y = Math.floor(rand() * size);
      key = `${x}-${y}`;
    } while (used.has(key));
    used.add(key);

    const islandSeed = Math.random().toString(36).substring(2, 6).toUpperCase();
    const cell = grid.querySelector(`.cell[data-x='${x}'][data-y='${y}']`);
    cell.classList.add("island");
    cell.textContent = islandSeed;
    cell.title = `Seed: ${islandSeed}`;

    const island = { x, y, seed: islandSeed };
    currentMap.islands.push(island);

    cell.addEventListener("click", () => showIslandDetails(island));
  }
}

function showIslandDetails(island) {
  const details = document.getElementById("island-details");
  const html = window.generateIslandHTML(island.seed);
  details.innerHTML = `
    <div style="text-align: left;">${html}</div>
    <div style="margin-top: 1em;">
      <button onclick="window.regenerateIsland(${island.x}, ${island.y})">Regenerate Random</button>
      <input id="new-seed-input" type="text" placeholder="New seed" />
      <button onclick="window.setIslandSeed(${island.x}, ${island.y})">Use Seed</button>
    </div>
  `;
}

// Properly define global functions
window.regenerateIsland = function(x, y) {
  const island = currentMap.islands.find(i => i.x === x && i.y === y);
  island.seed = Math.random().toString(36).substring(2, 6).toUpperCase();
  updateCellSeed(x, y, island.seed);
  showIslandDetails(island);
};

window.setIslandSeed = function(x, y) {
  const input = document.getElementById("new-seed-input");
  const val = input.value.trim().toUpperCase();
  if (!val) return;
  const island = currentMap.islands.find(i => i.x === x && i.y === y);
  island.seed = val;
  updateCellSeed(x, y, island.seed);
  showIslandDetails(island);
};

function updateCellSeed(x, y, seed) {
  const cell = document.querySelector(`.cell[data-x='${x}'][data-y='${y}']`);
  cell.textContent = seed;
  cell.title = `Seed: ${seed}`;
}

function renderLoadedMap(mapData) {
  const grid = document.getElementById("map-grid");
  const details = document.getElementById("island-details");
  details.innerHTML = '';

  const size = mapSizes[mapData.size].size;
  currentMap = mapData;

  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${size}, 36px)`;
  grid.style.gridTemplateRows = `repeat(${size}, 36px)`;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.x = x;
      cell.dataset.y = y;
      grid.appendChild(cell);
    }
  }

  const center = Math.floor(size / 2);
  const centerCell = grid.querySelector(`.cell[data-x='${center}'][data-y='${center}']`);
  centerCell.classList.add("flotilla");
  centerCell.textContent = "Flotilla";

  mapData.islands.forEach(island => {
    const cell = grid.querySelector(`.cell[data-x='${island.x}'][data-y='${island.y}']`);
    cell.classList.add("island");
    cell.textContent = island.seed;
    cell.title = `Seed: ${island.seed}`;
    cell.addEventListener("click", () => showIslandDetails(island));
  });
}

// Event Listeners
document.getElementById("generate-map").addEventListener("click", () => {
  const size = document.getElementById("map-size").value;
  const seed = document.getElementById("global-seed").value;
  generateMap(size, seed);
});

document.getElementById("download-map").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(currentMap, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `endless-isles-map-${currentMap.seed}.json`;
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById("load-map").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const loadedMap = JSON.parse(e.target.result);
      if (!loadedMap || !loadedMap.size || !loadedMap.islands) throw new Error("Invalid map format");
      renderLoadedMap(loadedMap);
    } catch (err) {
      alert("Failed to load map: " + err.message);
    }
  };
  reader.readAsText(file);
});

// Initial map
generateMap("medium", "");