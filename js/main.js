const intentos = 3;

let confirmar=confirm("Debe estar registrado para contiunar!\nDesea Ingresar?");
if (confirmar == true) {
    var textoInicio="A continuación le pediremos su usuarios y contraseña\n";
    textoInicio+="(Para ingresar a la versión demo, ingrese: ";
    textoInicio+="usuario1 | pass1)";
    alert(textoInicio);
} else {
    redireccionarInicio();
}

if(ingresar()){
   menuLibros();
}else{
    redireccionarInicio();
}


function ingresar() {
    for (let i = 1; i <= intentos; i++) {
        let usuario_ingresado = prompt("Ingrese su usuario: ");
        if (usuario_ingresado === null) return false;
        let passowrd_ingresado = prompt("Ingrese su password: ");
        if (passowrd_ingresado === null) return false;
        if (usuarioValido(usuario_ingresado, passowrd_ingresado)) {
            alert("Bienvenido nuevamente: " + usuario_ingresado + ".");
            return true;
        }
    }
    alert("Superó los intentos fallidos para iniciar sesión.");
    return false;
}


function usuarioValido(usuario, password) {

    let usuario_registrado_indice = usuarios_registrados.findIndex((user) => user.getUsuario() == usuario);
    if (usuario_registrado_indice === -1) {
        alert("El usuario ingresado no es válido");
        return false;
    }

    console.log(!usuarios_registrados[usuario_registrado_indice].getPass() == password);
    if (usuarios_registrados[usuario_registrado_indice].getPass() !== password) {
        alert("El password es incorrecto");
        return false;
    }

    return true;
}


function redireccionarInicio() {
    window.location.href = ".././index.html";
}

function menuLibros() {
    let continua = true;
    while (continua) {

        let menu = "Bienvenido a nuestra colección! ";
        menu += "\n1) Ver libros por colección ";
        menu += "\n2) Buscar libro por género ";
        menu += "\n3) Frases al azar! ";
        menu += "\n4) Salir ";

        let resp = prompt(menu);

        switch (resp) {

            case "1":
                verLibros();
                break;
            case "2":
                buscarLibro();
                break;
            case "3":
                frasesRandom();
                break;
            case "4":
                alert("Hasta luego, y gracias por el pescado!");
                continua = false;
                break;
            case null:
                alert("Hasta luego, y gracias por el pescado!");
                continua = false;
                break;
            default:
                alert("Debe ingresar una opción del menú");
        }
    }
}

    function verLibros() {

        let texto = "Colecciones en catálogo: "

        texto += "\n Colección: " + coleccionGAG.getSaga();
        texto += "\n Cantidad de obras:  " + coleccionGAG.getCantidad();
        texto += "\n Genero:  " + coleccionGAG.getGenero();
        texto += "\n ----------";
        texto += "\n Obras:";
        coleccionGAG.getLibros().forEach(libro => {
            texto += "\n Id: " + libro.getId() + " | Título: " + libro.getTitulo();
        });
        texto += "\n ----------";
        texto += "\n Colección: " + coleccionDG.getSaga();
        texto += "\n Cantidad de obras:  " + coleccionDG.getCantidad();
        texto += "\n Genero:  " + coleccionDG.getGenero();
        texto += "\n ----------";
        texto += "\n Obras:";
        coleccionDG.getLibros().forEach(libro => {
            texto += "\n Id: " + libro.getId() + " | Título: " + libro.getTitulo();
        });
        alert(texto);
    }

    function buscarLibro() {
        let continua = false;
        let respuesta="";
        do  {
            continua = false;
            var filtro = "";
            var texto = "Seleccione un género:";
            texto += "\n"
            texto += "\n1-Ciencia Ficción";
            texto += "\n2-Policial";
            texto += "\n"
            texto += "\n3-Regresar"
            var filtrar = prompt(texto);

            switch (filtrar) {
                case "1":
                    filtro = "Ciencia ficción";
                    break;
                case "2":
                    filtro = "Policial";
                    break;
                case "3":
                    break;
                    case null:
                    break;
                default:
                    alert("Debe ingresar una opción existente");
                    continua = true;
            }
            
        }while (continua)
        
        if(filtrar!=3){
        const librosFiltrados = (coleccionGAG.getLibros().concat(coleccionDG.getLibros()))
        .filter(lib => lib.getGenero() === filtro);
        
        respuesta="Lo libros del género "+filtro+" son:\n";
            
        for (const libro of librosFiltrados) {
            respuesta+="\n- "+libro.getTitulo();
          }
        alert(respuesta);
    }
}

function frasesRandom(){
    var numero=generarNumeroRandom(frases_random.length);
    alert("Frase N°"+numero+" | "+(frases_random.find(f=> f.id === numero).getFrase()));
}

function generarNumeroRandom(max){
    return Math.floor(Math.random() * max) + 1;
}