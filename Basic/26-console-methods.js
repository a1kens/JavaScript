// Console

// log

console.log( "Hola, JavaScript")

// error

console.error("Este es un mensaje de error")
console.error("Error al conectarse con el Servidor: ", new Error("Conexión fallida."))

// warn

console.warn ("Este es un mensaje de advertencia")

// info

console.log("Este es un mensaje de información adicional")

// table - mostrar datos en formato tabla

let data = [
    {name: "Juanma", age: 39 },
    {name: "Marcos", age: 37 }
]
console.table(data)


// group 

console.group("Usuario") // Abre el grupo y anida los siguientes console.log
console.log("Nombre: Juanma")
console.log("Edad: 39")
console.groupEnd() // Cierra el grupo


// time  - para medir que se tarda en ejecutar un bloque de código (rendimiento)

console.time("Tiempo de ejecución") // Comienza a medir desde aquí

for (let i = 0; i < 1000; i++) {

}

console.timeEnd("Tiempo de ejecución") // Cierra el time ("IMPORTANTE: Mismo texto")

// Podemos realizar mediciones en paralelo:
console.time("Tiempo de ejecución2")

for (let i = 0; i < 1000; i++) {

}

console.timeEnd("Tiempo de ejecución2")


// assert - muestra mensaje de error si lo que evalua es FALSO. 

let age = 15

console.assert(age >= 18, "El usuario no es mayor de edad, no cumple las condiciones")


// count - cuenta la cantidad de veces con una ETIQUETA específica

console.count("Click")
console.count("Click")

console.countReset("Click") // Resetea el contador 


// trace - muestra el seguimiento de la pila de ejecución (stack trace) - la manera de rastrear la ejecución

// console.trace("Seguimiento de la ejecución.") 
function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución.")
}

funcA()

console.trace("Seguimiento de la ejecución.")


// clear

// console.clear() // Limpiar la terminal/console