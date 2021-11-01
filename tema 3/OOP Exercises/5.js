//Ejercicio 5


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




class Student extends Lambdasian {
    constructor(array) {
        super(array);

        this.previousBackground = array.previousBackground;
        this.className = array.className;
        this.favSubjects = array.favSubjects;
        
    }
    listSubjects() {
        console.log("Loving " + this.favSubjects);
    }

    PRAssignment(subject) {
        console.log(this.name + "has submitted a PR for  " + subject);
    }

    sprintChallenge(subject) {
        console.log(this.name + "has begun sprint challenge on  " + subject);
    }





}
   

var manuel = {name: "manuel_el_estudiante", age: 18, location: "Madrid", previousBackground: "Nada", className: "CS132", favSubjects: ['HTML', 'CSS', 'JS']};
var p3 = new Student(manuel);
