const fortuneContainer = document.getElementById("app-container");
fortuneContainer.innerHTML = `
  <h2>🌌 Cosmic Fortune Vibes</h2>
  <p>Choisis ton mood :</p>
  <select id="theme-select">
    <option>Fairy</option>
    <option>Goth</option>
    <option>Space</option>
    <option>Goblin</option>
  </select>
  <br><br>
  <button onclick="getFortune()">🔮 Get My Fortune!</button>
  <div id="fortune-output" style="margin-top:30px; font-size:1.2em;"></div>
`;

const themes = {
  "Fairy": {
    colors: ["blush pink", "lavender", "peach mist"],
    animals: ["butterfly", "tiny deer", "singing bird"],
    snacks: ["rose tea", "sugar clouds", "fairy macarons"]
  },
  "Goth": {
    colors: ["midnight", "blood red", "storm gray"],
    animals: ["raven", "black cat", "bat"],
    snacks: ["dark chocolate", "blackberries", "witch cookies"]
  },
  "Space": {
    colors: ["cosmic blue", "plasma green", "solar gold"],
    animals: ["space lizard", "alien fox", "astro-otter"],
    snacks: ["galactic popcorn", "neon jelly", "cosmo tacos"]
  },
  "Goblin": {
    colors: ["moss green", "mud brown", "slug pink"],
    animals: ["toad", "trash raccoon", "mud crab"],
    snacks: ["swamp chips", "mystery soup", "goblin gummy worms"]
  }
};

function getFortune() {
  const theme = document.getElementById("theme-select").value;
  const selected = themes[theme];
  const color = randomFrom(selected.colors);
  const animal = randomFrom(selected.animals);
  const snack = randomFrom(selected.snacks);

  const message = `🎨 Color: ${color}\n🐾 Animal: ${animal}\n🍪 Snack: ${snack}`;
  document.getElementById("fortune-output").innerText = message;
}

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
