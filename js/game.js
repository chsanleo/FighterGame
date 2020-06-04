let game = {

    choose(fighterID) {
        if (partida.teamPlayer2.length == MAXNUMTEAMFIGHTERS) { return; }
        let fighterChoosedPosition = Number(fighterID) - 1;
        let currentTeam = 2;

        if (partida.teamPlayer1.length == EMPTY || partida.teamPlayer2.length == partida.teamPlayer1.length) {
            partida.teamPlayer1.push(allFighters[fighterChoosedPosition]);

            currentTeam = 1;
            game.changeTextPlayer(currentTeam, 2);

        } else {
            partida.teamPlayer2.push(allFighters[fighterChoosedPosition]);
            game.changeTextPlayer(currentTeam, 1);
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
        }
    },

    fight() {

        if (partida.teamPlayer1.length == 0 || partida.teamPlayer2.length == 0) { return; }

        this.calculateFight(partida.teamPlayer2, partida.teamPlayer1, 1);
        if (this.isFinish(partida.teamPlayer1, 2)) {
            this.nextStage();
            return;
        }
        this.calculateFight(partida.teamPlayer1, partida.teamPlayer2, 2);
        if (this.isFinish(partida.teamPlayer2, 1)) {
            this.nextStage();
            return;
        }
    }
}