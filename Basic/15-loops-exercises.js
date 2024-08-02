// NNOTA: Explora diferentes sitaxis de bucleas para resolver los ejercicios

// 1. Bucle que imprima los números del 1 al 20
console.log("Bucle que imprima los números del 1 al 20")
for ( let i = 0; i <= 20; i++ ) {
    console.log(i)
}        

// 2. Crea un bucle que sume todos los números del 1 al 100 y myuestre el resultado

let sum = 0;

for ( let i = 1; i <= 100; i++ ) {    
    sum += i;   
}
 console.log(`La suma de los números del 1 al 100 es: ${sum}`);



// 3. bucle que imprima todos los números pares entre 1 y 50
console.log("Bucle que imprima todos los números pares entre 1 y 50")
let i = 1

while ( i < 50 ) {
    if (i % 2 == 0 ) {
        console.log(i);
    }
    i++;
}


// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log ("4.- Dado un array de nombres, usa un bucle para imprimir cada nombre")

let names = ["John", "Jane", "Mike", "Emily", "Sarah"];

for (let i = 0; i < names.length; i++ ) {
    console.log(names[i]);
}


// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const texto = "Hola, como estas?";
let contador = 0;
const vocales = 'aeiouAEIOU';
    
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    
console.log("La cadena de texto insertada contiene: " + contador + " vocales");


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [2, 3, 4, 5, 6];
let producto = 1;

for (let i = 0; i < numeros.length; i++) {
    producto *= numeros[i];
}

console.log("El resultado de multiplicar todos los números del array es: "+ producto)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}


// 8. Usa un bucle para invertir una cadena de texto

let cadena = "Hello, World!";

for (let i = cadena.length - 1; i >= 0; i--) {
    console.log(cadena[i]);
}


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log('Primeros 10 números de la secuencia de Fibonacci')

let fibonacci = [0, 1];

for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci);



// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numerosAll = [1, 2, 3, 6, 8, 9, 10, 11, 14, 15, 17, 22]
let numerosMayores = []

for (let i = 0; i < numerosAll.length; i++) {
    if (numerosAll[i] > 10) {
        numerosMayores.push(numerosAll[i]);

    }
}

console.log("Estos son todos los números del array: " + numerosAll)
console.log("Estos son los números mayores a 10: " + numerosMayores)