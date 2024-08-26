
// 1. Crea una función que utilice error correctamente
function testing(num) {
    if (num > 0){        
        
        console.log(`Este es el número seleccionado ${num}.` )
    } else {
        console.error("Has seleccionado un número incorrecto")
        console.log("Debe seleccionar un número mayor que 0.")
    }
}

testing(5)

// 2. Crea una función que utilice warn correctamente

function warn(work) {
    if(work) {
        console.log("Keep going, you are on the way")
    } else {
        console.warn ("Debes esforzarte más si quieres conseguir tus objetivos!")
    }
}

warn(true)
warn(false)

// 3. Crea una función que utilice info
function study(study) {
    if(study){
        console.info("Estás estudiando, sigue así!")
    } else {
        console.info("No estás estudiando, debes tomar acción")
    }
}

study(true)
study(false)

// 4. Utiliza table

let data = [
    {name: "Juanma", alias: "aikens", age: 39 },
    {name: "Marcos", alias: "blink", age: 37 }
]
console.table(data)

// 5. Utiliza group

console.group("Usuario") // Abre el grupo y anida los siguientes console.log
console.log("Nombre: Juanma")
console.log("Alias: aikens")
console.log("Edad: 39")
console.groupEnd() // Cierra el grupo

// 6. Utiliza time

console.time("Tiempo de ejecución") // Comienza a medir desde aquí

for (let i = 0; i < 5000; i++) {

}

console.timeEnd("Tiempo de ejecución") // Cierra el time ("IMPORTANTE: Mismo texto")

// 7. Valida con assert si un número es positivo

let age = 15

console.assert(age >= 18, "El usuario no es mayor de edad, no cumple las condiciones")

// 8. Utiliza count

console.count("for") // 1
console.count("for") // 2
console.count("for") // 3

console.countReset("for") // reseteamos el valor

console.count("for") // volvemos a iniciar el count y tomará valor 1

// 9. Utiliza trace

function functionA() {
    console.trace("In functionA"); // Imprime la traza del stack aquí
    functionB();
}

function functionB() {
    functionC();
}

function functionC() {
    // Este es el punto donde queremos ver la traza del stack
    console.log("Dentro de functionC");
    console.trace("In functionC"); // Imprime la traza del stack aquí
}


functionA(); // Llamada inicial a functionA


// 10. Utiliza clear

// console.clear() // Nos limpará la terminal - Dejamos comentado para poder trabajar