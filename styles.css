:root {
  --bg-color: #c4c6e8;
  --panel-color: #d2b48c;
  --text-color: #2b1b17;
  --accent-color: #4a773c;
  --accent-dark: #2c4c26;
  --border-color: #846c3c;
  --highlight: #ffd700;
  --danger: #b22222;
}

@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=MedievalSharp&display=swap');

body {
  background-color: var(--bg-color);
  font-family: 'MedievalSharp', cursive;
  color: var(--text-color);
  margin: 0;
  padding: 0;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23d2b48c" opacity="0.1"/><path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="%234a773c" stroke-width="1" opacity="0.2"/></svg>');
  background-size: 200px 200px;
}

.container {
  max-width: 800px;
  margin: 2em auto;
  padding: 1.5em;
  background: var(--panel-color);
  border: 4px double var(--border-color);
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
}

header {
  text-align: center;
  margin-bottom: 1.5em;
  position: relative;
}

h1 {
  font-family: 'Press Start 2P', monospace;
  color: var(--accent-dark);
  text-shadow: 2px 2px 0 var(--bg-color);
  font-size: 2.2em;
  margin: 0;
  letter-spacing: 1px;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  margin-bottom: 1.5em;
}

button {
  font-family: 'Press Start 2P', monospace;
  background-color: var(--accent-color);
  color: white;
  border: 3px solid var(--accent-dark);
  padding: 0.8em 1.5em;
  font-size: 0.85em;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 4px var(--accent-dark);
  transition: all 0.2s;
  flex: 1;
  min-width: 150px;
}

button:hover {
  background-color: var(--highlight);
  color: var(--text-color);
  transform: translateY(-2px);
}

button:active {
  box-shadow: none;
  transform: translateY(4px);
}

.danger {
  background-color: var(--danger);
  border-color: #7a1c1c;
  box-shadow: 0 4px #7a1c1c;
}

#settings {
  background: rgba(243, 229, 171, 0.9);
  padding: 1.5em;
  border: 2px dashed var(--border-color);
  border-radius: 8px;
  margin-top: 1em;
  font-size: 0.9em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.8em;

  max-height: 1000px;
  overflow: hidden;
  transition:
    max-height 0.5s ease-in-out,
    padding 0.4s ease-in-out,
    opacity 0.3s ease-in-out;
}



#settings label {
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin: 0.3em 0;
  cursor: pointer;
  padding: 0.3em;
  border-radius: 4px;
  transition: background 0.3s;
}

#settings label:hover {
  background: rgba(210, 180, 140, 0.3);
}

#output {
  display: none;
  /* hide initially */
  margin-top: 2em;
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5em;
  border-radius: 8px;
  border: 2px solid var(--border-color);
  font-size: 1.1em;
  line-height: 1.6;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  opacity: 0;
  /* keep for fade-in effect */
}


.island-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 0.5em;
  margin-bottom: 1em;
}

.island-title {
  font-family: 'Press Start 2P', monospace;
  color: var(--accent-dark);
  margin: 0;
}

.island-id {
  font-size: 0.9em;
  opacity: 0.7;
}

.island-section {
  margin-bottom: 1.2em;
  padding-bottom: 1em;
  border-bottom: 1px dashed var(--border-color);
}

.island-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.section-title {
  color: var(--accent-dark);
  font-weight: bold;
  margin-bottom: 0.5em;
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.section-title::before {
  content: "◆";
  color: var(--accent-color);
}

.feature-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin: 0.5em 0;
}

.feature-tag {
  background: var(--accent-color);
  color: white;
  padding: 0.3em 0.8em;
  border-radius: 20px;
  font-size: 0.9em;
}

footer {
  text-align: center;
  font-size: 0.8em;
  color: var(--accent-dark);
  margin-top: 2em;
  padding: 1em;
  border-top: 2px solid var(--border-color);
}

#settings.collapsed {
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  opacity: 0;
  pointer-events: none;
}


.action-buttons {
  display: flex;
  gap: 1em;
  margin-top: 1.5em;
  justify-content: center;
}

.action-buttons button {
  min-width: 120px;
}

@media (max-width: 600px) {
  .container {
    margin: 1em;
    padding: 1em;
  }

  .controls {
    flex-direction: column;
  }

  h1 {
    font-size: 1.5em;
  }

  #settings {
    grid-template-columns: 1fr;
  }
}

.seed-control {
  margin: 1em 0;
  display: flex;
  gap: 0.5em;
  align-items: center;
}

.seed-control {
  margin-top: 1em;
  padding-top: 1em;
  border-top: 1px dashed var(--border-color);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  align-items: center;
}

.seed-control label {
  font-weight: bold;
}

#seedInput {
  flex: 1;
  min-width: 150px;
  padding: 0.5em;
  font-family: 'MedievalSharp', cursive;
  border: 2px solid var(--border-color);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.7);
}

.seed-display {
  font-size: 0.8em;
  color: var(--accent-dark);
  width: 100%;
  text-align: center;
  margin-top: 0.5em;
}

.treasure-box {
  background: #faf3e0;
  border: 2px solid #d4a373;
  border-radius: 10px;
  padding: 1em;
  margin-top: 0.5em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.treasure-name {
  font-size: 1.4em;
  font-weight: bold;
  color: #7b3f00;
  margin-bottom: 0.2em;
}

.treasure-type {
  font-style: italic;
  color: #555;
  margin-bottom: 0.5em;
}

.treasure-description {
  margin-bottom: 0.5em;
}

.treasure-value {
  font-weight: bold;
  color: #3d3d3d;
}

/* Rarity-based highlights */
.rarity-common {
  border-color: #ccc;
  background: #f8f8f8;
}

.rarity-uncommon {
  border-color: #86af49;
  background: #f0fff0;
}

.rarity-rare {
  border-color: #4682b4;
  background: #f0f8ff;
}

.rarity-legendary {
  border-color: #d2691e;
  background: #fffaf0;
  box-shadow: 0 0 15px gold;
}

.isle-lore {
  background-color: #fdf6e3;
  border: 2px solid #bfa87e;
  padding: 1.5em;
  border-radius: 12px;
  color: #3b2f2f;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 2em auto;
  line-height: 1.6;
}

.isle-lore h2 {
  font-size: 1.8em;
  margin-bottom: 0.6em;
  color: #5e4627;
}


.generator-instructions {
  background-color: #fdf6e3;
  border: 2px solid #bfa87e;
  padding: 1.5em;
  border-radius: 12px;
  color: #3b2f2f;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 2em auto;
  line-height: 1.6;
}

.generator-instructions h3 {
  color: #4a3928;
  margin-bottom: 0.5em;
}

.generator-instructions ol {
  padding-left: 1.5em;
}

.generator-instructions li {
  margin-bottom: 0.6em;
}

.generator-instructions em {
  color: #555;
}
.collapsible {
  background-color: #dcd4b0;
  color: #2e1f12;
  cursor: pointer;
  padding: 12px 18px;
  width: 100%;
  text-align: left;
  border: 1px solid #d3c5a3;
  border-bottom: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-size: 1.1em;
  font-weight: bold;
  box-shadow: 2px 3px 6px rgba(0,0,0,0.1);
  transition: background-color 0.3s ease;
}

.collapsible:hover {
  background-color: #cbb98d;
}

.collapsible-content {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.4s ease;
  background-color: #f9f7ef;
  border: 1px solid #d3c5a3;
  border-top: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0 18px;
  color: #3d3d3d;
  line-height: 1.6;
}


.collapsible-content p {
  margin: 1em 0;
  padding: 0.5em 0;
}
