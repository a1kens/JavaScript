Nivel Intermedio
1. ¿Qué es el concepto de "closures" (cierres) en JavaScript?
Closures son funciones que mantienen acceso a las variables del ámbito en el que fueron creadas, incluso después de que el ámbito original haya terminado.

javascript
Copiar código
function outerFunction() {
  let outerVar = 'I am outside!';
  function innerFunction() {
    console.log(outerVar); // 'I am outside!'
  }
  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // 'I am outside!'
2. ¿Qué es la "Event Loop" en JavaScript?
La Event Loop es el mecanismo que permite a JavaScript realizar operaciones no bloqueantes. Maneja la ejecución de código, eventos, y colas de tareas.
Call Stack: Ejecuta el código síncrono.
Callback Queue: Contiene las funciones callback que esperan a ser ejecutadas después de que el Call Stack esté vacío.
3. ¿Qué es una "IIFE" (Immediately Invoked Function Expression) y para qué se usa?
Una IIFE es una función que se ejecuta inmediatamente después de su definición. Se usa para crear un ámbito local y evitar la contaminación del ámbito global.

javascript
Copiar código
(function() {
  console.log('I am an IIFE!');
})();
4. ¿Qué es el "this" en JavaScript y cómo cambia su valor?
this se refiere al contexto de ejecución actual.

En una función, this se refiere al objeto global (window en navegadores) en modo no estricto, y undefined en modo estricto.
En métodos de objetos, this se refiere al objeto que invoca el método.
En funciones flecha, this se hereda del contexto léxico.
javascript
Copiar código
const obj = {
  name: 'Alice',
  greet: function() {
    console.log(this.name);
  }
};

obj.greet(); // 'Alice'
5. ¿Cómo se manejan los errores en JavaScript?
Los errores se manejan usando try, catch, y finally.

javascript
Copiar código
try {
  // Código que puede fallar
  throw new Error('Something went wrong');
} catch (error) {
  console.error(error.message); // 'Something went wrong'
} finally {
  console.log('Cleanup code');
}
6. ¿Qué son los "template literals" en JavaScript?
Template literals permiten crear cadenas de texto multilinea y con interpolación de expresiones. Se definen usando backticks (`).

javascript
Copiar código
const name = 'Alice';
const message = `Hello, ${name}!`;
console.log(message); // 'Hello, Alice!'
7. ¿Cómo funciona el "destructuring assignment" en JavaScript?
Destructuring assignment permite extraer valores de arrays u objetos y asignarlos a variables.

javascript
Copiar código
// Destructuring de arrays
const [a, b] = [1, 2];

// Destructuring de objetos
const { name, age } = { name: 'Alice', age: 25 };
8. ¿Qué es el "spread operator" y cómo se utiliza?
El spread operator (...) se usa para expandir elementos de un array o propiedades de un objeto.

javascript
Copiar código
// En arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// En objetos
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }
9. ¿Cómo funciona la herencia en JavaScript?
La herencia se puede lograr usando prototipos o la sintaxis de clases ES6.

javascript
Copiar código
// Herencia con prototipos
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}`);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog('Buddy');
dog.sayHello(); // 'Hello, I'm Buddy'
10. ¿Qué es el "event delegation" y por qué es útil?
Event delegation es una técnica para manejar eventos en elementos que se añaden dinámicamente al DOM. Consiste en añadir un solo manejador de eventos a un ancestro común en lugar de a cada elemento individual.

javascript
Copiar código
document.getElementById('parent').addEventListener('click', function(event) {
  if (event.target && event.target.matches('button.child')) {
    console.log('Child button clicked!');
  }
});
