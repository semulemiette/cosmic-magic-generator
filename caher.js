const caherContainer = document.getElementById("app-container");
caherContainer.innerHTML = `
  <h2>📝 Générateur de sens à partir de rien</h2>
  <p>Écris un mot inventé :</p>
  <input id="madeup-word" type="text" placeholder="ex : gluphtin, ouheu, solorangebleu" style="width:70%; padding:10px;">
  <br><br>
  <button onclick="generateMeaning()">Définir ce mot</button>
  <div id="meaning-output" style="margin-top:30px; font-size:1.2em;"></div>
`;

const meanings = [
  "Un amour qui n’est pas dit mais présent.",
  "Une joie qui explose doucement dans les épaules.",
  "Un câlin fait avec les yeux.",
  "Le goût exact du silence à 3h du matin.",
  "Ce qu'on ressent juste avant un fou rire sacré.",
  "Une pensée qui brille sans se montrer.",
  "La tendresse qu'on oublie de nommer, mais jamais de sentir.",
  "Une chanson qu'on n’a jamais entendue, mais qui nous manque quand même.",
  "Un moment moelleux dans un coin de l’après-midi.",
  "Ce qu’un chat pense quand il te regarde sans raison.",
  "Une lumière qui sait attendre.",
  "Le contraire d’un oubli douloureux.",
  "La fatigue d’un cœur qui a beaucoup aimé.",
  "La première neige intérieure.",
  "Un poème qu’on ne peut pas écrire mais qu’on ressent quand même.",
  "La forme floue d’une caresse future.",
  "Un rire qu’on garde pour plus tard.",
  "Le bruit que fait la confiance quand elle revient.",
  "Une épice d’enfance oubliée au fond du souvenir.",
  "Le petit vertige quand quelqu’un dit ton prénom doucement.",
  "Une larme qui décide de ne pas tomber.",
  "Le frisson de se reconnaître dans un mot qu’on ne connaît pas.",
  "Une étoile collée sous la langue.",
  "La magie qui se cache derrière les rideaux du quotidien.",
  "Un souvenir pas encore vécu.",
  "Un nom secret qu’on se donne en rêve.",
  "Un éclat de rien qui fait tout vibrer.",
  "La sensation d’être exactement là où on doit être, sans savoir pourquoi.",
  "Le soupir d’un mot qui attendait d’être inventé.",
  "Un rire de planète.",
  "Le moment exact où on se sent assez.",
  "Une étoile filante dans un tiroir à chaussettes.",
  "Un silence partagé entre deux sourires.",
  "Le souffle d’un vieux dragon triste et tendre.",
  "Un toast cosmique trop grillé mais délicieux.",
  "Ce qu’on entend quand on écoute avec le cœur fermé à moitié.",
  "Une lumière née d’un mot raté.",
  "Le bruit de la tendresse qui revient sans prévenir.",
  "Une présence inventée mais essentielle.",
  "Un dessin fait avec un soupir.",
  "Une fhlende oubliée sous un oreiller.",
  "Le cri du calme.",
  "La vérité vue de côté.",
  "Le parfum de quelqu’un qu’on ne connaît pas encore.",
  "Une poussière sacrée tombée d’un câlin cosmique.",
  "Un secret qui ne demande rien.",
  "La réponse à une question qui ne se pose pas.",
  "Un bruit de page qui tourne dans l’âme.",
  "Une pause dans le vent.",
  "Une luciole qui comprend tout, mais dit rien.",
  "Le dernier mot avant de s’endormir, même s’il est inventé."
];

function generateMeaning() {
  const input = document.getElementById("madeup-word").value.trim();
  const output = document.getElementById("meaning-output");

  if (!input) {
    output.textContent = "🌀 Ce mot n’existe pas encore. Et c’est déjà très beau.";
    return;
  }

  const meaning = meanings[Math.floor(Math.random() * meanings.length)];
  output.innerHTML = `« <strong>${input}</strong> » signifie :<br>${meaning}`;
}
