# 🌊 Stormwall Isles

**Mysteries from the Mists, Stories from the Sea**

**Stormwall Isles** is a system-neutral TTRPG setting and suite of browser-based tools for generating mysterious islands and archipelagos. Built for exploration, replayability, and storytelling, it's designed to be used as a campaign foundation or on-the-fly content generator.

---

## 🔧 Features

* 🪙 **Island Generator** — Generate strange and evocative islands with secrets, features, factions, and treasures.
* 🗘️ **Map Generator** — Create entire archipelagos with a central flotilla and clickable islands.
* 🌀 **Seed-Based Generation** — Consistent outputs for the same seed value.
* 🧹 **Modular Settings Panel** — Toggle specific content types (mystery, weather, factions, etc.).
* 📅 **Map Download/Upload** — Save and restore generated maps with JSON.
* 📖 **Integrated Sourcebook** — In-browser lore, tables, factions, and worldbuilding tools.
* 📀 **Fully Client-Side** — No backend, no build step — just HTML, JS, and CSS.

---

## 🌐 Live Demo

**👉 [Try it on GitHub Pages](https://casparwynne.github.io/Stormwall-Isles/)**

---

## 📂 File Overview

| File                   | Purpose                                          |
| ---------------------- | ------------------------------------------------ |
| `index.html`           | Home page with links to all tools                |
| `islandGenerator.html` | Island generator UI                              |
| `mapGenerator.html`    | Full map (grid) generator                        |
| `sourceBook.html`      | In-browser TTRPG sourcebook                      |
| `styles.css`           | Unified styling with responsive layout           |
| `data.js`              | Tags, treasure tables, factions, and descriptors |
| `islandGenerator.js`   | Core logic for single-island generation          |
| `islandRenderer.js`    | Outputs HTML for island detail view              |
| `main-island.js`       | DOM integration for islandGenerator.html         |
| `mapGenerator.js`      | Grid logic for placing multiple islands on a map |
| `main-map.js`          | DOM + map interactivity                          |
| `seedUtils.js`         | Hashing and random number generation             |
| `uiControls.js`        | Toggling, printing, clipboard tools              |
| `_footer.html`         | Shared footer (Ko-fi, license, etc.)             |
| `footer-loader.js`     | Injects `_footer.html` into each page            |

---

## 📜 License

**Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**
Details available in [`license.html`](./license.html)

### ✅ You May:

* Use the tools and content for personal/non-commercial play
* Share or stream games using Stormwall Isles
* Remix or expand on the content (with credit)

### ❌ You May Not:

* Sell Stormwall Isles or derived commercial products
* Remove attribution or claim authorship

---

## ☕ Support

If you enjoy Stormwall Isles, consider buying me a coffee on Ko-fi:

[![Buy Me a Coffee](https://storage.ko-fi.com/cdn/kofi6.png?v=6)](https://ko-fi.com/C0C1BA8H8)

---

## 👤 Credits

Created by **Caspar Wynne**
Website: [stormwallisles.github.io](https://casparwynne.github.io/Stormwall-Isles/)
License: CC BY-NC 4.0
