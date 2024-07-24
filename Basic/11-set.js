// set

// Declaración

let mySet = new Set()

// Inicialización

mySet = new Set(["Juan Manuel", "Sosa", "aikens", 39])

console.log(mySet)


// Métodos comunes

// add y delete

mySet.add("Powerleveling") // añade el elemento en la última posición

console.log(mySet)


mySet.delete("Sosa") // delete - no funciona siguiendo un índice, debemos indicarle exactamente que elemento queremos borrar
console.log(mySet)

console.log(mySet.delete("Juan Manuel")) // retorna un "true"
console.log(mySet) // Comprobamos que ha borrado el elemento

// has - no podemos acceder a un índice. Verifcamos si mySet contiene "x" elemento

console.log(mySet.has( "aikens"))
console.log(mySet.has( "Juan Manuel"))

// size

console.log(mySet.size) // el size de mySet es 3


// Convertir un set into array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array into set

mySet = new Set(myArray)
console.log(mySet)


// set No admite duplicados

mySet.add ("aikens") // intento añadir un elemento que ya existe dentro - si es exactamente igual no se sumara
console.log(mySet) // compruebo que no lo ha introducido, ya existe en el listado
mySet.add ("Aikens") // Comienzo con mayúsculas y se genera una pequeña diferencia con el original y si lo introduce
mySet.add ("AiKens")
mySet.add ("AiKeNs")
console.log(mySet) 