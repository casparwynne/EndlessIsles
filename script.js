import { islandTypes, tagInfluence, islandSizes, islandShapes, factions, treasuresByType, islandNamePrefixes, islandAdjectives, islandNouns, defaultFeatures, defaultMysteries, defaultChallenges } from './data.js';


// ========== SEEDED RANDOM ========== //
class SeededRandom {
  constructor(seed) {
    this.seed = seed;
  }

  next() {
    this.seed |= 0;
    this.seed = Math.imul(48271, this.seed) | 0 % 2147483647;
    return (this.seed & 2147483647) / 2147483648;
  }

  nextInt(min, max) {
    return Math.floor(this.next() * (max - min + 1)) + min;
  }
}


function hashStringToNumber(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

function generateFromInputSeed() {
    const input = document.getElementById('seedInput').value;
    if (input.trim() === '') {
        generateIsland(); // no seed
    } else {
        generateIsland(input); // user seed
    }
}

// ========== RANDOM HELPERS ========== //
function getRandomItem(array, rng) {
    return array[Math.floor(rng.next() * array.length)];
}

function getRandomItems(array, count, rng) {
    const copy = [...array];
    const results = [];
    for (let i = 0; i < count && copy.length > 0; i++) {
        const index = Math.floor(rng.next() * copy.length);
        results.push(copy.splice(index, 1)[0]);
    }
    return results;
}

function generateIslandName(rng, tags, mystery, tagNouns = []) {
    const prefix = getRandomItem(islandNamePrefixes, rng);
    const adjective = getRandomItem(islandAdjectives, rng);
    const nounPool = [...islandNouns, ...tagNouns];
    const noun = getRandomItem(nounPool, rng);

    return `${prefix} ${adjective} ${noun}`;
}


// ========== ISLAND GENERATION ========== //
let currentSeed = Date.now();
let islandCounter = 1;

export function createIslandFromSeed(seed, settings) {
    if (typeof seed === 'string') seed = hashStringToNumber(seed);
    const rng = new SeededRandom(seed);
    const typeObj = getRandomItem(islandTypes, rng);
    const tags = typeObj.tags;
    const tagData = tags.map(tag => tagInfluence[tag] || {});
    const flatten = (arrs, key) => arrs.map(t => t[key] || []).flat();

    const size = getRandomItem(islandSizes, rng);
    const shape = getRandomItem(islandShapes, rng);
    const mysteryPool = [...defaultMysteries, ...flatten(tagData, 'mystery')];
    const featurePool = [...defaultFeatures, ...flatten(tagData, 'features')];
    const challengePool = [...defaultChallenges, ...flatten(tagData, 'challenges')];
    const inhabitantPool = flatten(tagData, 'inhabitants') || ["No known inhabitants"];
    const effectsPool = flatten(tagData, 'effects');
    const ambiencePool = flatten(tagData, 'ambience');
    const weatherPool = flatten(tagData, 'weather');
    const nounPool = flatten(tagData, 'nouns');
    const treasureTypes = flatten(tagData, 'treasure');
    const treasureOptions = treasuresByType[treasureTypes.length ? getRandomItem(treasureTypes, rng) : "curiosity"];

    const numFeatures = size.includes("Tiny") ? rng.nextInt(1, 3)
                      : size.includes("Small") ? rng.nextInt(2, 4)
                      : size.includes("Medium") ? rng.nextInt(3, 6)
                      : size.includes("Large") ? rng.nextInt(5, 8)
                      : rng.nextInt(7, 12);

    const factionsForSize = size.includes("Tiny") || size.includes("Small") ? 1
                          : size.includes("Medium") ? (rng.next() < 0.5 ? 2 : 1)
                          : 2;

    return {
        seed,
        name: generateIslandName(rng, tags, getRandomItem(mysteryPool, rng), nounPool),
        size,
        shape,
        type: typeObj.label,
        features: getRandomItems(featurePool, numFeatures, rng),
        mystery: getRandomItem(mysteryPool, rng),
        inhabitants: getRandomItem(inhabitantPool, rng),
        factions: getRandomItems(factions, factionsForSize, rng),
        challenge: getRandomItem(challengePool, rng),
        effects: getRandomItem(effectsPool, rng),
        ambience: getRandomItem(ambiencePool, rng),
        weather: getRandomItem(weatherPool, rng),
        treasure: getRandomItem(treasureOptions, rng)
    };
}

export function renderIslandHTML(island, settings) {
    const totalCopper = island.treasure.value.gold * 100 + island.treasure.value.silver * 10 + island.treasure.value.copper;
    const formattedValue = valueToString(formatTreasureValue(totalCopper));
    const s = settings;

    return `
    <div class="island-header">
      <h2 class="island-title">${island.name.toUpperCase()}</h2>
      <div class="island-id">Seed: ${island.seed}</div>
    </div>
    ${s.size ? `<div class="island-section"><div class="section-title">Size & Shape</div><p>${island.size}, ${island.shape.toLowerCase()} formation</p></div>` : ''}
    ${s.islandTypes ? `<div class="island-section"><div class="section-title">Island Type</div><p>${island.type}</p></div>` : ''}
    ${s.features ? `<div class="island-section"><div class="section-title">Notable Features</div><div class="feature-list">${island.features.map(f => `<div class="feature-tag">${f}</div>`).join('')}</div></div>` : ''}
    ${s.mysteries ? `<div class="island-section"><div class="section-title">Central Mystery</div><p>${island.mystery}</p></div>` : ''}
    ${s.inhabitants ? `<div class="island-section"><div class="section-title">Inhabitants</div><p>${island.inhabitants}</p></div>` : ''}
    ${s.factions ? `<div class="island-section"><div class="section-title">Faction Interest</div><ul class="faction-list">${island.factions.map(f => `<li><strong>${f.name}:</strong> ${f.description}</li>`).join('')}</ul></div>` : ''}
    ${s.challenges ? `<div class="island-section"><div class="section-title">Major Challenge</div><p>${island.challenge}</p></div>` : ''}
    ${s.effects ? `<div class="island-section"><div class="section-title">Effects</div><p>${island.effects}</p></div>` : ''}
    ${s.ambience ? `<div class="island-section"><div class="section-title">Ambience</div><p>Light: ${island.ambience.light}</p><p>Sound: ${island.ambience.sound}</p></div>` : ''}
    ${s.weather ? `<div class="island-section"><div class="section-title">Weather</div><p>${island.weather.text} <span class="weatherEmoji">${island.weather.emoji}</span></p></div>` : ''}
    ${s.treasures ? `<div class="island-section"><div class="section-title">Treasure</div><div class="treasure-box rarity-${island.treasure.rarity.toLowerCase()}"><div class="treasure-name">${island.treasure.name}</div><div class="treasure-type">${capitalize(island.treasure.type)} • ${island.treasure.rarity}</div><div class="treasure-description">${island.treasure.description}</div><div class="treasure-value">${formattedValue}</div></div></div>` : ''}
    `;
}

export function generateIsland(useSeed = null) {    
    let seed = useSeed !== null ? useSeed : Date.now();
    if (typeof seed === 'string') {
        seed = hashStringToNumber(seed);
    }
    currentSeed = seed;

    document.getElementById('seedDisplay').textContent = `Using seed: ${seed}`;

    const settings = {
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

    const island = createIslandFromSeed(seed, settings);
    const result = renderIslandHTML(island, settings);

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = result;
    outputDiv.style.display = 'block';
    outputDiv.style.opacity = 0;

    setTimeout(() => {
        outputDiv.style.transition = 'opacity 0.8s ease-in-out';
        outputDiv.style.opacity = 1;
        outputDiv.scrollIntoView({ behavior: 'smooth' });
    }, 50);
}


function toggleSettings() {
    const settingsDiv = document.getElementById('settings');
    const toggleButton = document.getElementById('toggleButton');
    settingsDiv.classList.toggle('collapsed');

    if (settingsDiv.classList.contains('collapsed')) {
        toggleButton.textContent = 'Show Settings';
    } else {
        toggleButton.textContent = 'Hide Settings';
    }
}

function resetSettings() {
    document.querySelectorAll('#settings input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = true;
    });
}

function copyToClipboard() {
    const outputDiv = document.getElementById('output');
    const text = outputDiv.innerText;

    navigator.clipboard.writeText(text)
        .then(() => {
            const copyBtn = document.getElementById('copyBtn');
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';

            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy text to clipboard');
        });
}

function printIsland() {
    const printContent = document.getElementById('output').innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = `
        <div style="padding: 2em; font-family: sans-serif;">
          <h1 style="text-align: center; color: #2c4c26;">Island Details</h1>
          ${printContent}
          <div style="text-align: center; margin-top: 2em; font-size: 0.8em; color: #555;">
            Generated by Sormwall Isles Generator
          </div>
        </div>
      `;

    window.print();
    document.body.innerHTML = originalContent;
}

function formatTreasureValue(totalCopper) {
    const gold = Math.floor(totalCopper / 100);
    const silver = Math.floor((totalCopper % 100) / 10);
    const copper = totalCopper % 10;
    return { gold, silver, copper };
}

function valueToString(valueObj) {
    const parts = [];
    if (valueObj.gold > 0) parts.push(`${valueObj.gold}gp`);
    if (valueObj.silver > 0) parts.push(`${valueObj.silver}sp`);
    if (valueObj.copper > 0) parts.push(`${valueObj.copper}cp`);
    return parts.join(', ') || '0cp';
}

document.querySelectorAll(".collapsible").forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("active");
        const content = button.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


window.addEventListener('DOMContentLoaded', () => {
    const settingsDiv = document.getElementById('settings');
    const toggleButton = document.getElementById('toggleButton');

    if (settingsDiv) {
        settingsDiv.classList.add('collapsed');
        toggleButton.textContent = 'Show Settings';
    }

    const urlSeed = new URLSearchParams(window.location.search).get('seed');
    if (urlSeed) {
        generateIsland(urlSeed);
    }
});

const btn = document.getElementById("generateBtn");
if (btn) {
  btn.addEventListener("click", generateFromInputSeed);
}
