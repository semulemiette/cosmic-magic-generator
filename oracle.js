const oracleContainer = document.getElementById("app-container");
oracleContainer.innerHTML = `
  <h2>🔮 Oracle Extra Totale</h2>
  <input id="question" type="text" placeholder="Pose ta question..." style="width:80%; padding:10px; font-size:1em;">
  <br><br>
  <select id="style">
    <option>Silly</option>
    <option>Mysterious</option>
    <option>Sweet</option>
    <option>Serious</option>
  </select>
  <br><br>
  <button onclick="askOracle()">Recevoir ma réponse</button>
  <div id="oracle-output" style="margin-top:30px; font-size:1.2em;"></div>
`;

const oracleResponses = {
  "Silly": [
    "🍕 If the pizza calls, you must answer.",
    "🛸 Only if you wear mismatched socks.",
    "🐸 The frog knows. Ask him.",
    "🧀 Cheese is always a yes.",
    "🍩 Probably not. Unless there are donuts involved."
  ],
  "Mysterious": [
    "🌌 The stars remain silent... for now.",
    "👁️‍🗨️ You already know the answer.",
    "🪞 Reflections lie. Truth is slippery.",
    "🌙 The moon approves... softly.",
    "⏳ Wait. Then ask again."
  ],
  "Sweet": [
    "💖 Yes, because you deserve magic.",
    "🌸 The universe smiles on you.",
    "🧁 Absolutely. Treat yourself.",
    "🌈 Go for it, softly and bravely.",
    "💫 Trust your heart. It’s wiser than you think."
  ],
  "Serious": [
    "✅ Yes. But take responsibility.",
    "⚠️ No. For real. Don’t.",
    "🤔 Not yet. Wait a bit.",
    "✔️ Yes. You’re ready.",
    "❗ You already made the decision."
  ]
};

function askOracle() {
  const question = document.getElementById("question").value.trim();
  const style = document.getElementById("style").value;
  const output = document.getElementById("oracle-output");

  if (!question) {
    output.textContent = "🙃 Please ask the oracle a question.";
    return;
  }

  const response = oracleResponses[style][Math.floor(Math.random() * oracleResponses[style].length)];
  output.innerHTML = `🔮 Question:<br>${question}<br><br>🪐 Answer:<br>${response}`;
}
