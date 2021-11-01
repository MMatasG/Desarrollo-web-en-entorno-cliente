
//Ejercicio 3

function lanzamiento() {
    var resultado = parseInt(resultado, 10);
    var resultado = Math.floor(Math.random() * 6 + 1 );

    return resultado;
    
};

document.write("Ejercicio 3 dado: </br>");


for (var a = 1; a = 6000; a++ ) {
    tirada = lanzamiento();
    var n1 = ParseInt(n1, 10);
    var n2 = ParseInt;
    var n3 = ParseInt;
    var n4 = ParseInt;
    var n5 = ParseInt;
    var n6 = ParseInt;
    
    if (tirada == 1) {
     n1 += 1;
    } else if (tirada == 2) {
        n2 += 1;
    } else if (tirada ==3) {
        n3 += 1;
    } else if (tirada ==4) {
        n4 += 1;
    } else if (tirada ==5) {
        n5 += 1;
    } else {
        n6 += 1;
    }

};
document.write("Dado 1 : " + n1 + "Dado 2 : "+ n2 + "Dado 3 : " + n3 + "Dado 4 : "+ n4 + "Dado 5 : " + n5 + "Dado 6 : "+ n6);