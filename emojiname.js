const emojiNameContainer = document.getElementById("app-container");
emojiNameContainer.innerHTML = `
  <h2>🌈 Traduis ton prénom (ou mot inventé) en émotions</h2>
  <p>Écris un mot ou un nom :</p>
  <input id="emoji-word" type="text" placeholder="Ex : solorangebleu, ouheu, jules" style="width:70%; padding:10px;">
  <br><br>
  <button onclick="translateWordToEmojis()">Voir les émotions</button>
  <div id="emoji-output" style="margin-top:30px; font-size:1.6em;"></div>
`;

const syllabeEmojis = {
  "br": "🚀", "gl": "💧", "pl": "🫧", "tr": "⛰️", "sn": "🐍", "bl": "🧸", "cr": "⚡", "fl": "🌬️",
  "dr": "🔥", "kl": "🧊", "zo": "🌀", "li": "🌈", "ma": "💖", "no": "🌙", "ti": "✨", "jo": "🕊️",
  "ka": "🔮", "ru": "🎵", "ve": "🧚", "po": "🍵", "la": "🎶", "de": "🧠", "ou": "🫂", "en": "☁️",
  "ra": "🌟", "si": "🔔", "za": "🪐", "ga": "🌱", "fa": "🌸", "ni": "🧘"
};

function translateWordToEmojis() {
  const input = document.getElementById("emoji-word").value.trim().toLowerCase();
  const output = document.getElementById("emoji-output");

  if (!input) {
    output.textContent = "🫥 Ce mot n'a pas encore rêvé. Essaie quelque chose.";
    return;
  }

  const syllabes = splitSyllables(input);
  const emojis = syllabes.map(syl => syllabeEmojis[syl] || "❓");

  output.innerHTML = `<strong>${input}</strong><br>${emojis.join(" ")}`;
}

// Simple syllable splitting (approximative, mais amusante)
function splitSyllables(word) {
  const pattern = /[bcdfghjklmnpqrstvwxyz]?[aeiouy]{1,2}/g;
  const result = word.match(pattern);
  return result || [word];
}
