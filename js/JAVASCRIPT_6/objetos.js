
let persona = {
    nombre: "Juan", //variable del objeto. Par variable: valor,
    apellido: "Paz",
    dni: 11223344,
    edad: 34,
    mascota: "",
    //Método: es una propiedad más
    nombreCompleto: function () { //Esta variable guarda el resultado de una función
        return this.nombre + " " + this.apellido; //Función anónima
        //El string que devuelve tiene información del propio objeto
    },
    saludar: function(){
        return "Hola"
    },
    getEdad: function(){
        return "Tengo: " + this.edad;
    },
    setMascota: function(tipo){
        this.mascota = tipo;
    },
    getMascota: function(){
        return "Tengo como mascota un " + this.mascota;
    },
    mayorEdad: function(){
        if( this.getEdad > 18){
            return true;
        } 
        return false;
    }

};
console.log(persona) // Imprimo el objeto
console.log(persona.nombre) // Imprimo una propiedad del objeto: Juan
console.log(persona.nombreCompleto()) // Imprimo el resultado de una función del objeto: Juan Paz
console.log(persona.saludar());
console.log(persona.getEdad());
persona.setMascota("Loro");
console.log(persona.getMascota());

console.log(persona['dni']);



// // Creamos el objeto
let miAuto = new Object()
// Creamos las propiedades
miAuto.marca = 'Ford'
miAuto.tipo = 'Ranger'
miAuto.modelo = 2019;
miAuto.apellido = "Fernandez";
miAuto.mascota = "Lagarto";
console.log("El auto es:", miAuto.marca,
miAuto['dasdssad'],
miAuto.tipo,"y el modelo es",miAuto.modelo,"tiene apellido: ", miAuto.apellido)

// let producto = {
//     nombre: "",
//     precio: "",
//     descripcion: "",
//     cantidad: "",
//     aroma: "",
// }


// //simulando un llamado a una api
// const productos = "https://api.mercadolibre.com/items/MLA1136716168/velas";
// productos.precio = 5000;
// productos.nombre = "Cualquiera"

// var perro = {
//     nombre: "Milo",
//     edad: 12,
//     vivo: true,
//     quienSoy() {return "Soy " + this.nombre},
//     ladrar() {
//         if (perro.vivo) {
//             return this.nombre + " dice guau!";
//         }
//         else{
//             return "Milo se fue a correr al campo de los perritos"
//         }   
//     }
// }
//     console.log(perro.nombre,"tiene",perro.edad,"años")
//     console.log(perro.quienSoy())
//     console.log(perro.ladrar());


// class Perro {
//     constructor(nombre, edad, vivo) {
//         this.nombre = nombre
//         this.edad = edad
//         this.vivo = vivo
//     }
// }

// // Instanciamos dos objetos clase Perro:
// var perro1 = new Perro("Lola", 4, true)
// var perro2 = new Perro("Lassie", 10, false)
// // Modificamos alguna de sus PROPIEDADES:
// perro1.nombre = "Toby"
// perro2.edad = 6


class Persona {
    constructor(nombre = "", apellido = "", dni = "",rol = null, edad = "") {
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.edad = edad
        this.rol = rol
    }
}

let persona1 = new Persona("Jorge", "Fernandez", "1547889", 56, "Supervisor");
console.log("Nombre de la persona 1: ",persona1.nombre);
console.log("El rol de persona 1 es: ",persona1.rol);
 
let usuario = new Persona("Mario","Luis", 16545, 35, "Usuario");
console.log("apellido: ", usuario.apellido);
let admin = new Persona();
let cliente = new Persona();