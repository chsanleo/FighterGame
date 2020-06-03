const MAXNUMTEAMFIGHTERS = 3;
const EMPTY = 0;

let allFighters = [];
let allNameFighters = ['Ihesan','Awip','Olusixa','Lixet','Amixer','Oxot','Jaracas','Tohut','Orem'];

let partida = {

    teamPlayer1: [],
    teamPlayer2: [],

};

let luchadores = document.getElementById("fighters");
let i = 1;
for(let name of allNameFighters){
  
  fighterT = new fighter(name,utils.random(20, 30), utils.random(20, 30), 20)

  let luchador = document.createElement("img");

  luchador.setAttribute('src',`img/human${i}.jpg`);
  luchador.setAttribute('class','luchador');
  luchador.setAttribute('title', ` Name: ${fighterT.nombre} Attack: ${fighterT.ataque} Defense: ${fighterT.defensa} Lucky: ${fighterT.suerte}`);
  luchador.setAttribute('id', `fighter${i}`);
  luchador.setAttribute('onclick',`game.choose(${i})`);

  luchadores.appendChild(luchador)
  allFighters.push(fighterT);
  i++;
};