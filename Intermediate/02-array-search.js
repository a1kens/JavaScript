// How to search an array in JavaScript - 4 methoods explained

/* 1. Includes()
Returns true if an array contains a value, otherwise returns false.
*/

const fruit = ["apple", "banana", "pear", "orange", "banana"]
const hasBanana = fruit.includes("banana")
console.log(hasBanana) // Output: true

const hastLemon = fruit.includes("lemon")
console.log(hastLemon) // Ouput: false


/* 2. filter()
Returns a new array with elements that pass a condition given by a callback function
*/

const numbers = [1, 8, 2, 10, 2]

const twos = numbers.filter((num) => num === 2)
console.log(twos) // Output: [ 2, 2 ]

const doubleDigits = numbers.filter((num) => num > 9)
console.log(doubleDigits)

const hundreds = numbers.filter((num) => num > 99)
console.log(hundreds) // Outuput: []


/* 3. find()
Returns the first element that passes the condition given by a callback.
If no elements match, it returns undefined
*/

const pets = ['cat', 'dog', 'bird', 'dog']

const dog = pets.find((pet) => pet === 'dog')
console.log(dog) // Output: 'dog'

const fish = pets.find((pet) => pet === 'fish')
console.log(fish) // Output: undefined


/* 4. indexOf
Find the first element that matches a value and returns the index of that element. If not elements match, it returns -1.
*/

const players = ['Messi', 'Maradona', 'Pele', 'Cruiff', 'Zidane']
const peleIndex = players.indexOf('Pele')
console.log(peleIndex) // Output: 2 - 

const RonaldinhoIndex = players.indexOf('Ronaldinho')
console.log(RonaldinhoIndex) // Output: -1 - no coincide con ningún elemento del array

/*
Los índices en los arrays de JavaScript comienzan en 0.
'Messi' está en la posición 0, 'Maradona' está en la posición 1, y 'Pele' está en la posición 2.
Por lo tanto, console.log(peleIndex) imprime el valor 2 porque 'Pele' se encuentra en el tercer lugar del array, que corresponde al índice 2 (contando desde 0).

*/






/* Ordenación
*/

// const num = [1, 2, 3, 4, 5, 6]
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