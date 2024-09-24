// Basi to Advanced JavaScript 

// 1. Darle la vuelta a un String
const str = "Automation";

// Crear una nueva cadena invertida utilizando split, reverse y join
const reversed = str.split('').reverse().join('');

console.log(reversed);


// 2. Comprueba si es un Palindromo
function CheckPalindrome(param){
    let checker = param.split('').reverse().join('');
    if(param == checker){
        console.log(`${param} es un palíndromo`)
    } else {
        console.log(`${param} no es un palíndromo`)
    }
}

CheckPalindrome("madam")
CheckPalindrome("perro")


// 3. Serie de Fibonacci



// 4. Factorial de un número
function factorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log(factorial);
}

factorial(3); 



// 5. Comprobador de números primos
function esPrimo(num) {
    // Los números menores o iguales a 1 no son primos
    if (num <= 1) return false;

    // Recorre desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // Si el número es divisible por algún número distinto de 1 y de sí mismo, no es primo
        if (num % i === 0) return false;
    }
    
    // Si no se encontró ningún divisor, el número es primo
    return true;
}


console.log(esPrimo(7));  // true
console.log(esPrimo(10)); // false
console.log(esPrimo(13)); // true
console.log(esPrimo(1));  // false


// 6. Contando Vocales y Consonantes
function CountVC(param) {
    let vocals ="aeiouAEIOU"
    let countV = "0"
    let countC = "0"
    for(let i=0; i < param.length; i++) {
        if(vocals.includes(param[i])){
            countV++
        } else {
            countC++
        }
    }
    console.log(`${param} tiene:`)
    console.log(`${countV} vocales`)
    console.log(`${countC} consonantes`)
}

CountVC("Perrito")


// 7. Sort an Array

// 8. Merge Two Arrays
let array1 = [1, 2, 3, 4]
let array2 = [5, 6, 7, 8]

let array3 = (array1.concat(array2))
console.log(array3)

let array4 = [...array1, ...array2]; // utilizamos el Spread Operator
console.log(array4)

// 9. Encuentra el elemento más largo del array
let arr = ['perro', 'perro', 'gato', 'zorro', 'jirafa']
let max ="" // una cadena vacía, de ese modo cualquier elemento del array que tenga longitud mayor sea considerado

for (let i=0; i < arr.length; i++) {
    if(arr[i].length > max.length) {
        max = arr[i]
    } 
}
console.log(max)


// 10. Elimina los duplicados de un array
let mySet = new Set(arr) // Convertimos el array en un Set y con ello eliminamos los duplicados
console.log(mySet)

// 11. Check if a Number is Amstron

// 12. Reverse a Number

// 13. Calculate GCD of Two Numbers

// 14. Check for Anagram

// 15. Count the Number of Digits in a Number

// 16. Print the Prime Numbers in a Range