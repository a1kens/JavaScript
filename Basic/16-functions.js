// Funciones - lower Camel case

// Simple

function myFunction () {
    console.log("Bienvenido a las funciones")

}

myFunction();

for (let i = 0; i < 5; i++) {
    myFunction();
}


// Con parámetros - 

function myFunctionParams(name) {

    console.log(`Hola ${name}`);
}

myFunctionParams("Juanma")
myFunctionParams("Lluvia")


// Funciones anónimas - no tienen un nombre definido ==> asociarlas a una variable o constante para poder utilizarlas
myFunc = function (name) {

     console.log(`Hola ${name}`);
}

myFunc("Lily")


 // arrow functions

 let myArrowFunc = (name) => {
    console.log(`Hola ${name}`);
}



let myArrowFunc2 = (name) => console.log(`Hola ${name}`);
myArrowFunc("Rosa")


// Parámetros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 7)
sum(5) // NaN - no ha recibido los dos parámetros
sum() // NaN - no ha recibido los dos parámetros

// para evitar que el usuario solo meta un parametro o ninguno
function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}
defaultSum() // nos devolverá 0 (0 + 0)
defaultSum(5) // nos devolverá 5 ( 5 + 0)
defaultSum(2, 2) // nos devolverá 4 ( 2 + 2)


function mult (a, b) {
    return a * b
}

let result = mult (5, 6)
    console.log(result)


// Funciones anidades - 

function extern() { 
    console.log("Función externa");
    function intern(){
        console.log("Función interna")
    }
    intern() // Función interna
}
extern() // Función externa
// intern() // Error - intern no está definido - fuera del scope



// Funciones de orden superior

function applyFunc ( func, param) {
  func(param)
}

applyFunc(myFunction, "Función de orden superiorrr")


// forEach - una función que nos permite asociar bucles

let numbers = [1, 2, 3, 4, 5]

numbers.forEach(function(number) {
    console.log(number)
})


myArray = [1, 2, 3, 4]

myArray.forEach (function(value) {
    console.log(value)
})

myArray.forEach((value) => console.log("Ahora con arrow function: " + value))