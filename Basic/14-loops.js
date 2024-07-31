// Loops o bucles - Estructura de control que permite repetir un bloque de código


// for  Loop

for (let i = 0; i < 5; i++) {
    console.log( `Hola ${i}`);
    
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`);
}
        

// while - 

    let j = 0;
    while (j < 5) {
        console.log(`Hola ${j}`);
        j++;
    }

    // while(true) {
    //     console.log(`esto es un bucle infinito`);
    // }


// do-while -
i = 0 // ya declarada la valoramos con 0

do {
 console.log(`Hola ${i}`);
 i++; 
} while (i < 5);


// for of - recorrer valores de algo que sea iterable
// Una estructura de datos o algún tipo de datos concreto
myArray = [1, 2,3, 4]
mySet = new Set(["Juan Manuel", "Sosa", "aikens", 39])
myString = "Hola"

for (let valor of myArray) {      // podemos probar con myArray, mySet, myMap - distintas estructuras de datos
    console.log(valor)
}

for (let valor of mySet) {      
    console.log(valor)
}

for (let valor of myString) {      
    console.log(valor)
}


// break y continue

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 6) {
        break
    }
     console.log(`Hola ${i}`);
}