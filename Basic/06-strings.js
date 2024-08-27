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



// Avanzamos ==>

// CharAt(index)

let str = "Hello World!"

console.log(str.charAt(1))

console.log(str.includes("World")) // nos devuelve true si contiene la palabra señalada

console.log(str.replace("World", "JavaScript")) // sustituimos la palabra señalada por la que le escribimos

console.log(str.slice(0, 5)) // método que extrae una porción de la cadena de texto original "str (Hello, World!)". - 0 índice inicial y 5 índice final

console.log(str.toUpperCase()) // transforma a mayúscula todas las letras que no lo sean en la cadena de texto





