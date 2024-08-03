// Ejercicios de  funciones

/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
let num1 = 0
let num2 = 0

function sumaBasic (num1, num2) {
    suma = num1 + num2
    console.log(`El resultado de la sumaBasic es: ${suma}`);
}

let suma = (num1, num2) => {
    suma = num1 + num2
    console.log(`El resultado de la sumaArrow es: ${suma}`);
}

suma(2, 3)
sumaBasic(2, 3)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos


function buscaMayor(numArr) {
    let numMayor = numArr[0]; 

    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] > numMayor) {
            numMayor = numArr[i];
        }
    }

    return numMayor;
}


const numeros = [1, 2, 4, 5, 6, 7, 8, 9, 10];
const mayor = buscaMayor(numeros);
console.log(`El número mayor es: ${mayor}`);




// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function cuentaVocales(str) {
    let i = 0;
    let count = 0;
    let vocales = "aeiouAEIOU";

    while (i < str.length) {
        if (vocales.includes(str[i])) {
            count++;
        }
        i++;
    }
    console.log(`El número de vocales del string es: ${count}`);
    return count;
    
}

cuentaVocales("LLuvia")

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

    // let arrayMayusculas = arrayOriginal.map(str => str.toUpperCase());
     
function arrayMayusculas(arrayOriginal) {
    let arrayMayusculas = [];
    console.log(arrayOriginal)
    for (let i = 0; i < arrayOriginal.length; i++) {
        arrayMayusculas.push(arrayOriginal[i].toUpperCase());
    }
    console.log(arrayMayusculas);
    return arrayMayusculas;
}

arrayMayusculas(["casa", "perro", "tenedor", "mortadela"]);


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(num) {
    if (num < 2) {
        console.log("false - no es primo")
        return false;
        
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("false - no es primo")
            return false;        
        }
    }
      console.log("true - el número es primo")
    return true;
  
}

esPrimo(23)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos




// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaPares(num) {
  let suma = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      suma += num[i];     
    }
  }
  console.log("La suma es de números pares es: " + suma)
  return suma;
} 

sumaPares([2, 3, 5, 6, 7, 9, 11, 13, 15])



// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function cuadrados(numArr) {
  let numArrCuadrados = [];
  for (let i = 0; i < numArr.length; i++) {
    numArrCuadrados.push(numArr[i] ** 2);
  }
  console.log("Cuadrados: " + numArrCuadrados);
  return numArrCuadrados;
}

cuadrados([ 1, 2, 3, 4, 5])

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertido(str) {
    
    let arr = str.split(" "); // split(" ") divide la cadena en palabras donde hay espacios.    
   
    let cadenaInvertida = arr.reverse(); // reverse() invierte el orden de los elementos en el array.    
 
    let resultado = cadenaInvertida.join(" "); // join(" ") une los elementos del array en una cadena, separándolos con espacios.    

    return resultado;  // Finalmente, la función devuelve la cadena con las palabras en orden inverso.
}

console.log(invertido("Esta es una cadena de prueba")); // "prueba de cadena una es Esta"


// 10. Crea una función que calcule el factorial de un número dado


function factorial (n) {

console.log("Hagamos el factorial >>")

let subR = 1
let i = n

while (i > 0) {
    if ( i > 1) {
        subR *= i
              
        i--
    } else if  ( i == 1  ) {
      
         console.log( "El factorial de " + n + " es: " + subR)    
       
       i--
       break
    } else { 
        console.log("Error: No se puede calcular el factorial de un número negativo.")
        
    }  
}
    
}

factorial(6)