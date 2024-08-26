// Error handling (excepción) - Evento anómalo, sucede algo anómalo en nuestro código

let myObject
console.log(myObject)
// console.log(myObject.email)  // no contiene propiedad email

// Tratamiento de errores


// Captura del error

try {
    // Código que intenta ejecutar
    console.log(myObject.email) // Se ejecuta con error que controlamos con el try-catch
    // console.log(myObct) // Se ejecuta sin errores
    console.log("Finaliza la ejecución sin errores")  // no se imprime si se produce error
} catch (error) {
    // Bloque de error
    console.log("Se ha producido un error:", error.message) // capturamos el bloque de error 
}



// finally

try {
    
    console.log(myObject.email) 
    console.log("Finaliza la ejecución sin errores") 
} catch (error) {

    console.log("Se ha producido un error:", error.message)
} finally {
    console.log("Este código se ejecuta siempre")
}



// throw 

// throw new Error("Se ha producido un error ")  // es un error que decido lanzarlo yo 

function sum(a, b) {
    if (typeof a === "number" && typeof b === "number"){
        console.log("Es instancia de número")
    }   
    return a + b
}   

console.log(sum(5, 10))

    // if (typeof a === "number") {
    //     console.log("Es un número")
    // }

function sumIntegers(a, b) {

    if  (typeof a !== "number" || typeof b !== "number") {        
        throw new TypeError("Esta operación sólo suma números")

    }
    if  (!(Number.isInteger(a)) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")  // controlamos que sean número entero
        // console.log("Esta operación sólo suma números enteros")
    }
    if (a == 0 || b == 0) {
        throw new MyCustomSumIntegerError("Está intentando utilizar valor 0 en alguno de los parámetros")
    }

    return a + b
}

// Captura de error
try {
    console.log(sumIntegers(5,10)) // llamada correcta
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10)) // llamada con error interno
    // console.log(sumIntegers(5, "10")) // llamada con error interno
    // console.log(sumIntegers("5", "10")) // llamada con error interno
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}


// Capturar varios tipos de errores

try {
   
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10)) // llamada con error interno
    
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)   
    } else {
        console.log("Se ha producido un error:", error.message)
    }
    
}

// Crear excepciones personalizadas

class MyCustomSumIntegerError extends Error {
    constructor (message, a, b) {
        super(message)
        this.a = a // almacenar mis propiedades
        this.b = b // almacenar mis propiedades
    }

    printNumbers() {
        console.log(this.a," + ", this.b)
        
    }

}

console.log(MyCustomSumIntegerError(0, 10))