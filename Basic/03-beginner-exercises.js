// 1. Escribe un comentario en una línea
console.log("Bienvenido a JavaScript!");

// 2. Escribe un comentario en varias líneas
console.log (`Este es mi 
comentario 
en varias líneas` )

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let nickName = "Oxey"
let age = 28
let isPro = false
let undefinedValue
let nullValue = null
let symbol = Symbol("mysymbol")
let myBigInt = BigInt("908908098012321309821309821093809380")

// 4. Imprime por consola el valor de todas las variables
console.log("4. Imprime por consola el valor de todas las variables")
console.log(nickName)
console.log(age)
console.log(isPro)
console.log(undefinedValue)
console.log(nullValue)
console.log(symbol)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log("5. Imprime por consola el tipo de todas las variables")
console.log(nickName + " is a: "+ typeof nickName)
console.log(age + " is a: " + typeof age)
console.log(isPro + " is a: " + typeof isPro)
console.log(undefinedValue + " is a: " + typeof undefinedValue)
console.log(nullValue + " is a: " + typeof nullValue)
console.log("{symbol} is a: " + typeof symbol)
console.log(myBigInt  + " is a: " + typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
nickName = "Rubina"
age = 29
isPro = true
undefinedValue = undefined
nullValue = null
symbol = Symbol("anothersymbol")
myBigInt = BigInt("1234567890123456789012345678901234567890");

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
nickName = 1234
age= "Skywalker"
isPro= "yes"
undefinedValue = 0
nullValue = false
symbol = { id: 1} // cambio de symbol a object
myBigInt = [1, 2, 3] // Cambiado de BigInt a array

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const lastName = "Doe"
const address = "Calle Hoya del Enamorado"
const favouriteNumber = 5

// 9. A continuación, modifica los valores de las constantes
console.log ("En JavaScript, las constantes (const) no se pueden reasignar una vez que se les ha asignado un valor. Si intentas reasignar una constante, obtendrás un error.")
//lastName = "Snow"
// address = "Avenida de la Felicidad"
// favouriteNumber = 2
console.log ("Al tratar de modificar el valor de una const obtendremos: TypeError: Assignment to constant variable.")

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
console.log("Has realizado los primeros ejercicios de JavaScript!")




let variable = undefined
console.log(variable)