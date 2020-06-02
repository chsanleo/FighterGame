const TOTALFIGHTERS = 9;
const MAXNUMTEAMFIGHTERS = 3;

let allFighters = [];
let allNameFighters = ['Ihesan','Awip','Olusixa','Lixet','Amixer','Oxot','Jaracas','Tohut','Orem'];

let partida = {

    teamPlayer1: [],
    teamPlayer2: [],

};

for(let name of allNameFighters){
  allFighters.push(new fighter(name,utils.random(20, 30), utils.random(20, 30), 20))
}


console.log(allFighters);








///acciones del juego game.js
//select

//fight