
//Ejercicio 2

function lanzamiento() {
    var resultado = Math.floor(Math.random() * 6 + 1 );
    return resultado;
};
document.write("Ejercicio 2 dado:");
document.write(" </br> </br>Dado 6 caras: " + lanzamiento());