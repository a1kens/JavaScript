// 6 Formas de convertir un String en Array con JavaScript

/*
Una cadena de texto en javascript puede ser convertida en Array con 6 métodos diferentes:

split()
Array.from()
[...spread]
Object.assign()
for loop
JSON.parse()
*/

/*
split() - método es usado para dividir la cadena de texto basándose en un separador dado para regresar un Array con los elementos separados.
*/

let str = 'Perro, Gato, Lobo, Caballo, Tigre'
let array = str.split(',') // dividiremos la cadena de texto por una coma

console.log(array) // Output: [ 'Perro', ' Gato', ' Lobo', ' Caballo', ' Tigre' ]

// Si quieres separar una cadena de texto por cada letra que conteenga, entonces puedes pasar una cadena vacía: ("") como el separador

{
    let str = 'perro'
    let arr = str.split('')

    console.log(arr)  // Output: [ 'p', 'e', 'r', 'r', 'o' ]
}


// el método split() acepta un segundo parámetro en el cual podemos indicar un limite de divisiones. Este limite decide cuántos elementos serán incluidos en el array retornado

{
    let str = 'Golf | Hockey | Football | Tennis';
    let arr = str.split(' | ', 2); // le indicamos que tomaremos 2 elementos

    console.log(arr); // Output: [ 'Golf', 'Hockey' ]
}



/*
 Array.from() - retorna un Array a partir de la cadena de texto que se le pasa por parámetro.
 Solo hay que pasarle una cadena de texto al método .from() para obtener un array con cada letra del texto,
*/

{
    let str = 'perro'
    let arr = Array.from(str)

    console.log(arr) // Ouput: [ 'p', 'e', 'r', 'r', 'o' ]

}

/*
Este método también acepta dos parámetros opcionales adicionales a nuestra cade de texto.
Uno es una función de map() que se llamara en cada iteración de nuestro array y el otro es 
una valor que se puede usar como "this" dentro de cada iteración del map.
*/

{
    let str = 'perro'
    let arr = Array.from(str, (val, index) => val + index) // añade index a cada elemento del array

    console.log(arr) // Ouput: [ 'p0', 'e1', 'r2', 'r3', 'o4' ]

}



/*
Spread operator
El spread operator es de la nueva version de ES6 y funciona ya en todos los navegadores.
Este nos ayuda extraer y propagar cada letra o character del string utilizado. Nosotros solo
tenemos que envolver la propagación de esa cadena dentro de nuestras llaves cuadradas para poder crear un nuevo array a partir del string dado.

*/

{
    let str = 'perro'
    let arr = [...str]

    console.log(arr)

}


/*
Object.assign()
Este método se utiliza para copiar los valores y propiedades de uno o más objetos de origen a un objeto de destino.
Podemos proporcionar una cadena de texto como fuente y una array vacío como destino para crear una matriz a partir de una cadena de texto.

*/

{
    let str = 'gato'
    let arr = Object.assign([], str)

    console.log(arr) // Outupt: [ 'g', 'a', 't', 'o' ]
}


/*
For loop
Nosotros podemos recorrer cada carácter de una cadena usando for loop y empujar ese carácter
a una matriz vacía para crear una matriz a partir de la cadena.
*/

{

let str = 'perro';
let arr = [];
for(let i of str) {
    arr.push(i);
}
console.log(arr);  // Outuput: [ 'p', 'e', 'r', 'r', 'o' ]
}


/*
JSON.parse()
Existe una manera extra para convertir un string en array, solo que para este caso nuestra cadena
de texto debe contener ya el array.
*/

{
    
    let arr = JSON.parse('[1, 5, "false"]') // JSON.parse(): Esta función, la cadena JSON se convierte en un array JavaScript:
// Es importante notar que "false" es un string, no el valor booleano false. Si quisieras un booleano en su lugar, tendrías que usar el valor false sin comillas en el JSON.
    console.log(arr)
    console.log(typeof arr)
}