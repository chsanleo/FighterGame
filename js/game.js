let game = {

    choose(fighterID) {
        if (partida.teamPlayer2.length == MAXNUMTEAMFIGHTERS){return;}
        let fighterChoosedPosition = Number(fighterID) - 1;

        if (partida.teamPlayer1.length == EMPTY || partida.teamPlayer2.length == partida.teamPlayer1.length) {
            partida.teamPlayer1.push(allFighters[fighterChoosedPosition]);
            
            let currentTeam = 1;
            game.disableFighter(fighterID);
            game.updateTeam(currentTeam);
            game.changeTextPlayer(currentTeam,2);
            return;
        }
        let currentTeam = 2;
        partida.teamPlayer2.push(allFighters[fighterChoosedPosition]);
        game.disableFighter(fighterID);
        game.updateTeam(currentTeam);
        game.changeTextPlayer(currentTeam,1);
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


    }
}