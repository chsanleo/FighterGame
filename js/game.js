let game ={

    choose(fighterID){

        let fighterChoosedPosition = fighterID -1;

        if(partida.teamPlayer2.length = partida.teamPlayer1.length){
            partida.teamPlayer1.push(allFighters[fighterChoosedPosition]);
            
            return;
        }

        partida.teamPlayer2.push(allFighters[fighterChoosedPosition]);

        if(partida.teamPlayer2.length == MAXNUMTEAMFIGHTERS){ nextStage();}
    },

    nextStage(){


    }
}