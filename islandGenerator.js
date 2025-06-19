import {
  islandTypes,
  tagInfluence,
  islandSizes,
  islandShapes,
  factions,
  treasuresByType,
  islandNamePrefixes,
  islandAdjectives,
  islandNouns,
  defaultFeatures,
  defaultMysteries,
  defaultChallenges,
  defaultWeather
} from './data.js';


import { SeededRandom, hashStringToNumber } from './seedUtils.js';

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
  const weatherPool = [...defaultWeather, ...flatten(tagData, 'weather')]; const nounPool = flatten(tagData, 'nouns');
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


  const rawWeather = getRandomItem(weatherPool, rng);
  const weather = typeof rawWeather === 'string'
    ? { text: rawWeather, emoji: "🌤️" } 
    : rawWeather || { text: "Mild breezes", emoji: "🍃" }; 


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
    weather,
    treasure: getRandomItem(treasureOptions, rng)
  };
}