//array vacio
let vector = [];

//array con elementos


// // array mixto 
// let mixto = ['Boca', '1', 'Martes', 123];

// console.log(vector.length)
// console.log("Longitud de autos",autos.length)
// console.log(mixto.length)

// console.log(autos[0]);
// console.log(autos[3]);
// console.log(mixto[3]);
// console.log(mixto[10]);
// // if(mixto[10]){
// //     //procesamos
// // }
// // No existe ese valor
// console.log(autos);
// autos.push("Renault");
// console.log("Longitud de autos",autos.length)
// console.log(autos);

// for(let i = 0;i < autos.length; i++){
//     document.write(autos[i]+ "<br>");
// }
// autos.unshift("Audi", 1, 2,3, "boca");
// for(let i = 0;i < autos.length; i++){
//     document.write(autos[i]+ "<br>");
// }

// console.log("IndexOF",autos.indexOf("Ferrari"));
// console.log("LastIndexOF",autos.lastIndexOf("Ferrari"));

// let valorPop = autos.pop();
// console.log(valorPop)
// console.log("Longitud de autos",autos.length)
// console.log(autos);
// let valorPop2 = autos.pop();
// console.log(valorPop2)
// console.log("Longitud de autos",autos.length)
// console.log(autos);

// vector.push("Posicion 0");
// vector.push("Posicion 1");
// vector.push("Posicion 2");
// vector.push("Posicion 3");
// console.log(vector)
// let vectorPop = vector.pop();
// console.log(vectorPop)
// console.log(vector)
// vector.shift();
// console.log("Array despues del shift", vector)
// console.log(autos);

// console.log(autos.indexOf("Citroen"));

// console.log(autos.concat(mixto))
// console.log("---------------------")
// console.log(autos.reverse());
// console.log(autos.length);
// console.log("---------------------")
// let nuevoArray = autos.splice(2,2);
// console.log("Arreglo splice",autos);
// console.log(nuevoArray);
// console.log(nuevoArray);

// autos.forEach(agregar())


let autos = ['Chevrolet','BMW', 'Torino','Dodge', 'Ford', "Citroen" , 'VW'];
// const fruits = ["apple", "orange", "cherry"];
autos.forEach(myFunction);

// document.getElementById("demo").innerHTML = text;
 
function myFunction(item, index) {
  document.write(index + ": " + item.toString().toUpperCase() + "<br>") ;
}

for(let i = 0;i < 10; i++){
    document.write(autos[i].toString().toUpperCase()+ "<br>");
}