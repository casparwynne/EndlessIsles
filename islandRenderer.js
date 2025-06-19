import { formatTreasureValue, valueToString } from './seedUtils.js';

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

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
