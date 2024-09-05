
/* Write a functionnnn in JavaScript that takes an array of numbers 
   and returns the sum of all poositive numbers in the array
*/

function sumOfPositiveNumnbers(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0){
            sum += numbers[i]
        }
    }
    return sum;
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6]
console.log(sumOfPositiveNumnbers(arr))


/*
Write a function in JavaScript that takes an array of string as input and return a new array
with the strings sorted in alphabetical order.
*/

function sortStrings(arr) {
    return arr.sort()
}

// Example usage:
const strings = [ "elderberry", "apple", "banana", "cherry", "date"]
console.log(sortStrings(strings))



/*
Write a function in JavaScript that finds the second highest number in an array of numbers
*/

function findSecondHighest(arr){
    const sortedArr = arr.sort((a, b) => b - a)
    return sortedArr[1]
}

// Example usage:
const numbers = [10, 5, 20 , 15, 8]
console.log(findSecondHighest(numbers))


/*
Write a function in JAvaScript that removes duplicates from an array
*/

function removeDuplicates(arr) {
    return [...new Set(arr)]
}

//Example usage:
const numbers2 = [1, 2, 3, 2, 1, 3 ,4 , 5, 4]
console.log(removeDuplicates(numbers2))


/*
Write a function in JavaScript that returns the sum of two numbers
without using the + operator
*/

function add(a, b) {
    while (b !== 0) {  // Se ejecutará mientras b no sea igual a 0
        let carry = a & b // operador & es el "AND" bit a bit - se utiliza para encontrar los bits que coinciden en 1 (a y b) 
        a = a ^ b // operador ^ es el "XOR" bit a bit. - se utiliza para sumar los bits de a y b 
        b = carry << 1  // operador << es el "shift left" - Esto significa que se desplazan los bits de carry una posición a la izquierda 
    }
    return a
}

// Example usage:
console.log(add(5, 7))

/*
Este código usa las operaciones AND, XOR y shift left para simular una suma sin utilizar el operador +.
Es un método ingenioso que aprovecha las operaciones bit a bit para sumar dos números enteros en binario.
*/

/*
Paso 1:
a = 5 (binario 0101), b = 7 (binario 0111)
carry = a & b = 0101 & 0111 = 0101 → carry = 5
a = a ^ b = 0101 ^ 0111 = 0010 → a = 2
b = carry << 1 = 0101 << 1 = 1010 → b = 10


Paso 2:
a = 2 (binario 0010), b = 10 (binario 1010)
carry = a & b = 0010 & 1010 = 0010 → carry = 2
a = a ^ b = 0010 ^ 1010 = 1000 → a = 8
b = carry << 1 = 0010 << 1 = 0100 → b = 4


Paso 3:
a = 8 (binario 1000), b = 4 (binario 0100)
carry = a & b = 1000 & 0100 = 0000 → carry = 0
a = a ^ b = 1000 ^ 0100 = 1100 → a = 12
b = carry << 1 = 0000 << 1 = 0000 → b = 0


Resultado:
Como b = 0, el bucle se detiene y a = 12 es el resultado final de 5 + 7.

*/




/*
Write a function in JavaScript that converts a given string to title case
*/

function toTitleCase(str) {
    return str.replace(/\b\w+/g, function (word) {
        return word.charAt(0).toUpperCase() + 
               word.slice(1).toLowerCase()
    })
}

// Example usage:
console.log(toTitleCase("the quick brown fox"))