const TOTALFIGHTERS = 9;
const NUMTEAMFIGHTERS = 3;

let allFighters = [];
let allNameFighters = ['Ihesan','Awip','Olusixa','Lixet','Amixer','Oxot','Jaracas','Tohut','Orem'];

let partida = {

    player1: [],
    player2: [],

};

for(let name of allNameFighters){
  allFighters.push(new fighter(name,utils.random(20, 30), utils.random(20, 30), 20))
}


console.log(allFighters);
