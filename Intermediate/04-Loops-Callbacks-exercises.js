//Ejercicio 1: Bucle for
//Crea un bucle for que imprima los números del 1 al 10.
for (let i=1; i <=10; i++){
    console.log(`for: ${i}`)
}

//Ejercicio 2: Bucle while
//Escribe un bucle while que imprima los números del 10 al 1 en orden descendente.
let i = 1
while(i<= 10){
    console.log(`While: ${i}`)
    i++
}

//Ejercicio 3: Bucle do...while
//Usa un bucle do...while para imprimir los números pares entre 2 y 20.

let j = 2

do {
    if(j % 2 === 0){

        console.log(`do...while: ${j}`)
    }
    j++
} while(j <=20)


//Ejercicio 4: Bucle for...of
//Dado un array de nombres, usa un bucle for...of para imprimir cada nombre en una línea separada.

const names = ['Alice', 'Bob', 'Charlie'];

for (let n of names){ // Itera sobre cada elemento del array names.
    console.log(n) // Imprime cada nombre en una línea separada.
}


//Ejercicio 5: Bucle for...in
//Dado un objeto con propiedades name, age, y city, usa un bucle for...in para imprimir cada propiedad y su valor.

const person = { name: 'John', age: 30, city: 'New York' };

for (prop in person) {
    console.log(`${prop}: ${person[prop]}`)
}

//Ejercicio 6: Callback Básico
//Escribe una función greet que tome un nombre y un callback. El callback debe ser llamado con un mensaje de saludo que incluya el nombre.

function greet(name, callback) { // Define la función greet que toma un name y un callback
    // Tu código aquí
    const message = `Hello, ${name}!` // crea un mensaje con el nombre proporcionado
    callback(message) // Llama al callback con el mensaje de saludo
}

greet('Alice', (message) => {
    console.log(message); // Debe imprimir 'Hello, Alice!'
});

//Ejercicio 7: Callback con Asincronía
//Crea una función simulateAsync que simule una operación asíncrona usando setTimeout. Debe tomar un número y un callback. El callback debe ser llamado después de 2 segundos con el número incrementado en 1.


function simulateAsync(number, callback) {
    // Tu código aquí
    setTimeout(() => {
        callback(number + 1); // Llama al callback con el número incrementado en 1 después de 2 segundos
    }, 2000); // 2000 milisegundos = 2 segundos

}

simulateAsync(5, (result) => {
    console.log(result); // Debe imprimir 6 después de 2 segundos
});


//Ejercicio 8: Callback con Array
//Escribe una función processArray que tome un array de números y un callback. La función debe aplicar el callback a cada número del array e imprimir los resultados.


function processArray(arr, callback) {
    // Tu código aquí
}

processArray([1, 2, 3], (num) => {
    console.log(num * 3); // Debe imprimir 3, 6, 9
});

//Ejercicio 9: Bucle con Callback
//Dado un array de nombres, usa un bucle for...of para pasar cada nombre a una función de callback que imprima el nombre en mayúsculas.


//const names = ['alice', 'bob', 'charlie'];

function printUpperCase(name) {
    // Tu código aquí
}

for (const name of names) {
    printUpperCase(name); // Debe imprimir 'ALICE', 'BOB', 'CHARLIE'
}

//Ejercicio 10: Evitar Callback Hell con Promesas
//Refactoriza el siguiente código para usar promesas en lugar de callbacks. La función fetchData simula la obtención de datos, processData simula el procesamiento de datos y saveData simula el guardado de datos.


function fetchData(callback) {
    setTimeout(() => {
        callback('Fetched Data');
    }, 1000);
}

function processData(data, callback) {
    setTimeout(() => {
        callback(data + ' Processed');
    }, 1000);
}

function saveData(data, callback) {
    setTimeout(() => {
        callback(data + ' Saved');
    }, 1000);
}

// Usa promesas en lugar de callbacks aquí