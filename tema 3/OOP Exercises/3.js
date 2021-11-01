//Ejercicio 3


class Lambdasian {
    constructor(array) {
        this.name = array.name;
        this.age = array.age;
        this.location = array.location;
    }
    speak() {
    
        console.log("Hola mi nombre es " + this.name + "y soy de "+ this.location);
            
    }
    
}

var pepe = {name: "pepe", age: 18, location: "Madrid"};
var p1 = new Lambdasian(pepe);