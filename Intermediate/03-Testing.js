const numbers = [1, 2, 3]
const [x, y, z] = numbers
// Guess the Outuput?
console.log(x, y, z) // 123  - La desestructuración de arrays te permite extraer valores de un array y asignarlos a variables de forma más concisa




// Ordenación
const num = [1, 2, 3, 4, 5, 6]


const numD = [1, 4, 6, 3, 2, 4];
const numOrder = [1, 4, 6, 3, 2, 5];


numOrder.sort((a, b) => a - b) // Orden ascendente
console.log(`Ordenando el numOrder en orden ascendente: `, numOrder);

numOrder.sort((a,b) => b - a) // Orden descendente
console.log(`Ordenando el numOrder en orden descendente: `, numOrder);



// const numD = [1, 4, 6, 3, 2, 4];
numD.sort((a, b) => a - b);
// console.log(numD);  // [1, 2, 3, 4, 4, 6]
//  console.log(`Ordenando el numD: `, numD);


// Loop  for, While - Cual utilizar


// Manipulación de Arrays - Métodos de JavaScript(agregar, eliminar, split..)



// Todos los algoritmos tienen una forma para poderse desarrollar


/*
Complejidad -
Recursos que nuestro ordenador está consumiendo
Codigo que sea escalable y se pueda mantener en el tiempo, tiene que ser legible
Complejidad Temporal: número de operaciones (operaciones math., comparaciones, funciones...etc)
Complejidad Espacial: Memoria necesaria
Notación Big O: Que tan rápido es


*/

// Creamos un array actr
const actresses = [
    { name: "Brandi", age: 30 }, 
    { name: "Alex", age: 25 },
    { name: "Taylor", age: 27 },
    { name: "Jordan", age: 35 },
    { name: "Morgan", age: 22 },
];

const hasJordan = actresses.some((actresses) => actresses.name === "Jordan")

console.log("hasJordan:", hasJordan)