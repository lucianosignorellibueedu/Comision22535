console.log("String");

let cadena = "Cadena de caracteres";

let objCadena = new String("Objeto string de caracteres");

document.write("cadena: " +cadena+"<br>");
document.write("Objeto cadena de caracteres: " +objCadena+"<br>");

console.log("Longitud de la cadena",cadena.length);
console.log("Longitud de objeto cadena",objCadena.length);

document.write(cadena.charAt(2)+"<br>");
document.write(objCadena.charAt(5)+"<br>");

document.write(objCadena.concat("-" + cadena)+"<br>");

let concatenar = cadena + "-" + objCadena + " 1";
document.write(concatenar+"<br>");


//Busqueda de un caracter/palabra/numero
// Va desde la posicion 0 hasta el final
// Nos retorna un numero
document.write(concatenar.indexOf("s")+"<br>");

document.write(concatenar.indexOf("-")+"<br>");

document.write(concatenar.indexOf("Objeto")+"<br>");

document.write(concatenar.indexOf(1)+"<br>");

document.write(concatenar.indexOf("1")+"<br>");

//Arranca desde el final de la cadena
document.write("LAST INDEX OF: ",concatenar.lastIndexOf(1)+"<br>");

let usuario = "Nombre:Luciano,Apellido:Signorelli,admin:false,numeroID:12312312"

// document.write(usuario.indexOf("admin:true")+"<br>");

let isAdmin = (usuario) =>{
    if(usuario.indexOf("admin:true") != -1){
        document.write("ES ADMIN"+"<br>")
    }
    else document.write("NO ES ADMIN"+"<br>")  
}
isAdmin(usuario);


document.write(concatenar.toLowerCase()+"<br>");

document.write(concatenar.toUpperCase()+"<br>");


function saludar(nombre, edad){
    // console.log('El nombre es: ' + nombre +"  tiene: " + edad + "años")
    console.log(`El nombre es ${nombre} ${edad} años`);
}
saludar("Jorge", 45)


console.log(" Numero PI", Math.PI);
let num1 = 10;
let num2 = 30;
let num3 = 4;
console.log("El maximo es: ", Math.max(num1, num2,num3));

let x = Math.random() * 250;


console.log(x);
// console.log(x.toString().length);
x = Math.floor(x);
console.log(x);