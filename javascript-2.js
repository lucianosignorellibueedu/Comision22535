// var a = 50;
// var b = 35;

// if(a < b){
//     console.log("A es menor que B. Valor de b: ", b )
//     console.log('Valor de A', a)
// }
// else{
//     console.log("A es mayor que B. Valor de A: ", a )
//     console.log('Valor de b', b)
// }
// var x = 10;
// var y = 8;
// mayor = (x>y)? x:y;
// console.log(mayor);
// var ab = a < b ? a:b
// console.log(ab);

// switch (a) {
//     case a > b:
//         console.log("a es mayor")
//         break;
//     case a < b:
//             console.log("a es menor")
//             break;
//     default:
//         console.log("Son iguales");
//         break;
// }

// *************** SWITCH ****************/

// while (true){
//     // console.log("Hola");
// }
// var nota = parseInt(prompt("Ingrese la nota"));
// while( nota < 7 ){
//     console.log("He realizado mi examen. Mi resultado es el siguiente:");
//     switch (nota) {
//       case 10:
//         calificacion = "Sobresaliente";
//         break;
//       case 9: break;
//       case 8:
//         calificacion = "Notable";
//         break;
//       case 7:
//       case 6:
//         calificacion = "Bien";
//         break;
//       case 5:
    
//       case 4:     calificacion = "Suficiente";
//       break;
//       case 3:
//       case 2:
//       case 1:
//       case 0:
//         calificacion = "Insuficiente";
//         break;
//       default:
//         // Cualquier otro caso
//         calificacion = "Nota errónea";
//         break;
//     }
//     console.log("He obtenido un", calificacion);
//     nota = parseInt(prompt("Rendi de nuevo"));
// }

// var i = 0;
// while (i < 5){
//     console.log(i);
//     i++;
// }
for (let index = 0; index < 10; index++) {
    console.log("He realizado mi examen. Mi resultado es el siguiente:");
    switch (nota) {
        case 10:
          calificacion = "Sobresaliente";
          break;
        case 9: break;
        case 8:
          calificacion = "Notable";
          break;
        case 7:
        case 6:
          calificacion = "Bien";
          break;
        case 5:
      
        case 4:     calificacion = "Suficiente";
        break;
        case 3:
        case 2:
        case 1:
        case 0:
          calificacion = "Insuficiente";
          break;
        default:
          // Cualquier otro caso
          calificacion = "Nota errónea";
          break;
      }
      console.log("He obtenido un", calificacion);
      nota = parseInt(prompt("Rendi de nuevo"));
    
}
// 
// var altura = 0;
// var edad = 0;
// altura = parseFloat(prompt("Ingrese la altura"));
// edad = parseInt(prompt("Ingrese la edad"));
// debugger;
// if (altura > 1.30 && edad > 14) {
// console.log("Cumple con los requisitos");
// } else{
// console.log("No cumple con los requisitos");}

// var color;
// color = prompt("Ingrese el color del auto");
// if (color == "Rojo" || color == "Verde") {
// console.log("El auto pertenece a la categoría A");
// } else{
//     console.log("El auto pertenece a la categoría B");
//     }