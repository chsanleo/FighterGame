class fighter{

    //contructor
    constructor(nombre,ataque,defensa,suerte){
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.suerte = suerte;
        this.vida = utils.random(100,200);

        if(this.vida < 150){ this.ataque += utils.random(10,30); }
    }

    //funciones
    attack(ataqueEnemigo){
        let hit = ataqueEnemigo - this.defensa;
        this.vida -= hit;
    }

    isAlive(){
        if( this.vida < 1){ return false; }
        return true;
    }

}