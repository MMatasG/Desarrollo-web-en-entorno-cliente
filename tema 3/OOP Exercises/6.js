//Ejercicio 6


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

class ProjectManager extends Instructor {
    constructor(array) {
        super(array);
        this.gradClassName = array.gradClassName;
        this.favInstructor = array.favInstructor;
        
    }
    standUp(subject) {
        console.log(this.name + " announces to  " + Student.name + "standy times");
    }

    debugsCode(subject) {
        console.log(this.name + " debugs " + Student.name + "code on" + subject);
    }

}







var jefecito = {name : "jefecito", age : 78, specialty : "no hacer nada" , favLanguage : "español", catchPhrase : "ey", location: "Madrid", gradClassName : "CS1", favInstructor : "Sean"};
var p4 = new ProjectManager(jefecito);
