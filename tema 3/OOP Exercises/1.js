//Ejercicio 1
document.write("Worksheet OOP");

//Task 1
//Write a Person class whose constructor initializes name and age from arguments.


class Persona {
    constructor(n, a) {
        this.name = n;
        this.age = a;
        this.stomach = [];
    }
    eat(ed) {
        
        if (this.stomach.length < 10) {
            console.log("Comiendo... ");
            this.stomach.push(ed);
        } else {
            console.log("No puedo comer :(");
        }
    }
    poop() {
        console.log("Haciendo caca");
        this.stomach = [];
    }
    toString() {
        var nameandage = "";
        nameandage = this.name + " " + this.age;
        console.log("Nombre y edad: ", nameandage);
    }
}

var a1 = new Persona("Paco", 18 );
a1.toString();
a1.eat("Banana");
a1.eat("Banana2");
a1.eat("Banana3");
a1.eat("Banana4");
a1.eat("Banana5");
a1.eat("Banana6");
a1.eat("Banana7");
a1.eat("Banana8");
a1.eat("Banana9");
a1.eat("Banana10");
a1.eat("Banana11");

a1.poop();

