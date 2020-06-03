let game ={

    choose(fighterID){
        let fighterChoosedPosition = Number(fighterID)-1;

        if(partida.teamPlayer1.length == EMPTY || partida.teamPlayer2.length == partida.teamPlayer1.length){
            partida.teamPlayer1.push(allFighters[fighterChoosedPosition]);

            game.disableFighter(fighterID);   
            game.updateTeam(1);
            return;
        }

        partida.teamPlayer2.push(allFighters[fighterChoosedPosition]);
        game.disableFighter(fighterID);
        game.updateTeam(2);

        if(partida.teamPlayer2.length == MAXNUMTEAMFIGHTERS){ nextStage();}
    },

    disableFighter(fighterID)
    {
        let fighter = document.getElementById(`fighter${fighterID}`);
        fighter.setAttribute(`onclick`,``); 
    },

    updateTeam(team){
        let player = document.getElementById(`chossedPlayer${team}`);
        player.innerHTML ='';
        let teamList = partida.teamPlayer2;

        if(team == Number(1)){teamList = partida.teamPlayer1; }

        for(const person of teamList){
          let luchador = document.createElement('img');
          let indexLuchador = allNameFighters.indexOf(person.nombre) + 1;
          luchador.setAttribute("src",`img/human${indexLuchador}.jpg`);
          luchador.setAttribute("class","luchador");
          //luchador.setAttribute("title", ` Name: ${person.nombre} Attack: ${person.ataque} Defense: ${person.defensa} Lucky: ${person.suerte}`);
          
          player.appendChild(luchador);
        };
      },

    nextStage(){


    }
}