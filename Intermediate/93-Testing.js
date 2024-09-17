
// Creamos un array actresses que contiene objetos, cada objeto representa un actriz con dos propiedades: name (nombre) y age (edad).
const actresses = [
    { name: "Brandi", age: 30 }, 
    { name: "Alex", age: 25 },
    { name: "Taylor", age: 27 },
    { name: "Jordan", age: 35 },
    { name: "Morgan", age: 22 },
];
// Uso del método some:  El método .some() retorna true si al menos un elemento del array cumple la condición especificada dentro de la función de callback.
const hasJordan = actresses.some((actresses) => actresses.name === "Jordan");
/*
En este caso, la función de callback está revisando cada objeto del array y verificando si la propiedad name es igual a "Jordan".
Si encuentra algún objeto con ese nombre, el método some() devolverá true.


*/
console.log("hasJordan:", hasJordan);



const buscador = 'avion'
const almacen = 'Avión'
// buscador.localeCompare(almacen)
console.log(buscador.localeCompare(almacen)); // Ouput: -1

/* El método localeCompare() en JavaScript se utiliza para comparar dos cadenas en función del idioma o configuración regional especificada.
 El valor de retorno de localeCompare() puede ser:

-1: si la primera cadena (en este caso, 'buscador') es "menor" que la segunda cadena ('almacen') según el orden lexicográfico de la configuración regional.
0: si ambas cadenas son equivalentes.
1: si la primera cadena es "mayor" que la segunda cadena.
*/

console.log(buscador.localeCompare(almacen, undefined , { sensitivity: 'base'})); // Output: 0
// sensitivity: 'base' ignora tanto las diferencias entre mayúsculas y minúsculas como los acentos.
/*
"base": "Ignora mayúsculas y acentos."
"accent": "Ignora mayúsculas, pero diferencia acentos."
"case": "Ignora acentos, pero diferencia mayúsculas."
"variant": "Distingue todo (mayúsculas, acentos y variantes)."
*/


// Crea una función que muestre la hora y fecha actual cada segundo
function showDate() {
    setInterval(() => {
        let time = new Date();
        console.log(time.toLocaleString()); 
    }, 1000);
}

showDate()













