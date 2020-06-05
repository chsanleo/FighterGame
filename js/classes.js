class fighter{

    //contructor
    constructor(nombre,ataque,defensa,suerte){
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.suerte = suerte;
        this.vida = utils.random(100,200);
        this.vidaIni = this.vida;

        if(this.vida < 150){ this.ataque += utils.random(10,30); }
    }

    //funciones
    setHit(ataqueEnemigo){
        if(this.defensa > ataqueEnemigo){
            this.vida -=this.suerte;
            return;
        }

        let hit = ataqueEnemigo - this.defensa;
        this.vida -= hit;
    }
    getAttack(){
        let hit = this.suerte/100;
        hit *=this.ataque;
        if(this.vida < 15){ hit += 10; }
        if(this.vida < 3){ hit += 15; }
        return this.ataque + hit;
    }
    isAlive(){
        if( this.vida < 1){ return false; }
        return true;
    }
    reset(){
        this.vida = this.vidaIni;
    }
}