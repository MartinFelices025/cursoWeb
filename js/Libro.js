class Libro{
    constructor(id, titulo, autor, genero){
        this.id=id;
        this.titulo=titulo;
        this.autor=autor;
        this.genero=genero;
    }


    getId(){
        return this.id;
    }

    getTitulo(){
        return this.titulo;
    }

    getAutor(){
        return this.autor;
    }

    getGenero(){
        return this.genero;
    }
    
    setTitulo(nuevo_titulo){
        this.titulo=nuevo_titulo;
    }

    setAutor(nuevo_autor){
        this.autor=nuevo_autor;
    }

    setGenero(nuevo_genero){
        this.genero=nuevo_genero;
    }

}