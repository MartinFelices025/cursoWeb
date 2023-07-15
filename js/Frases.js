class Fases{
    constructor(id, frase){
        this.id=id;
        this.frase=frase;
    }

    getId(){
        return this.id;
    }

    
    getFrase(){
        return this.frase;
    }

    setFrase(nueva_frase){
        this.frase=nueva_frase;
    }
}