//objetos

class Alumno{
    constructor(name, surname, course)
    {
        this.nombre = name
        this.apellidos = surname;
        this.curso = course;
    }
    imprimedatos()
    {
        console.log('El alumno' + this.nombre + this.apellidos + 'pertenece a ' + this.curso);
    }
    despertar(segundos) 
    {
    setTimeout( () => {
        console.log("Acaba de despertarse" + this.nombre + this.apellidos)
    } ,segundos*1000)
}   
}

let al1 = new Alumno("Carlos", "Moreno", "2 daw")
al1.imprimedatos();

al1.despertar(2);

class AlumnoCiclos extends Alumno {
constructor(nom, ape, curso, nivelfrikismo)
{
    super(nom, ape, curso);
    this.frikometro = nivelfrikismo;
}

getInfor()
{
    super.imprimedatos()
    console.log ("y su nivel de friiki es" + this.frikometro);
}

}


let al3 = new AlumnoCiclos("Jose Antonio", "Duarte", "2daw", 100)
al3.getInfor();