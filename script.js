// Island data - expanded with more options
const islandTypes = [
    { label: "Jungle-covered volcanic isle", tags: ["volcanic", "jungle", "hot"] },
    { label: "Rocky, mist-shrouded cliffs", tags: ["rocky", "coastal", "foggy"] },
    { label: "Flat coral atoll", tags: ["coral", "coastal", "tropical"] },
    { label: "Sinking swamp island", tags: ["swamp", "wet", "unstable"] },
    { label: "Crystalline/glass-covered isle", tags: ["crystal", "barren", "shimmering"] },
    { label: "Island with a massive sinkhole", tags: ["sinkhole", "unstable", "underground"] },
    { label: "Ruins of an ancient civilization", tags: ["ruins", "ancient", "mystical"] },
    { label: "Living island (creature/entity)", tags: ["living", "organic", "weird"] },
    { label: "Floating sky island", tags: ["floating", "sky", "magical"] },
    { label: "Glacial island with frozen secrets", tags: ["ice", "frozen", "ancient", "harsh"] },
    { label: "Desert island with buried ruins", tags: ["desert", "hot", "ruins", "arid"] },
    { label: "Magnetic island with floating rocks", tags: ["magnetic", "arcane", "unstable"] },
    { label: "Petrified forest island", tags: ["forest", "ancient", "stone", "mystical"] },
    { label: "Island made entirely of bones", tags: ["bone", "morbid", "barren", "supernatural"] },
    { label: "Mushroom forest island", tags: ["fungal", "dense", "twilight", "weird"] },
    { label: "Overgrown fortress isle", tags: ["fortress", "ruins", "jungle", "strategic"] },
    { label: "Isle of black sand beaches", tags: ["volcanic", "coastal", "ash"] },
    { label: "Mirrorwater island", tags: ["reflective", "illusion", "calm", "weird"] },
    { label: "Shattered archipelago", tags: ["archipelago", "broken", "rocky", "hazardous"] },
    { label: "Whale-fall reef", tags: ["decay", "biological", "tidal", "deep"] },
    { label: "Tidal island accessible only at low tide", tags: ["tidal", "coastal", "unstable", "mystical"] },
    { label: "Island with a perpetual lightning storm", tags: ["storm", "volatile", "magical", "dangerous"] },
    { label: "Sunken city rising from the sea", tags: ["ruins", "rising", "ancient", "coastal", "arcane"] },
    { label: "Island inhabited by statues", tags: ["statues", "unnerving", "petrification", "mystery"] },
    { label: "Forest that whispers secrets", tags: ["forest", "psychic", "haunted", "mystical"] }
];

const tagInfluence = {
    ancient: {
        nouns: ["Echo", "Relic", "Memory"],
        features: ["Crumbling temples", "Faded glyphs"],
        mystery: ["Time flows differently here"],
        inhabitants: ["Walking Mummified Corpses"],
        treasure: ["curiosity"]

    },
    arcane: {
        nouns: ["Sigil", "Rune", "Wand"],
        features: ["Runestone circles", "Flickering ley-lines"],
        mystery: ["Magic distorts the air"],
        inhabitants: ["Fey Folk"],
        treasure: ["art"],
        challenges: ["Random magical effects trigger at intervals", "Spells behave unpredictably", "Time dilation occurs in bursts"]
    },
    ash: {
        nouns: ["Cinder", "Ember", "Dust"],
        features: ["Blackened beaches", "Smoldering fields"],
        mystery: ["The ash never cools"],
        inhabitants: ["Burned Souls"],
        treasure: ["curiosity"]

    },
    barren: {
        nouns: ["Wasteland", "Scrape", "Crust"],
        features: ["Bare rock shelves", "Bleached earth"],
        mystery: ["Nothing has grown here for centuries"],
        treasure: ["curiosity"]

    },
    biological: {
        nouns: ["Sinew", "Carcass", "Spine"],
        features: ["Exposed ribs", "Decomposing fauna"],
        mystery: ["The bones whisper when it rains"],
        inhabitants: ["Flesh Monsters"],
        treasure: ["curiosity"]

    },
    bone: {
        nouns: ["Femur", "Ivory", "Grin"],
        features: ["Bone towers", "Rattling heaps"],
        mystery: ["The island remembers its prey"],
        inhabitants: ["Undead townsfolk, unaware of their demise"],
        treasure: ["curiosity"],
        challenges: ["Bone piles animate at night", "Ghostly wails disorient travellers", "The land reshapes into skeletal mazes"]

    },
    broken: {
        nouns: ["Fragment", "Shard", "Split"],
        features: ["Sheared cliffs", "Fractured terrain"],
        mystery: ["It was torn apart—by what?"],
        treasure: ["curiosity"]

    },
    calm: {
        nouns: ["Tranquility", "Still", "Glass"],
        features: ["Unmoving tides", "Mirror-flat pools"],
        mystery: ["No wind ever blows here"],
        treasure: ["curiosity"]

    },
    coastal: {
        nouns: ["Tide", "Shell", "Spray"],
        features: ["Hidden coves", "Seabird cliffs"],
        mystery: ["The sea brings strange gifts"],
        inhabitants: ["Merfolk live in the shallows", "Sentient Crabs"],
        treasure: ["curiosity"],
        challenges: ["Tide shifts strand ships", "Saltwater corrosion disables tools", "Hidden reefs rip hulls to shreds"]

    },
    coral: {
        nouns: ["Reef", "Polyps", "Bloom"],
        features: ["Living reef bridges", "Vibrant coral beds"],
        mystery: ["The coral pulses with emotion"],
        inhabitants: ["Merfolk live in the shallows", "Sentient Crabs"],
        treasure: ["curiosity"]

    },
    crystal: {
        nouns: ["Prism", "Shard", "Facet"],
        features: ["Light maze", "Singing crystals"],
        mystery: ["Reflections show other worlds"],
        inhabitants: ["Crystal constructs", "Crystal Golems"],
        treasure: ["curiosity"]

    },
    dangerous: {
        nouns: ["Risk", "Blade", "Peril"],
        features: ["Hidden traps", "Unstable cliffs"],
        mystery: ["The island tries to kill you"],
        inhabitants: ["Pick a random creature from the Monster List"],
        treasure: ["curiosity"]

    },
    decay: {
        nouns: ["Rot", "Fester", "Blight"],
        features: ["Moldering husks", "Slimy residue"],
        mystery: ["Life melts here"],
        inhabitants: ["Undead", "Giant Rats"],
        treasure: ["curiosity"]

    },
    deep: {
        nouns: ["Abyss", "Trench", "Pressure"],
        features: ["Bottomless pools", "Collapsed caverns"],
        mystery: ["The deep calls in dreams"],
        inhabitants: ["Deep monsters..."],
        treasure: ["curiosity"]


    },
    desert: {
        nouns: ["Dune", "Scorch", "Mirage"],
        features: ["Shifting sands", "Blistering heat"],
        mystery: ["An oasis appears at dusk—and vanishes"],
        inhabitants: ["Sand men"],
        treasure: ["curiosity"]


    },
    dense: {
        nouns: ["Thicket", "Maze", "Snare"],
        features: ["Impenetrable growth", "Overgrown ruins"],
        mystery: ["Paths never lead the same way twice"],
        treasure: ["curiosity"]

    },
    floating: {
        nouns: ["Lift", "Buoy", "Hover"],
        features: ["Hovering stones", "Gravity bubbles"],
        mystery: ["It should fall—but it doesn’t"],
        inhabitants: ["Fey"],
        treasure: ["curiosity"]


    },
    foggy: {
        nouns: ["Mist", "Veil", "Drift"],
        features: ["Blinding fogbanks", "Ghost shapes"],
        mystery: ["Voices whisper in the mist"],
        inhabitants: ["Ghosts", "Walking Shadows"],
        treasure: ["curiosity"],
        challenges: ["Disorientation is constant", "Sound echoes misleadingly", "Phantom lights lure travellers away"]


    },
    forest: {
        nouns: ["Canopy", "Bark", "Root"],
        features: ["Towering trees", "Endless undergrowth"],
        mystery: ["Something watches from the trees"],
        inhabitants: ["Gnomes"],
        treasure: ["curiosity"]


    },
    fortress: {
        nouns: ["Wall", "Rampart", "Keep"],
        features: ["Broken battlements", "Sealed gates"],
        mystery: ["The defenders still walk the halls"],
        inhabitants: ["Sentient Armour"],
        treasure: ["curiosity"],
        challenges: ["Traps remain active", "Walls collapse without warning", "Undead defenders follow ancient orders"]

    },
    frozen: {
        nouns: ["Icicle", "Rime", "Hush"],
        features: ["Snowy dunes", "Frozen statues"],
        mystery: ["It froze mid-motion"],
        inhabitants: ["Yeti"],
        treasure: ["curiosity"],
        challenges: ["Blizzards reduce visibility to nothing", "Buried crevasses threaten to swallow whole caravans", "Frostbite sets in within minutes"]
    },
    haunted: {
        nouns: ["Wraith", "Whisper", "Shade"],
        features: ["Cold spots", "Unseen footsteps"],
        mystery: ["You are never alone"],
        inhabitants: ["Undead", "Ghosts", "Vampires"],
        treasure: ["curiosity"],
        challenges: ["Spirits replay violent deaths", "Possession attempts during dreams", "Dead refuse to stay buried"]

    },
    hot: {
        nouns: ["Blaze", "Flare", "Scorch"],
        features: ["Boiling springs", "Sun-cracked stone"],
        mystery: ["The heat seems... intentional"],
        inhabitants: ["Fire Golems"],
        treasure: ["curiosity"]

    },
    illusion: {
        nouns: ["Echo", "Lie", "Veil"],
        features: ["Shifting shapes", "Vanishing paths"],
        mystery: ["Reality is not fixed here"],
        inhabitants: ["Sprites"],
        treasure: ["curiosity"]


    },
    jungle: {
        nouns: ["Vine", "Beast", "Sprawl"],
        features: ["Dense canopy", "Choking creepers"],
        mystery: ["The jungle moves at night"],
        inhabitants: ["Indigenous Tribes", "Sentient Monkeys"],
        treasure: ["curiosity"],
        challenges: ["Predators stalk from the canopy", "Dense foliage obscures paths", "Poisonous plants react to movement"]
    },
    living: {
        nouns: ["Heart", "Shell", "Flesh"],
        features: ["Breathing chamber", "Sinew hills"],
        mystery: ["The island dreams"],
        inhabitants: ["Giant Crabs"],
        treasure: ["curiosity"]


    },
    magical: {
        nouns: ["Charm", "Gleam", "Wand"],
        features: ["Runic formations", "Aether currents"],
        mystery: ["It pulses with arcane life"],
        inhabitants: ["Lone wizard researcher who is not sure how he got there years ago"],
        treasure: ["curiosity"]


    },
    magnetic: {
        nouns: ["Pull", "Lode", "Field"],
        features: ["Hovering debris", "Strange compass spins"],
        mystery: ["Metal bends unnaturally here"],
        inhabitants: ["Heavily armoured man who is stuck to a wall"],
        treasure: ["curiosity"]


    },
    misty: {
        nouns: ["Drift", "Haze", "Cover"],
        features: ["Low-lying fog", "Half-seen ruins"],
        mystery: ["Shapes loom where there should be none"],
        inhabitants: ["Water Farmers who reap drinking water from the misty air"],
        treasure: ["curiosity"]


    },
    morbid: {
        nouns: ["Grave", "Crypt", "Dirge"],
        features: ["Bone altars", "Death motifs"],
        mystery: ["It honors something long dead"],
        inhabitants: ["Cult followers"],
        treasure: ["curiosity"]


    },
    mystical: {
        nouns: ["Vision", "Seer", "Charm"],
        features: ["Flickering lights", "Sacred groves"],
        mystery: ["Dreams here are prophetic"],
        inhabitants: ["Fey folk", "Lone wizard", "Witches coven"],
        treasure: ["curiosity"]


    },
    organic: {
        nouns: ["Pulse", "Shell", "Spine"],
        features: ["Living caves", "Breathing walls"],
        mystery: ["It responds when touched"],
        inhabitants: ["Kronenbergs"],
        treasure: ["curiosity"]

    },
    petrification: {
        nouns: ["Stone", "Stare", "Stillness"],
        features: ["Frozen figures", "Statue fields"],
        mystery: ["Did they move just now?"],
        treasure: ["curiosity"]

    },
    psychic: {
        nouns: ["Thought", "Echo", "Will"],
        features: ["Mental static", "Harmonized groves"],
        mystery: ["It speaks into your mind"],
        inhabitants: ["Disembodied voices"],
        treasure: ["curiosity"],
        challenges: ["Intrusive thoughts become voices", "Party members hear each other’s secrets involuntarily", "Mental fatigue builds unnaturally fast"]


    },
    reflective: {
        nouns: ["Mirror", "Glimmer", "Pane"],
        features: ["Still waters", "Reflective stone"],
        mystery: ["You see a version of yourself—but not quite"],
        treasure: ["curiosity"]

    },
    rising: {
        nouns: ["Ascension", "Spire", "Tide"],
        features: ["Emergent platforms", "Watermarked ruins"],
        mystery: ["It wasn’t here last week"],
        treasure: ["curiosity"]

    },
    rocky: {
        nouns: ["Crag", "Spire", "Ridge"],
        features: ["Jagged cliffs", "Falling scree"],
        mystery: ["Voices echo from inside the rocks"],
        treasure: ["curiosity"],
        challenges: ["Landslides triggered by footfalls", "Sheer cliffs with unstable ledges", "Echoing sounds attract territorial beasts"]

    },
    ruins: {
        nouns: ["Pillar", "Vault", "Echo"],
        features: ["Sunken plazas", "Collapsed towers"],
        mystery: ["A lost people left a warning"],
        treasure: ["curiosity"]

    },
    shimmering: {
        nouns: ["Gleam", "Twinkle", "Glimmer"],
        features: ["Blinding patches", "Wavering air"],
        mystery: ["Reality flickers here"],
        treasure: ["curiosity"]

    },
    sinkhole: {
        nouns: ["Pit", "Maw", "Chasm"],
        features: ["Sudden drops", "Unstable crust"],
        mystery: ["Something is waiting below"],
        treasure: ["curiosity"]

    },
    sky: {
        nouns: ["Cloud", "Drift", "Wing"],
        features: ["Air bridges", "Floating flora"],
        mystery: ["It connects to something above"],
        inhabitants: ["Bird folk"],
        treasure: ["curiosity"]


    },
    statues: {
        nouns: ["Effigy", "Gaze", "Stone"],
        features: ["Unblinking forms", "Rows of figures"],
        mystery: ["They change position when not watched"],
        treasure: ["curiosity"]

    },
    stone: {
        nouns: ["Granite", "Pebble", "Obsidian"],
        features: ["Basalt columns", "Carved ridges"],
        mystery: ["The stone remembers footsteps"],
        inhabitants: ["Golems", "Dwarfs"],
        treasure: ["curiosity"]


    },
    storm: {
        nouns: ["Tempest", "Storm", "Thunder"],
        features: ["Lightning field", "Charged air"],
        mystery: ["The storm never moves"],
        inhabitants: ["Djini"],
        treasure: ["curiosity"],
        challenges: ["Constant lightning strikes the tallest object", "Magnetic interference disables navigation", "Electrified air sparks wildfires"]



    },
    strategic: {
        nouns: ["Hold", "Post", "Bastion"],
        features: ["Watch towers", "Supply caches"],
        mystery: ["Everyone wants control"],
        inhabitants: ["An army"],
        treasure: ["curiosity"]


    },
    supernatural: {
        nouns: ["Specter", "Witch", "Charm"],
        features: ["Ghost lights", "Hexed circles"],
        mystery: ["It rejects reason"],
        inhabitants: ["Witches Coven", "Werewolves", "Necromancer"],
        treasure: ["curiosity"]


    },
    swamp: {
        nouns: ["Mire", "Bog", "Quagmire"],
        features: ["Sinking trail", "Rotting reeds"],
        mystery: ["Things bubble up"],
        inhabitants: ["Hags"],
        treasure: ["curiosity"],
        challenges: ["Every step sinks", "Diseased insects swarm by the thousands", "Swamp gases cause hallucinations"]

    },
    tidal: {
        nouns: ["Tide", "Pull", "Lagoon"],
        features: ["Flooded paths", "Tide-locked caves"],
        mystery: ["Reveals secrets at dusk", "The tide delivers odd things", "The tide delivers old things"],
        inhabitants: ["Merfolk"],
        treasure: ["curiosity"]


    },
    tropical: {
        nouns: ["Coconut", "Breeze", "Frond"],
        features: ["Swaying palms", "Vibrant birds"],
        mystery: ["The island is too perfect"],
        inhabitants: ["Spectacular bird people, who resemble humansized birds of paradise"],
        treasure: ["curiosity"]


    },
    twilight: {
        nouns: ["Dusk", "Shade", "Gloam"],
        features: ["Permanent half-light", "Long shadows"],
        mystery: ["The sun never rises"],
        inhabitants: ["Little People"],
        treasure: ["curiosity"]


    },
    unnerving: {
        nouns: ["Gaze", "Watch", "Still"],
        features: ["Too-quiet zones", "Eerie symmetry"],
        mystery: ["Something is off—but what?"],
        inhabitants: ["A town where all the people seem normal but something is not quite right"],
        treasure: ["curiosity"]


    },
    unstable: {
        nouns: ["Shift", "Fracture", "Flux"],
        features: ["Trembling paths", "Frequent landslides"],
        mystery: ["The land rearranges itself"],
        treasure: ["curiosity"]

    },
    volcanic: {
        nouns: ["Flame", "Ash", "Magma"],
        features: ["Lava tubes", "Ash fields"],
        mystery: ["The volcano sings"],
        inhabitants: ["Fire Dryad"],
        treasure: ["curiosity"],
        challenges: ["Eruptions occur without warning", "Toxic fumes cloud the air", "The ground trembles constantly"]
    },
    wet: {
        nouns: ["Drip", "Moss", "Slick"],
        features: ["Constant drizzle", "Soggy earth"],
        mystery: ["The water never recedes"],
        inhabitants: ["Sentient Oozes"],
        treasure: ["curiosity"]


    },
    weird: {
        nouns: ["Oddity", "Riddle", "Anomaly"],
        features: ["Unidentifiable objects", "Physics-defying structures"],
        mystery: ["You feel like you've been here before"],
        treasure: ["curiosity"]
    }
};

const islandSizes = ["Tiny (1-2 miles)", "Small (3-5 miles)", "Medium (6-10 miles)", "Large (11-20 miles)", "Massive (20+ miles)"];
const islandShapes = ["Circular", "Crescent", "Star-shaped", "Irregular", "Long and narrow", "Broken archipelago"];
const factions = [
    {
        name: "Crimson Company",
        description: "A ruthless mercantile syndicate that uses privateers to secure valuable islands and resources."
    },
    {
        name: "Scholarium Obscura",
        description: "A secretive academic order obsessed with ancient knowledge and forbidden island relics."
    },
    {
        name: "The Drowned Hand",
        description: "A cult that worships sea-dead gods and believes the isles are divine offerings."
    },
    {
        name: "House Auric",
        description: "A noble family with imperial ambitions, funding expeditions to expand its influence."
    },
    {
        name: "The Navigators' Guild",
        description: "A neutral but powerful guild controlling maps, charts, and passage between islands."
    },
    {
        name: "Order of the Veil",
        description: "A militant faith sworn to 'cleanse' islands touched by dark or unnatural forces."
    },
    {
        name: "Sable Corsairs",
        description: "An infamous pirate fleet known for seizing islands to build hidden coves and shipyards."
    },
    {
        name: "Eclipse Cult",
        description: "A mystic order that follows celestial omens, believing the isles form a cosmic map."
    },
    {
        name: "Union of Free Isles",
        description: "A loose coalition of independent settlements resisting outside control or colonization."
    },
    {
        name: "Rogue Patron Syndicate",
        description: "A shadowy group of wealthy elites funding secret expeditions for personal gain."
    }
];

const treasuresByType = {
    hoard: [
        {
            name: "Weathered Pirate Cache",
            description: "A rusted chest filled with old but still-valuable coins stamped with forgotten rulers.",
            rarity: "Common",
            value: { gold: 5, silver: 35, copper: 120 },
            type: "hoard"
        },
        {
            name: "Imperial Tribute Stash",
            description: "A collection of neatly bound pouches from an ancient empire, untouched by time.",
            rarity: "Uncommon",
            value: { gold: 28, silver: 90, copper: 40 },
            type: "hoard"
        }
    ],
    gem: [
        {
            name: "Fireglass Ruby",
            description: "A glowing red gem warm to the touch, rumored to ignite on command.",
            rarity: "Rare",
            value: { gold: 75, silver: 20, copper: 0 },
            type: "gem"
        },
        {
            name: "Starshard Opal",
            description: "A deep-blue opal with glimmers that resemble stars shifting when moved.",
            rarity: "Uncommon",
            value: { gold: 45, silver: 10, copper: 5 },
            type: "gem"
        }
    ],
    artifact: [
        {
            name: "Scepter of the Hollow King",
            description: "A ceremonial rod that hums faintly with forgotten authority.",
            rarity: "Rare",
            value: { gold: 100, silver: 50, copper: 0 },
            type: "artifact"
        },
        {
            name: "Mask of Eternal Echoes",
            description: "Wearing it lets you hear whispers from the past... or something else entirely.",
            rarity: "Legendary",
            value: { gold: 300, silver: 0, copper: 0 },
            type: "artifact"
        }
    ],
    curiosity: [
        {
            name: "Everbubbling Flask",
            description: "A potion bottle that never stops fizzing—its liquid vanishes before it’s drunk.",
            rarity: "Uncommon",
            value: { gold: 10, silver: 15, copper: 25 },
            type: "curiosity"
        },
        {
            name: "Clockwork Seahorse",
            description: "A small, intricate automaton that moves when near salt water.",
            rarity: "Rare",
            value: { gold: 35, silver: 40, copper: 10 },
            type: "curiosity"
        }
    ],
    art: [
        {
            name: "Obsidian Tortoise Idol",
            description: "A small but dense sculpture with eyes made of polished coral.",
            rarity: "Uncommon",
            value: { gold: 20, silver: 30, copper: 50 },
            type: "art"
        },
        {
            name: "Tidecaller's Tapestry",
            description: "A vast sea-blue textile woven with magical thread. It ripples in still air.",
            rarity: "Rare",
            value: { gold: 80, silver: 25, copper: 0 },
            type: "art"
        }
    ]
};


// Defaults

const islandNamePrefixes = [
    "Isle of", "The", "Cape", "Bay of", "Mount", "Fort", "Sanctuary of", "Port", "Domain of", "Hollow"
];

const islandAdjectives = [
    "Burning", "Frozen", "Shattered", "Whispering", "Crimson", "Sapphire", "Eldritch", "Twilight", "Ancient", "Lost", "Hidden", "Black"
];

const islandNouns = [
    "Skulls", "Voices", "Shadows", "Mirrors", "Bones", "Storms", "Silence", "Fangs", "Ash", "Glass", "Secrets", "Thorns", "Stars"
];

const defaultFeatures = [
    "defaultFeature1", "defaultFeature2", "defaultFeature3"
]
const defaultMysteries = [
    "defaultMystery1", "defaultMystery2", "defaultMystery3"
]

const defaultChallenges = [
    "Treacherous terrain makes travel slow and dangerous",
    "Sudden weather shifts bring storms or intense heat",
    "Strange local fauna are highly territorial",
    "Supplies spoil quickly due to unseen forces",
    "No maps or compasses work correctly here",
    "Every night, someone vanishes without a trace",
    "An eerie hum disrupts concentration and sleep",
    "Time passes differently—some return aged, some unchanged",
    "Reality seems unstable—paths shift when you're not looking",
    "Nightmares bleed into waking life",
    "A sense of being watched never goes away",
    "The island rejects outsiders—equipment malfunctions and food rots",
    "Illusions cause explorers to turn on one another",
    "Even the plants seem to whisper warnings",
    "The ground occasionally exhales—hot, fetid air"
];

// ========== SEEDED RANDOM ========== //
class SeededRandom {
    constructor(seed) {
        this.seed = seed;
    }

    next() {
        // Mulberry32 algorithm
        this.seed |= 0;
        this.seed = Math.imul(48271, this.seed) | 0 % 2147483647;
        return (this.seed & 2147483647) / 2147483648;
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

function generateIsland(useSeed = null) {
    // Determine seed to use
    let seed = useSeed !== null ? useSeed : Date.now();
    if (typeof seed === 'string') {
        seed = hashStringToNumber(seed);
    }
    currentSeed = seed;

    // Display the seed being used
    document.getElementById('seedDisplay').textContent = `Using seed: ${seed}`;

    // Create RNG instance
    const rng = new SeededRandom(seed);

    // Get settings
    const settings = {
        islandTypes: document.getElementById('toggle-islandTypes').checked,
        mysteries: document.getElementById('toggle-mysteries').checked,
        inhabitants: document.getElementById('toggle-inhabitants').checked,
        factions: document.getElementById('toggle-factions').checked,
        challenges: document.getElementById('toggle-challenges').checked,
        treasures: document.getElementById('toggle-treasures').checked,
        features: document.getElementById('toggle-features').checked,
        size: document.getElementById('toggle-size').checked
    };

    // Generate island properties
    const size = getRandomItem(islandSizes, rng);
    const shape = getRandomItem(islandShapes, rng);
    const typeObj = getRandomItem(islandTypes, rng);
    const type = typeObj.label;
    const tags = typeObj.tags;

    let tagBasedFeatures = [];
    let tagBasedMysteries = [];
    let tagBasedNouns = [];
    let tagBasedInhabitants = [];
    let tagTreasureTypes = [];
    let tagBasedChallenges = [];

    tags.forEach(tag => {
        if (tagInfluence[tag]) {
            if (tagInfluence[tag].features) {
                tagBasedFeatures = tagBasedFeatures.concat(tagInfluence[tag].features);
            }
            if (tagInfluence[tag].mystery) {
                tagBasedMysteries = tagBasedMysteries.concat(tagInfluence[tag].mystery);
            }
            if (tagInfluence[tag].nouns) {
                tagBasedNouns = tagBasedNouns.concat(tagInfluence[tag].nouns);
            }
            if (tagInfluence[tag].inhabitants) {
                tagBasedInhabitants = tagBasedInhabitants.concat(tagInfluence[tag].inhabitants);
            }
            if (tagInfluence[tag].challenges) {
                tagBasedChallenges = tagBasedChallenges.concat(tagInfluence[tag].challenges);
            }
            if (tagInfluence[tag].treasure) {
                tagTreasureTypes.push(...tagInfluence[tag].treasure);
            }
        }
    });

    let baseFeatures = [...defaultFeatures, ...tagBasedFeatures];

    const mysteryPool = [...defaultMysteries, ...tagBasedMysteries];
    const mystery = getRandomItem(mysteryPool, rng);
    const inhabitantPool = tagBasedInhabitants.length > 0 ? tagBasedInhabitants : ["No known inhabitants"];
    const chosenInhabitant = getRandomItem(inhabitantPool, rng);
    const challengePool = [...defaultChallenges, ...tagBasedChallenges];
    let factionObjs = [];

    // Basic rule: chance of multiple factions increases with island size
    const sizeFactor = ["Tiny", "Small"].some(s => size.includes(s)) ? 1 :
        ["Medium"].some(s => size.includes(s)) ? 2 :
            ["Large", "Massive"].some(s => size.includes(s)) ? 3 : 1;

    // 50% chance of second faction if sizeFactor >= 2
    if (rng.next() < 0.5 && sizeFactor >= 2) {
        factionObjs = getRandomItems(factions, 2, rng);
    } else {
        factionObjs = [getRandomItem(factions, rng)];
    }

    const chosenTreasureType = getRandomItem(tagTreasureTypes, rng);
    const treasureOptions = treasuresByType[chosenTreasureType];
    const chosenTreasure = getRandomItem(treasureOptions, rng);

    const totalCopper = chosenTreasure.value.gold * 100 + chosenTreasure.value.silver * 10 + chosenTreasure.value.copper;
    const formattedValue = valueToString(formatTreasureValue(totalCopper));


    const featureRange = size.includes("Tiny") ? [1, 3] :
        size.includes("Small") ? [2, 4] :
            size.includes("Medium") ? [3, 6] :
                size.includes("Large") ? [5, 8] : [7, 12];
    const numFeatures = Math.floor(rng.next() * (featureRange[1] - featureRange[0] + 1)) + featureRange[0];
    const features = getRandomItems(baseFeatures, numFeatures, rng);

    const name = generateIslandName(rng, tags, mystery, tagBasedNouns);

    // Build the output HTML
    let result = `
    <div class="island-header">
      <h2 class="island-title">${name.toUpperCase()}</h2>
      <div class="island-id">Seed: ${seed}</div>
    </div>
  `;

    if (settings.size) {
        result += `<div class="island-section">
      <div class="section-title">Size & Shape</div>
      <p>${size}, ${shape.toLowerCase()} formation</p>
    </div>`;
    }

    if (settings.islandTypes) {
        result += `<div class="island-section">
          <div class="section-title">Island Type</div>
          <p>${type}</p>
        </div>`;
    }

    if (settings.features) {
        result += `<div class="island-section">
          <div class="section-title">Notable Features</div>
          <div class="feature-list">
            ${features.map(f => `<div class="feature-tag">${f}</div>`).join('')}
          </div>
        </div>`;
    }

    if (settings.mysteries) {
        result += `<div class="island-section">
          <div class="section-title">Central Mystery</div>
          <p>${getRandomItem(mysteryPool, rng)}</p>
        </div>`;
    }

    if (settings.inhabitants) {
        result += `<div class="island-section">
      <div class="section-title">Inhabitants</div>
      <p>${chosenInhabitant}</p>
    </div>`;
    }


    if (settings.factions) {
        result += `<div class="island-section">
        <div class="section-title">Faction Interest</div>
        <ul class="faction-list">
          ${factionObjs.map(f => `<li><strong>${f.name}:</strong> ${f.description}</li>`).join('')}
        </ul>
    </div>`;
    }

    if (settings.challenges) {
        result += `<div class="island-section">
          <div class="section-title">Major Challenge</div>
          <p>${getRandomItem(challengePool, rng)}</p>
        </div>`;
    }

    if (settings.treasures) {
        result += `<div class="island-section">
  <div class="section-title">Treasure</div>

  <div class="treasure-box rarity-${chosenTreasure.rarity.toLowerCase()}">
    <div class="treasure-name">${chosenTreasure.name}</div>
    <div class="treasure-type">${chosenTreasure.rarity}</div>
    <div class="treasure-description">${chosenTreasure.description}</div>
    <div class="treasure-value">${formattedValue}</div>
  </div>
</div>
`;
    }



    // Update the display 
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
            Generated by Endless Isles Generator
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
