// 1. Crea una variable para cada operación aritmética
let a = 10
let b = 5

suma = a + b
resta = a - b
multiplicacion = a * b
division = a / b

modulo = a % b
exponente = a ** b

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

console.log("Valor de a:", a)
console.log("Valor de b:", b)
console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicación: ${multiplicacion}`);
console.log(`División: ${division}`);
console.log(`Módulo: ${modulo}`);
console.log(`Exponente: ${exponente}`);

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
// let a = 10;
// let b = 5;
let c = "10";
let d = 10;

console.log("Valor de a:", a)
console.log("Valor de b:", b)
console.log("Valor de c:", c, typeof c)
console.log("Valor de d:", d)

console.log("Imprime 5 comparaciones verdaderas con diferentes operadores")
// Comparación de igualdad
console.log(a == c); // true, porque 10 es igual a "10" en valor

// Comparación estricta de igualdad
console.log(a === d); // true, porque 10 es igual a 10 en valor y tipo

// Mayor que
console.log(a > b); // true, porque 10 es mayor que 5

// Menor o igual que
console.log(b <= a); // true, porque 5 es menor o igual a 10

// Distinto
console.log(a != b); // true, porque 10 no es igual a 5

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("Imprime 5 comparaciones falsas con diferentes operadores")
// Comparación de igualdad
console.log(a == b) // false, porque 10 no es igual a 5
// Comparación estricta de igualdad
console.log(a === c) // false, porque 10 no es igual a "10" en valor si pero no en tipo
// Mayor que
console.log( b > d) // false, porque 5 no es mayor que 10
// Menor o igual que
console.log(d <= b) // false, porque 10 no es menor o igual que 5
// Distinto
console.log( a != d) // false, porque 10 no es distinto de 10


// 5. Utiliza el operador lógico and
console.log ("Operador lógico: &&")
console.log (6 < 12 && 33 > 24) // true, se cumplen las dos expresiones
console.log(4 < 10 &&  15 < 7) // false, se cumple una de las dos expresiones
console.log( 4 < 8 && 20 < 12) // false, no se cumple ninguna de las dos expresiones

// 6. Utiliza el operador lógico or
console.log ("Operador lógico: or")
console.log ( 6 > 12 || 20 > 25) // false, no se cumplen ninguna de las expresiones
console.log ( 6 > 12 || 20 < 25) // true, se cumple una de las dos expresiones
console.log ( 6 < 12 || 20 < 25) // true, se cumplen las dos expresiones

// 7. Combina ambos operadores lógicos
console.log ("Combina ambos operadores (&&, ||)")
console.log( 4 > 8 && 12 > 20 || 40 < 50)

// 8. Añade alguna negación
console.log("Añadimos '!' a la expresion anterior y cambia a false")
console.log (!( 4 > 8 && 12 > 20 || 40 < 50))

// 9. Utiliza el operador ternario
const isSunny = true

isSunny ? console.log("Hace un día magnífico, vamos a la playa!") : console.log("Hoy nos quedamos programando JavaScript")

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log("Combina operadores aritméticos, de comparáción y lógicas")
{
let a = 10;
let b = 5;
let c = 15;
let d = 20;

// 1. Operación aritmética combinada con comparación y lógica
let result1 = (a + b > c) && (d - c == b); 
// (10 + 5 > 15) && (20 - 15 == 5)
// (15 > 15) && (5 == 5)
// false && true => false
console.log(result1); // false

// 2. Operación aritmética combinada con comparación y lógica
let result2 = (a * b < d) || (c / b == 3);
// (10 * 5 < 20) || (15 / 5 == 3)
// (50 < 20) || (3 == 3)
// false || true => true
console.log(result2); // true

// 3. Combinación de suma, comparación y lógica
let result3 = (a + c == d) && (b * 2 == c / 3 * b);
// (10 + 15 == 20) && (5 * 2 == 15 / 3 * 5)
// (25 == 20) && (10 == 25)
// false && false => false
console.log(result3); // false

// 4. Combinación de resta, comparación y lógica
let result4 = (d - a >= c) || (a - b < 0);
// (20 - 10 >= 15) || (10 - 5 < 0)
// (10 >= 15) || (5 < 0)
// false || false => false
console.log(result4); // false

// 5. Combinación de exponenciación, comparación y lógica
let result5 = (b ** 2 == a) && !(a / b > 3);
// (5 ** 2 == 10) && !(10 / 5 > 3)
// (25 == 10) && !(2 > 3)
// false && !false => false
console.log(result5); // false
}