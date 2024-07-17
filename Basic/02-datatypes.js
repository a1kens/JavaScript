// Existen 7 primitivos

//Cadenas de texto (string)
let name = "Juan Manuel"
let alias = "aikens"
let email = "aikens@gmail.com"

//Números (number)
let age = 39 // entero
let height = 1.78 // decimal

//Booleanos (boolean)
let isStudent = true
let haveWork = false

// Undefined
let undefinedValue // la variable la hemos creado pero no le hemos asignado valor asociado
//console.log("undefinedValue") 

// Null
let nullValue = null // tengo la posibilidad de crear una variable y asignarle valor asociado null
//console.log("nullValue") // esta representando intencionadamente que no tiene valor

// Symbol  
let mySymbol = Symbol("mysymbol")

// BigInt
let myBigInt = BigInt("981230918239012830192098123890183")
//console.log("myBigInt")


// Mostramos tipos de datos
console.log(typeof alias)
console.log(typeof age)
console.log(typeof isStudent)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)