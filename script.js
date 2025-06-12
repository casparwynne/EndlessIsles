// Endless Isles Random Island Generator - Zelda Themed Web App

const islandTypes = [
  "Jungle-covered volcanic isle",
  "Rocky, mist-shrouded cliffs",
  "Flat coral atoll",
  "Sinking swamp island",
  "Crystalline/glass-covered isle",
  "Island with a massive sinkhole",
  "Ruins of an ancient civilization",
  "Living island (creature/entity)"
];

const islandSizes = ["Small", "Medium", "Large"];

const islandFeatures = {
  default: [
    "Dense jungle",
    "Coral reefs",
    "Towering cliffs",
    "Ancient ruins",
    "Hot springs",
    "Bioluminescent plants",
    "Underground caves",
    "Salt flats",
    "Waterfalls",
    "Tidal pools"
  ],
  volcanic: ["Basalt cliffs", "Active caldera", "Lava tubes", "Ash fields", "Steam vents"],
  living: [
    "Giant turtle-like carapace",
    "Breathing chasms",
    "Shifting spine-ridges",
    "Ooze-filled tunnels",
    "Fleshy chambers with organic membranes"
  ]
};

const mysteries = [
  "Disappearing crew left clues",
  "A structure not made by humans",
  "Locals worship a strange deity",
  "Time passes differently here",
  "An eternal storm rages overhead",
  "Everyone here acts the same",
  "The island moves at night",
  "A sealed vault hums underground"
];

const inhabitants = [
  "Marooned pirate cult",
  "Sentient animals or constructs",
  "Ghosts of past explorers",
  "Reclusive scholars/hermits",
  "Native tribe with forgotten tech",
  "No one – or so it seems..."
];

const factions = [
  "Crimson Company wants control",
  "Scholarium Obscura sent a team",
  "House Auric is funding a dig here",
  "Navigators' Guild lost a scout",
  "Rogue Patron seeking a dark relic",
  "Rival adventuring party already here"
];

const challenges = [
  "Dangerous terrain (lava, cliffs, pits)",
  "Enchanted guardians",
  "Wild, mutating weather",
  "Puzzling ruins with shifting paths",
  "A curse that slowly affects the party",
  "Warring factions/beasts",
  "Illusions hiding reality",
  "The island itself resists intrusion"
];

const treasures = [
  "Map to a greater secret",
  "Rare material/artifact",
  "Forbidden knowledge or spell",
  "A person with valuable insight",
  "A wish-granting relic (with cost)",
  "Nothing tangible, but spiritual gain"
];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomItems(array, count) {
  const copy = [...array];
  const results = [];
  for (let i = 0; i < count && copy.length > 0; i++) {
    const index = Math.floor(Math.random() * copy.length);
    results.push(copy.splice(index, 1)[0]);
  }
  return results;
}

function generateIsland() {
  const settings = {
    islandTypes: document.getElementById('toggle-islandTypes').checked,
    mysteries: document.getElementById('toggle-mysteries').checked,
    inhabitants: document.getElementById('toggle-inhabitants').checked,
    factions: document.getElementById('toggle-factions').checked,
    challenges: document.getElementById('toggle-challenges').checked,
    treasures: document.getElementById('toggle-treasures').checked
  };

  const size = getRandomItem(islandSizes);
  let type = getRandomItem(islandTypes);
  let baseFeatures = [...islandFeatures.default];
  let livingDescription = '';

  if (type.includes("volcanic")) {
    baseFeatures = baseFeatures.concat(islandFeatures.volcanic);
  } else if (type.includes("Living island")) {
    const creatureType = getRandomItem([
      "colossal sea turtle",
      "slumbering sea leviathan",
      "ancient forest serpent",
      "floating stingray-like beast",
      "primordial crab god"
    ]);
    baseFeatures = islandFeatures.living;
    livingDescription = `This island is the body of a ${creatureType}, partially submerged and covered in growth.<br>`;
  }

  const featureRange = size === "Small" ? [1, 3] : size === "Medium" ? [2, 5] : [4, 8];
  const numFeatures = Math.floor(Math.random() * (featureRange[1] - featureRange[0] + 1)) + featureRange[0];
  const features = getRandomItems(baseFeatures, numFeatures);

  let result = `<strong>Island Size:</strong> ${size}<br>`;
  if (settings.islandTypes) result += `<strong>Island Type:</strong> ${type}<br>`;
  result += `<strong>Geographical Features:</strong> ${features.join(", ")}<br>`;
  if (livingDescription) result += `<em>${livingDescription}</em>`;
  if (settings.mysteries) result += `<strong>Central Mystery:</strong> ${getRandomItem(mysteries)}<br>`;
  if (settings.inhabitants) result += `<strong>Inhabitants:</strong> ${getRandomItem(inhabitants)}<br>`;
  if (settings.factions) result += `<strong>Faction Interest:</strong> ${getRandomItem(factions)}<br>`;
  if (settings.challenges) result += `<strong>Challenge:</strong> ${getRandomItem(challenges)}<br>`;
  if (settings.treasures) result += `<strong>Treasure:</strong> ${getRandomItem(treasures)}<br>`;

  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = result;
  outputDiv.style.opacity = 0;

  setTimeout(() => {
    outputDiv.style.transition = 'opacity 0.8s ease-in-out';
    outputDiv.style.opacity = 1;
    outputDiv.scrollIntoView({ behavior: 'smooth' });
  }, 50);
}

function toggleSettings() {
  const settingsDiv = document.getElementById('settings');
  settingsDiv.classList.toggle('collapsed');
}

// Collapse settings panel on page load
window.addEventListener('DOMContentLoaded', () => {
  const settingsDiv = document.getElementById('settings');
  if (settingsDiv) {
    settingsDiv.classList.add('collapsed');
  }
});