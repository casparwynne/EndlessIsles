# 🌊 Endless Isles Generator

Welcome to the Endless Isles — a swashbuckling, procedurally generated island adventure toolkit for tabletop RPGs and fantasy storytelling. This project contains two main tools:

- **Single Island Generator**  
- **Map Generator** with interactive island placement

Explore mysterious islands, strange climates, lost treasures, and the factions fighting over them.

---

## ✨ Features

### 🏝️ Island Generator (`index.html`)
- Generate a single, richly detailed island from a random or custom seed
- Customise output with filters for:
  - Island Type, Size, Weather, Ambience
  - Inhabitants, Mysteries, Factions, Challenges
  - Treasures, Effects, and Features
- Copy or print island results for your campaign notes
- Toggle advanced settings to fine-tune generation
- Includes thematic lore and usage guide

### 🗺️ Map Generator (`map.html`)
- Generate a 9×9, 15×15, or 21×21 grid of islands with a shared world seed
- Interactive grid: click any island to reveal its details
- Customize or regenerate individual island seeds
- Save/load map files as JSON for persistence or sharing

---

## 📁 Project Structure

EndlessIsles/
├── index.html # Single island generator page
├── map.html # Interactive map generator page
├── script.js # Core island generation logic
├── map-script.js # Grid/map handling and interactivity
├── data.js # Static data (tags, factions, names, etc.)
├── styles.css # Fully themed retro-fantasy visual style
└── README.md # This file


---

## 🚀 How to Use

1. Clone or download the repo.
2. Open `index.html` in your browser to start generating individual islands.
3. Open `map.html` to generate an entire map of interconnected islands.
4. Use the "Save Map" button in the map generator to export your campaign layout as a `.json` file.
5. Load a saved map with the "Load Map" option.

> All generation is handled client-side with no server required — just open in any modern browser.

---

## 🔧 Customisation

- All island content (types, climates, treasures, etc.) is editable via `data.js`
- You can adjust appearance by modifying `styles.css`
- Add new tags, factions, or features to shape the tone of your campaign world

---

## 🧭 Lore Hook

> Ten years ago, the Stormwall that lashed the southern seas since time immemorial simply… stopped. In its wake, a vast archipelago emerged—thousands of islands, each stranger than the last.

Dive in. Generate. Discover what the Isles have in store.

---

## 👨‍💻 Created By

**Caspar Wynne**  
*Endless Isles Generator* is an original project blending procedural storytelling with rich worldbuilding.

---

## 📄 License

### Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International** license.

You are free to:
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material

**Under the following terms:**
- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made.
- **NonCommercial** — You may not use the material for commercial purposes.
- **No Additional Restrictions** — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

🔗 [Read the full license](https://creativecommons.org/licenses/by-nc/4.0/)

### 🛑 Commercial Use Prohibited
You **may not** sell, license, or commercially profit from this software or its generated content without explicit permission from the author.

### ✅ Required Attribution
When using or sharing the generator or its output, please credit:

> *Endless Isles Generator by Caspar Wynne*  
> [https://casparwynne.github.io/EndlessIsles/](https://casparwynne.github.io/EndlessIsles/)
