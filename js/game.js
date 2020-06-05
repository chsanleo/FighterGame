let game = {

    choose(fighterID) {
        if (partida.teamPlayer2.length == MAXNUMTEAMFIGHTERS) { return; }
        let fighterChoosedPosition = Number(fighterID) - 1;
        let currentTeam = 2;

        if (partida.teamPlayer1.length == EMPTY || partida.teamPlayer2.length == partida.teamPlayer1.length) {
            partida.teamPlayer1.push(allFighters[fighterChoosedPosition]);

            currentTeam = 1;
            this.changeTextPlayer(currentTeam, 2);

        } else {
            partida.teamPlayer2.push(allFighters[fighterChoosedPosition]);
            this.changeTextPlayer(currentTeam, 1);
        }

        this.disableFighter(fighterID);
        this.updateTeam(currentTeam);

        if (partida.teamPlayer2.length == MAXNUMTEAMFIGHTERS) { this.nextStage(); }
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
        playerChooseText.innerHTML = playerChooseText.outerHTML.replace(oldNumber, newNumber);
    },

    nextStage() {
        if(actualScreen > screens.length){
            this.reset(); 
            return;
        }

        //mostrar elemento
        let screenClassNext = document.getElementById(screens[actualScreen + 1]).getAttribute('class');
        screenClassNext = screenClassNext.replace('screenOff','');
        document.getElementById(screens[actualScreen + 1]).setAttribute('class', screenClassNext);

        //ocultar elemento
        let screenClassActual = document.getElementById(screens[actualScreen]).getAttribute('class');
        screenClassActual += ' screenOff';
        document.getElementById(screens[actualScreen]).setAttribute('class', screenClassActual);

        actualScreen++;

        if(actualScreen == 1){ setTimeout(function(){ game.nextStage(); },5000);
        
        }
    },
    calculateFight(offensiveTeam, defensiveTeam, defensive) {

        defensiveTeam[0].setHit(offensiveTeam[0].getAttack());
        let life = parseInt(defensiveTeam[0].vida);
        if (life < 1) { life = "STOP!"; }
        document.getElementById(`lifeP${defensive}`).innerHTML = life;

        if (!defensiveTeam[0].isAlive()) {
            defensiveTeam.shift();
            this.updateTeam(defensive);
        }
    },

    isFinish(teamList, team) {
        if (teamList.length == 0) {
            document.getElementById("mssgPlayerWin").innerHTML = `PLAYER ${team} WIN`;
            this.nextStage();
        }
    },

    fight() {

        if (partida.teamPlayer1.length == 0 || partida.teamPlayer2.length == 0) { return; }

        this.calculateFight(partida.teamPlayer2, partida.teamPlayer1, 1);
        if (this.isFinish(partida.teamPlayer1, 2)) {return;}

        this.calculateFight(partida.teamPlayer1, partida.teamPlayer2, 2);
        if (this.isFinish(partida.teamPlayer2, 1)) { return; }
    },

    reset(){
        partida.teamPlayer1 = [];
        partida.teamPlayer2 = [];

        //ocultar elemento
        let screenClassActual = document.getElementById(screens[actualScreen]).getAttribute('class');
        screenClassActual += ' screenOff';
        document.getElementById(screens[actualScreen]).setAttribute('class', screenClassActual);

        actualScreen = 0;

        //mostrar elemento
        let screenClassNext = document.getElementById(screens[actualScreen]).getAttribute('class');
        screenClassNext = screenClassNext.replace('screenOff','');
        document.getElementById(screens[actualScreen]).setAttribute('class', screenClassNext);
    }
}