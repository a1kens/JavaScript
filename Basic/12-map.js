// map - una coleccion de elementos 
// clave y un valor asociado a esa clave

// Declaración

let myMap = newMap();

// Inicialiozación
myMap = new Map ([
    [ "name", "Juanma"],
    ["email", "aikens@gmail.com"],
    ["age", "39"]
])

// set

// myMap.set("alias", "aikens")
console.log(myMap)

// get

// has

// delete


// keys



// clear
// myMap.clear()
console.log(myMap)



let myArray = [1, 2, 3, 4, 4, 5];

let uniqueArray = myArray.filter((item, index) => {
    return myArray.indexOf(item) === index;
});

console.log(uniqueArray); // [1, 2, 3, 4, 5]

