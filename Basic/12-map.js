// map - una coleccion de elementos 
// clave y un valor asociado a esa clave

// Declaración

let myMap = new Map();
console.log(myMap)

// Inicialiozación
myMap = new Map ([
    [ "name", "Juanma"],    
    ["email", "aikens@gmail.com"],
    ["age", "39"]
])
console.log(myMap)


// set - 
// No puede haber repetidos en clave pero si en valor
// si la clave no existe lo crea, si la clave existe le modifica/ actualiza el valor

myMap.set("alias", "aikenswOw")
console.log(myMap)


// get

console.log(myMap.get("name"))
console.log(myMap.get("surname")) // no existe la clave surname por lo que nos devuelve "undefined"


// has

console.log(myMap.has("surname")) // nos devuelve "false", no contiene la clave surname.
console.log(myMap.has("age")) // nos devuelve "true", existe la clave age 


// delete

myMap.delete("email")
console.log(myMap)


// keys

console.log(myMap.keys()) // nos devuelve un iterador con todas las claves del map
console.log(myMap.values()) // nos devuelve los valores de las claves


// clear
myMap.clear() // borro completamente el map
console.log(myMap)




