// array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización
myArray = [3]
myArray2 = new Array(3) // reserva 3 espacios

console.log(myArray)
console.log(myArray2)

myArray = [1, 2,3, 4]
myArray2 = new Array(1, 2, 3, 4) // reserva
console.log(myArray)
console.log(myArray2)

myArray = [ "Juan Manuel", "Sosa", "aikens", 39]
myArray2 = new Array("Juan Manuel", "Sosa", "aikens", 39)
console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3) // se reservan 3 slots pero puedes crear la posición [4], [5]..etc y se sobredimensiona y modifica a las necesidades
myArray2[0] = "Juan Manuel"
myArray2[1] = "Sosa"
myArray2[2] = "aikens"
myArray2[3] = 39

console.log(myArray2)


// Métodos comunes
myArray = []


// push y pop

myArray.push("Juan Manuel")
myArray.push("Sosa")
myArray.push("aikens")
myArray.push(39)
console.log(myArray)

 //elimina el último elemento del array y lo devuelve
myArray.pop()
// console.log(myArray.pop()) //elimina el último elemento del array y lo devuelve
console.log(myArray)

// shift y unshift

console.log(myArray.shift()) // elimina el primer elemento del array
console.log(myArray)

console.log(myArray.unshift("prueba", "prueba2")) // introduce los elementos en la primeras posiciones del array
console.log(myArray)

// length
console.log("La longitud del array es: "+ myArray.length)

// clear
myArray = []
myArray.length = 0 // alternativa
console.log(myArray) // el output es = []

// slice
myArray.push ("Juan Manuel", "Sosa", "aikens", 39)
console.log(myArray)


let myNewArray = myArray.slice (1, 3) // Elimina las posiciones indicadas [1] y [3]
console.log(myNewArray)

// splice
console.log(myArray)
myArray.splice (1, 3) // Elimina desde la posición myArray[1] a myArray[3]
console.log(myArray)





