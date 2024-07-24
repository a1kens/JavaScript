/* En JavaScript, tanto los arrays como los sets son estructuras de datos que pueden usarse para almacenar múltiples valores,
 pero se utilizan en diferentes situaciones debido a sus características y propiedades únicas. Aquí hay una comparación de cuándo usar cada uno:
Arrays
Arrays son útiles cuando necesitas:

Orden de los Elementos: Mantener el orden de los elementos tal como se añaden. Los arrays conservan el orden de inserción. */

let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits); // ['apple', 'banana', 'cherry']


// Acceso por Índice: Acceder a elementos específicos usando un índice. 

let firstFruit = fruits[0]; // 'apple'


// Duplicados Permitidos: Permitir duplicados en la colección de datos.

let numbers = [1, 2, 2, 3, 3, 3];

// Métodos de Array: Usar métodos de arrays como map, filter, reduce, slice, splice, etc.

let doubled = numbers.map(num => num * 2); // [2, 4, 4, 6, 6, 6]

// Iteraciones Complejas: Realizar operaciones complejas de iteración y transformación de datos.

let sum = numbers.reduce((total, num) => total + num, 0); // 14

/* Sets
Sets son útiles cuando necesitas:

Unicidad: Garantizar que todos los elementos sean únicos. Los sets automáticamente eliminan duplicados. */

let uniqueNumbers = new Set([1, 2, 2, 3, 3, 3]);
console.log(uniqueNumbers); // Set { 1, 2, 3 }

// Operaciones de Conjunto: Realizar operaciones de conjuntos como unión, intersección y diferencia.

let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);

// Unión
let union = new Set([...setA, ...setB]); // Set { 1, 2, 3, 4, 5 }

// Intersección
let intersection = new Set([...setA].filter(x => setB.has(x))); // Set { 3 }

// Diferencia
let difference = new Set([...setA].filter(x => !setB.has(x))); // Set { 1, 2 }


// Búsqueda Rápida: Realizar búsquedas rápidas de elementos. Set.has es generalmente más rápido que Array.includes.

uniqueNumbers.has(2); // true
uniqueNumbers.has(4); // false

// Iteración de Valores Únicos: Iterar sobre una colección de valores únicos.

uniqueNumbers.forEach(value => {
    console.log(value);
});
// Output:
// 1
// 2
// 3

// Tamaño de la Colección: Obtener el tamaño de la colección de manera eficiente con Set.size.

console.log(uniqueNumbers.size); // 3


/*Resumen
Usa arrays cuando necesitas mantener el orden de los elementos, permitir duplicados y acceder a los elementos por su índice.
Usa sets cuando necesitas una colección de valores únicos, realizar operaciones de conjuntos o realizar búsquedas rápidas de elementos.
Al elegir entre arrays y sets, considera las operaciones que necesitas realizar y las propiedades que deben cumplir los elementos en tu colección.
Esto te ayudará a seleccionar la estructura de datos más adecuada para tu caso de uso. */