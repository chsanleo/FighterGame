let game ={

    choose(fighterID){

        consolelog("dentro de choose");

        let fighterChoosedPosition = fighterID -1;

        if(partida.teamPlayer2.length = partida.teamPlayer1.length){
            partida.teamPlayer1.push(allFighters[fighterChoosedPosition]);
            updateTeams();
            return;
        }

        partida.teamPlayer2.push(allFighters[fighterChoosedPosition]);

        if(partida.teamPlayer2.length == MAXNUMTEAMFIGHTERS){ nextStage();}
    },

    updateTeams(){

        let player1 = document.getElementById('chossedPlayer1');
        player1.innerHTML ='';
      
        for(let person of teamPlayer1)
        {
          let luchador = document.createElement('img');
          luchador.setAttribute("src",`img/human${i}.jpg`);
          luchador.setAttribute("class","luchador");
          luchador.setAttribute("title", ` Name: ${person.nombre} Attack: ${person.ataque} Defense: ${person.defensa} Lucky: ${person.suerte}`);
          
          player1.appendChild(luchador);
        };
      
        let player2 = document.getElementById('chossedPlayer2');
        player2.innerHTML ='';
      
      },

    nextStage(){


    }
}