//Ejercicio 1
var items = [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]];
  
document.write(items);

function todo_a_cero(array) {
    array.forEach( (items,i) => array[i] = 0);
    return array;
}

todo_a_cero(items);
document.write("<br> Array a 0: ", items);


function añadir1(array) {
    array.forEach( (items,i) => array[i] = array[i] + 1);
    return array;
}

añadir1(items);
document.write("<br> Array + 1: ", items);


function mostrarconespacios(array) {
    array.forEach((i) => document.write(array[i] + " "));
    
}
document.write("</br> Con espacios: ")
mostrarconespacios(items);
