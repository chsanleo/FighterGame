const TOTALFIGHTERS = 9;
const MAXNUMTEAMFIGHTERS = 3;

let allFighters = [];
let allNameFighters = ['Ihesan','Awip','Olusixa','Lixet','Amixer','Oxot','Jaracas','Tohut','Orem'];

let partida = {

    teamPlayer1: [],
    teamPlayer2: [],

};

let luchadores = document.getElementById("luchadoress");
let i = 1;
for(let name of allNameFighters){
  
  fighterT = new fighter(name,utils.random(20, 30), utils.random(20, 30), 20)

  let luchador = document.createElement("img");

  luchador.setAttribute("src",`img/human${i}.jpg`);
  luchador.setAttribute("class","luchador");
  luchador.setAttribute("title", ` Name: ${fighterT.nombre} Attack: ${fighterT.ataque} Defense: ${fighterT.defensa} Lucky: ${fighterT.suerte}`);
  luchador.setAttribute('value',i);
  luchador.setAttribute('onlick',"");
  luchadores.appendChild(luchador)
  allFighters.push(fighterT);
  i++;
};

console.log(allFighters);








///acciones del juego game.js
//select

//fight