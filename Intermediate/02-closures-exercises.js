// 1.Crea una función counter que devuelva un closure que incremente y devuelva un contador cada vez que se llama.

// 2.Crea un closure que permita acceder a una variable privada y modificarla solo mediante métodos públicos.

// 3.Escribe una función makeMultiplier que acepte un número y devuelva una función que multiplique su argumento por el número dado.

// 4.Crea una función makeGreeting que devuelva un saludo personalizado con una variable local.

// 5.Implementa un closure que pueda recordar el número de veces que ha sido llamado.

// 6.Crea un closure que devuelva una función que mantenga un historial de los valores pasados.

// 7.Desarrolla un closure que retorne una función que calcule el factorial de un número dado.

// 8.Implementa un closure que permita almacenar y recuperar mensajes de un historial.

// 9.(Avanzado) Escribe una función que use un closure para implementar una cola de tareas, donde cada tarea se ejecuta en orden.

// 10.(Avanzado) Crea una función que use closures para implementar un sistema de memoización que almacene resultados de funciones costosas.s




// 1.Crea una función counter que devuelva un closure que incremente y devuelva un contador cada vez que se llama.
// function counter () {
//     let count = 0
//     return function() {
//         count += 1
//         return count
//     }
// }

// const myCounter = counter(); // Crea un closure
// console.log(myCounter()) // 1
// console.log(myCounter()) // 2
// console.log(myCounter()) // 3

// 2.Crea un closure que permita acceder a una variable privada y modificarla solo mediante métodos públicos.

function createCounter() {
    let countador = 0

    return { // Retorna un objeto con métodos públicos para acceder y modificar la variable privada
        increment: function() {
            countador += 1
        },
    
        decrement: function() {
          countador -= 1        
         },
         getCount: function() {
            return countador
         },
    };
}

// Crear una instancia del closure
const counter = createCounter();

// console.log(counter.getCount()); // 0

// counter.increment();
// console.log(counter.getCount()); // 1

// counter.increment();
// console.log(counter.getCount()); // 2

// counter.decrement();
// console.log(counter.getCount()); // 1

// 3.Escribe una función makeMultiplier que acepte un número y devuelva una función que multiplique su argumento por el número dado.

function makeMultiplier(num) {
    
        return function (m) {

            return m * num
            // console.log(result)
        }         
}

const multip = makeMultiplier(4)
console.log(multip(2)) // Output: 4x 2 = 8
console.log(multip(5)) // Output: 4x 5 = 20

// 4.Crea una función makeGreeting que devuelva un saludo personalizado con una variable local.

function makeGreeting() {
    let saludo = "¡Hola!,"; // Variable local
    return function (nombre) {  // La función interna usa la variable local
        return `${saludo} Te doy la bienvenida: ${nombre}` 
    }  
}

const greeting = makeGreeting()
console.log(greeting('Lluvia'))

// 5.Implementa un closure que pueda recordar el número de veces que ha sido llamado.

function closureCount() {
    let count = 0
    return function() {
        count += 1
        return `Hemos llamado a closure ${count} veces`
    }
}

const contador = closureCount()
console.log(contador()) // 1
console.log(contador()) // 2


// 6.Crea un closure que devuelva una función que mantenga un historial de los valores pasados.

function historialSaver() {
    let saver = []
    return function(valor) {
        saver.push(valor)
        return saver
    }
}

const historial = historialSaver()
console.log(historial(5))
console.log(historial(7))
console.log(historial(2))


// 7.Desarrolla un closure que retorne una función que calcule el factorial de un número dado.
function factorialCalculator() {    let result = 1
  
    return function(num) {
        let result = 1
        for (let factor= num; factor > 0; factor --) {

            result *= factor
        }      

        return result        
    }    
}

const factorizalo = factorialCalculator()
console.log(factorizalo(3))


// 8.Implementa un closure que permita almacenar y recuperar mensajes de un historial.

function historialManager() {
    let msg = []

    return {
        addMsg: function(text) {
            // msg += { text: text }
            msg.push(text) // agregamos el mensaje al array
        },
        getMsg: function() {
            return msg
        }
    }
}

const recuperador = historialManager()
recuperador.addMsg("Bienvenido, este es mi primer mensaje")
console.log(recuperador.getMsg())
recuperador.addMsg("Este es otro mensaje")
console.log(recuperador.getMsg())


// 9.(Avanzado) Escribe una función que use un closure para implementar una cola de tareas, donde cada tarea se ejecuta en orden.

function toDo() {
    let toDoList = [];
    let index = 1; // Variable para llevar el índice de la tarea
    // Devuelve un objeto con métodos para agregar y ejecutar tareas
    return {
        addTask: function(task) {
            toDoList.push({ index: index++, task: task }); // Agrega la tarea con un índice
        },
        executeTasks: function() {
            while (toDoList.length > 0) {
                const { index, task } = toDoList.shift(); // Obtiene y elimina la primera tarea de la lista
                console.log(`Executing task ${index}: ${task}`); // Ejecuta la tarea
            }
        }
    };
}

// Uso de la función
const myToDo = toDo();

myToDo.addTask("Task 1");
myToDo.addTask("Task 2");
myToDo.addTask("Task 3");

myToDo.executeTasks();


// 10.(Avanzado) Crea una función que use closures para implementar un sistema de memoización que almacene resultados de funciones costosas.

function memoize(fn) {
    const cache = new Map(); // Crea un caché para almacenar los resultados

    return function(...args) {
        const key = JSON.stringify(args); // Crea una clave única para los argumentos
        if (cache.has(key)) {
            // Si el resultado está en el caché, lo devuelve
            console.log('Fetching from cache for:', key);
            return cache.get(key);
        }
        // Si no está en el caché, lo calcula, lo almacena y lo devuelve
        console.log('Calculating result for:', key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Ejemplo de uso con una función costosa
function slowFunction(num) {
    // Simula una operación costosa
    for (let i = 0; i < 1e9; i++) {}
    return num * 2;
}

// Crea una versión memoizada de slowFunction
const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(10)); // Calculating result for: [10] | 20
console.log(memoizedSlowFunction(10)); // Fetching from cache for: [10] | 20
console.log(memoizedSlowFunction(20)); // Calculating result for: [20] | 40
console.log(memoizedSlowFunction(20)); // Fetching from cache for: [20] | 40
