class Coleccion{
    constructor(saga, libros, genero){
        this.saga=saga;
        this.libros=libros;
        this.genero=genero;
    } 

    getSaga(){        
    return this.saga;
    }

    getLibros(){
        return this.libros;
    }

    getGenero(){
        return this.genero;
    }

    getCantidad(){
        return this.libros.length;
    }

    agregarLibros(libro){
        this.libros.add(libro);
    }

    eliminarLibro(id){
        indice_libro=this.libros.findIndex((lib) => lib.getId() == id)
        libros.splice(indice_libro, 1)
    }
}