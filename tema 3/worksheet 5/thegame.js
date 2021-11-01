//Ejercicio the game

class Game {
    constructor(jug1, jug2) {
        this.jug1 = jug1;
        this.jug2 = jug2;
        this.tiradajugador1 = 0;
        this.tiradajugador2 = 0;

    }

    tirajug1(){
        this.tiradajugador1 = prompt("Elije 1 - piedra, 2 - papel, 3 - tijera");
        if (this.tiradajugador1 == "1") {
        console.log("Has elegido piedra");
        console.log("Ahora va a tirar el jugador 2 ");
      
        }
        if (this.tiradajugador1 == "2") {
            console.log("Has elegido papel");
            console.log("Ahora va a tirar el jugador 2 ");
            
            }
        if (this.tiradajugador1 == "3") {
            console.log("Has elegido tijera");
            console.log("Ahora va a tirar el jugador 2 ");
           
            }
    }
    tirajug2() {
        this.tiradajugador2 = prompt("Elije 1 - piedra, 2 - papel, 3 - tijera");
        if (this.tiradajugador2 == "1") {
        console.log("Has elegido piedra");
        console.log("Comprobando ganador");

        }
        if (this.tiradajugador2 == "2") {
            console.log("Has elegido papel");
            console.log("Comprobando ganador");

            
            }
        if (this.tiradajugador2 == "3") {
            console.log("Has elegido tijera");
            console.log("Comprobando ganador");

            
            }
    }

    comprobarganador(){
        if (this.tiradajugador1 == 1 && this.tiradajugador2 == 1) {
            alert("Empate");
        }
        if (this.tiradajugador1 == 2 && this.tiradajugador2 == 2) {
            alert("Empate");
        }
        if (this.tiradajugador1 == 3 && this.tiradajugador2 == 3) {
            alert("Empate");
        }

       //jug1 piedra
        if (this.tiradajugador1 == 1 && this.tiradajugador2 == 2) {
            alert("Gana jugador 1 " + this.jug1);
        }
        if (this.tiradajugador1 == 1 && this.tiradajugador2 == 3) {
            alert("Gana jugador 1 " + this.jug1);
        }

        //jug1 papel
        if (this.tiradajugador1 == 2 && this.tiradajugador2 == 1) {
            alert("Gana jugador 2 " + this.jug2);
        }
        if (this.tiradajugador1 == 2 && this.tiradajugador2 == 3) {
            alert("Gana jugador 2 " + this.jug2);
        }

        //jug1 tijeras
        if (tiradajugador1 == 3 && tiradajugador2 == 1) {
            alert("Gana jugador 2 " + this.jug2);
        }
        if (tiradajugador1 == 3 && tiradajugador2 == 2) {
            alert("Gana jugador 1 " + this.jug2);
        }


    }

}
    

let partida1 = new Game('Pepe_1', 'Pepa__2');
partida1.tirajug1();
alert("Ahora tira el jug2");
partida1.tirajug2();
alert("Ahora a comprobar el ganador");

partida1.comprobarganador();