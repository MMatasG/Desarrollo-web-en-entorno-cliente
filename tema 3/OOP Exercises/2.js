//Ejercicio 2
document.write("Worksheet OOP");

//Task 2
//Write a Car class whose constructor initializes model and milesPerGallon from arguments.

class Car {
    constructor(m, mil) {
        this.model = m;
        this.milesPerGallon = mil;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(g) {
        this.tank = this.tank + g;
    }

    drive(c) {
        if (this.tank < c || this.tank == 0) {
            console.log("El tanque de gasolina esta vacio, no te mueves");
            console.log("Me he quedado sin combustible a" + this.odometer + "millas");
        } else {
            console.log("Brum Brum");
            this.odometer = this.odometer + 3;
            this.tank = this.tank - 5;
            
        }
        
        
    }
    
}


var ford1 = new Car("Ford fiesta", 20);