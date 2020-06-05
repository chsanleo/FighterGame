const MAXNUMTEAMFIGHTERS = 3;
const EMPTY = 0;

let allNameFighters = ['Marla Singer','Angel Face','Bob','Dectective Stern','Richard Chesler','Thomas','The Mecanic','The Narrator','Tyler Durden'];
let screens = ['init-scrn' , 'loading-scrn' , 'choose-scrn', 'fight-scrn','win-scrn'];
let actualScreen = 0;

let partida = {

    teamPlayer1: [],
    teamPlayer2: [],
    allFighters: [],
};
game.generateFighters();