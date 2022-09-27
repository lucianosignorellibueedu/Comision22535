// console.log("1 x 0 = ", 1 * 0);
// console.log("1 x 1 = ", 1 * 1);
// console.log("1 x 2 = ", 1 * 2);
// console.log("1 x 3 = ", 1 * 3);
// console.log("1 x 4 = ", 1 * 4);
// console.log("1 x 5 = ", 1 * 5);
// console.log("1 x 6 = ", 1 * 6);
// console.log("1 x 7 = ", 1 * 7);
// console.log("1 x 8 = ", 1 * 8);
// console.log("1 x 9 = ", 1 * 9);
// console.log("1 x 10 = ", 1 * 10);

// function multiplicar(){
//     for (i = 1; i <= 10; i++) {
//         console.log( "3  x", i, "=", 3 * i);
//     }
// }



// function multiplicarValor(num){
//     for (i = 1; i <= 10; i++) {
//         console.log( num + " x", i, "=", num * i);
//     }
// }
// let num = prompt('Ingrese un numero');
// multiplicarValor(num);

// multiplicar();


// // Primera vez
// for (i = 1; i <= 10; i++) {console.log("1 x", i, "=", 1 * i);}
// // Segunda vez
// for (i = 1; i <= 10; i++) {console.log("1 x", i, "=", 1 * i);}
// // Tercera vez
// for (i = 1; i <= 10; i++) {console.log("1 x", i, "=", 1 * i);}

//Declaración de la función tablaDelUno()
// function tablaDelUno() {
//     for (i = 1; i <= 10; i++) { console.log("1 x", i, "=", 1 * i); }
// }

//Bucle que ejecuta 3 veces la función tablaDelUno()
// for (let i = 1; i <= 3; i++) { tablaDelUno(); }


// document.write("<h1>HOLA A TODOS</h1>");

function saludarDespedida(){
   document.write("<h1>HOLA A TODOS</h1>");
    return "Chauuu";
}

// function nombre_de_la_funcion(){

// }
// nombre_de_la_funcion();

// let nombre = prompt('Ingrese su nombre');
// let apellido = prompt('Ingrese su apellido');
// let edad = parseInt(prompt('Ingrese su edad'));

// function saludarBienvenida(nombre, apellido, edad){
//   return  nombre + " "  + apellido + " edad: " + edad;
// }

// let nombreCompletoEdad = saludarBienvenida(nombre, apellido, edad);
// console.log(nombreCompletoEdad);

// saludarDespedida();
let despedida = saludarDespedida();
console.log(despedida);

// function multiplicarValor(num){
//     for (i = 1; i <= 10; i++) {
//         console.log( num + " x", i, "=", num * i);
//     }
// }
// let num = prompt('Ingrese un numero');
// let table = multiplicarValor(num);


function cuadrado(x) {
    return x * x
}
console.log("Funcional tradicional",cuadrado(2))

// Función Flecha (Arrow)
let aCuadrado = (x) => x * x
console.log("arrow Function",aCuadrado(2))

let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido');
let edad = parseInt(prompt('Ingrese su edad'));

// function saludarBienvenida(nombre, apellido, edad){
//   return  nombre + " "  + apellido + " edad: " + edad;
// }

// let nombreCompletoEdad = (nombre) => {return  nombre} ;
let nombreCompletoEdad2 = (nombre, apellido, edad) =>
{
    if( nombre != null && apellido != null) {
        return nombre + " "  + apellido + " edad: " + edad;
    }
   
    // return completo;
} 
// console.log(nombreCompletoEdad.nombre);
alert(nombreCompletoEdad2(nombre, apellido, edad));

function saludarBienvenida(nombre, apellido, edad){
    if( nombre != null && apellido != null) {
        return nombre + " "  + apellido + " edad: " + edad;
    }
}

// var aMultiplicar = (num1,num2) => 
// {   
//     producto= num1*num2;
//     return producto; 
// }
// console.log(aMultiplicar(6,7));