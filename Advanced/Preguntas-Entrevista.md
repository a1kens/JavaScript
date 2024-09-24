Nivel Experto
1. ¿Cómo funcionan las "generators" en JavaScript?
Generators son funciones que pueden ser pausadas y reanudadas. Usan la sintaxis function* y el método yield.

javascript
Copiar código
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
2. ¿Qué es el "proxy" en JavaScript y para qué se usa?
Proxy es un objeto que permite interceptar y redefinir operaciones fundamentales en otro objeto, como la lectura de propiedades o la invocación de métodos.

javascript
Copiar código
const handler = {
  get: (target, prop) => {
    return prop in target ? target[prop] : 'Property not found';
  }
};

const proxy = new Proxy({}, handler);
console.log(proxy.someProperty); // 'Property not found'
3. ¿Qué es el "Symbol" en JavaScript y cómo se usa?
Symbol es un tipo de dato primitivo usado para crear identificadores únicos para propiedades de objetos.

javascript
Copiar código
const uniqueSymbol = Symbol('description');
const obj = {
  [uniqueSymbol]: 'value'
};

console.log(obj[uniqueSymbol]); // 'value'
4. ¿Cómo funciona el "async/await" en JavaScript?
async/await es una forma de manejar operaciones asíncronas de manera más legible. async convierte una función en una función que retorna una promesa, y await se usa para esperar el resultado de una promesa.

javascript
Copiar código
async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  return data;
}

fetchData().then(data => console.log(data));
5. ¿Qué es la "memoria débil" y cómo se usa en JavaScript?
WeakMap y WeakSet son estructuras de datos que permiten almacenar referencias débiles a los objetos. No previenen que el recolector de basura elimine objetos, lo que evita pérdidas de memoria.

javascript
Copiar código
let weakMap = new WeakMap();
let obj = {};

weakMap.set(obj, 'value');
console.log(weakMap.get(obj)); // 'value'

obj = null; // La referencia al objeto se elimina
6. ¿Qué es el "event loop" y cómo maneja las operaciones asíncronas?
El event loop maneja la ejecución de código asíncrono y coordina entre la pila de llamadas (call stack) y la cola de tareas (task queue). Las tareas se colocan en la cola y se ejecutan una vez que la pila de llamadas está vacía.
7. ¿Cómo funcionan las "decorators" en JavaScript?
Los decorators son una propuesta para añadir anotaciones y modificar clases y métodos en JavaScript. No están implementados en la especificación oficial aún, pero puedes usar @babel/plugin-proposal-decorators para transpilar código que usa esta sintaxis.

javascript
Copiar código
function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Example {
  @readonly
  myMethod() {
    console.log('This method is readonly');
  }
}
8. ¿Qué es el "WeakRef" en JavaScript y cómo se utiliza?
WeakRef es una referencia débil a un objeto, permitiendo que el objeto sea recolectado por el garbage collector si no hay otras referencias fuertes a él