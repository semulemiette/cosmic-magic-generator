const dragonContainer = document.getElementById("app-container");
dragonContainer.innerHTML = `
  <h2>🐉 Dragon Name Forge</h2>
  <button onclick="forgeDragonName()">🔥 Forge my dragon name</button>
  <button onclick="createDragonClan()">🐉 Create my Dragon Clan</button>
  <div id="dragon-output" style="margin-top:30px; font-size:1.2em;"></div>
`;

const dragonPrefixes = ["Vyth", "Skar", "Zorn", "Nyx", "Drak", "Ash", "Kael", "Myrr", "Thal", "Zeph"];
const dragonSuffixes = ["arion", "orax", "adrax", "ionis", "gorn", "azar", "anax", "or", "eth", "rax"];
const dragonTitles = [
  "The Flameborn",
  "of the Storm",
  "Voidwalker",
  "The Silent Wing",
  "the Bonekeeper",
  "Ashwing",
  "Skyterror",
  "The Ember Lord",
  "The Unburned",
  "of the Ancient Scale"
];

function forgeDragonName() {
  const name = randomFrom(dragonPrefixes) + randomFrom(dragonSuffixes);
  const title = randomFrom(dragonTitles);
  const full = `💥 ${name} ${title}`;
  document.getElementById("dragon-output").innerText = `✨ Your dragon name is:\n\n${full}`;
}

function createDragonClan() {
  let clan = "🔥 Your dragon clan:\n\n";
  for (let i = 0; i < 5; i++) {
    const name = randomFrom(dragonPrefixes) + randomFrom(dragonSuffixes);
    const title = randomFrom(dragonTitles);
    clan += `🐉 ${name} ${title}\n`;
  }
  document.getElementById("dragon-output").innerText = clan;
}

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
