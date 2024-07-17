// Operadores


// Operadores Aritméticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log (a -b) // Resta
console.log(a * b) // Multiplicación
console.log (a / b) // División

console.log (a % b) // Módulo - el resto de la división
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a) //

a-- // Decremento
console.log(a) //

// Operadores Asignación
let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2


// Operadores de comparación   a=5 b=10

console.log("Valor de a:", a)
console.log("Valor de b:", b)
console.log (a > b) // false - el resultado de comparar entre dos variables siempre será un boolean
console.log (a < b) // true - 
console.log (10 >= 10)
console.log (a <= b)
console.log(a == b)
console.log(a == 5) // Igualdad por valor
console.log (a == "5") // Igualdad por valor
console.log (a == a)
console.log(a === a) // Igualdad por Identidad (por tipo y valor)
console.log(a === 5)
console.log(a === "5")

console.log(a != 6)
console.log(a !== 6)
console.log(0 == false) // JavaScript por la manera que fue creado, el 0 es true y el resto de números es falso
console.log(1 == false)
console.log(2 == false)
console.log(0 == '')
console.log(0 == " ")
console.log(0 == "Hola") // JavaScript 
console.log(0 === "Hola")
console.log(undefined == null)
console.log(undefined === null)

// Truthly values (valores verdaderos)

// Todos los números positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacías
// boolean true

// Falsy values (valores falsos)

//0 
// 0n
// null
// undefined
// NaN
// el boolean false
//cadenas de texto vacías


// Operadores Lógicos

// and (&&)
console.log (5 > 10 &&  15 > 20) // false (No cumple ninguna de las expresiones)
console.log (5 < 10 &&  15 > 20) // false (se cumple una expresión y la otra no)
console.log (5 < 10 &&  15 < 20) // true (Cumple las dos expresiones)

// or (||)
console.log( 5 > 10 || 15 > 20) // false (No se cumple ninguna de las expresiones)
console.log( 5 < 10 || 15 > 20) // true (Se cumple una de las expresiones)
console.log(5 < 10 || 15 < 20) // true (Se cumplen las dos expresiones)

console.log (5 > 10 && 15 > 20 || 30 < 40) // true ( )

// not (!)
console.log (5 > 10 && 15 > 20)
console.log (! (5 > 10 && 15 > 20))

console.log(!true)
console.log(!false)


// Operadores Ternarios - Permiten escribir una condición
const isRaining = true

isRaining ?  console.log("Está lloviendo") : console.log("No está lloviendo")