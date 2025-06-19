import { SeededRandom, hashStringToNumber } from './seedUtils.js';

console.log("mapGenerator.js is loaded and executing"); 

const mapSizes = {
  small: { size: 9, islands: 10 },
  medium: { size: 15, islands: 20 },
  large: { size: 21, islands: 35 }
};

export function generateMapGrid(seedInput, sizeKey, onClickIsland) {

  const seed = seedInput || Math.random().toString(36).substring(2, 15);
  const rng = new SeededRandom(hashStringToNumber(seed));

  const { size, islands: targetIslandCount } = mapSizes[sizeKey];
  const grid = document.getElementById('map-grid');
  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${size}, 36px)`;
  grid.style.gridTemplateRows = `repeat(${size}, 36px)`;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.x = x;
      cell.dataset.y = y;
      grid.appendChild(cell);
    }
  }

  const center = Math.floor(size / 2);
  const centerCell = grid.querySelector(`.cell[data-x='${center}'][data-y='${center}']`);
  centerCell.classList.add('flotilla');
  centerCell.textContent = 'Flotilla';

  const usedPositions = new Set([`${center},${center}`]);
  const placedIslands = [];
  let attempts = 0;
  const maxAttempts = targetIslandCount * 10;

  while (placedIslands.length < targetIslandCount && attempts < maxAttempts) {
    attempts++;
    const x = rng.nextInt(0, size - 1);
    const y = rng.nextInt(0, size - 1);
    const positionKey = `${x},${y}`;

    if (!usedPositions.has(positionKey)) {
      usedPositions.add(positionKey);
      const islandSeed = rng.nextInt(1000, 9999).toString(36).toUpperCase();
      const cell = grid.querySelector(`.cell[data-x='${x}'][data-y='${y}']`);
      
      cell.classList.add('island');
      cell.textContent = islandSeed;
      cell.title = `Seed: ${islandSeed}`;
cell.addEventListener('click', () => onClickIsland(islandSeed));

      placedIslands.push({ x, y, seed: islandSeed });
    }
  }

  return {
    seed: seed,
    size: sizeKey,
    islands: placedIslands
  };
}