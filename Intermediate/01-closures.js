// Explicación sobre Closures

/*
¿Qué es un Closure?
Un closure es una función que recuerda el entorno en el que fue creada, incluso después de que la función externa haya terminado de ejecutarse.
En otras palabras, una closure tiene acceso a las variables del ámbito en el que fue definida, incluso cuando es ejecutada fuera de ese ámbito.
*/

function makeCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

/* Explicación:
1. makeCounter define una variable count y una función anidada.
2. La función anidada incrementa count y devuelve su valor.
3. Cuando llamamos a makeCounter, devolvemos la función anidada, que recuerda la variable count de su entorno original.
4. Cada llamada a counter() incrementa y devuelve el valor de count, que sigue existiendo gracias al closure.
*/




/* Uso de Closures - Closures son útiles para:
1.-Encapsulamiento de Datos: Permiten crear datos privados que no pueden ser modificados directamente desde fuera de la función.
2.-Funcionalidad de Membresía: Permiten mantener el estado entre llamadas a funciones.
3.-Factory Functions: Pueden generar funciones con comportamientos similares pero con datos distintos.
*/

// Ejemplo de Encapsulamiento de Datos:
function createPerson(name) {
  return {
    getName: function() {
      return name; // Accede a la variable privada 'name'
    },
    setName: function(newName) {
      name = newName; // Modifica la variable privada 'name'
    }
  };
}

const person = createPerson('Alice');
console.log(person.getName()); // 'Alice'
person.setName('Bob');
console.log(person.getName()); // 'Bob'

/* Explicación
1.-createPerson devuelve un objeto con dos métodos que acceden y modifican la variable privada name.
2.-La variable name está encapsulada dentro del closure, lo que impide su modificación directa desde fuera del objeto.
*/


// Ejemplo de Factory Function:
function makeMultiplier(factor) {
  return function(number) {
    return number * factor; // Usa la variable 'factor' del entorno externo
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

/* Explicación
1.-makeMultiplier crea una función que multiplica un número por un factor dado.
2.-Cada llamada a makeMultiplier devuelve una nueva función que recuerda el factor que se le pasó originalmente.
*/


// Explicación sobre Event Loop
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End');

/*
Aquí, se programa una función para que se ejecute después de 0 milisegundos. Aunque el tiempo es 0,
el setTimeout no ejecuta la función de inmediato. En lugar de eso, la función se pone en la cola de tareas (task queue)
para ser ejecutada después de que la pila de ejecución (call stack) esté vacía.
*/