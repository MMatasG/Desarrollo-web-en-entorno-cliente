//Ejercicio 4


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


class Instructor extends Lambdasian {
    constructor(array) {
        super(array);

        this.specialty = array.specialty;
        this.favLanguage = array.favLanguage;
        this.catchPhrase = array.catchPhrase;
        
    }
    demo(subject) {
        console.log("Today we are learning about " + subject);
    }

    grade(obj,subject) {
        console.log(obj.name + " recieve a perfect score on" + subject);
    }



}

var paco = {name: "paco", age: 18, location: "Madrid", specialty: "redux", favLanguage: "Python", catchPhrase: "BRRR"};
var p2 = new Instructor(paco);
