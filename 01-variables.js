// var - Debido al hoisting se ha dejado de utilziar salvo para casos muy concretos
var helloWorld = "Hola, JavaScript!"
console.log(helloWorld)

helloWorld = "Hola de nuevo, JavaScript!"
console.log(helloWorld)


// let y const fueron introducidos en ES6 en 2015. Dejando var en desuso.
// Utilizaremos let cuando varian y const cuando permanezcan fijas

// let - accesibles dentro de un bloque
let helloWorld2 = "Hola, JavaScript 2"
console.log(helloWorld2)    

// const - no permite reasignar la variable. Ambito de ejecución igual que let, accesibles dentro del bloque de ejecución
const hellowWorld3 = "Hola, JavaScript 3"
console.log(hellowWorld3) 
