
// Exportación de módulos
// utilizando extension ".mjs"  o add en package.json - SIEMPRE que estemos ejecutando Node

// Creado package.json - nuestro proyecto va a funcionar como un módulo, no van a ser ficheros independientes y podamos importar/ exportar



// funciones

export function add(a, b) {
    return a + b;
}


// Propiedades

export const PI = 3.1416
export let name = "aikens"


// Exportación por defecto - No todo es exportable por defecto, comprobar MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
// No se puede duplicar default en un mismo archivo - no se puede utilizar más de una vez por archivo

export default function substrac(a, b) {
    return a - b
}

// export default class MyClass {

//     func() {
//         console.log("Esta es mi default Class ")
//     }
// }
// Clases

export class Circle {
    
    constructor(radius) {
        this.radius = radius;
    }

    // Método para calcular el área del círculo
    area() {
        return Math.PI * Math.pow(this.radius, 2)
        // return Math.PI * this.radius * this.radius;
    }
}
