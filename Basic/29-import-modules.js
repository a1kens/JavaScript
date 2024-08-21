// Importación de módulos
// utilizando extension ".mjs"  o add en package.json

// 29-import-modules.mjs
import { add, PI, name, Circle } from "./28-export-modules.js";
import substrac from "./28-export-modules.js";  // las importaciones "default" se realizan sin {} y podemos manejarlo con cualquier nombre por ejemplo "resta"s



// funciones
console.log(add(5, 10)); // Debería imprimir 15 en la consola



//  Propiedades
console.log(PI)
console.log(name)


// Importación por defecto

console.log(substrac(10, 5))


// Clases

const myCircle = new Circle(4); // Radio de 5 unidades

console.log(`El área del cirlo es:  ${myCircle.area()}`);


// import { MyImport } from "./directory/file.js"

