//Ejercicio 7 STRETCH PROBLEM


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
        this.grade = array.grade;
        
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


   

var manuel = {name: "manuel_el_estudiante", age: 18, location: "Madrid", previousBackground: "Nada", className: "CS132", favSubjects: ['HTML', 'CSS', 'JS'], grade: 70};
var p3 = new Student(manuel);
