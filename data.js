export const islandTypes = [
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

export const tagInfluence = {
    ancient: {
        nouns: ["Echo", "Relic", "Memory", "Shrine"],
        features: [
            "Crumbling temples covered in moss and time",
            "Faded glyphs that shift when not looked at",
            "Collapsed ziggurats now home to strange plants",
            "Hollow statues whose mouths whisper forgotten words"
        ],
        mystery: [
            "Time flows differently here—some plants bloom and wither in minutes",
            "The same footprints appear every morning, but no one made them",
            "You dream in languages you’ve never spoken",
            "A ghostly bell tolls on the hour, but there's no bell to be found"
        ],
        inhabitants: [
            "Walking Mummified Corpses bound to ancient duties",
            "Caretaker spirits who clean and repair ruins nightly",
            "Scholars lost to time, still debating in their crumbling halls",
            "Glass-eyed guardians who stare but do not move—until the sun sets"
        ],
        treasure: ["hoard", "gem", "curiosity"],
        challenges: [
            "Touching anything older than a century triggers visions of the past",
            "Magic fails inside the ruins unless it relates to divination or memory",
            "Speaking above a whisper awakens ancient wardens",
            "The island shifts to match ancient maps, not current geography"
        ],
        effects: [
            "Aging is slowed, reversed, or accelerated in bursts",
            "Chronomantic magic surges unexpectedly",
            "Night lasts exactly 12 hours, regardless of season or weather",
            "Written records fade overnight unless memorized"
        ],
        ambience: {
            light: "Soft golden glow that never brightens or dims",
            sound: "Distant chanting on the wind"
        },
        weather: [
            { text: "Warm, dry air with swirling dust motes", emoji: "🌬️🌫️🌵" },
            { text: "Still, humid fog that never lifts", emoji: "🌁💧😶" },
            { text: "Eerie twilight with no clear source of light", emoji: "🌒🌀👁️" },
            { text: "Sudden winds that blow only in ruins", emoji: "💨🏛️🌪️" }
        ]
    },
    arcane: {
        nouns: ["Sigil", "Rune", "Wand", "Ward"],
        features: [
            "Runestone circles that hum when approached",
            "Flickering ley-lines visible only at twilight",
            "A crooked tower capped with a pulsating crystal",
            "Floating islands locked in orbit above arcane nexuses",
            "Books growing like fruit from trees"
        ],
        mystery: [
            "Magic distorts the air like heat over stone",
            "Invisible threads connect every object on the island",
            "Reality bends to match spoken prophecy",
            "A spellbook writes back in a hand that isn’t yours"
        ],
        inhabitants: [
            "Fey Folk whispering from behind unseen curtains",
            "Sentient illusions posing as travelers",
            "Hermits wrapped in spell-wards who speak in riddles",
            "Apprentices long dead but still repeating their training"
        ],
        treasure: ["art", "curiosity", "artifact"],
        challenges: [
            "Random magical effects trigger at intervals",
            "Spells behave unpredictably—fireball might become flowers",
            "Time dilation occurs in bursts: hours vanish or repeat",
            "Teleportation spells lead somewhere else entirely",
            "Scrolls unravel unless spoken aloud each day"
        ],
        effects: [
            "Magic items recharge faster—but also malfunction more often",
            "Dreams become spellbooks for the next day",
            "Casting spells attracts magical creatures from other planes",
            "All spoken language is briefly replaced by arcane glyphs"
        ],
        ambience: {
            light: "Unnatural colors swirl in the shadows",
            sound: "A constant low hum, interrupted by sudden chimes"
        },
        weather: [
            { text: "Aetherial mist that sparkles with floating glyphs", emoji: "✨🌫️🔮" },
            { text: "Colorless rain that alters memories when touched", emoji: "💧🧠❔" },
            { text: "Sudden pulses of lightning with no clouds", emoji: "⚡🕳️🌌" },
            { text: "Fog that mimics past conversations", emoji: "🌫️🗣️🕰️" },
            { text: "Crystalline snowfall that evaporates on contact", emoji: "❄️💨🧊" }
        ]
    },
    ash: {
        nouns: ["Cinder", "Ember", "Dust"],
        features: [
            "Blackened beaches that flake beneath your feet",
            "Smoldering fields where nothing grows but smoke",
            "Crumbling, charred building remains whispering heat",
            "A burnt-out ship fused with cooled magma",
            "Statues of ash that collapse when touched"
        ],
        mystery: [
            "The ash never cools—it remains warm to the touch after centuries",
            "Footprints vanish within seconds of being made",
            "You cough up soot, even if you never inhaled any",
            "A shadow burns into the ground with no visible source"
        ],
        inhabitants: [
            "Burned Souls—humanoid figures glowing with internal embers",
            "Ash wraiths that drift with the wind and scream in silence",
            "Fire-bitten animals made of scorched bone and glowing sinew",
            "A lone, fireproof wanderer who claims to remember the last eruption"
        ],
        treasure: ["gem"],
        challenges: [
            "The air is thick with soot, reducing visibility and choking lungs",
            "Any open flame becomes uncontrollable here",
            "Clothing and gear slowly turn to ash overnight",
            "Rest brings no relief—ashes invade dreams",
            "Unexplained wildfires erupt from underground vents"
        ],
        effects: [
            "Spells using fire are amplified—but may lash out unpredictably",
            "Wounds smoke as they heal",
            "Ash clings unnaturally to skin and armor, whispering ancient names",
            "The dead cannot be burned—they return instead"
        ],
        ambience: {
            light: "A reddish haze filters all sunlight",
            sound: "Soft crackling underfoot and distant, slow roaring"
        },
        weather: [
            { text: "Ashfall that blankets everything in grey within minutes", emoji: "🌋🌫️⚰️" },
            { text: "Sulfuric winds that sear exposed skin", emoji: "💨🔥☣️" },
            { text: "Smoky fog that tastes of old fire", emoji: "🌫️🔥👅" },
            { text: "Occasional rain—black, oily, and acidic", emoji: "🌧️🖤🧪" },
            { text: "Bursts of superheated gusts with no warning", emoji: "💨♨️⚠️" }
        ]
    },
    barren: {
        nouns: ["Wasteland", "Scrape", "Crust"],
        features: [
            "Bare rock shelves, cracked and flaking underfoot",
            "Bleached earth that repels even moss",
            "Dry riverbeds that seem too large for any known rainfall",
            "Petrified root systems—remnants of a forest long dead",
            "Stone cairns placed in deliberate but forgotten patterns"
        ],
        mystery: [
            "Nothing has grown here for centuries, yet the soil tests fertile",
            "Whispers are heard only when there is no wind",
            "Stars shine brighter here—too bright",
            "Footprints last for days… but not yours"
        ],
        inhabitants: [
            "Silent scavengers cloaked in dust, watching from afar",
            "Stone-skinned wanderers who believe they are the land",
            "Burrowing things that avoid light and sound",
            "None—only the wind, unless you count the bones"
        ],
        treasure: ["artifact"],
        challenges: [
            "No food or fresh water can be found here",
            "The dry wind strips gear and skin alike",
            "Navigation is nearly impossible—landmarks shift subtly",
            "Resting here causes strange, prophetic dreams",
            "Even metal tools slowly erode when left exposed"
        ],
        effects: [
            "Time feels stretched—days drag, nights vanish",
            "Voices echo far too long and far too wide",
            "The land resists change—pits fill, tracks erase, fires die quickly",
            "Spells related to growth or healing falter or fail"
        ],
        ambience: {
            light: "Sharp, dry sunlight or flat, featureless overcast",
            sound: "A constant dry wind, interrupted only by the crack of distant rockfalls"
        },
        weather: [
            { text: "Scouring gales that lift gravel into painful clouds", emoji: "💨🪨😖" },
            { text: "Dust devils that whisper names when they pass", emoji: "🌪️🗣️🕯️" },
            { text: "Oppressive stillness followed by sudden, violent gusts", emoji: "🤐⏱️🌬️" },
            { text: "Red sky at dusk with no sun to explain it", emoji: "🌇❓🟥" },
            { text: "Cold, clear nights where breath turns to frost—even in summer", emoji: "❄️🌌🌬️" }
        ]
    },
    biological: {
        nouns: ["Sinew", "Carcass", "Spine"],
        features: [
            "Exposed ribs of a massive creature forming natural arches",
            "Decomposing fauna the size of small hills",
            "Fleshy terrain that pulses subtly when stepped on",
            "Vascular tunnels slick with ichor",
            "Wet, organic crevices that feel disturbingly alive"
        ],
        mystery: [
            "The bones whisper when it rains",
            "You hear breathing—under the ground",
            "Flies avoid the meat entirely",
            "New growth appears to be made of muscle, not plant"
        ],
        inhabitants: [
            "Flesh Monsters stitched from multiple species",
            "Colonies of scavenger beetles with eerie intelligence",
            "Blubbering oozes that wear bones like armor",
            "A lone druid who believes the island is divine"
        ],
        treasure: ["curiosity"],
        challenges: [
            "The smell is overwhelming—disease is likely",
            "Anything edible tastes of rot and bile",
            "You wake covered in a mucous film not your own",
            "Tools and weapons stick when touching the terrain",
            "Night brings twitching, half-formed shapes to life"
        ],
        effects: [
            "Injuries here refuse to close—or over-heal grotesquely",
            "Echoes resemble screams, even from normal speech",
            "Sleeping near organic matter causes visions of dissection",
            "Dead things twitch or flinch if stepped over"
        ],
        ambience: {
            light: "Red-tinged, as if filtered through muscle",
            sound: "Wet slapping noises and distant groans"
        },
        weather: [
            { text: "Sticky humidity that clings to skin and breath", emoji: "💦😰🌫️" },
            { text: "Warm drizzle that smells faintly of blood", emoji: "🌧️🩸👃" },
            { text: "Flesh flies swarm in time with thunder", emoji: "🐜⚡😖" },
            { text: "Sudden spurts of spore-like mist from underfoot", emoji: "🌫️🍄🦶" },
            { text: "Rot fog that rolls in and tastes metallic", emoji: "☁️🪦🥄" }
        ]
    },
    bone: {
        nouns: ["Femur", "Ivory", "Grin"],
        features: [
            "Bone towers made from fused vertebrae",
            "Rattling heaps that shift when unobserved",
            "Fossilized battlegrounds where no plants grow",
            "Thrones carved from skulls—too many to count",
            "Spiral staircases made from jawbones"
        ],
        mystery: [
            "The island remembers its prey—sometimes with sound",
            "Bones rearrange themselves at night",
            "The same skeleton appears no matter where it's buried",
            "Every traveler loses one tooth by sunrise"
        ],
        inhabitants: [
            "Undead townsfolk, unaware of their demise",
            "Bone-crowned prophets who speak in riddles",
            "Pale hyenas that laugh like children",
            "A bone golem sculpting a cathedral from skulls"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Bone piles animate at night",
            "Ghostly wails disorient travellers",
            "The land reshapes into skeletal mazes",
            "Spoken words are echoed by unseen voices",
            "Dust clouds rise with phantom images of old battles"
        ],
        effects: [
            "Footsteps click even on soft earth",
            "Dreams filled with the sound of chewing",
            "Spells cast here leave behind bone residue",
            "Injury from bone weapons refuses magical healing"
        ],
        ambience: {
            light: "Harsh white glare, like light on bleached bone",
            sound: "Endless faint clattering from all directions"
        },
        weather: [
            { text: "Dry, rattling wind that carries loose teeth", emoji: "🌬️🦷💀" },
            { text: "Ash-like snow made from powdered bone", emoji: "❄️🦴🌫️" },
            { text: "Echo-storms where thunder mimics screams", emoji: "🌩️🗣️😱" },
            { text: "Sudden bone hail that never strikes twice", emoji: "🌨️🦴⚠️" },
            { text: "Thin, high fog that forms ribcage-like shadows", emoji: "🌫️🦴🫁" }
        ]
    },
    broken: {
        nouns: ["Fragment", "Shard", "Split"],
        features: [
            "Sheared cliffs falling into bottomless voids",
            "Fractured terrain with sudden drops and jagged spikes",
            "Floating rock fragments tethered by unseen forces",
            "Bridges split halfway through construction",
            "Ruins snapped in two by colossal force"
        ],
        mystery: [
            "It was torn apart—by what?",
            "Voices travel through fissures even when blocked",
            "Stars appear shattered in the sky above",
            "Things fall in slow motion over the chasms"
        ],
        inhabitants: [
            "Wanderers who don't realize they're dead",
            "Creatures that only exist in halves",
            "A lost expedition camp split across space",
            "Shattered golems seeking their missing pieces"
        ],
        treasure: ["hoard"],
        challenges: [
            "Pathfinding is nearly impossible across floating debris",
            "Cliffs crumble without warning",
            "Teleportation magic fractures users on arrival",
            "Sound echoes with impossible delay",
            "Bridges rebuild themselves wrong each night"
        ],
        effects: [
            "Gravity shifts in localized zones",
            "Memories become unreliable between areas",
            "Time stutters—some things move in freeze-frame",
            "Writing fractures on the page as it’s made"
        ],
        ambience: {
            light: "Flickering shadows as if the sun is blinking",
            sound: "A deep rumble, like a giant inhaling very slowly"
        },
        weather: [
            { text: "Sharp wind that seems to slice the air itself", emoji: "🌬️⚔️✂️" },
            { text: "Crackling lightning that jumps between rock fragments", emoji: "⚡🪨⚡" },
            { text: "Abrupt clearings of fog as if ‘cut away’ by force", emoji: "🌫️🪓🚫" },
            { text: "Rain that falls upward in some zones", emoji: "🌧️⬆️❓" },
            { text: "Rolling quakes with no epicenter", emoji: "🌍🌪️❓" }
        ]
    },
    calm: {
        nouns: ["Tranquility", "Still", "Glass"],
        features: [
            "Unmoving tides that reflect the sky perfectly",
            "Mirror-flat pools undisturbed by wind or creature",
            "Smooth white stones arranged in spirals",
            "A grove of trees whose leaves never rustle",
            "Perfectly preserved shipwreck frozen in place"
        ],
        mystery: [
            "No wind ever blows here—not even during storms",
            "Sound carries too far, as if air itself listens",
            "You never feel tired or hungry, but time passes oddly",
            "Even rain falls in slow, soft droplets"
        ],
        inhabitants: [
            "Silent monks who refuse to acknowledge newcomers",
            "Meditating spirits at rest beneath the water",
            "A slothful guardian beast that never stirs unless provoked",
            "An echo of your own party that moves one step behind"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Navigation is difficult—there are no waves or stars at night",
            "Magic fades to whispers, hard to cast or concentrate",
            "Leaving feels wrong—travelers often turn back without realizing",
            "Creatures remain hidden until disrupted"
        ],
        effects: [
            "Speech becomes hushed no matter how loud it starts",
            "Wounds heal faster here—but dreams are haunted",
            "Time slows noticeably during stress or violence",
            "Everything dropped into water vanishes after a minute"
        ],
        ambience: {
            light: "Soft twilight, regardless of time or season",
            sound: "Muted lapping water, breath-like breezes"
        },
        weather: [
            { text: "Perpetual cloud cover—neither dim nor bright", emoji: "☁️🌫️➖" },
            { text: "Drifting mist that smells faintly of lavender", emoji: "🌫️💜🌸" },
            { text: "Starlight visible during the day", emoji: "🌟☀️👁️" },
            { text: "Mist that lingers only around the party", emoji: "🌫️🧍‍♂️🧍‍♀️🧍" },
            { text: "Gentle rain that never makes ripples", emoji: "🌧️🫧❌" }
        ]
    },
    coastal: {
        nouns: ["Tide", "Shell", "Spray"],
        features: [
            "Hidden coves carved by centuries of tides",
            "Seabird cliffs streaked with white and gold",
            "Tidal pools teeming with unknown creatures",
            "Bleached driftwood sculpted into shrines",
            "Old anchors embedded in stone like fossils"
        ],
        mystery: [
            "The sea brings strange gifts—artifacts, letters, even bodies",
            "Tide lines shift inexplicably from day to day",
            "The ocean speaks, softly, in a language just beyond recognition",
            "Every night, a different boat washes ashore—empty"
        ],
        inhabitants: [
            "Merfolk who sing tides into motion",
            "Sentient Crabs trading shells like currency",
            "Barnacle priests who whisper from beneath tidepools",
            "Old fisher ghosts reenacting their final storm"
        ],
        treasure: ["artifact"],
        challenges: [
            "Tide shifts strand ships and wash out campsites",
            "Saltwater corrosion disables tools and weapons",
            "Hidden reefs rip hulls to shreds",
            "Local fauna defend their coves with cunning and camouflage"
        ],
        effects: [
            "Salt clings to everything, impossible to remove",
            "Creatures caught here are always slightly larger than expected",
            "Resting by the waves causes vivid dreams of the deep",
            "Seashells whisper secrets when held to the ear"
        ],
        ambience: {
            light: "Bright and briny sunlight scattered by sea mist",
            sound: "Gulls crying and waves crashing—endlessly rhythmic"
        },
        weather: [
            { text: "Briny fog that carries the scent of old shipwrecks", emoji: "🌫️⚓️💀" },
            { text: "Sudden storms that vanish just as quickly", emoji: "🌩️⚡️💨" },
            { text: "Sharp, salty winds that dry flesh in minutes", emoji: "🌬️🧂💀" },
            { text: "Heavy sea air that makes fire refuse to catch", emoji: "🌊🔥🚫" },
            { text: "Silver rain that tastes like tears", emoji: "🌧️🥈😢" }
        ]
    },
    coral: {
        nouns: ["Reef", "Polyps", "Bloom"],
        features: [
            "Living reef bridges made of multicolored coral",
            "Vibrant coral beds visible even from inland",
            "Tidepools with geometric patterns of luminous life",
            "Reefs that form tunnels and arches beneath the water",
            "Bleached coral graveyards slowly being reclaimed by color"
        ],
        mystery: [
            "The coral pulses with emotion—happy, afraid, angry",
            "Some reefs form perfect runes from above",
            "Touching certain coral causes flashes of memory",
            "When tides recede, coral whispers in chorus"
        ],
        inhabitants: [
            "Merfolk live in the shallows, tending the reef like farmers",
            "Sentient Crabs that mimic human behavior disturbingly well",
            "Naiads who sculpt coral like clay",
            "Brightly colored reef-spirits who vanish when approached"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Stepping on the wrong coral triggers aggressive defense from the reef",
            "Bright colors attract dangerous predators",
            "Low tide reveals sudden drop-offs and air pockets",
            "Navigation is slow—reefs resist movement"
        ],
        effects: [
            "Time of day is hard to tell—the reef glows always",
            "Any music or humming causes coral to sway",
            "Bleeding in the water calls strange things from the deep",
            "Shadows ripple as if cast underwater even on land"
        ],
        ambience: {
            light: "Sunlight fractured into hundreds of shifting hues",
            sound: "Snap-crackling of coral growth and clicking shells"
        },
        weather: [
            { text: "Warm rain that makes coral sprout overnight", emoji: "🌧️🌺🪸" },
            { text: "Clear skies but underwater haze lingers on land", emoji: "🌞🌫️🌊" },
            { text: "Tide-driven winds blow in perfect rhythm", emoji: "🌊🌬️🎵" },
            { text: "Occasional waves surge over land before retreating peacefully", emoji: "🌊🏝️🔁" },
            { text: "Bioluminescent mist at dawn and dusk", emoji: "🌫️✨🌅" }
        ]
    },
    crystal: {
        nouns: ["Prism", "Shard", "Facet"],
        features: [
            "Light mazes of mirrored quartz",
            "Singing crystals embedded in the ground",
            "Massive obelisks that absorb moonlight",
            "Gemstone growths that pierce through ruins",
            "Caves filled with vibrating geodes"
        ],
        mystery: [
            "Reflections show other worlds, not your own",
            "Shards hum in patterns that match brainwaves",
            "Some crystals cannot be seen—only touched",
            "Broken crystal 'bleeds' rainbow light"
        ],
        inhabitants: [
            "Crystal constructs shaped like animals or people",
            "Crystal Golems who move only when unobserved",
            "Shardbound—humans fused with crystal, unable to leave",
            "Floating crystal swarms with collective memory"
        ],
        treasure: ["art"],
        challenges: [
            "Sound refracts—shouts echo from behind instead of ahead",
            "Crystal paths are sharp, slick, or unstable",
            "Light causes hallucinations or revelations",
            "Illusions of allies appear in reflections"
        ],
        effects: [
            "Wounds glow faintly with refracted light",
            "Written words turn into runes when viewed near crystals",
            "Spells cast here rebound if not precisely aimed",
            "Footsteps occasionally chime like bells"
        ],
        ambience: {
            light: "Dancing refracted rainbows at all hours",
            sound: "A constant ringing, like a glass bowl stroked gently"
        },
        weather: [
            { text: "Shimmering rain that forms temporary prisms in the air", emoji: "🌈🌧️✨" },
            { text: "Light snow made of translucent flakes", emoji: "🌨️❄️🫧" },
            { text: "Thunderstorms where lightning refracts into dozens of bolts", emoji: "⛈️⚡🔀" },
            { text: "Sunlight bends at impossible angles", emoji: "🌞➰🌀" },
            { text: "Clouds that resemble broken mirrors drifting in silence", emoji: "☁️🪞🤫" }
        ]
    },
    dangerous: {
        nouns: ["Risk", "Blade", "Peril"],
        features: [
            "Hidden traps disguised as natural terrain",
            "Unstable cliffs that crumble with no warning",
            "Booby-trapped ruins left by paranoid explorers",
            "Caves that collapse if entered twice",
            "Wild magic zones that explode without provocation"
        ],
        mystery: [
            "The island tries to kill you",
            "No one survives a second night",
            "Compass needles spin wildly before snapping",
            "Wounds fester twice as fast here"
        ],
        inhabitants: [
            "Pick a random creature from the Monster List",
            "Predators adapted to slay adventurers",
            "Trap-setting trickster spirits",
            "A cursed guardian who cannot leave the island"
        ],
        treasure: ["hoard"],
        challenges: [
            "Terrain constantly shifts—what was safe is now lethal",
            "Wildlife mimics the cries of wounded travelers",
            "Poisonous plants appear edible",
            "Tunnels collapse the moment light enters them",
            "Every mistake costs more than it should"
        ],
        effects: [
            "No spell works the same way twice",
            "Tools wear down three times as fast",
            "Luck rolls are always suspect",
            "Maps drawn here change after being folded"
        ],
        ambience: {
            light: "Harsh and glaring, even in shade",
            sound: "Rustling like breath just behind you"
        },
        weather: [
            { text: "Sudden downpours followed by dry lightning", emoji: "🌧️⚡🔥" },
            { text: "Gale-force winds without clouds", emoji: "🌬️🌪️☀️" },
            { text: "Tornadoes that rise from calm ground", emoji: "🌪️🔄🌾" },
            { text: "Rain that smells like blood", emoji: "🌧️🩸👃" },
            { text: "Heat that burns skin but not plants", emoji: "🌡️🌞🌿" }
        ]
    },
    decay: {
        nouns: ["Rot", "Fester", "Blight"],
        features: [
            "Moldering husks of trees and beasts",
            "Slimy residue coating every surface",
            "Collapsing huts overrun by fungi",
            "Stagnant pools with floating bones",
            "Dripping, rotting vines that smell of copper"
        ],
        mystery: [
            "Life melts here",
            "Nothing dies cleanly—everything lingers",
            "New growth is already rotting",
            "Even dreams feel moldy"
        ],
        inhabitants: [
            "Undead slowly sinking into the earth",
            "Giant Rats nesting in corpses",
            "Sporefolk with necrotic breath",
            "A druid of rot who welcomes entropy"
        ],
        treasure: ["artifact"],
        challenges: [
            "Diseases spread on contact with anything",
            "Food and water spoil overnight",
            "Moss muffles all sound, making ambushes deadly",
            "Insects swarm wounds with eerie intelligence",
            "Armor rusts from inside out"
        ],
        effects: [
            "Everything smells like death",
            "Spells that heal now cause weakness",
            "Resting restores less vitality",
            "Touching anything risks infection"
        ],
        ambience: {
            light: "Dim and fungal, filtered through decay",
            sound: "Buzzing flies and faint, wet slurping"
        },
        weather: [
            { text: "Sticky drizzle that carries rot spores", emoji: "🌧️🦠🍄" },
            { text: "Muggy fog with the scent of wet fur", emoji: "🌫️🐾👃" },
            { text: "Rain that stains skin green", emoji: "🌧️🟢🧍" },
            { text: "Mild, motionless air broken only by rising spores", emoji: "🌬️🌫️🍄" },
            { text: "Night chill that invites fever", emoji: "🌙🥶🤒" }
        ]
    },
    deep: {
        nouns: ["Abyss", "Trench", "Pressure"],
        features: [
            "Bottomless pools that shift with the moon",
            "Collapsed caverns with gravity-warped walls",
            "Sheer cliffs falling into black ocean",
            "Tide-carved symbols older than language",
            "Creaking structures dragged up from the deep"
        ],
        mystery: [
            "The deep calls in dreams",
            "Stars can be seen in the water—not the sky",
            "Sound travels wrong—it echoes before you speak",
            "Some creatures surface only when no one looks"
        ],
        inhabitants: [
            "Deep monsters with lamp-like eyes",
            "Tentacled horrors that mimic surface voices",
            "Blind cultists worshipping pressure",
            "Ancient things with impossible anatomy"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Crushing pressure in underwater zones",
            "Flash flooding swallows paths",
            "Madness creeps in with each day near the trench",
            "Navigation fails—depth disorients the mind",
            "Creatures too massive to see fully circle at a distance"
        ],
        effects: [
            "Dreams are wet and dark, filled with teeth",
            "Hearing fades—replaced by thudding pulses",
            "Thoughts move slowly, like molasses",
            "Light bends, shapes shift"
        ],
        ambience: {
            light: "Distant glows from beneath the surface",
            sound: "Gurgling, bubbling, and long, low groans"
        },
        weather: [
            { text: "Constant overcast with mist from unseen waves", emoji: "☁️🌫️🌊" },
            { text: "Salt spray from no visible sea", emoji: "🌬️💦❓" },
            { text: "Echoing thunder with no lightning", emoji: "🌩️🔊❌⚡" },
            { text: "Dark fog that clings to ankles", emoji: "🌫️🦶🌑" },
            { text: "Geysers that erupt unexpectedly", emoji: "🌋💨⚠️" }
        ]
    },
    desert: {
        nouns: ["Dune", "Scorch", "Mirage"],
        features: [
            "Shifting sands swallowing ruins",
            "Blistering heat that warps vision",
            "Glass plains formed from lightning strikes",
            "Bones picked clean by time and wind",
            "Ruined oases long dried to salt"
        ],
        mystery: [
            "An oasis appears at dusk—and vanishes",
            "A voice speaks on the wind—your voice",
            "Shadows are always wrong in size and shape",
            "No map of the island is ever correct"
        ],
        inhabitants: [
            "Sand Men who dissolve into storms",
            "Lone scavengers riding reptilian beasts",
            "Desert spirits hiding under dunes",
            "Serpents made of shifting stone"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Heatstroke comes quickly, even at night",
            "Water vanishes from containers without cause",
            "Mirages lead travelers in circles",
            "Tents and gear wear away with wind alone",
            "Dunes swallow tracks and landmarks"
        ],
        effects: [
            "Sweat crystallizes into salt overnight",
            "Time skips during heat haze",
            "Spells involving ice or water fail or rebound",
            "Mirages mimic people you know"
        ],
        ambience: {
            light: "Relentless sunlight and shimmering air",
            sound: "Distant wind and echoing emptiness"
        },
        weather: [
            { text: "Sandstorms that strip flesh", emoji: "🌪️🌬️🪨" },
            { text: "Freezing nights that crack stone", emoji: "❄️🌑🪨" },
            { text: "Lightning with no clouds", emoji: "⚡❌☁️" },
            { text: "Heatwaves that dance across dunes", emoji: "🌡️🔥🏜️" },
            { text: "Gritty rain that never soaks, only scours", emoji: "🌧️🪨💨" }
        ]
    },
    dense: {
        nouns: ["Thicket", "Maze", "Snare"],
        features: [
            "Impenetrable growth that closes behind travelers",
            "Overgrown ruins hidden in thorns",
            "Paths that twist like living things",
            "Canopy so thick it blocks out the sky",
            "Vines that pulse with slow awareness"
        ],
        mystery: [
            "Paths never lead the same way twice",
            "Trees move when you're not looking",
            "Moss whispers in forgotten tongues",
            "You always end up back where you started"
        ],
        inhabitants: [
            "Jungle beasts with vine-wrapped limbs",
            "Moss-covered druids that speak in riddles",
            "Insectoid tribes guarding sacred sap",
            "Plant-spirits jealous of fire"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Navigation is nearly impossible",
            "Visibility is reduced to a few feet",
            "Every path branches and loops",
            "Cut plants grow back in seconds",
            "Sound doesn’t travel—calls go unheard"
        ],
        effects: [
            "Time passes strangely—days feel like hours",
            "Gear tangles, rusts, or vanishes overnight",
            "Fire fizzles without explanation",
            "Sleep is plagued by overgrowth dreams"
        ],
        ambience: {
            light: "Dim green haze filtered through canopy",
            sound: "Creaks, buzzes, and soft rustling everywhere"
        },
        weather: [
            { text: "Humid air thick enough to taste", emoji: "💦🌫️👅" },
            { text: "Sudden deluges of warm rain", emoji: "🌧️🌡️💧" },
            { text: "Swarming insect fogs that sting and cloud vision", emoji: "🐜🌫️😣" },
            { text: "Pollen clouds that cause hallucinations", emoji: "🌼🌫️🌀" },
            { text: "Steam rises even in the absence of rain", emoji: "♨️☁️🌞" }
        ]
    },
    floating: {
        nouns: ["Lift", "Buoy", "Hover"],
        features: [
            "Hovering stones that drift lazily in the sky",
            "Gravity bubbles that invert when touched",
            "Bridges that float with no visible support",
            "Waterfalls that hang mid-air, flowing upward",
            "Islets tethered by glowing vines of air"
        ],
        mystery: [
            "It should fall—but it doesn’t",
            "Objects left here begin to levitate after a day",
            "Birds avoid the area entirely",
            "Weight shifts unpredictably, light one minute, heavy the next"
        ],
        inhabitants: [
            "Fey with wings of glimmering glass",
            "Cloud-shepherds who ride the air currents",
            "Djinn architects building invisible towers",
            "Sentient winds that mimic voices"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Falling is a constant danger",
            "Items tied down may float away when untied",
            "Balance is nearly impossible on floating paths",
            "Magnetic interference disrupts navigation"
        ],
        effects: [
            "Footsteps become silent, almost buoyant",
            "Gravity occasionally reverses without warning",
            "Thrown objects never fall",
            "Dreams are full of endless falling"
        ],
        ambience: {
            light: "Sunlight diffused through mist and motion",
            sound: "Gentle thrumming, like distant windchimes"
        },
        weather: [
            { text: "Shifting air currents that whisper words", emoji: "🌬️🗣️👂" },
            { text: "Storms that crackle with antigravity pulses", emoji: "⛈️🧲⚡" },
            { text: "Cloudbursts that fall up", emoji: "☁️🔄💧" },
            { text: "Sky glows purple before pressure shifts", emoji: "🌌🟣🌪️" },
            { text: "Rain that forms floating globules", emoji: "💧🔮🕊️" }
        ]
    },
    foggy: {
        nouns: ["Mist", "Veil", "Drift"],
        features: [
            "Blinding fogbanks that shift with thought",
            "Ghost shapes glimpsed then gone",
            "Lichen-covered stones carved with warnings",
            "Sunlight reduced to a dim smear",
            "Moaning winds that never rise"
        ],
        mystery: [
            "Voices whisper in the mist",
            "Shadows move where none should be",
            "The fog remembers paths you've never walked",
            "Mirrored versions of the party sometimes appear—watching"
        ],
        inhabitants: [
            "Ghosts trailing vapor like cloaks",
            "Walking Shadows who fear light",
            "Mist hounds with no visible form",
            "Spirits searching for lost memories"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Disorientation is constant",
            "Sound echoes misleadingly",
            "Phantom lights lure travellers away",
            "Torches burn low, magical light flickers",
            "Compasses and divination spells spin wildly"
        ],
        effects: [
            "Cold clings to bone, even when dry",
            "Dreams are unclear and fragmented",
            "Conversations often repeat unintentionally",
            "Faint weeping is audible at the edge of hearing"
        ],
        ambience: {
            light: "Grey dimness at all hours",
            sound: "Muffled footfalls and distant sobs"
        },
        weather: [
            { text: "Thick, rolling fog that parts only when ignored", emoji: "🌫️🌀👁️‍🗨️" },
            { text: "Intermittent drizzle that makes no splash", emoji: "🌧️🤫💧" },
            { text: "Sudden bursts of clear sky—then gone again", emoji: "🌤️⚡🌫️" },
            { text: "Fog glows faint blue under moonlight", emoji: "🌫️🔵🌕" },
            { text: "Never-ending overcast", emoji: "☁️♾️" }
        ]
    },
    forest: {
        nouns: ["Canopy", "Bark", "Root"],
        features: [
            "Towering trees with bark as thick as walls",
            "Endless undergrowth that seems to shift behind you",
            "Sunbeams that never touch the ground",
            "Creepers that spiral like serpents",
            "Hollow trees that hum when approached"
        ],
        mystery: [
            "Something watches from the trees",
            "Paths reappear where none were before",
            "Each grove feels like a memory",
            "The forest floor changes when left unwatched"
        ],
        inhabitants: [
            "Gnomes with bark-like skin and leaf-hats",
            "Sap spirits who guide or deceive",
            "Silent dryads who trade secrets for stories",
            "Giant insects who act as forest sentinels"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Roots ensnare ankles without warning",
            "Every path forks and folds into itself",
            "Night falls early and fast",
            "Animals mimic human voices to lure travelers"
        ],
        effects: [
            "Footsteps are muffled—sound vanishes upward",
            "The canopy emits faint phosphorescence at night",
            "Rest is strangely dreamless",
            "Magic echoes slightly, distorting effects"
        ],
        ambience: {
            light: "Filtered green light, dappled and inconsistent",
            sound: "Birdcalls, buzzing, and rustling that never stops"
        },
        weather: [
            { text: "Dripping rain that never reaches the ground", emoji: "🌧️⬇️🌫️" },
            { text: "Sudden gusts that carry pollen storms", emoji: "💨🌼🌪️" },
            { text: "Fungal blooms triggered by lightning", emoji: "🍄⚡🌩️" },
            { text: "Steam haze after even the lightest rain", emoji: "🌫️💧♨️" },
            { text: "Morning fog that clings to the mid-canopy", emoji: "🌫️🌳🌅" }
        ]
    },
    fortress: {
        nouns: ["Wall", "Rampart", "Keep"],
        features: [
            "Broken battlements, still proud",
            "Sealed gates carved with forgotten heraldry",
            "Crumbling towers held together by spite",
            "Arrow slits that seem to follow your movement",
            "Barracks littered with frozen moments of conflict"
        ],
        mystery: [
            "The defenders still walk the halls",
            "Every bell tolls in your mind, not your ears",
            "Dust never settles within the keep",
            "Ghostly horns blow only when no one listens"
        ],
        inhabitants: [
            "Sentient Armour that patrols out of duty",
            "Stone gargoyles that shift when ignored",
            "Undead banner-bearers waiting for command",
            "The last commander, mummified and lucid"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Traps remain active and clever",
            "Walls collapse without warning",
            "Undead defenders follow ancient orders",
            "Every door opens into a different memory of war"
        ],
        effects: [
            "Weapons rust even when cleaned",
            "Sleep brings dreams of sieges past",
            "Orders whispered here are often obeyed—by something",
            "Spells linger too long, imprinting on the stone"
        ],
        ambience: {
            light: "Golden or gray, depending on mood—not time",
            sound: "Echoes of marching boots, even when alone"
        },
        weather: [
            { text: "Cold wind whistling through arrow slits", emoji: "💨🏰❄️" },
            { text: "Misty rain that collects in moats", emoji: "🌫️🌧️🕳️" },
            { text: "Ash-fall that never ignites flame", emoji: "🌫️🌋🚫🔥" },
            { text: "Snow that falls inside rooms but not outside", emoji: "❄️🏠⛔🏞️" },
            { text: "Lightning that strikes towers predictably, endlessly", emoji: "⚡🏰🔁" }
        ]
    },
    frozen: {
        nouns: ["Icicle", "Rime", "Hush"],
        features: [
            "Snowy dunes that hide jagged rocks",
            "Frozen statues mid-scream or gesture",
            "Glacial walls carved by unnatural means",
            "Icy bridges suspended in air by unknown forces",
            "Boreholes that exhale freezing wind"
        ],
        mystery: [
            "It froze mid-motion",
            "Time is trapped in each snowflake",
            "The ice sings only when no one is listening",
            "What lies beneath never stopped moving"
        ],
        inhabitants: [
            "Yeti who worship cold stars",
            "Wendigos howling from whiteout peaks",
            "Living blizzards with hungry eyes",
            "Ice elementals mimicking lost explorers"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Blizzards reduce visibility to nothing",
            "Buried crevasses threaten to swallow whole caravans",
            "Frostbite sets in within minutes",
            "Sound carries poorly—cries for help vanish",
            "Fires flicker and die fast"
        ],
        effects: [
            "Metal cracks from sheer cold",
            "Warm breath forms strange glyphs in the air",
            "Healing is slower, sleep is deeper",
            "Dreams are frozen memories"
        ],
        ambience: {
            light: "Pale blue glow from every surface",
            sound: "Crunching snow, distant cracking, eerie silence"
        },
        weather: [
            "Blizzards that obscure even firelight ❄️🔥🌨️",
            "Ice storms that coat everything instantly 🌨️🧊⚠️",
            "Northern lights that mimic battle scenes 🌌⚔️✨",
            "Hail that falls in rhythmic pulses 🌨️🥁🧊",
            "Moonlight that creates second shadows 🌕🌓👥"
        ]
    },
    haunted: {
        nouns: ["Wraith", "Whisper", "Shade"],
        features: [
            "Cold spots where breath mists unnaturally",
            "Unseen footsteps that follow close behind",
            "Crumbling tombstones with fresh soil",
            "Broken lanterns that light by themselves",
            "Wind chimes that ring without breeze"
        ],
        mystery: [
            "You are never alone",
            "The island mimics your voice at night",
            "Reflections reveal something else entirely",
            "Your dreams aren’t just yours"
        ],
        inhabitants: [
            "Undead whose eyes reflect memories",
            "Ghosts who reenact their deaths",
            "Vampires entombed but still hungry",
            "Shadow-bound revenants whispering riddles"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Spirits replay violent deaths",
            "Possession attempts during dreams",
            "Dead refuse to stay buried",
            "Sanctified ground has been corrupted",
            "The living grow cold when they linger"
        ],
        effects: [
            "Cold clings unnaturally to skin",
            "Holy symbols flicker and dim",
            "Spells cast here echo with spectral whispers",
            "Hope seems distant; fear comes easy"
        ],
        ambience: {
            light: "Flickering, dim—even during daylight",
            sound: "Distant crying, chains dragging softly"
        },
        weather: [
            "Sudden chill even on hot days ❄️🌡️",
            "Fog that never lifts from graves 🌫️🪦",
            "Drizzle that smells of old candles 🌧️🕯️",
            "Lightning that strikes without thunder ⚡🤫",
            "Misty rain that leaves spectral handprints 🌫️👻✋"
        ]
    },
    hot: {
        nouns: ["Blaze", "Flare", "Scorch"],
        features: [
            "Boiling springs that hiss with fury",
            "Sun-cracked stone etched with burnt handprints",
            "Charcoal trees that still smoke",
            "Sulphurous vents in the ground",
            "Molten puddles that cool by night"
        ],
        mystery: [
            "The heat seems... intentional",
            "Ash falls with no source",
            "Mirages reveal burning ruins",
            "A voice rides the wind, chanting in tongues"
        ],
        inhabitants: [
            "Fire Golems made of molten stone",
            "Ash spirits that cling to lungs",
            "Heat elementals whispering from vents",
            "Lava lizards with burning eyes"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Heatstroke sets in within minutes",
            "Armor becomes dangerously hot",
            "Water evaporates quickly",
            "Flammable items ignite randomly",
            "Touching stone burns flesh"
        ],
        effects: [
            "Vision warps with heat shimmer",
            "Fire spells surge in power",
            "Cold-based magic fizzles",
            "Rest offers little relief from exhaustion"
        ],
        ambience: {
            light: "Glare like a furnace, white and searing",
            sound: "Crackling, hissing, constant low rumble"
        },
        weather: [
            "Sun-blasted skies, cloudless and merciless ☀️🔥",
            "Dust devils that glow with embers 🌪️🔥",
            "Lightning storms that strike dry earth ⚡🌵",
            "Searing winds that peel skin 💨🔥",
            "Ashfalls that coat the ground like snow 🌫️🌋❄️"
        ]
    },
    illusion: {
        nouns: ["Echo", "Lie", "Veil"],
        features: [
            "Shifting shapes that vanish when touched",
            "Vanishing paths that reappear elsewhere",
            "Buildings that collapse into nothing",
            "Voices that come from your own throat",
            "Waterfalls that are dry if touched"
        ],
        mystery: [
            "Reality is not fixed here",
            "Each hour resets the terrain",
            "The island shows you what you want—then takes it",
            "Nothing reflects properly, even water"
        ],
        inhabitants: [
            "Sprites with illusory faces",
            "Changelings who mirror the party",
            "Hallucinated people that act real",
            "Invisible tricksters laughing just out of sight"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Illusions conceal hazards and traps",
            "Navigation is impossible without blindfolds",
            "Trust between party members frays",
            "Memories become suspect",
            "Reality changes without transition"
        ],
        effects: [
            "Spells misfire to reflect false intent",
            "Dreams seem more real than waking life",
            "Eyes grow strained trying to focus",
            "Truth cannot be divined here"
        ],
        ambience: {
            light: "Soft, always golden—but somehow wrong",
            sound: "Voices echo a second late, like playback"
        },
        weather: [
            "Mist that shows things that aren’t real 🌫️👁️",
            "Shimmering heat despite cold ❄️🔥",
            "Rain that turns to birds in midair 🌧️🕊️",
            "Wind that speaks in familiar voices 💨🗣️",
            "Moonlight that creates impossible shadows 🌕🖤"
        ]
    },
    jungle: {
        nouns: ["Vine", "Beast", "Sprawl"],
        features: [
            "Dense canopy blotting out the sky",
            "Choking creepers that grab ankles",
            "Fruits that pulse with unseen veins",
            "Temples swallowed whole by roots",
            "Steaming mud-pools hiding sinkholes"
        ],
        mystery: [
            "The jungle moves at night",
            "Footprints vanish as they're made",
            "Animals speak when unobserved",
            "The trees rearrange themselves"
        ],
        inhabitants: [
            "Indigenous Tribes who speak to plants",
            "Sentient Monkeys who mimic rituals",
            "Vine-beasts born from rot and shadow",
            "Insect cults with hive minds"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Predators stalk from the canopy",
            "Dense foliage obscures paths",
            "Poisonous plants react to movement",
            "Leeches and insects wear down stamina",
            "Rain floods trails in minutes"
        ],
        effects: [
            "Everything smells rich and decaying",
            "Magic often amplifies unintentionally",
            "Fire spreads wildly then dies suddenly",
            "Sound carries strangely—sometimes not at all"
        ],
        ambience: {
            light: "Dappled and restless, filtered through vines",
            sound: "Constant drone of insects, roars from afar"
        },
        weather: [
            "Thunderstorms that last seconds but drench entirely ⛈️💦",
            "Muggy, oppressive stillness between bursts of rain 🌫️💧",
            "Mist that breeds confusion and heatstroke 🌁🌀🌡️",
            "Rain that hisses on leaves like snakes 🌧️🐍",
            "Sunlight that scalds in sudden shafts ☀️⚡"
        ]
    },
    living: {
        nouns: ["Heart", "Shell", "Flesh"],
        features: [
            "Breathing chambers that contract slowly",
            "Sinew hills that pulse with life",
            "Veins run across the surface like rivers",
            "Soft, warm ground that bruises when struck",
            "Giant eyes that close when approached"
        ],
        mystery: [
            "The island dreams",
            "It flinches from fire",
            "Something listens when you speak",
            "Every step leaves a heartbeat behind"
        ],
        inhabitants: [
            "Giant Crabs that scuttle as caretakers",
            "Symbiotic parasites forming humanoid colonies",
            "Bone-piercing worms that live under the skin",
            "Humans who’ve been partially absorbed"
        ],
        treasure: ["curiosity"],
        challenges: [
            "The ground resists digging or cutting",
            "Bleeding walls alert guardians",
            "Weather triggers muscular spasms",
            "Everything is slightly warm and wet",
            "Healing spells cause nausea here"
        ],
        effects: [
            "Wounds heal unnaturally fast—or wrong",
            "Speech echoes like it’s inside a body",
            "Pain seems shared with the island",
            "Fire magic causes screaming from the ground"
        ],
        ambience: {
            light: "Faint pinkish glow from the 'sky'",
            sound: "Gurgles, wet squelches, rhythmic thumping"
        },
        weather: [
            "Sweat-slick humidity that smells like blood 💦🩸",
            "Gusts of breath-like wind 🌬️😮‍💨",
            "Moisture weeps from every surface 💧😓",
            "Heartbeat tremors that shake trees 🌳💓🌫️",
            "Sticky mists that cling to skin 🌁🕸️"
        ]
    },
    magical: {
        nouns: ["Charm", "Gleam", "Wand"],
        features: [
            "Runic formations glowing faintly at dusk",
            "Aether currents visibly drifting through air",
            "Floating pebbles that hum softly",
            "Wild magic blooms sprouting crystal thorns",
            "Invisible paths revealed only during moonrise"
        ],
        mystery: [
            "It pulses with arcane life",
            "Time skips forward at odd moments",
            "Magic writes itself into the dirt",
            "Spells whisper their names before casting"
        ],
        inhabitants: [
            "A lone wizard researcher who isn’t sure how he got here years ago",
            "Talking familiars who claim to own the land",
            "Sentient spellbooks roaming on clawed bindings",
            "Arcane echoes that loop conversations endlessly"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Spell surges change intended effects",
            "Teleportation leads back to the same place",
            "Magic items gain temporary sentience",
            "Runes drain magical energy on contact",
            "Cantrips fizzle while rituals spark wildly"
        ],
        effects: [
            "Arcane marks appear on exposed skin",
            "All languages sound like chants",
            "Night sky shifts with spellcasting",
            "Inanimate objects occasionally blink"
        ],
        ambience: {
            light: "A low ambient glow from the very air",
            sound: "A soft, rising hum in places of power"
        },
        weather: [
            "Glittering mist that boosts magic briefly ✨🪄🌫️",
            "Radiant stormclouds that glow violet 🌩️💜☁️",
            "Arcane lightning that follows spellcasters ⚡🧙‍♂️🎯",
            "Rain that traces runes in puddles 💧🔮〰️",
            "Aether rainbows that spiral across the sky 🌈🌀✨"
        ]
    },
    magnetic: {
        nouns: ["Pull", "Lode", "Field"],
        features: [
            "Hovering debris slowly orbiting central stones",
            "Strange compass spins endlessly",
            "Iron-rich sand that climbs rock surfaces",
            "Metallic shards aligned into sigils",
            "Rust sculptures forming without aid"
        ],
        mystery: [
            "Metal bends unnaturally here",
            "Hearts beat in rhythm with magnetic pulses",
            "Armor becomes impossibly heavy—or floats",
            "Birds drop dead with compass-shaped pupils"
        ],
        inhabitants: [
            "A heavily armoured man stuck to a wall—alive, bitter, and philosophical",
            "Iron-leeches that slurp minerals from tools",
            "Ghost miners who dig with invisible picks",
            "Disoriented adventurers who can’t remove their helmets"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Metal tools twist out of shape",
            "Flying gear is pulled to earth mid-cast",
            "Navigation devices malfunction",
            "Spells with iron or steel components misfire",
            "Magnetic pulses cause memory lapses"
        ],
        effects: [
            "All metal hums softly",
            "Hair lifts in sudden static waves",
            "Electrical spells arc sideways",
            "Speech sounds echoed and distorted near ore clusters"
        ],
        ambience: {
            light: "Sporadic flickers of aurora-like pulses",
            sound: "Crackling static and humming from deep earth"
        },
        weather: [
            "Iron rain that shatters against stone 🌧️🪨🔩",
            "Crystalline fog that sticks to metal 🌫️❄️🧲",
            "Magnetic storms that spin compass needles 🌩️🧭🌀",
            "Flickering auroras even at noon 🌈✨🌞",
            "Lightning spirals that rotate midair ⚡🔄☁️"
        ]
    },
    misty: {
        nouns: ["Drift", "Haze", "Cover"],
        features: [
            "Low-lying fog thick as wool",
            "Half-seen ruins that move when unobserved",
            "Lantern lights that blink like eyes",
            "Moist stone that weeps in silence",
            "Floating lanterns that never burn out"
        ],
        mystery: [
            "Shapes loom where there should be none",
            "The mist holds voices from another time",
            "Fog rolls uphill and stays there",
            "Travelers walk in circles without realizing"
        ],
        inhabitants: [
            "Water farmers who reap drinking water from the mist",
            "Mist spirits that bargain in riddles",
            "Pale walkers with no discernible features",
            "Children of the Fog—tiny, silent watchers"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Vision is restricted to a few feet",
            "Torches sputter and go out",
            "Sound is distorted and misleading",
            "Fog alters memory over long exposure",
            "Solid objects fade from sight until touched"
        ],
        effects: [
            "Breath becomes visible and heavy",
            "Spells cast in fog drift unpredictably",
            "Dreams become shared in the haze",
            "Clothes remain damp no matter what"
        ],
        ambience: {
            light: "Gray-blue, featureless haze",
            sound: "Soft footfalls and dripping water—even when dry"
        },
        weather: [
            "Rolling, wet fog all day and night 🌫️🌧️🕰️",
            "Drizzle that never fully becomes rain 🌦️💧😶",
            "Stillness broken by sudden gusts 🌬️🌪️⏳",
            "Occasional flashes of light with no thunder ⚡🌌🤫",
            "Whispers riding wind that no one speaks 🌬️🗣️❓"
        ]
    },
    morbid: {
        nouns: ["Grave", "Crypt", "Dirge"],
        features: [
            "Bone altars decorated with dried flowers",
            "Death motifs carved into every rock",
            "Statues depicting sorrowful last moments",
            "Obelisks made of old gravestones",
            "Offerings of rotten fruit and ash"
        ],
        mystery: [
            "It honors something long dead",
            "Laughter is muffled; silence amplified",
            "The dead seem to protect the living",
            "Eyes are drawn to graves, even if hidden"
        ],
        inhabitants: [
            "Cult followers in ceremonial black",
            "Silent monks who never blink",
            "Hollow-eyed priests who sing backwards",
            "Caretaker spirits who prune graveyards"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Speech in sacred places draws ill will",
            "Trespassing on marked ground triggers curses",
            "Buried things shift beneath the earth",
            "Sacrifices are expected to pass certain paths",
            "Cold causes equipment to rust overnight"
        ],
        effects: [
            "Skin feels clammy in shade",
            "Dreams contain mourning rituals",
            "Nothing decays unless buried",
            "Weapons dull quickly—especially if used"
        ],
        ambience: {
            light: "Dim, even in daylight, with long shadows",
            sound: "Chimes, groans, and dry wind through crypts"
        },
        weather: [
            "Cold, dry air with zero insects ❄️🌬️🚫🐜",
            "Ash rain that stains clothes 🌫️🌋🖤",
            "Stillness before sudden mourning winds 🕯️🌬️🖤",
            "Clouds form faces before vanishing ☁️👤👀",
            "Occasional showers that smell of incense 🌧️🕊️🪔"
        ]
    },
    mystical: {
        nouns: ["Vision", "Seer", "Charm"],
        features: [
            "Flickering lights between trees",
            "Sacred groves that glow at moonrise",
            "Floating runes etched into air",
            "Trees that whisper your name",
            "Pools that reflect only futures"
        ],
        mystery: [
            "Dreams here are prophetic",
            "The stars seem closer than normal",
            "Time flows slightly sideways",
            "Unspoken thoughts echo aloud"
        ],
        inhabitants: [
            "Fey folk with eyes of mirror",
            "Lone wizard meditating eternally",
            "Witches’ coven tending strange herbs",
            "Pilgrims seeking answers to unasked questions"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Walking backward reveals hidden paths",
            "Strangers know your past",
            "Lies unravel as physical threads",
            "Truth spoken aloud changes the weather",
            "Magical creatures react violently to logic"
        ],
        effects: [
            "Dreams feel more real than waking life",
            "Symbols appear on skin after meditation",
            "Weapons hum softly in holy groves",
            "Magic feels alive and curious"
        ],
        ambience: {
            light: "Twilight colors with shifting hues",
            sound: "Chimes, wind whispers, and melodic echoes"
        },
        weather: [
            "Starlight that bends and dances ✨🌌🩰",
            "Rain that glows slightly in dark 🌧️💡🌙",
            "Sudden breezes with singing tones 💨🎶🌬️",
            "Thick silence broken by distant bells 🔕🔔🌫️",
            "Mist tinted violet or gold 🌫️💜💛"
        ]
    },
    organic: {
        nouns: ["Pulse", "Shell", "Spine"],
        features: [
            "Living caves with pulsing membranes",
            "Breathing walls that expand and contract softly",
            "Tongue-like paths that shift when stepped on",
            "Oozing growths with unknown purpose",
            "Shell-like ridges that close protectively"
        ],
        mystery: [
            "It responds when touched",
            "It flinches at loud noises",
            "Blood flows beneath the surface",
            "You hear a heartbeat at night"
        ],
        inhabitants: [
            "Kronenbergs—twisted amalgams of flesh and other things",
            "Caretaker cells shaped like humanoid organs",
            "Parasites in search of hosts",
            "One massive intelligence that watches through many eyes"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Navigation triggers immune responses",
            "Weapons stick in ‘flesh walls’",
            "Digestion begins if you remain still too long",
            "Some surfaces induce hallucinations on contact"
        ],
        effects: [
            "Everything feels subtly warm",
            "Metal corrodes, flesh heals unnaturally",
            "You develop phantom itches in your teeth",
            "Food goes rancid quickly unless organic"
        ],
        ambience: {
            light: "Dim and reddish, like through closed eyelids",
            sound: "Wet, pulsing squelches and muffled rumbling"
        },
        weather: [
            "Spore rain that clings to clothes 🌧️🍄🧥",
            "Hot wind carrying the smell of meat 🌬️🥩🔥",
            "Fleshy hail that dissolves into jelly ❄️🫀🍮",
            "Sudden growth spurts reshape paths 🌱🌀🛤️",
            "Mucous fog that muffles movement 🌫️🤢👣"
        ]
    },
    petrification: {
        nouns: ["Stone", "Stare", "Stillness"],
        features: [
            "Frozen figures mid-scream",
            "Fields of lifelike statues in dramatic poses",
            "Walls carved with uncanny realism",
            "Crumbling statues weeping gravel",
            "Eyes still wet within stone faces"
        ],
        mystery: [
            "Did they move just now?",
            "The stone dust smells of fear",
            "New statues appear overnight",
            "Some still blink… rarely"
        ],
        inhabitants: [
            "Stone gazers hidden in shadows",
            "Basilisks nesting beneath marble colonnades",
            "Cursed wanderers trying not to blink",
            "Living statues that move only when alone"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Direct eye contact petrifies slowly",
            "Mirrors crack under use",
            "Every statue must be watched",
            "Touching the wrong object turns it—or you—stone"
        ],
        effects: [
            "Voices echo oddly, like in stone chambers",
            "Tears crystallize on cheeks",
            "Hands slowly feel heavier over time",
            "Stone dust clings to boots no matter where you walk"
        ],
        ambience: {
            light: "Harsh white sun or total overcast—no in-between",
            sound: "Crackling stone and sudden, eerie silences"
        },
        weather: [
            { text: "Dry wind that scatters gravel", emoji: "💨🪨" },
            { text: "Dust storms that polish surfaces smooth", emoji: "🌪️🌫️🧽" },
            { text: "Sudden stone-hail flurries", emoji: "🌨️🪨❄️" },
            { text: "Lightning strikes freeze sand into glass", emoji: "⚡🌵🪞" },
            { text: "Overnight dew petrifies vegetation", emoji: "🌿💧🪨🌄" }
        ]
    },
    psychic: {
        nouns: ["Thought", "Echo", "Will"],
        features: [
            "Mental static zones that hum in your skull",
            "Harmonized groves with synchronized fauna",
            "Floating stones that respond to thoughts",
            "Eyes carved into bark that blink in sync",
            "Caves where you hear memories not your own"
        ],
        mystery: [
            "It speaks into your mind",
            "Memories rearrange themselves overnight",
            "Dreams continue while awake",
            "Your thoughts echo back in another voice"
        ],
        inhabitants: [
            "Disembodied voices that respond to emotion",
            "Psychic fauna that mimic your fears",
            "Mind-linked wanderers who’ve forgotten their names",
            "The Dreamer: a slumbering psychic node that pulses ideas"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Intrusive thoughts become voices",
            "Party members hear each other’s secrets involuntarily",
            "Mental fatigue builds unnaturally fast",
            "Illusions manifest from doubt or guilt",
            "Decisions require collective psychic alignment"
        ],
        effects: [
            "Dreams shift when you speak",
            "No one can lie while on the island",
            "Thoughts drift into speech without warning",
            "You feel watched from inside your mind"
        ],
        ambience: {
            light: "Shifting hues matching moods",
            sound: "Voices without source, mirroring your tone"
        },
        weather: [
            { text: "Calm air filled with ringing tones", emoji: "🔔🌬️🔕" },
            { text: "Rainfall brings lucid dreams to all sleepers", emoji: "🌧️💤🌙✨" },
            { text: "Lightning manifests as thoughts given form", emoji: "⚡🧠🫥" },
            { text: "Static mist where hallucinations bloom", emoji: "🌫️⚡🌸👁️" },
            { text: "Thoughtstorms—blasts of mental interference", emoji: "🌪️🧠🔊❗" }
        ]
    },
    reflective: {
        nouns: ["Mirror", "Glimmer", "Pane"],
        features: [
            "Still waters that reflect dreams, not reality",
            "Reflective stone that shifts perspective",
            "Caves of silver glass that show past moments",
            "Pools that duplicate, not mirror",
            "Shards that whisper secrets only to those who listen"
        ],
        mystery: [
            "You see a version of yourself—but not quite",
            "Reflections continue moving when you don’t",
            "Looking away breaks the image",
            "Some reflections scream in silence"
        ],
        inhabitants: [
            "Mimics of travelers who arrive before you",
            "People who only exist within reflections",
            "The Watcher—a cloaked mirror-entity that mimics speech",
            "Wraiths drawn to strong self-image"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Navigating without catching your reflection",
            "Reflected selves attempt to switch places",
            "Shiny surfaces reveal private thoughts",
            "Reflections carry physical weight",
            "Objects mirrored may reverse their function"
        ],
        effects: [
            "Reflected wounds appear on the body",
            "Said words echo visually before being heard",
            "Mirrors crack when truths are told",
            "You occasionally swap perspective with your reflection"
        ],
        ambience: {
            light: "Bright, but distorted like from a prism",
            sound: "Reverberating echoes, even when whispered"
        },
        weather: [
            { text: "Glittering fog that produces optical illusions", emoji: "🌫️✨🎭" },
            { text: "Rainbow arcs after even dry winds", emoji: "🌈💨☀️" },
            { text: "Rain forms puddles that speak in riddles", emoji: "🌧️💧🗣️❓" },
            { text: "Lightning reflected in every surface", emoji: "⚡🔁🪞" },
            { text: "Mist that reveals hidden paths only through reflection", emoji: "🌫️🪞🚶‍♂️❓" }
        ]
    },
    rising: {
        nouns: ["Ascension", "Spire", "Tide"],
        features: [
            "Emergent stone platforms shaped like stairs",
            "Watermarked ruins climbing from the sea",
            "Vegetation rising upward unnaturally",
            "Islets joining into a larger island",
            "Spirals of rock slowly rising skyward"
        ],
        mystery: [
            "It wasn’t here last week",
            "The island grows taller by the day",
            "Ruins here are older than the surrounding ocean",
            "Each night, something is... higher"
        ],
        inhabitants: [
            "Architect spirits documenting the change",
            "Crabs that build altars from coral",
            "Ascending cults awaiting their elevation",
            "Bird-folk who chart growth and collapse"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Platforms shift while traversed",
            "Gravity lessens near the summit",
            "Storms erode gains nightly",
            "Weight-based puzzles shift terrain",
            "Floods displace camps daily"
        ],
        effects: [
            "Everything feels lighter over time",
            "Voices echo upward, never down",
            "Flight spells last longer",
            "Climbing compulsion grows stronger each night"
        ],
        ambience: {
            light: "Golden gleam of dawn even at dusk",
            sound: "Subtle creaking and upward rushing wind"
        },
        weather: [
            { text: "Clouds part around high ground", emoji: "☁️⛰️✨" },
            { text: "Rain only falls upward", emoji: "🌧️⬆️❓" },
            { text: "Winds form spirals toward the sky", emoji: "💨🌀🌌" },
            { text: "Misty auras form at elevation thresholds", emoji: "🌫️🔮⛰️" },
            { text: "Crackling air as pressure equalizes daily", emoji: "⚡🌬️🔁" }
        ]
    },
    rocky: {
        nouns: ["Crag", "Spire", "Ridge"],
        features: [
            "Jagged cliffs that tower over narrow valleys",
            "Falling scree that never quite settles",
            "Wind-carved arches and echoing hollows",
            "Stacked boulders that look deliberately placed",
            "Tiny shrines nestled into cliff faces"
        ],
        mystery: [
            "Voices echo from inside the rocks",
            "Footsteps come from above—when there's no one there",
            "The cliffs shift slightly between visits",
            "Wind carries old words through the stones"
        ],
        inhabitants: [
            "Territorial cliffbeasts",
            "Hermits who listen to the stone",
            "Rock elementals who resent foot traffic",
            "Goats that vanish when followed"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Landslides triggered by footfalls",
            "Sheer cliffs with unstable ledges",
            "Echoing sounds attract territorial beasts",
            "Every ascent crumbles beneath the feet",
            "Bridges collapse mid-crossing unless carefully balanced"
        ],
        effects: [
            "Sound carries strangely—conversations travel miles",
            "Small tremors rumble nightly",
            "Stone tools work better than metal ones",
            "Climbing feels easier—but more dangerous"
        ],
        ambience: {
            light: "Sharp shadows cast by uneven terrain",
            sound: "Wind howling between peaks, falling rocks in the distance"
        },
        weather: [
            { text: "Sudden rockfalls triggered by distant thunder", emoji: "🪨⚡🌩️" },
            { text: "Cold winds that cut through even heavy clothing", emoji: "💨🧥❄️" },
            { text: "Dust clouds from unseen collapses", emoji: "🌪️🌫️🧱" },
            { text: "Lightning that always strikes the highest peak", emoji: "⚡⛰️🎯" },
            { text: "Freezing rain that turns paths to treachery", emoji: "🌧️❄️⚠️" }
        ]
    },
    ruins: {
        nouns: ["Pillar", "Vault", "Echo"],
        features: [
            "Sunken plazas filled with seawater or vines",
            "Collapsed towers whose stone seems melted",
            "Half-buried murals telling forgotten stories",
            "Overgrown colonnades with no visible roof",
            "Broken statues with faces worn smooth"
        ],
        mystery: [
            "A lost people left a warning",
            "The architecture matches no known civilization",
            "Doors lead nowhere—but were clearly used",
            "Symbols glow faintly only under moonlight"
        ],
        inhabitants: [
            "Explorers who vanished long ago",
            "Cursebound guardians",
            "Ruins-dwelling fungi that form humanoid shapes",
            "Golems who have forgotten their purpose"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Structures collapse without warning",
            "Enchanted traps still trigger",
            "Mazes with shifting corridors",
            "Whispers mislead explorers into dead ends",
            "Unseen forces resist excavation"
        ],
        effects: [
            "Time passes strangely within chambers",
            "You begin dreaming of the city as it was",
            "Torches dim near certain stones",
            "Etchings change subtly between visits"
        ],
        ambience: {
            light: "Sunbeams break through overgrowth and stone",
            sound: "Soft dripping water, the occasional distant crumble"
        },
        weather: [
            { text: "Drizzling rain that pools in old footprints", emoji: "🌧️👣💧" },
            { text: "Chill fog clings to lower levels", emoji: "🌫️❄️⬇️" },
            { text: "Storms only strike the ruins, nowhere else", emoji: "🌩️🏛️🚫" },
            { text: "Evening winds mimic whispered speech", emoji: "🌬️🌆🗣️" },
            { text: "Lightning cracks old towers back to life—for a moment", emoji: "⚡🏰⏳" }
        ]
    },
    shimmering: {
        nouns: ["Gleam", "Twinkle", "Glimmer"],
        features: [
            "Blinding patches of light that shimmer and move",
            "Wavering air that distorts sight",
            "Crystals embedded in soil or cliffs",
            "Pools that glow with bioluminescence",
            "Dust that refracts into rainbow prisms"
        ],
        mystery: [
            "Reality flickers here",
            "The shimmer moves toward you, then away",
            "Echoes of yourself appear just ahead",
            "Glints in the distance mimic signals"
        ],
        inhabitants: [
            "Creatures made of living light",
            "Travelers who have become translucent",
            "Phantom doubles",
            "Mothlike beings drawn to the shimmer"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Visual illusions distort terrain",
            "Reflections cause vertigo",
            "Shimmer fields disorient compass and maps",
            "Creatures are drawn to motion in the light",
            "Spells misfire when cast near glimmers"
        ],
        effects: [
            "Mirages occur even in shade",
            "Colors shift subtly while moving",
            "Eyes hurt after long exposure",
            "Light-based magic is amplified… or inverted"
        ],
        ambience: {
            light: "Brilliant, flickering motes everywhere",
            sound: "Crackling energy and the low hum of resonance"
        },
        weather: [
            { text: "Heat shimmer without heat", emoji: "♨️✨🌫️" },
            { text: "Rainbows form without rain", emoji: "🌈❌🌧️" },
            { text: "Light drizzles from above like liquid", emoji: "💧🌟☁️" },
            { text: "Mirage fog rolls over the land", emoji: "🌫️🪞🏜️" },
            { text: "Noon seems to last all day", emoji: "☀️🕛🔁" }
        ]
    },
    sinkhole: {
        nouns: ["Pit", "Maw", "Chasm"],
        features: [
            "Sudden drops into darkness",
            "Unstable crust riddled with hairline cracks",
            "Tunnels opening beneath your feet",
            "Collapsed shrines half-swallowed by the earth",
            "Fissures that breathe warm air"
        ],
        mystery: [
            "Something is waiting below",
            "The pit gets deeper when you don’t look",
            "Climbed down yesterday—wasn't the same today",
            "A voice calls from the abyss"
        ],
        inhabitants: [
            "Things that don’t like light",
            "Blind wanderers with echolocation",
            "Lost explorers who’ve built new lives",
            "Predators that mimic help"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Sinkholes collapse behind you",
            "Sound echoes make mapping impossible",
            "Slopes are slick with subterranean moss",
            "Depth affects time perception",
            "Air gets thin and cold fast"
        ],
        effects: [
            "Gravity feels stronger near the pit",
            "Clocks stop near the bottom",
            "Torches burn strangely blue",
            "Voices distort and return warped"
        ],
        ambience: {
            light: "Dim, even at noon; deep shadows always present",
            sound: "Low moaning wind from the abyss, intermittent dripping"
        },
        weather: [
            { text: "Ground tremors open new holes", emoji: "🌍💥🕳️" },
            { text: "Cold drafts rise from the cracks", emoji: "🌬️❄️🪨" },
            { text: "Rain causes massive collapses", emoji: "🌧️⬇️💔" },
            { text: "Thick mist clings near the rim", emoji: "🌫️🌀🏞️" },
            { text: "Stars seem to circle the pit at night", emoji: "🌌✨🕳️" }
        ]
    },
    sky: {
        nouns: ["Cloud", "Drift", "Wing"],
        features: [
            "Air bridges made of hardened mist",
            "Floating flora drifting on air currents",
            "Tethered islands barely holding together",
            "Gravity wells that twist flight paths",
            "Suspended waterfalls with no source"
        ],
        mystery: [
            "It connects to something above",
            "Birds vanish upward and never return",
            "Clouds whisper names when passed through",
            "The sky opens at night… literally"
        ],
        inhabitants: [
            "Bird folk riding thermal currents",
            "Air elementals grazing on pressure",
            "Skyherders who corral floating beasts",
            "Watchers who live above the clouds"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Strong updrafts throw off navigation",
            "Winged predators strike from above",
            "Breath thins at certain altitudes",
            "Climbing platforms shift like jelly",
            "Storms drop debris from other places"
        ],
        effects: [
            "Weight decreases slightly over time",
            "Voices carry far further than expected",
            "Fall damage may reverse randomly",
            "Magical flight surges in power, then sputters"
        ],
        ambience: {
            light: "Bright and expansive, but often surreal",
            sound: "Whistling winds, bird calls from unseen heights"
        },
        weather: [
            { text: "Skyquakes shake floating structures", emoji: "☁️🌩️🌪️" },
            { text: "Rain falls upward in slow spirals", emoji: "🌧️🔄⬆️" },
            { text: "Auroras form even in daytime", emoji: "🌈☀️✨" },
            { text: "Cloudbursts that contain solid ice or feathers", emoji: "🌨️🧊🪶" },
            { text: "Lightning arcs horizontally across the sky", emoji: "⚡➡️🌌" }
        ]
    },
    statues: {
        nouns: ["Effigy", "Gaze", "Stone"],
        features: [
            "Unblinking forms with eroded faces",
            "Rows of figures facing east",
            "Collapsed colonnades with weeping figures",
            "Statues that match no known culture",
            "Stone animals mid-roar or mid-flee"
        ],
        mystery: [
            "They change position when not watched",
            "Each statue has a different shadow",
            "One is newer than the rest—and it's watching you",
            "They whisper your name at dusk"
        ],
        inhabitants: [
            "Living statues bound by unknown law",
            "Statue mimics that replace real people",
            "Caretakers who don't blink",
            "The last sculptor, hiding among his work"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Statues shift subtly while you move",
            "Breaking one summons something worse",
            "Maze of statues resets unless a certain path is walked",
            "Some are guardians—you just don’t know which",
            "One is missing from the row"
        ],
        effects: [
            "Being watched causes mild vertigo",
            "Touching a statue causes vivid dreams",
            "Time seems slower when surrounded by statues",
            "You start resembling one over time"
        ],
        ambience: {
            light: "Pale light highlights empty eyes and weathered faces",
            sound: "Occasional scraping of stone against stone when no one's looking"
        },
        weather: [
            { text: "Still and overcast, sky a dull gray", emoji: "☁️🌫️" },
            { text: "Sudden downpours make statues weep", emoji: "🌧️🗿💧" },
            { text: "Wind whistles through their mouths", emoji: "🌬️🗿" },
            { text: "Morning mists cluster thickest around their feet", emoji: "🌫️🦶" },
            { text: "Lightning strikes only the tallest effigy", emoji: "⚡🗿" }
        ]
    },
    stone: {
        nouns: ["Granite", "Pebble", "Obsidian"],
        features: [
            "Basalt columns rising like ribs",
            "Carved ridges in patterns too regular to be natural",
            "Smooth stepping stones leading nowhere",
            "Huge standing stones with lichen glyphs",
            "Split rocks with heat still inside"
        ],
        mystery: [
            "The stone remembers footsteps",
            "New carvings appear each week",
            "Touching the stone reveals brief, wordless memories",
            "Certain stones hum with warmth"
        ],
        inhabitants: [
            "Stone Golems with forgotten purposes",
            "Dwarfs carving tunnels and chambers",
            "Hermits who speak only to stone",
            "Sentient monoliths who judge silently"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Heavy vibrations shake loose cliffs",
            "Sacred stones punish disrespect",
            "Stone paths vanish in rain",
            "You must follow patterns or risk falling",
            "Ancient puzzle locks carved into rock"
        ],
        effects: [
            "Climbing feels harder than it should",
            "Voices echo unpredictably",
            "Stone draws heat—fires die quickly",
            "Wounds close faster when resting against warm rock"
        ],
        ambience: {
            light: "Sharp reliefs and contrast during day, deep shadow crevices at night",
            sound: "Grinding of shifting stone, deep reverberations"
        },
        weather: [
            { text: "Searing heat bakes the rocks by noon", emoji: "🔥🌞" },
            { text: "Unexpected hail bursts from clear skies", emoji: "☀️🌨️❄️" },
            { text: "Sand and dust whirl between the columns", emoji: "🌬️🏜️" },
            { text: "Stone glistens like wet glass at twilight", emoji: "🌇🪨✨" },
            { text: "Thunderstorms crack and echo like drums", emoji: "🌩️🥁" }
        ]
    },
    storm: {
        nouns: ["Tempest", "Storm", "Thunder"],
        features: [
            "Lightning fields that pulse like a heartbeat",
            "Charged air that makes hair stand",
            "Black clouds that never pass",
            "Shattered trees frozen in burn marks",
            "Cracked statues mid-scream, melted by strikes"
        ],
        mystery: [
            "The storm never moves",
            "No animals live here—but the storm feeds",
            "The clouds form symbols",
            "The thunder answers when spoken to"
        ],
        inhabitants: [
            "Djinni who ride the winds",
            "Storm elementals with unfinished business",
            "Cursed sailors who never left",
            "Lightning-wrought beasts"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Constant lightning strikes the tallest object",
            "Magnetic interference disables navigation",
            "Electrified air sparks wildfires",
            "Water sources become charged",
            "Armor becomes a liability"
        ],
        effects: [
            "Electrical energy lingers in the body",
            "Metal items hum constantly",
            "Spellcasting becomes volatile",
            "Clouds seem to follow the party"
        ],
        ambience: {
            light: "Flashing bursts, constant twilight",
            sound: "Thunder without pause, wind howls like language"
        },
        weather: [
            { text: "Continuous lightning with no rain", emoji: "🌩️⚡" },
            { text: "Rain so hard it bruises", emoji: "🌧️💥" },
            { text: "Hail the size of fists", emoji: "🌨️👊" },
            { text: "Funnel clouds that never touch down", emoji: "🌪️⛅" },
            { text: "Sky glows purple at night", emoji: "🌌🟣" }
        ]
    },
    strategic: {
        nouns: ["Hold", "Post", "Bastion"],
        features: [
            "Crumbling watchtowers with endless sightlines",
            "Sealed bunkers with unknown occupants",
            "Supply caches half-looted",
            "Old signal fires still warm",
            "Abandoned siege engines facing inward"
        ],
        mystery: [
            "Everyone wants control",
            "You’re being watched—by both sides",
            "This place shows up on all maps... but isn’t always here",
            "The last order is still echoing"
        ],
        inhabitants: [
            "An occupying army running drills",
            "Exiled tactician turned warlord",
            "Mercenaries with divided loyalty",
            "Living maps made flesh"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Patrols demand allegiance or tolls",
            "Old traps and mines remain active",
            "Skirmishes break out unpredictably",
            "Spies try to recruit you",
            "Lines of control shift daily"
        ],
        effects: [
            "You gain brief glimpses of battles past",
            "Weapons here never rust",
            "Armor seems lighter but creaks loudly",
            "Dreams contain strategy diagrams"
        ],
        ambience: {
            light: "Harsh noon glare or torchlit ruins",
            sound: "Marching boots, flag flaps, distant orders yelled"
        },
        weather: [
            { text: "Thick fog perfect for ambushes", emoji: "🌫️🗡️" },
            { text: "Winds carry voices too far", emoji: "🌬️🗣️" },
            { text: "Rain makes movement treacherous", emoji: "🌧️⚠️" },
            { text: "Clear skies draw aerial scouts", emoji: "☀️🦅" },
            { text: "Sudden storms shroud entire hills", emoji: "🌩️🌄" }
        ]
    },
    supernatural: {
        nouns: ["Specter", "Witch", "Charm"],
        features: [
            "Ghost lights flickering without flame",
            "Hexed circles etched into trees and stone",
            "Sigils glowing only to the cursed",
            "Floating idols that rearrange overnight",
            "Creaking altars that move when no one looks"
        ],
        mystery: [
            "It rejects reason",
            "Prayers to any god are answered—but only with riddles",
            "Curses manifest in real time",
            "Spells take on personalities"
        ],
        inhabitants: [
            "Witches' Coven of conflicting intent",
            "Werewolves bound by arcane law",
            "Necromancer obsessed with balance",
            "Children who age backward"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Spells mutate when cast",
            "Items develop personalities",
            "Hexes spread like disease",
            "Ghosts offer bad advice unless bargained with",
            "Sacred ground constantly moves"
        ],
        effects: [
            "The island marks visitors with a glow only spirits can see",
            "Lies manifest as physical tokens",
            "Nightmares become rumors in town",
            "Reality shimmers at emotional peaks"
        ],
        ambience: {
            light: "Shifting twilight, never truly day or night",
            sound: "Whispers, moans, and laughter from unseen places"
        },
        weather: [
            { text: "Dead calm but freezing cold", emoji: "🥶🌬️" },
            { text: "Purple lightning with no storm", emoji: "⚡🟣" },
            { text: "Eerie fog that trails behind you", emoji: "🌫️👣" },
            { text: "Rain that only falls on certain people", emoji: "🌧️🧍" },
            { text: "Sunlight dims inexplicably at midday", emoji: "🌞🔅" }
        ]
    },
    swamp: {
        nouns: ["Mire", "Bog", "Quagmire"],
        features: [
            "Sinking trail between gnarled trees",
            "Rotting reeds that hiss when touched",
            "Moss-covered statues half-submerged",
            "Bridges of living roots that breathe",
            "Stagnant pools reflecting strange skies"
        ],
        mystery: [
            "Things bubble up",
            "The swamp expands at night",
            "Something ancient sleeps beneath",
            "Echoes carry answers not your own"
        ],
        inhabitants: [
            "Hags",
            "Swampbound shamblers",
            "Talking frogs with one eye each",
            "Boglights that lure the unwise"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Every step sinks",
            "Diseased insects swarm by the thousands",
            "Swamp gases cause hallucinations",
            "Paths vanish under rising ooze",
            "Rotting roots grab at ankles"
        ],
        effects: [
            "Speech echoes back altered",
            "Water tastes of memory",
            "Resting causes vivid, prophetic dreams",
            "Insects whisper secrets when crushed"
        ],
        ambience: {
            light: "Dim and filtered through twisted canopy",
            sound: "Croaks, buzzes, and distant splashes without source"
        },
        weather: [
            { text: "Heavy, muggy air sticks to skin", emoji: "🌫️💧" },
            { text: "Warm rain falls in bursts", emoji: "🌦️🌡️" },
            { text: "Fog rolls in suddenly, clinging to low ground", emoji: "🌁🌫️" },
            { text: "Sporadic lightning, no thunder", emoji: "⚡🤫" },
            { text: "Air smells of iron and rot", emoji: "🧪🦠" }
        ]
    },
    tidal: {
        nouns: ["Tide", "Pull", "Lagoon"],
        features: [
            "Flooded paths that vanish at night",
            "Tide-locked caves revealed at low moon",
            "Barnacle-covered ruins",
            "Singing shells embedded in cliff walls",
            "Whirlpools that spin without current"
        ],
        mystery: [
            "Reveals secrets at dusk",
            "The tide delivers odd things",
            "The tide delivers old things",
            "Each tide brings a different creature ashore"
        ],
        inhabitants: [
            "Merfolk",
            "Hermits who only speak during ebb tide",
            "Crabs that hoard artifacts",
            "Sea-priests who chant to the moon"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Sudden tides strand explorers",
            "Sea caves fill rapidly and trap the unwary",
            "Water-logged gear attracts predatory fish",
            "Coral blades cut feet and poison slowly",
            "Maps change daily"
        ],
        effects: [
            "Items pulled from the sea carry memories",
            "Salt clings to the skin, regardless of wash",
            "Dreams sync to the tides",
            "Footsteps echo like surf"
        ],
        ambience: {
            light: "Silver moonlight reflected in still pools",
            sound: "Endless crashing of unseen waves"
        },
        weather: [
            { text: "Thick fog rolls in with the tide", emoji: "🌫️🌊" },
            { text: "Sudden rain that only falls inland", emoji: "🌧️🏝️" },
            { text: "Calm, windless dusk that smells of brine", emoji: "🌅🧂" },
            { text: "Shimmering heat waves over wet sand", emoji: "♨️🏖️" },
            { text: "Whispers rise with the waves", emoji: "🌊🗣️" }
        ]
    },
    tropical: {
        nouns: ["Coconut", "Breeze", "Frond"],
        features: [
            "Swaying palms that move against the wind",
            "Vibrant birds in impossible colours",
            "Crystal-clear lagoons hiding ancient bones",
            "Fruit that sings when plucked",
            "Sand that glows faintly under moonlight"
        ],
        mystery: [
            "The island is too perfect",
            "It never storms, yet plants grow unnaturally fast",
            "The island resets each morning",
            "Everything smells faintly of honey"
        ],
        inhabitants: [
            "Spectacular bird people, who resemble human-sized birds of paradise",
            "Eternal vacationers unaware of time",
            "A cheerful cook who hasn’t aged in 50 years",
            "Monkeys who mimic speech perfectly"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Overripe fruit attracts giant wasps",
            "Sunburn happens in minutes",
            "Lush growth conceals sharp drops",
            "Night brings eerie silence",
            "Mosquitoes carry curious ailments"
        ],
        effects: [
            "Prolonged stay makes it hard to leave",
            "Scent of the flowers dulls worry",
            "Wounds heal unnaturally fast—but leave no scars",
            "Naps induce vivid memories of strangers"
        ],
        ambience: {
            light: "Golden sunshine that never burns away the dew",
            sound: "Rustling palms and playful chirping at all hours"
        },
        weather: [
            { text: "Perfect blue skies, regardless of forecast", emoji: "☀️🔵" },
            { text: "Sunshowers that shimmer with rainbow light", emoji: "🌦️🌈" },
            { text: "Dew-heavy mornings, crisp and fragrant", emoji: "🌿💧" },
            { text: "Sea breeze always just strong enough to cool", emoji: "🌊🍃" },
            { text: "Rain clouds build—but never burst", emoji: "🌥️⏳" }
        ]
    },
    twilight: {
        nouns: ["Dusk", "Shade", "Gloam"],
        features: [
            "Permanent half-light that casts no shadows",
            "Long shadows that move on their own",
            "Sky a frozen swirl of purples and grey",
            "Flowers that only bloom in starlight",
            "Animals with glowing eyes but no pupils"
        ],
        mystery: [
            "The sun never rises",
            "The moon flickers but casts no light",
            "Everything glows, but from within",
            "The stars are wrong here"
        ],
        inhabitants: [
            "Little People",
            "Nocturnals with elongated limbs",
            "Twilight spirits who hum lullabies",
            "An astronomer with no voice"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Time feels slowed and confusing",
            "Long shadows disorient navigation",
            "Plants whisper your name as you pass",
            "Light sources flicker or extinguish",
            "Dreams sync to star movement"
        ],
        effects: [
            "Perception of distance distorts",
            "Reflections lag behind movements",
            "Eyes take on faint gleam",
            "Sleep cycles become inverted"
        ],
        ambience: {
            light: "Dim and blue-purple, shadows long and oddly angled",
            sound: "Wind sounds like distant sighing, night creatures call with echoing tones"
        },
        weather: [
            { text: "Constant gloam, never full dark nor light", emoji: "🌒🌫️" },
            { text: "Light mist that refracts into rainbows", emoji: "🌫️🌈" },
            { text: "Chill air regardless of season", emoji: "❄️🌀" },
            { text: "Dew collects even on skin", emoji: "💧🖐️" },
            { text: "Silent lightning flashes behind clouds", emoji: "🌩️☁️🤫" }
        ]
    },
    unnerving: {
        nouns: ["Gaze", "Watch", "Still"],
        features: [
            "Too-quiet zones where birds won't sing",
            "Eerie symmetry in natural formations",
            "Footprints that don't match your steps",
            "Identical houses with different interiors",
            "Faces that repeat across people"
        ],
        mystery: [
            "Something is off—but what?",
            "Everyone smiles—but no one laughs",
            "You remember things that didn’t happen",
            "The island is watching"
        ],
        inhabitants: [
            "A town where all the people seem normal but something is not quite right",
            "Children who mimic perfectly",
            "Caretakers who ask the same question every hour",
            "Themselves—until proven otherwise"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Events repeat in short loops",
            "Maps rearrange subtly when unread",
            "Every person has the same voice",
            "You encounter yourself",
            "Mirrors never reflect correctly"
        ],
        effects: [
            "Mild paranoia that builds over time",
            "Unexplained déjà vu",
            "Party members’ thoughts overlap",
            "Names slip from memory"
        ],
        ambience: {
            light: "Evenly lit but with no source",
            sound: "Clock ticks with no clocks present"
        },
        weather: [
            { text: "Always 21°C, no matter the season", emoji: "🌡️🕰️" },
            { text: "Fog that only appears behind you", emoji: "🌫️👣" },
            { text: "Rain that falls upward", emoji: "🌧️⬆️" },
            { text: "No wind—but trees move", emoji: "🌳❓" },
            { text: "Thunder without lightning", emoji: "🌩️❌⚡" }
        ]
    },
    unstable: {
        nouns: ["Shift", "Fracture", "Flux"],
        features: [
            "Trembling paths that crack underfoot",
            "Frequent landslides reshaping terrain",
            "Spontaneous sinkholes",
            "Floating debris caught in stutters",
            "Seams in the ground that pulse like veins"
        ],
        mystery: [
            "The land rearranges itself",
            "Buildings change location overnight",
            "The island isn’t where the map says",
            "Gravity shifts without warning"
        ],
        inhabitants: [
            "Survivors living on the 'safe spots'",
            "Wanderers lost in time loops",
            "Constructs designed to stabilize terrain",
            "An engineer trying to stop the collapse"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Earthquakes occur every few hours",
            "Magnetic fields scramble direction",
            "Fire doesn't burn the same place twice",
            "Structures disassemble on their own",
            "Gravity pockets send objects skyward"
        ],
        effects: [
            "Compass spins constantly",
            "Voices lag behind speech",
            "Rocks hover momentarily before falling",
            "Spells fizzle or misfire"
        ],
        ambience: {
            light: "Strobe-like flashes during shifts",
            sound: "Deep groaning earth, distant booming rumbles"
        },
        weather: [
            { text: "Sudden windbursts knock travelers off-balance", emoji: "💨🌀" },
            { text: "Rain falls in geometric patches", emoji: "🌧️" },
            { text: "Hail changes size mid-air", emoji: "🌨️" },
            { text: "Sky flickers like lightning but with no storm", emoji: "⚡🌌" },
            { text: "Sunlight stutters", emoji: "🌞" }
        ]
    },
    volcanic: {
        nouns: ["Flame", "Ash", "Magma"],
        features: [
            "Lava tubes snaking beneath crusted rock",
            "Ash fields that shift with the wind",
            "Glowing vents that hum with pressure",
            "Obsidian spires etched with runes",
            "Rivers of magma that halt at your feet"
        ],
        mystery: [
            "The volcano sings",
            "Ash clouds whisper in unison",
            "New rock forms overnight",
            "Something sleeps deep beneath the caldera"
        ],
        inhabitants: [
            "Fire Dryad",
            "Magma elementals",
            "Ash spirits dancing on the slopes",
            "Stone-skinned hermits immune to heat"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Eruptions occur without warning",
            "Toxic fumes cloud the air",
            "The ground trembles constantly",
            "Lava flows block escape routes",
            "Equipment overheats rapidly"
        ],
        effects: [
            "Air shimmers even in shadow",
            "Voice echoes come back warped",
            "Footprints glow briefly in the ash",
            "Metal grows hot in your pack"
        ],
        ambience: {
            light: "Orange-red glow pulses across the land",
            sound: "Crackling embers, subterranean rumbling, and hissing steam"
        },
        weather: [
            { text: "Ashfall like snow", emoji: "🌋❄️" },
            { text: "Scorching dry winds from fissures", emoji: "🔥🌬️" },
            { text: "Sulfur-scented fog clings to low ground", emoji: "🌫️🧪" },
            { text: "Heat haze distorts vision at all distances", emoji: "♨️👓" },
            { text: "Brief bursts of fire rain—short and intense", emoji: "🔥🌧️" }
        ]
    },
    wet: {
        nouns: ["Drip", "Moss", "Slick"],
        features: [
            "Constant drizzle that never seems to fall",
            "Soggy earth swallowing boots",
            "Lichen-covered rocks that squelch when touched",
            "Pools that ripple without cause",
            "Waterlogged ruins where stone has softened"
        ],
        mystery: [
            "The water never recedes",
            "You’re never quite dry",
            "You hear footsteps in puddles—but see no one",
            "Water flows uphill when unobserved"
        ],
        inhabitants: [
            "Sentient Oozes",
            "Amphibious wanderers",
            "Mossfolk who sing in tones",
            "Drowned ghosts reliving final moments"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Slippery footing causes frequent falls",
            "Cold damp infects supplies",
            "Flesh-prickling mildew grows overnight",
            "Maps dissolve at the edges",
            "Fires refuse to light"
        ],
        effects: [
            "Sounds become muffled and distant",
            "Metal rusts visibly during rest",
            "Vision blurs at the edge from condensation",
            "Boots never quite dry"
        ],
        ambience: {
            light: "Gloomy greys and perpetual damp twilight",
            sound: "Dripping, squelching, and long echoing groans"
        },
        weather: [
            { text: "Endless soft drizzle", emoji: "🌦️" },
            { text: "Heavy mist that hovers just above the ground", emoji: "🌫️" },
            { text: "Downpours that begin and end with no warning", emoji: "🌧️" },
            { text: "Pockets of warmer rain like breath", emoji: "💧" },
            { text: "Thunder heard faintly, though no storm is seen", emoji: "⛈️" }
        ]
    },
    weird: {
        nouns: ["Oddity", "Riddle", "Anomaly"],
        features: [
            "Unidentifiable objects embedded in stone",
            "Structures that seem rotated out of phase",
            "Pools of light that don’t illuminate",
            "Floating rocks that hum at touch",
            "Gravity-defying vines crawling toward the sky"
        ],
        mystery: [
            "You feel like you've been here before",
            "Events happen in reverse sometimes",
            "You blink and something is different",
            "It was watching until you noticed"
        ],
        inhabitants: [
            "Creatures made of folded space",
            "Mimics that pretend to be whole buildings",
            "Whispering pillars that follow no language",
            "An old man who insists he's from tomorrow"
        ],
        treasure: ["curiosity"],
        challenges: [
            "Physics do not behave consistently",
            "Your gear occasionally rearranges itself",
            "Speech distorts in the air",
            "One party member sees a different sky",
            "The island appears different on the way back"
        ],
        effects: [
            "Your reflection shows another path",
            "Inexplicable déjà vu at every turn",
            "Time feels like it stretches thin",
            "Compass needles orbit erratically"
        ],
        ambience: {
            light: "Flickers like it’s being watched",
            sound: "Distorted echoes and intermittent silence where there should be noise"
        },
        weather: [
            { text: "Rain that falls sideways", emoji: "🌬️🌧️" },
            { text: "Clouds rotate in squares", emoji: "☁️🔄" },
            { text: "Lightning arcs in reverse", emoji: "⚡🔁" },
            { text: "Shadows stretch the wrong way", emoji: "🌑🌀" },
            { text: "Temperature flickers warm to cold with every step", emoji: "🔥❄️" }
        ]
    }
};

export const islandSizes = ["Tiny (1-2 miles)", "Small (3-5 miles)", "Medium (6-10 miles)", "Large (11-20 miles)", "Massive (20+ miles)"];
export const islandShapes = ["Circular", "Crescent", "Star-shaped", "Irregular", "Long and narrow", "Broken archipelago"];
export const factions = [
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

export const treasuresByType = {
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
        },
        {
            name: "Pearled Offering Basin",
            description: "A ceremonial bowl filled with polished pearls and broken jewelry.",
            rarity: "Rare",
            value: { gold: 60, silver: 55, copper: 20 },
            type: "hoard"
        },
        {
            name: "Kraken’s Teeth Tribute",
            description: "A pile of curved gold-plated teeth, once used to bribe a sea god.",
            rarity: "Rare",
            value: { gold: 75, silver: 20, copper: 5 },
            type: "hoard"
        },
        {
            name: "Vault of the Coral Bankers",
            description: "A waterlogged coffer holding coral-encrusted bars of silver and copper beads.",
            rarity: "Uncommon",
            value: { gold: 18, silver: 100, copper: 200 },
            type: "hoard"
        },
        {
            name: "Sunken Noble’s Purse",
            description: "Jewelled rings, wax-sealed promissory notes, and a few aged golden coins.",
            rarity: "Rare",
            value: { gold: 95, silver: 10, copper: 10 },
            type: "hoard"
        },
        {
            name: "Rogue Alchemist's Drawers",
            description: "A lockbox with coin-pouches tangled among scroll tubes and powdered dyes.",
            rarity: "Uncommon",
            value: { gold: 30, silver: 40, copper: 80 },
            type: "hoard"
        },
        {
            name: "Sandswept Caravan Cache",
            description: "Coins, spices, and glass beads buried beneath the ruins of a desert outpost.",
            rarity: "Uncommon",
            value: { gold: 22, silver: 75, copper: 50 },
            type: "hoard"
        },
        {
            name: "Tidevault Tribute",
            description: "Coins minted with squid sigils, stored in brine-tight amphorae.",
            rarity: "Rare",
            value: { gold: 70, silver: 45, copper: 15 },
            type: "hoard"
        },
        {
            name: "Captain’s Final Share",
            description: "A sealed strongbox beneath the captain’s floorboards, never claimed.",
            rarity: "Uncommon",
            value: { gold: 40, silver: 60, copper: 90 },
            type: "hoard"
        },
        {
            name: "Shrinekeeper’s Vault",
            description: "Donations mixed with relic fragments and worn ceremonial beads.",
            rarity: "Uncommon",
            value: { gold: 35, silver: 50, copper: 70 },
            type: "hoard"
        },
        {
            name: "Trade Guild Overrun Stockpile",
            description: "Crates from a looted trade outpost, stacked with coin-rolls and tally sticks.",
            rarity: "Common",
            value: { gold: 10, silver: 80, copper: 100 },
            type: "hoard"
        },
        {
            name: "Sealed Reliquary Trove",
            description: "A heavy stone coffer with unknown religious symbols and mixed coinage inside.",
            rarity: "Rare",
            value: { gold: 85, silver: 60, copper: 20 },
            type: "hoard"
        },
        {
            name: "The Usurer’s Boneyard",
            description: "A shallow grave surrounded by bags of IOUs, gems, and unclaimed collateral.",
            rarity: "Rare",
            value: { gold: 95, silver: 25, copper: 50 },
            type: "hoard"
        },
        {
            name: "Barbaric Plunderpile",
            description: "Assorted loot from raids, mismatched currency, fetishes, and scrimshaw tokens.",
            rarity: "Uncommon",
            value: { gold: 20, silver: 65, copper: 95 },
            type: "hoard"
        },
        {
            name: "Flooded Catacomb Offering",
            description: "Scattered treasure from submerged tombs—mostly copper and silver, with a few gold teeth.",
            rarity: "Common",
            value: { gold: 8, silver: 45, copper: 130 },
            type: "hoard"
        },
        {
            name: "Vault of the Eel Kings",
            description: "Slippery, slimed chests containing shining, serpentine coinage.",
            rarity: "Very Rare",
            value: { gold: 140, silver: 75, copper: 0 },
            type: "hoard"
        },
        {
            name: "The Betrayer’s Buried Gold",
            description: "A hoard hidden in panic—still booby, trapped, but untouched for decades.",
            rarity: "Rare",
            value: { gold: 110, silver: 25, copper: 10 },
            type: "hoard"
        },
        {
            name: "Ancient Astronomer's Fund",
            description: "Finely minted coins stored with star charts and faded ledgers of celestial predictions.",
            rarity: "Uncommon",
            value: { gold: 45, silver: 55, copper: 60 },
            type: "hoard"
        },
        {
            name: "The Salt-God’s Spoils",
            description: "A sacred mound of valuables, buried beneath salt-crusted bones and coral charms.",
            rarity: "Legendary",
            value: { gold: 300, silver: 100, copper: 50 },
            type: "hoard"
        }
    ],
    gem: [
        {
            name: "Siren’s Tear",
            description: "A pale blue gem that seems to shimmer with inner sadness.",
            rarity: "Rare",
            value: { gold: 90, silver: 10, copper: 0 },
            type: "gem"
        },
        {
            name: "Volcanite Opal",
            description: "Glows with shifting reds and golds, warm to the touch.",
            rarity: "Uncommon",
            value: { gold: 60, silver: 20, copper: 15 },
            type: "gem"
        },
        {
            name: "Starfire Emerald",
            description: "A deep green gem flecked with tiny specks like constellations.",
            rarity: "Very Rare",
            value: { gold: 140, silver: 5, copper: 0 },
            type: "gem"
        },
        {
            name: "Moonlit Garnet",
            description: "Dark red with a silver glow when seen under starlight.",
            rarity: "Uncommon",
            value: { gold: 55, silver: 25, copper: 20 },
            type: "gem"
        },
        {
            name: "Whaleglass Pearl",
            description: "A rare iridescent pearl said to form in the heart of dead leviathans.",
            rarity: "Legendary",
            value: { gold: 300, silver: 0, copper: 0 },
            type: "gem"
        },
        {
            name: "Coral Sapphire",
            description: "Rough-cut pink-blue gem found only in drowned reef temples.",
            rarity: "Rare",
            value: { gold: 85, silver: 35, copper: 10 },
            type: "gem"
        },
        {
            name: "Glowstone Chip",
            description: "Tiny but radiant, it emits a faint glow in darkness.",
            rarity: "Uncommon",
            value: { gold: 25, silver: 20, copper: 40 },
            type: "gem"
        },
        {
            name: "Deepsea Topaz",
            description: "Dark blue with flashes of light inside like plankton bloom.",
            rarity: "Rare",
            value: { gold: 100, silver: 10, copper: 5 },
            type: "gem"
        },
        {
            name: "Blight Amethyst",
            description: "A twisted purple gem that is always slightly cold to the touch.",
            rarity: "Rare",
            value: { gold: 70, silver: 15, copper: 30 },
            type: "gem"
        },
        {
            name: "Mariner’s Diamond",
            description: "Clear and sharp as sea-ice, it hums faintly near water.",
            rarity: "Very Rare",
            value: { gold: 150, silver: 10, copper: 0 },
            type: "gem"
        },
        {
            name: "Ghost Opal",
            description: "Milky and shifting, it appears translucent when held up to a mirror.",
            rarity: "Very Rare",
            value: { gold: 160, silver: 0, copper: 5 },
            type: "gem"
        },
        {
            name: "Blood Coral Shard",
            description: "Crimson and jagged, harvested from cursed reefs.",
            rarity: "Uncommon",
            value: { gold: 45, silver: 30, copper: 15 },
            type: "gem"
        },
        {
            name: "Seer's Quartz",
            description: "A cloudy gem that reveals faint reflections of other people’s faces.",
            rarity: "Rare",
            value: { gold: 95, silver: 20, copper: 0 },
            type: "gem"
        },
        {
            name: "Windglass Sliver",
            description: "So clear it's nearly invisible—rumored to be from the eye of a sky giant.",
            rarity: "Very Rare",
            value: { gold: 130, silver: 10, copper: 10 },
            type: "gem"
        },
        {
            name: "Krakenite Shard",
            description: "Black and violet stone that pulses faintly when storms approach.",
            rarity: "Rare",
            value: { gold: 120, silver: 0, copper: 0 },
            type: "gem"
        },
        {
            name: "Sunstone Flare",
            description: "Golden-orange gem that warms slightly at dawn.",
            rarity: "Uncommon",
            value: { gold: 65, silver: 15, copper: 10 },
            type: "gem"
        },
        {
            name: "Mirror Pearl",
            description: "Reflects the viewer's face… aged by decades.",
            rarity: "Very Rare",
            value: { gold: 200, silver: 0, copper: 0 },
            type: "gem"
        },
        {
            name: "Tideborn Ruby",
            description: "Red gem that appears to swirl like a whirlpool when shaken.",
            rarity: "Rare",
            value: { gold: 110, silver: 25, copper: 5 },
            type: "gem"
        },
        {
            name: "Frozen Flame Crystal",
            description: "Blue-white with orange veins, as though fire is trapped in ice.",
            rarity: "Legendary",
            value: { gold: 280, silver: 0, copper: 0 },
            type: "gem"
        },
        {
            name: "Dustfang Citrine",
            description: "Yellow-orange and sharp-edged, mined from the bones of extinct sea serpents.",
            rarity: "Rare",
            value: { gold: 100, silver: 30, copper: 0 },
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
        },
        {
            name: "Anchorheart Blade",
            description: "A sword that grows heavier near betrayal and lighter in storms.",
            rarity: "Very Rare",
            value: { gold: 200, silver: 20, copper: 0 },
            type: "artifact"
        },
        {
            name: "Islewarden Compass",
            description: "Points to the last place its bearer truly belonged.",
            rarity: "Rare",
            value: { gold: 110, silver: 40, copper: 10 },
            type: "artifact"
        },
        {
            name: "Talon of the Sky Leviathan",
            description: "A jagged claw that crackles with silent lightning.",
            rarity: "Very Rare",
            value: { gold: 250, silver: 0, copper: 5 },
            type: "artifact"
        },
        {
            name: "Crown of Barnacle Kings",
            description: "Wearing it grants command over small sea creatures—for a price.",
            rarity: "Legendary",
            value: { gold: 300, silver: 10, copper: 0 },
            type: "artifact"
        },
        {
            name: "Stone of the Sleeping God",
            description: "Glows faintly when placed on holy or cursed ground.",
            rarity: "Rare",
            value: { gold: 120, silver: 20, copper: 0 },
            type: "artifact"
        },
        {
            name: "Veil of Tideshifting",
            description: "A silk veil that lets the wearer walk underwater as long as they don’t speak.",
            rarity: "Very Rare",
            value: { gold: 220, silver: 5, copper: 5 },
            type: "artifact"
        },
        {
            name: "Fang of the Deep Drowned",
            description: "A rusted dagger that never dries. Its wounds take longer to heal.",
            rarity: "Rare",
            value: { gold: 130, silver: 0, copper: 20 },
            type: "artifact"
        },
        {
            name: "The Forgotten Bell",
            description: "Silent to most, but its toll is heard by those doomed to die at sea.",
            rarity: "Very Rare",
            value: { gold: 180, silver: 20, copper: 0 },
            type: "artifact"
        },
        {
            name: "Astrolabe of the Black Wake",
            description: "Charts constellations no longer visible in this world.",
            rarity: "Legendary",
            value: { gold: 350, silver: 0, copper: 0 },
            type: "artifact"
        },
        {
            name: "Graven Coral Idol",
            description: "Once worshipped by deepfolk. Its gaze stirs unease in the soul.",
            rarity: "Rare",
            value: { gold: 95, silver: 45, copper: 30 },
            type: "artifact"
        },
        {
            name: "Mantle of the Stormspeaker",
            description: "Billows in still air. Once per voyage, it calls a storm or calms one.",
            rarity: "Legendary",
            value: { gold: 275, silver: 10, copper: 0 },
            type: "artifact"
        },
        {
            name: "The Eelbone Crown",
            description: "Tightens or loosens with the bearer’s secrets. Whispers secrets in return.",
            rarity: "Very Rare",
            value: { gold: 240, silver: 0, copper: 15 },
            type: "artifact"
        },
        {
            name: "Key to the Isle Below",
            description: "No door has fit it. Yet every year, the key grows warmer.",
            rarity: "Rare",
            value: { gold: 100, silver: 0, copper: 0 },
            type: "artifact"
        },
        {
            name: "Lantern of the Drowned Guide",
            description: "Its light reveals footprints of the recently drowned.",
            rarity: "Very Rare",
            value: { gold: 210, silver: 25, copper: 0 },
            type: "artifact"
        },
        {
            name: "Tooth of the Worldfish",
            description: "Giant tooth mounted on a chain. Vibrates when buried treasure is nearby.",
            rarity: "Rare",
            value: { gold: 115, silver: 35, copper: 0 },
            type: "artifact"
        },
        {
            name: "Deck of Vanishing Faces",
            description: "A card deck where the faces change after each hand, some face cards mimic real people.",
            rarity: "Very Rare",
            value: { gold: 230, silver: 10, copper: 0 },
            type: "artifact"
        },
        {
            name: "Breastplate of the First Captain",
            description: "Etched with sea charts only visible in moonlight.",
            rarity: "Very Rare",
            value: { gold: 260, silver: 15, copper: 0 },
            type: "artifact"
        },
        {
            name: "The Singing Scar",
            description: "A jagged shard of obsidian that sings softly when near other artifacts.",
            rarity: "Rare",
            value: { gold: 105, silver: 25, copper: 10 },
            type: "artifact"
        }
    ],
    curiosity: [
        {
            name: "Everbubbling Flask",
            description: "A potion bottle that never stops fizzing, its liquid vanishes before it’s drunk.",
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
        },
        {
            name: "Compass of Wandering",
            description: "Points not north, but to a different direction each dawn.",
            rarity: "Uncommon",
            value: { gold: 20, silver: 25, copper: 30 },
            type: "curiosity"
        },
        {
            name: "Jar of Captured Laughter",
            description: "When opened, a child’s giggle echoes for a few seconds.",
            rarity: "Uncommon",
            value: { gold: 15, silver: 10, copper: 40 },
            type: "curiosity"
        },
        {
            name: "Shrunken Mapmaker’s Globe",
            description: "A tiny floating sphere that spins when held over new terrain.",
            rarity: "Rare",
            value: { gold: 45, silver: 20, copper: 15 },
            type: "curiosity"
        },
        {
            name: "Coin That Screams",
            description: "This rusted coin emits a short shriek when flipped.",
            rarity: "Uncommon",
            value: { gold: 5, silver: 10, copper: 60 },
            type: "curiosity"
        },
        {
            name: "Lantern of False Dawn",
            description: "Glows like sunrise for one minute, then extinguishes.",
            rarity: "Uncommon",
            value: { gold: 25, silver: 35, copper: 10 },
            type: "curiosity"
        },
        {
            name: "Crab Shell Harmonica",
            description: "Plays one haunting tune when wet, then refuses to make another sound for a day.",
            rarity: "Uncommon",
            value: { gold: 20, silver: 20, copper: 40 },
            type: "curiosity"
        },
        {
            name: "Inkpot of Forgotten Names",
            description: "Writing with this ink slowly fades every name it records.",
            rarity: "Rare",
            value: { gold: 50, silver: 10, copper: 0 },
            type: "curiosity"
        },
        {
            name: "Mirror of the Next Storm",
            description: "Always fogged with the clouds of the next rain, no matter how far off.",
            rarity: "Rare",
            value: { gold: 60, silver: 15, copper: 5 },
            type: "curiosity"
        },
        {
            name: "Driftwood Puzzle Box",
            description: "Impossible to open until lost at sea, then opens on its own.",
            rarity: "Uncommon",
            value: { gold: 30, silver: 25, copper: 30 },
            type: "curiosity"
        },
        {
            name: "Stone That Whispers 'No'",
            description: "A small rock that quietly mutters 'no' when dangerous questions are asked nearby.",
            rarity: "Uncommon",
            value: { gold: 10, silver: 5, copper: 75 },
            type: "curiosity"
        },
        {
            name: "Feather of the Flightless Phoenix",
            description: "Warm to the touch. Glows faintly during eclipses.",
            rarity: "Rare",
            value: { gold: 55, silver: 30, copper: 5 },
            type: "curiosity"
        },
        {
            name: "Stargazer’s Pebble",
            description: "When placed under the tongue, constellations are visible even underground.",
            rarity: "Rare",
            value: { gold: 70, silver: 0, copper: 0 },
            type: "curiosity"
        },
        {
            name: "Clock with No Hands",
            description: "Ticks exactly once each time a secret is spoken nearby.",
            rarity: "Very Rare",
            value: { gold: 90, silver: 10, copper: 0 },
            type: "curiosity"
        },
        {
            name: "Empty Book of Echoes",
            description: "Contains no writing, but whispers the last sentence spoken in its presence.",
            rarity: "Rare",
            value: { gold: 65, silver: 20, copper: 15 },
            type: "curiosity"
        },
        {
            name: "Shell That Remembers a Voice",
            description: "Repeats a single voice it heard long ago, saying a forgotten phrase.",
            rarity: "Uncommon",
            value: { gold: 20, silver: 10, copper: 50 },
            type: "curiosity"
        },
        {
            name: "Saltstone Dice",
            description: "Always rolls fair, unless thrown during a lie—then crumbles.",
            rarity: "Uncommon",
            value: { gold: 25, silver: 15, copper: 30 },
            type: "curiosity"
        },
        {
            name: "Sealed Message in a Bottle",
            description: "The message changes each day—always addressed to someone who doesn't exist.",
            rarity: "Uncommon",
            value: { gold: 15, silver: 35, copper: 20 },
            type: "curiosity"
        },
        {
            name: "Leviathan’s Tooth Key",
            description: "Massive and clearly a key, but too large for any known lock.",
            rarity: "Rare",
            value: { gold: 80, silver: 5, copper: 10 },
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
        },
        {
            name: "Captain's Deathmask",
            description: "A cast-bronze mask inlaid with tiny gems, worn by a legendary pirate in death.",
            rarity: "Uncommon",
            value: { gold: 50, silver: 15, copper: 10 },
            type: "art"
        },
        {
            name: "Pearl-Inlaid Driftwood Lyre",
            description: "A functional instrument carved from driftwood, its frame traced with mother-of-pearl.",
            rarity: "Rare",
            value: { gold: 70, silver: 40, copper: 20 },
            type: "art"
        },
        {
            name: "Glass Mosaic of the Moonwake",
            description: "A fragile but stunning mosaic depicting the moon reflected across dark waters.",
            rarity: "Very Rare",
            value: { gold: 120, silver: 0, copper: 0 },
            type: "art"
        },
        {
            name: "Bone Cameo of a Forgotten Saint",
            description: "An eerie brooch carved from polished whalebone, the figure’s face worn smooth.",
            rarity: "Uncommon",
            value: { gold: 30, silver: 20, copper: 60 },
            type: "art"
        },
        {
            name: "Stormglass Etching",
            description: "A sheet of smoked glass etched with lightning fractals. Said to hum during storms.",
            rarity: "Rare",
            value: { gold: 60, silver: 45, copper: 0 },
            type: "art"
        },
        {
            name: "Gilded Skull of a Sea Saint",
            description: "A human skull with gold leaf on the crown and delicate carvings along the jaw.",
            rarity: "Rare",
            value: { gold: 90, silver: 10, copper: 0 },
            type: "art"
        },
        {
            name: "Silken Fan of the Court of Shells",
            description: "A delicate fan embroidered with dancing figures wearing coral masks.",
            rarity: "Uncommon",
            value: { gold: 35, silver: 50, copper: 25 },
            type: "art"
        },
        {
            name: "Anchor Chain Rosary",
            description: "An oversized prayer chain made from sea-polished anchor links and glass beads.",
            rarity: "Uncommon",
            value: { gold: 40, silver: 20, copper: 40 },
            type: "art"
        },
        {
            name: "Bloodstone Seal of the Drowned King",
            description: "An ancient wax seal made of dark red stone, engraved with a forgotten crest.",
            rarity: "Rare",
            value: { gold: 75, silver: 5, copper: 10 },
            type: "art"
        },
        {
            name: "Silver Compass Rose",
            description: "An intricately engraved silver disc used in rituals to find ‘true paths.’",
            rarity: "Rare",
            value: { gold: 85, silver: 25, copper: 5 },
            type: "art"
        },
        {
            name: "Weeping Mariner Figurine",
            description: "A clay statue of a sailor with pearl tears that never dry.",
            rarity: "Uncommon",
            value: { gold: 25, silver: 30, copper: 45 },
            type: "art"
        },
        {
            name: "Velvet Painting of the Krakenfall",
            description: "A lurid, textured painting of a kraken being slain by a fleet of floating temples.",
            rarity: "Rare",
            value: { gold: 90, silver: 0, copper: 20 },
            type: "art"
        },
        {
            name: "Caged Light Sculpture",
            description: "A bronze lattice surrounding a trapped mote of bioluminescent algae.",
            rarity: "Very Rare",
            value: { gold: 130, silver: 15, copper: 5 },
            type: "art"
        },
        {
            name: "Songstone Chimes",
            description: "A hanging array of sea-polished stones that ring in strange harmonies.",
            rarity: "Uncommon",
            value: { gold: 30, silver: 60, copper: 30 },
            type: "art"
        },
        {
            name: "Mapskin Scroll",
            description: "An illuminated chart painted on stingray hide, depicting a partially vanished island.",
            rarity: "Rare",
            value: { gold: 100, silver: 10, copper: 0 },
            type: "art"
        },
        {
            name: "Ceremonial Mask of the Coral Court",
            description: "A tall, fluted mask with coral fangs and barnacle inlays.",
            rarity: "Rare",
            value: { gold: 95, silver: 5, copper: 0 },
            type: "art"
        },
        {
            name: "Tideglass Eye",
            description: "A perfectly spherical marble of swirling sea-colors, displayed in a velvet box.",
            rarity: "Uncommon",
            value: { gold: 20, silver: 55, copper: 25 },
            type: "art"
        },
        {
            name: "Sandstone Relief of the First Voyage",
            description: "An eroded wall-carving showing dozens of ships leaving a burning coast.",
            rarity: "Uncommon",
            value: { gold: 45, silver: 15, copper: 60 },
            type: "art"
        }
    ]
};
// Defaults

export const islandNamePrefixes = [
    "Isle of", "The", "Cape", "Bay of", "Mount", "Fort", "Sanctuary of", "Port", "Domain of", "Hollow"
];

export const islandAdjectives = [
    "Burning", "Frozen", "Shattered", "Whispering", "Crimson", "Sapphire", "Eldritch", "Twilight", "Ancient", "Lost", "Hidden", "Black"
];

export const islandNouns = [
    "Skulls", "Voices", "Shadows", "Mirrors", "Bones", "Storms", "Silence", "Fangs", "Ash", "Glass", "Secrets", "Thorns", "Stars"
];

export const defaultFeatures = [
    "Crumbled Ruins",
    "Jagged Cliffs",
    "Towering Monolith",
    "Bioluminescent Flora",
    "Whispering Trees",
    "Hot Springs",
    "Ship Graveyard",
    "Obsidian Spires",
    "Singing Stones",
    "Sunken Temple"
]

export const defaultMysteries = [
    "Island appears on no charts",
    "Locals speak of voices in the mist",
    "Stars shine differently overhead",
    "Time passes strangely on the island",
    "Ghostly lights roam the shores at night",
    "Creatures seem to recognize outsiders",
    "Ruins bear writing no one can translate",
    "Storms avoid the island entirely",
    "Everyone dreams the same dream here",
    "Something watches from beneath the waves"
]


export const defaultChallenges = [
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

export const defaultWeather = [
    { text: "Clear skies", emoji: "☀️" },
    { text: "Partly cloudy", emoji: "⛅" },
    { text: "Light rain", emoji: "🌧️" }
];