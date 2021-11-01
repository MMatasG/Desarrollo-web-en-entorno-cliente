//Ejercicio 1
var arr = [];
for (var i=0, t=100; i<t; i++) {
    arr.push(Math.floor(Math.random() * 1001))
}
document.write("Array sin ordenar: ", arr);

var pares = [];
var impares = [];

function ordenar(a) {
if (a%2==0) {
    pares.push(a);
} else {
    impares.push(a);
}}

arr.sort(ordenar);
document.write("</br>Array ordenado:</br> Pares: ", pares, "</br>Impares: ", impares);