// Strings

let myName= "Juan Manuel"
let greeting= "Hola, " + myName + "!"
console.log(greeting)
    console.log(typeof greeting)

    // Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[10])

// Métodos comunes
console.log(greeting.toUpperCase()) //
console.log(greeting.toLocaleLowerCase()) // TOD
console.log(greeting.indexOf("Juan")) // el indice dónde encuentra la palabra 
console.log(greeting.includes("Juan")) // includes comprueba si existe - true

console.log(greeting.slice(0, 10))
console.log(greeting.replace("Juan Manuel", "aikens"))

//Template literals (plantillas literales)  - con string literals 
let message = `Hola, este es mi 
curso de 
JavaScript`
console.log(message)


let email = "aikens@gmail.com"

console.log("Hola, " + myName + ", te hemos enviado un regalo a " + email)