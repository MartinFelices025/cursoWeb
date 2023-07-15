//Se inicializan tres usuarios preregistrados
let usuario1 = new Usuario("usuario1", "pass1");
let usuario2 = new Usuario("usuario2", "pass2");
let usuario3Admin=new Usuario("usuario2", "pass2");
usuario3Admin.setAdmin(true); 

let demasLibro= new Libro(1, "La vida, el universo y todo lo demás", "D. Adams", "Ciencia ficción");
let informeLibro= new Libro(2, "Informe sobre la tierra: Fundamentalmente inofensiva", "D. Adams", "Ciencia ficción");
let pescadoLibro = new Libro(3, "Hasta luego, y gracias por el pescado!", "D. Adams", "Policial");
let guiaAG = new Libro(4, "Guía del Autoestopista galáctico", "D. Adams", "Ciencia ficción");

let coleccionGAG= new Coleccion("Guía del autoestopista", [demasLibro, informeLibro, pescadoLibro, guiaAG], "Ciencia Ficción / Policial");

let agenciaLibro= new Libro(1, "Dirk Gently, agencia de investigaciones holísticas", "D. Adams", "Policial");
let iraLibro= new Libro(2, "Iras celestiales", "D. Adams", "Ciencia ficción");
let salmonLibro = new Libro(3, "El salmón de la duda", "D. Adams", "Policial");

let coleccionDG= new Coleccion("Dirk Gently", [agenciaLibro, iraLibro, salmonLibro], "Policial / Ciencia Ficción");

let frase1= new Fases(1,"Mi universo son mis ojos y mis oídos. Todo lo demás son rumores.");
let frase2= new Fases(2,"El tiempo es una ilusión -dijo-. Y la hora de comer, más todavía.");
let frase3= new Fases(3,"Es un hecho importante y conocido que las cosas no siempre son lo que parecen.");
let frase4= new Fases(4,"Vámonos. Larguémonos de este podrido agujero. Creamos lo increíble. Hagamos lo imposible.");
let frase5= new Fases(5,"Volar es un arte; o más bien un truco. El truco consiste en aprender a tirarse al suelo y fallar.");
let frase6= new Fases(6,"Recordó las últimas palabras del ordenador: 'Lo hecho, hecho está, he llevado a cabo mi cometido'.");
let frase7= new Fases(7,"¿Es que no bastaba ver la belleza de un jardín, sin tener que creer por ello que estaba habitado por las hadas?");
let frase8= new Fases(8,"Sintió que toda su vida era una especie de sueño, preguntándose a quién pertenecería dicho sueño y si lo estaría pasando bien.");
let frase9= new Fases(9,"Y diciendo esto, dieron media vuelta, salieron de la habitación y adoptaron un tren de vida que superó sus sueños más ambiciosos.");
let frase10= new Fases(10,"Es un hecho bien conocido que las personas que más deseos tienen de gobernar a la gente son, ipso facto, las menos adecuadas para ello.");
usuarios_registrados=[usuario1, usuario2, usuario3Admin];
frases_random=[frase1, frase2, frase3, frase4, frase5, frase6, frase7, frase8, frase9, frase10];