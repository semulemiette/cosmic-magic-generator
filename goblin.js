const goblinContainer = document.getElementById("app-container");
goblinContainer.innerHTML = `
  <h2>👹 Goblin Name Generator</h2>
  <button onclick="generateGoblinName()">👺 Reveal My Goblin Name</button>
  <div id="goblin-output" style="margin-top:30px; font-size:1.2em;"></div>
`;

const goblinPrefixes = ["Snail", "Mush", "Stink", "Fart", "Crust", "Slime", "Gremlin", "Toad", "Mud", "Glitter"];
const goblinSuffixes = ["knuckle", "wart", "sniffer", "fang", "whisper", "toe", "witch", "gob", "drool", "flick"];
const goblinTitles = [
  "Destroyer of Tea",
  "Biter of Dreams",
  "The Moist",
  "Master of Meh",
  "Soft Chaos",
  "Commander of Crumbs",
  "Lord of Laundry",
  "Apprentice of Naps",
  "Queen of Spaghetti",
  "The Forbidden Vibe"
];

function generateGoblinName() {
  const name = randomFrom(goblinPrefixes) + randomFrom(goblinSuffixes);
  const title = randomFrom(goblinTitles);
  const full = `🟢 ${name}\n👑 ${title}`;
  document.getElementById("goblin-output").innerText = `✨ Your goblin name is:\n\n${full}`;
}

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
