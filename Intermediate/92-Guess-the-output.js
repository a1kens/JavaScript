// 1.
let a = 5
let b = a++
let c = a + b
// Guess the Outuput?
console.log(c);


// 2.
const numbers = [1, 2, 3]
const [x, y, z] = numbers
// Guess the Outuput?
console.log(x, y, z) // 123  - La desestructuración de arrays te permite extraer valores de un array y asignarlos a variables de forma más concisa


//Guess the output

const num = [1, 2, 3, 4, 5]
let product = 1

for(let i=0; i <=num.length; i++) {
    product *= num[i]
}
console.log(product)

/*  "i < num.length": Ahora el bucle termina antes de que i sea igual a 5, lo que evita acceder a un índice fuera de los límites del array.
La razón por la que obtienes NaN (Not a Number) es porque en el bucle for, estás accediendo a un índice fuera de los límites del array num
en la última iteración. El índice del array empieza desde 0, y el array num tiene 5 elementos, por lo tanto, los índices válidos van de 0 a 4.

En tu código, la condición del bucle es i <= num.length. Esto significa que en la última iteración, cuando i es igual a num.length (que es 5),
intentas acceder a num[5], pero el índice 5 no existe en el array. Esto da como resultado undefined.
Cuando intentas multiplicar product por undefined, el resultado es NaN.
*/

function sum(a, b = a) {
    return a + b;
}

console.log(sum(1))