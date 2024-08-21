
// Exportación de módulos
// utilizando extension ".mjs"  o add en package.json - SIEMPRE que estemos ejecutando Node

// funciones

export function add(a, b) {
    return a + b;
}


// Propiedades

export const PI = 3.1416
export let name = "aikens"


// Exportación por defecto - No todo es exportable por defecto, comprobar MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

export default function substrac(a, b) {
    return a - b
}


// Clases

export class Circle {
    
    constructor(radius) {
        this.radius = radius;
    }

    // Método para calcular el área del círculo
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
