// 1. Concatena dos cadenas de texto
console.log("Concatena dos " + " cadenas de texto:")

const part1 = "Esta es la part1";
const part2 = "y esta la part2";

console.log(`${part1} ${part2}`);

// 2. Muestra la longitud de una cadena de texto
console.log(part1.length)

// 3. Muestra el primer y último carácter de un string
let str = "string"

let firstChar = str[0]
let lastChar = str[str.length - 1]
console.log ("Mi string es: " + str)
console.log("Primer carácter:", firstChar);
console.log("Último carácter:", lastChar);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(str.toUpperCase())

// 5. Crea una cadena de texto en varias líneas
let multiLineString = `
Esta es una cadena de texto
que abarca varias líneas
utilizando template literals en JavaScript.
`;

console.log(multiLineString);

// 6. Interpola el valor de una variable en un string
let nombre = "Juan";
let edad = 30;

// Interpolación de variables en un string usando template literals
let mensaje = `Hola, me llamo ${nombre} y tengo ${edad} años.`;

console.log(mensaje);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let texto = "Este es un ejemplo de texto con espacios en blanco";

console.log(texto);
// Reemplazar espacios en blanco por guiones usando replace y una expresión regular
let textoConGuiones = texto.replace(/\s/g, "-");

console.log(textoConGuiones);

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log("Utilizando includes() para comprobar si el texto con tiene la palabra ejemplo: " + texto.includes("ejemplo"))

// 9. Comprueba si dos strings son iguales
console.log("Comprueba si dos strings son iguales")

let var1 = "Variable uno"
let var2 = "Variable dos"
console.log("Es igual: " + var1 + " == " + var2 + " ? ");
 console.log (var1 == var2)

// 10. Comprueba si dos strings tienen la misma longitud
console.log("var1.length: " + var1.length + "  ==  var2.length: " + var2.length)
console.log(var1.length == var2.length)