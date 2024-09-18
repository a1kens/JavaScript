/* 03-Loops y Callbacks
En este capítulo, exploraremos los conceptos de bucles (loops) y callbacks en JavaScript. Estos son fundamentales para el manejo de tareas repetitivas y la gestión de funciones asincrónicas.

Bucles (Loops)
Los bucles en JavaScript nos permiten ejecutar un bloque de código repetidamente hasta que se cumpla una condición específica. Existen varios tipos de bucles:

for
El bucle for es uno de los más comunes y se utiliza para iterar sobre un rango de valores.
*/

for (let i = 0; i < 5; i++) {
    console.log(i); // Imprime los números del 0 al 4
}

/* while
El bucle while ejecuta el bloque de código mientras se cumpla una condición.
*/

let i = 0;
while (i < 5) {
    console.log(i); // Imprime los números del 0 al 4
    i++;
}
/*do...while
El bucle do...while ejecuta el bloque de código al menos una vez antes de verificar la condición.
*/

let j = 0;
do {
    console.log(i); // Imprime los números del 0 al 4
    j++;
} while (j < 5);

/*for...of y for...in
Estos bucles se utilizan para iterar sobre objetos y arrays.
*/

// Iterar sobre un array
const arr = [10, 20, 30];
for (const value of arr) {
    console.log(value); // Imprime 10, 20, 30
}

// Iterar sobre las propiedades de un objeto
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`); // Imprime las propiedades y valores del objeto
}


/*Callbacks
Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que se complete una operación. Se utilizan comúnmente en operaciones asincrónicas.
*/
//Ejemplo Básico

function fetchData(callback) {
    setTimeout(() => {
        const data = 'Data fetched';
        callback(data); // Ejecuta el callback después de 1 segundo
    }, 1000);
}

fetchData((data) => {
    console.log(data); // Imprime 'Data fetched'
});
// Ejemplo con Bucles
//Puedes usar callbacks con bucles para procesar elementos de un array.


const numbers = [1, 2, 3, 4, 5];

function processArray(arr, callback) {
    for (const item of arr) {
        callback(item);
    }
}

processArray(numbers, (number) => {
    console.log(number * 2); // Imprime los números del array multiplicados por 2
});

/*Callback Hell y Promesas
Cuando se usan múltiples callbacks, puede resultar en un código difícil de leer, conocido como "Callback Hell". Las promesas y async/await son alternativas para manejar operaciones asincrónicas de manera más legible.
*/

// Callback Hell
fetchData((data) => {
    processData(data, (processedData) => {
        saveData(processedData, (result) => {
            console.log('Data saved:', result);
        });
    });
});

// Usando Promesas
fetchData()
    .then(processData)
    .then(saveData)
    .then(result => console.log('Data saved:', result))
    .catch(error => console.error('Error:', error));

/*
Conclusión
En este capítulo, hemos cubierto los bucles básicos y avanzados, así como los callbacks y su uso en la programación asincrónica.
Estos conceptos son esenciales para manejar tareas repetitivas y operaciones que requieren esperar por la finalización de otras tareas. */