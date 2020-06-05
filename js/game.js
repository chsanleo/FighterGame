let game = {

    choose(fighterID) {
        if (partida.teamPlayer2.length == MAXNUMTEAMFIGHTERS) { return; }
        let fighterChoosedPosition = Number(fighterID) - 1;
        let currentTeam = 2;

        if (partida.teamPlayer1.length == EMPTY || partida.teamPlayer2.length == partida.teamPlayer1.length) {
            partida.teamPlayer1.push(partida.allFighters[fighterChoosedPosition]);

            currentTeam = 1;
            this.changeTextPlayer(currentTeam, 2);

        } else {
            partida.teamPlayer2.push(partida.allFighters[fighterChoosedPosition]);
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
        playerChooseText.innerHTML = playerChooseText.innerHTML.replace(oldNumber, newNumber);
    },

    nextStage() {
        if (actualScreen > screens.length) {
            this.reset();
            return;
        }
        this.showScreen(actualScreen + 1);

        this.hiddenScreen(actualScreen);

        actualScreen++;

        if (actualScreen == 1) {
            setTimeout(function () { game.nextStage(); }, 5000);
        }
    },
    calculateFight(offensiveTeam, defensiveTeam, defensive) {

        defensiveTeam[0].setHit(offensiveTeam[0].getAttack());
        let life = parseInt(defensiveTeam[0].vida);
        if (life < 1) { life = "STOP!"; }
        document.getElementById(`lifeP${defensive}`).innerHTML = life + '/' + defensiveTeam[0].vidaIni;

        if (!defensiveTeam[0].isAlive()) {
            defensiveTeam.shift();
            this.updateTeam(defensive);
        }
    },

    isFinish(teamList, team) {
        if (teamList.length == 0) {
            document.getElementById("mssgPlayerWin").innerHTML = `PLAYER ${team} WIN`;
            setTimeout(function () { game.nextStage(); }, 1000);
            return true;
        }
        return false;
    },

    fight() {

        if (partida.teamPlayer1.length == 0 || partida.teamPlayer2.length == 0) { return; }

        this.calculateFight(partida.teamPlayer2, partida.teamPlayer1, 1);
        if (this.isFinish(partida.teamPlayer1, 2)) { return; }

        this.calculateFight(partida.teamPlayer1, partida.teamPlayer2, 2);
        if (this.isFinish(partida.teamPlayer2, 1)) { return; }
    },

    reset() {
        partida.teamPlayer1.splice(0, partida.teamPlayer1.length);
        partida.teamPlayer2.splice(0, partida.teamPlayer2.length);
        partida.allFighters.splice(0, partida.allFighters.length);

        document.getElementById(`lifeP1`).innerHTML = '';
        document.getElementById(`lifeP2`).innerHTML = '';

        let luchadores = document.getElementById("fighters");
        luchadores.innerHTML = '';
        this.generateFighters();

        this.hiddenScreen(actualScreen);

        actualScreen = 0;
        this.showScreen(actualScreen);

    },

    showScreen(actualScreen) {
        let screenClassNext = document.getElementById(screens[actualScreen]).getAttribute('class');
        screenClassNext = screenClassNext.replace('screenOff', '');
        document.getElementById(screens[actualScreen]).setAttribute('class', screenClassNext);
    },
    hiddenScreen(actualScreen) {
        let screenClassActual = document.getElementById(screens[actualScreen]).getAttribute('class');
        screenClassActual += ' screenOff';
        document.getElementById(screens[actualScreen]).setAttribute('class', screenClassActual);
    },

    generateFighters() {
        let luchadores = document.getElementById("fighters");

        let i = 1;
        for (let name of allNameFighters) {

            fighterT = new fighter(name, utils.random(20, 30), utils.random(10, 20), utils.random(5, 10));

            let luchador = document.createElement("img");

            luchador.setAttribute('src', `img/human${i}.jpg`);
            luchador.setAttribute('class', 'luchador');
            luchador.setAttribute('title', ` Name:${fighterT.nombre} Attack:${fighterT.ataque} Defense:${fighterT.defensa} Lucky:${fighterT.suerte} Life:${fighterT.vida}`);
            luchador.setAttribute('id', `fighter${i}`);
            luchador.setAttribute('onclick', `game.choose(${i})`);

            luchadores.appendChild(luchador)
            partida.allFighters.push(fighterT);
            i++;
        }
    }
}