class Usuario{

    constructor(usuario, pass){
        this.usuario=usuario;
        this.pass=pass;
        this.isAdmin=false;
    }

    getUsuario(){
        return this.usuario;
    }

    getPass(){
        return this.pass;
    }

    getIsAdmin(){
        return this.isAdmin;
    }
   
    setAdmin(activaAdmin){
        if(activaAdmin){
            this.isAdmin=true;
        }
    }
}
