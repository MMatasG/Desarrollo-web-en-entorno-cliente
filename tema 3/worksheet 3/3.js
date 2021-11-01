//Ejercicio 5

var array = [
    [34, 21, 32, 41, 25],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23],
  ];


function buscarcelda(array) {
    casillasrecorridas = [];
    elemento1 = array[0][0];
    elemento1string = elemento1.toString();
    document.write("Elemento 1: ", elemento1);
    while (elemento1 != array[elemento1string[0], elemento1string[1]]) {
        /*
        elemento1 = array[0][0];
        elemento1string = elemento1.toString();
        */
       
        var elemento1 = array[(elemento1string[0]), (elemento1string[1])];
        document.write("<br>Elemento recorrido : ", elemento1);
        casillasrecorridas.push(elemento1string);
    }

    return elemento1;

}
buscarcelda(array);


//Elemento 1: 34
//Elemento recorrido : 21,52,33,13,23