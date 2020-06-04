let game = {

    choose(fighterID) {
        if (partida.teamPlayer2.length == MAXNUMTEAMFIGHTERS){return;}
        let fighterChoosedPosition = Number(fighterID) - 1;
        let currentTeam = 2;

        if (partida.teamPlayer1.length == EMPTY || partida.teamPlayer2.length == partida.teamPlayer1.length) {
            partida.teamPlayer1.push(allFighters[fighterChoosedPosition]);
            
            currentTeam = 1;
            game.changeTextPlayer(currentTeam,2);

        }else{
            partida.teamPlayer2.push(allFighters[fighterChoosedPosition]);
            game.changeTextPlayer(currentTeam,1);
        }
              
        game.disableFighter(fighterID);
        game.updateTeam(currentTeam);
            
        if (partida.teamPlayer2.length == MAXNUMTEAMFIGHTERS) { nextStage(); }
    },

    disableFighter(fighterID) {
        let fighter = document.getElementById(`fighter${fighterID}`);
        fighter.setAttribute(`onclick`, ``);
        
        let classFighter = fighter.getAttribute('class');
        classFighter += ' disable';
        fighter.setAttribute('class', classFighter);
    },

    updateTeam(team) {
        let player = document.getElementById(`chossedPlayer${team}`);
        player.innerHTML = '';
        let teamList = partida.teamPlayer2;

        if (team == Number(1)) { teamList = partida.teamPlayer1; }

        for (const person of teamList) {
            let luchador = document.createElement('img');
            let indexLuchador = allNameFighters.indexOf(person.nombre) + 1;
            luchador.setAttribute("src", `img/human${indexLuchador}.jpg`);
            luchador.setAttribute("class", "luchador");

            player.appendChild(luchador);
        };
    },

    changeTextPlayer(oldNumber, newNumber) {
        let playerChooseText = document.getElementById('chooseText');
        playerChooseText.innerHTML = playerChooseText.outerHTML.replace(oldNumber,newNumber);
    },

    nextStage() {


    },
    fight(){

        if(partida.teamPlayer1.length == 0 || partida.teamPlayer2.length == 0){return;}

        partida.teamPlayer1[0].setHit(partida.teamPlayer2[0].getAttack());
        document.getElementById("lifeP1").innerHTML= partida.teamPlayer1[0].vida;
console.log(`P1: ${partida.teamPlayer1[0].vida}`);
        partida.teamPlayer2[0].setHit(partida.teamPlayer1[0].getAttack());
        document.getElementById("lifeP2").innerHTML= partida.teamPlayer2[0].vida;
console.log(`P2: ${partida.teamPlayer2[0].vida}`);



        if(!partida.teamPlayer1[0].isAlive()){  
console.log(`Eliminamos al primer jugador P1 ${partida.teamPlayer1[0].nombre}`);
            partida.teamPlayer1.shift();
        }
        if(!partida.teamPlayer2[0].isAlive()){
console.log(`Eliminamos al primer jugador P2 ${partida.teamPlayer2[0].nombre}`);
            partida.teamPlayer2.shift();
        }
        
        if(partida.teamPlayer1.length == 0 && partida.teamPlayer2.length == 0){
            document.getElementById("mssgPlayerWin").innerHTML= '';
console.log(`empate`);
        }
        if(partida.teamPlayer1.length == 0){
            document.getElementById("mssgPlayerWin").innerHTML= 'P2 win';
console.log(`P2 win`);
        }
        if(partida.teamPlayer2.length == 0){
            document.getElementById("mssgPlayerWin").innerHTML= 'P1 win';
 console.log(`P1 win`);
        }
    }

    //resultado
}