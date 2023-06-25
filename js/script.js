//inicio del flujo. Se pide registro
let usuario="";
let contrasenia="";
let usuarioCreado=false;
let contraseniaCreada=false;
const LONGITUD=8;

let confirmar=confirm("Debe estar registrado para contiunar!\nDesea Registrarse?");
if (confirmar == true) {
    alert("A continuación le pediremos crear un usuario y contraseña");
    usuarioCreado= crearUsuario();
} else {
    redireccionarInicio();
}

if(usuarioCreado){
    contraseniaCreada=crearContrasenia();
}else{
    redireccionarInicio();
}
if(contraseniaCreada){
    alert("El usuario y la contraseña fueron creados exitosamente!")
}else{
    redireccionarInicio();
}

//Valida usuario
function crearUsuario(){
    let validaUsuario=false;
    let continuar=true;
    do {
        if(continuar){
        usuario=prompt("Ingrese un nombre de Usuario. El mismo deberá tener un longitud mínima de 8 caracteres");
        if(usuario==null){
            return false;
        }
        if(!validaVacio(usuario)){
            alert("El Usuario no puede estar en blanco");
            continuar=confirm("Desea volver a intentar?");
        }else if(!validaLongitud(usuario, LONGITUD)){
            alert("El Usuario debe tener 8 caracteres como mínimo");
            continuar=confirm("Desea volver a intentar?");      
        }else{
            validaUsuario=true;
            alert("Usuario creado correctamente: "+usuario);
        }
    }  
    } while (!validaUsuario && continuar);
    return validaUsuario;
}

//Valida contraseña
function crearContrasenia(){
    let validaContrasenia=false;
    let continuar=true;
    do {
        if(continuar){
        contrasenia=prompt("Ingrese una contraseña.\nLa misma deberá tener un longitud mínina de 8 caracteres\ny al menos una letra y un número");
        if(contrasenia==null){
            return false;
        }
        if(!validaVacio(contrasenia)){
            alert("La contraseña no puede estar en blanco");
            continuar=confirm("Desea volver a intentar?");
        }else if(!validaLongitud(contrasenia, LONGITUD)){
            alert("La contraseña debe tener 8 caracteres como mínimo");
            continuar=confirm("Desea volver a intentar?");      
        }else if(!validaAlfanumerico(contrasenia)){
            alert("La contraseña debe ser alfanumérica");
            continuar=confirm("Desea volver a intentar?");
        }else{
            validaContrasenia=true;
            alert("Contraseña creada correctamente: "+contrasenia.substring(0,3)+"*******");
        }
    }  
    } while (!validaContrasenia && continuar);
    return validaContrasenia;
}


function validaVacio(texto){
    if(texto!==""){
        return true;
    }else{
        return false;
    }
}

function validaLongitud(texto, longitud){
    if(texto.length>=longitud){
        return true;
    }else{
        return false;
    }
}

function validaAlfanumerico(texto){
    let letras=0;
    let numeros=0;
    for (let i = 0; i <texto.length; i++) {
        if(isNaN(parseInt(texto.charAt(i)))){
            letras++;
        }else{
            numeros++;
        }
    }
    if(numeros>0 && letras>0){
        return true;
    }else{
        return false;
    }
}

function redireccionarInicio(){
    window.location.href = ".././index.html";
}