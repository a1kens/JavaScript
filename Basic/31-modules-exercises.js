// 1. Exporta una función

// 2. Exporta una constante
// 3. Exporta una clase
// 4. Importa una función


// 5.Importa una constante
// 6. Importa una clases

// 7. Exporta una función, una constante y una clase por defecto (en caso de que loo permita) - No permite más de un "default" por archivo

// 8. Importa una función, una constante y una clase por defecto (en caso de que loo permita) - 

// 9. Exporta una función, una constante y una clase desde una carpeta
// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

let nombre = "Juanma "
let apellido = "Sosa"

let myName = nombre + apellido
console.log(myName)

console.log(myName[0])
console.log(myName[myName.length - 1])

console.warn("Esto es un mensaje de advertencia")
console.error("Esto es un mensaje de Error")


// Text
// console.log( "\u001b[1;31m Red message" );
// console.log( "\u001b[1;32m Green message" );
// console.log( "\u001b[1;33m Yellow message" );
// console.log( "\u001b[1;34m Blue message" );
// console.log( "\u001b[1;35m Purple message" );
// console.log( "\u001b[1;36m Cyan message" );

// // Background
// console.log( "\u001b[1;41m Red background" );
// console.log( "\u001b[1;42m Green background" );
// console.log( "\u001b[1;43m Yellow background" );
// console.log( "\u001b[1;44m Blue background" );
// console.log( "\u001b[1;45m Purple background" );
// console.log( "\u001b[1;46m Cyan background" );



// // / Custom warn and error with colors
// console.log("\u001b[1;33mEsto es un mensaje de advertencia\u001b[0m"); // Amarillo
// console.log("\u001b[1;31mEsto es un mensaje de Error\u001b[0m");       // Rojo


// console.warn("Esto es un mensaje de advertencia")
// console.error("Esto es un mensaje de Error")

// Reset
// console.log( "\u001b[0m Reset text and background color/style to default" );



// console.log(meses)
let myMap = new Map()
myMap = new Map ([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

console.log(myMap)

console.log(myMap.get(2))







function div(dividend, divisor) {
    if (divisor === 0) {
        throw new Error("Cannot divide by zero");
    }
    return dividend / divisor;
}

let numbers = [10, 40, 0, 20, 50];

for (let i = 0; i < numbers.length; i++) {
    let result;
    try {
        result = div(1000, numbers[i]);
    } catch (e) {
        result = e.message;
    }
    console.log(result);
}


// let a = 6
// let b = 2

// let suma = a + b
// let resta = a - b
// let multiplicacion = a * b
// let division = a / b

// let modulo = a % b
// let exponente = a ** b







let id = "100";
{
let id = 200;
id = id + 1;
console.log(id);
}


// let x = 3e-3; 
// console.log(x)


let animals = ["canary", "dog", "cat"];

animals.push("hamster");
console.log(animals)

console.log("http://somethingNew.org");


let winter = ["December", "January", "February"];
let index = winter.indexOf("February");
console.log(index)

let daysOfWeek = [ "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"]
console.log(daysOfWeek)
daysOfWeek.reverse();
console.log(daysOfWeek)


let msg1 = 'hello';
let msg2 = msg1.slice(-1);
console.log(msg2 ? msg2 : msg2 + msg1);


// let test = prompt("Run", "code");

let x = false || true;
let y = "true" && "false";
let z = false && true;
console.log(`${x} ${y} ${z}`);


// let a = true && 20;
// let b = 0 || 20
// let c = 0 && 20;
// console.log(`${a} ${b} ${c}`);



// let lista = [1 , 2 , 3]
// lista = new Set(lista)
// console.log(lista)

// mapaMap.set("1" ,lista)

// console.log(mapaMap)


let lista = [1 , 2 , 3]
lista = new Set(lista)
console.log(lista)

let meses = new Map()
meses.set("nueva llave" ,lista)

console.log(meses)

let valorRecuperado = meses.get("nueva llave"); // Obtener el valor asociado a la clave "nueva llave"
console.log(valorRecuperado)



let nombres = ["victor", "manuel", "luis", "javier"]
// console.log(nombres.length)
// console.log(nombres[4])
let n = -1

do {
    n++
    console.log(nombres[n])
}

while (n < nombres.length - 1)


for (let n = 0; n < nombres.length; n++) {
    console.log(nombres[n]);
}
 


