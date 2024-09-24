Cuál es la diferencia entre LET, VAR y CONST?
Explica el concepto de HOISTING en JAVASCRIPT.
Qué es una función de CallBack?
Qué es el DOM y cómo se interactua con él usando JS?
Cómo se define una función en JAVASCRIPT?
Cuál es la diferencia ente == y ===?
Qué es el operador TYPEOF y cómo se usa?
Cómo se maneja una promera con JAVASCRIPT?
Cómo se agrega un elemento a un array?




1. ¿Cuál es la diferencia entre let, var y const?
var:

Tiene un ámbito de función o global.
Puede ser redeclarado y actualizado en su ámbito.
Es hoisted (es decir, se eleva al inicio de su ámbito, pero su inicialización no).
let:

Tiene un ámbito de bloque.
Puede ser actualizado, pero no redeclarado en el mismo ámbito.
Es hoisted, pero no está disponible hasta que se inicializa (temporal dead zone).
const:

Tiene un ámbito de bloque.
No puede ser redeclarado ni actualizado. Se usa para valores constantes.
Es hoisted, pero no se puede usar hasta que se inicializa.
2. Explica el concepto de hoisting en JavaScript.
Hoisting es un comportamiento en JavaScript donde las declaraciones de variables y funciones se mueven al inicio de su ámbito antes de que se ejecute el código.
Variables declaradas con var son elevadas (declaración) pero no su asignación.
Funciones son elevadas completamente (declaración y definición).
let y const también son elevadas, pero no se pueden usar antes de su declaración debido a la temporal dead zone.
3. ¿Qué es una función de callback?
Una función de callback es una función que se pasa como argumento a otra función y que se ejecuta después de que la función externa ha completado su tarea.
Se usa comúnmente para manejar operaciones asíncronas, como solicitudes de red o temporizadores.
javascript
Copiar código
function fetchData(callback) {
  setTimeout(() => {
    callback('Data received');
  }, 1000);
}

fetchData(data => {
  console.log(data); // 'Data received'
});
4. ¿Qué es el DOM y cómo se interactúa con él usando JS?
DOM (Document Object Model) es una representación estructural del contenido de una página web como un árbol de nodos.
Permite a JavaScript leer y modificar el contenido y la estructura de la página.
Interacción: Se usa document.getElementById, document.querySelector, element.innerHTML, etc.
javascript
Copiar código
// Ejemplo de manipulación del DOM
const heading = document.getElementById('main-heading');
heading.textContent = 'Nuevo Título';
5. ¿Cómo se define una función en JavaScript?
Las funciones se pueden definir de varias maneras:
Declaración de función:

javascript
Copiar código
function greet(name) {
  return `Hello, ${name}!`;
}
Expresión de función:

javascript
Copiar código
const greet = function(name) {
  return `Hello, ${name}!`;
};
Función flecha:

javascript
Copiar código
const greet = (name) => `Hello, ${name}!`;
6. ¿Cuál es la diferencia entre == y ===?
== (igualdad abstracta):
Compara los valores después de realizar una conversión de tipo implícita si es necesario.
=== (igualdad estricta):
Compara tanto el valor como el tipo sin realizar ninguna conversión de tipo.
javascript
Copiar código
console.log(5 == '5');  // true, debido a conversión de tipo
console.log(5 === '5'); // false, diferente tipo
7. ¿Qué es el operador typeof y cómo se usa?
El operador typeof se utiliza para obtener el tipo de dato de una variable o expresión.
javascript
Copiar código
console.log(typeof 42);          // 'number'
console.log(typeof 'hello');     // 'string'
console.log(typeof true);        // 'boolean'
console.log(typeof {});          // 'object'
console.log(typeof undefined);   // 'undefined'
console.log(typeof function(){}); // 'function'
8. ¿Cómo se maneja una promesa con JavaScript?
Promesas representan el resultado eventual de una operación asíncrona.
Se utilizan para manejar operaciones asíncronas y se pueden encadenar con .then() y manejar errores con .catch().
javascript
Copiar código
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success!'), 1000);
});

promise
  .then(result => console.log(result)) // 'Success!'
  .catch(error => console.error(error));
9. ¿Cómo se agrega un elemento a un array?
Se pueden usar varios métodos para agregar elementos a un array:
push(): Añade uno o más elementos al final del array.

javascript
Copiar código
let arr = [1, 2, 3];
arr.push(4); // arr = [1, 2, 3, 4]
unshift(): Añade uno o más elementos al principio del array.

javascript
Copiar código
let arr = [1, 2, 3];
arr.unshift(0); // arr = [0, 1, 2, 3]
Método splice(): Inserta elementos en cualquier posición del array.

javascript
Copiar código
let arr = [1, 2, 3];
arr.splice(1, 0, 'a', 'b'); // arr = [1, 'a', 'b', 2, 3]