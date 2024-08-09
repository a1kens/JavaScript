// 1. Crea un array que almacene cinco animales

let animales = ["perro", "gato", "caballo", "leon", "aguila"]
console.log(animales)
// 2. Add dos más. Uno al principio y otro al final
animales.push("mirlo blanco") // insertamos en el último lugar del array
animales.unshift("elefante") // insertamos en el primer lugar del array
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición
animales.splice(3, 1); // eliminara 1 elemento de la posición 3 - en este caso el caballo
console.log(animales)

// 4. Crea un set que almacene cinco libros
mySet = new Set(["El hombre en busca de sentido", "El tercer ojo", "El Hobbit", "Ser feliz en Alaska", "Invicto"])
   console.log(mySet)


// 5. Add dos más. Uno de ellos repetido (no se puede)
// mySet.add("La paradoja del chimpancé", "El don de la sensibilidad") // Posiblemente pienses en introducir varios elementos a la vez

/* En JavaScript, el método add de un Set solo puede agregar un valor a la vez.
 Si deseas agregar múltiples elementos a un Set, necesitas llamar a add por separado para cada elemento */

mySet.add("La paradoja del chimpancé");
mySet.add("El don de la sensibilidad");

console.log(mySet)

// 6. Elimina uno concreto a tu elección

mySet.delete("El Hobbit") // eliminamos el elemento indicado del set
console.log(mySet)


// 7. Crea un mapa que asocie el número del mes a su nombre

myMap = new Map ([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

console.log(myMap)


// 8. comprueba si el mes número 5 existe en el map e imprime su valor

console.log(myMap.has(5)) // Comprobamos si existe el número 5 y nos devuelve "true"

// 9. Add al mapa una clave con un array que almacene los meses de verano

myMap.set('verano', ["Junio", "Julio", "Agosto"]);

console.log(myMap);



// 10. Crea un array, transformalo  a un set y almacenalo en un Map
console.log("10. Crea un array, transformalo a un set y almacenalo en un Map")

{ const myArr = ["apple", "banana", "apple", "orange", "banana"]; // Paso 1: Crear un array

const mySet = new Set(myArr); // Paso 2: Transformar el array en un set para eliminar duplicados

const myMap = new Map(); // Paso 3: Almacenar el set en un Map


}

myMap = new Map ([
    [ "fruits", mySet],    
    
])

console.log(myMap) 

console.log("Se ha almacenado myMap: " + JSON.stringify([...myMap.entries()]));
// myMap.set("fruits", mySet);
// console.log(myMap.set("fruits", mySet)) // lanzando directamente
// console.log(myMap); // Mostrar contenido del map



console.log("Haciendo Pruebas ")
// const vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚüÜ';
const texto = "Hola, como estas?";
let contador = 0;
const vocales = 'aeiouAEIOU';

for (const letra of texto) { 
    if (vocales.includes(letra)) {
        contador++;
    }
}
//   console.log("example");  
console.log("La cadena de texto insertada contiene: " + contador + " vocales");