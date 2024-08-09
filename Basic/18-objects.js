// Objects

// Sintaxis

let person = {
    name: "Juanma",
    age: 39,
    alias: "aikens"
}


// Acceso a propiedades

// Notación punto
console.log(person.alias)

// Notación de corchetes
console.log(person["name"])

// Modificación de datos de un Objeto

person.name = "Juan Manuel"
console.log(person.name)

console.log(typeof person.age)
person.age = "39" // cambiamos tipo de datos de númerico a string
console.log(person.age)
console.log(typeof person.age)

// Eliminación de propiedades

delete person.age // eliminamos la propiedad age
console.log(person)


// Añaadir una propiedad

person.email = "aikens@gmail.com"
console.log(person)


// Métodos (funciones)

let person2 =     {
    name: "Rubina",
    age: 28,
    alias:"Lluvia",
    walk: function() {
        console.log("La persona camina.")
    }
}

person2.walk()

// Anidación de objetos

let person3 = {
    name: "Mia",
    age: 32,
    alias:"Graceland",
    walk: function() {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.exp} años de experiencia trabaja.`)

        }
    }

} 

console.log(person3)
console.log(person3.job)


// Igualdad de objetos

let person4 = {
    name: "Juan Manuel",
    age: 39,
    alias: "aikens"
}

console.log(person)
console.log(person4)

console.log(person == person4) // 
console.log(person === person4) // Propiedades por valor or referencia - tipos primitivos que hacen referencia exclusivamente a ese valor


//  Iteración

for (let key in person4) {
    console.log(key + ": " + person4[key])
}

// La instancia es única, puedo meterle muchas propiedades y modificarlas.
// puede contener funciones, métodos incluso otros objetos anidados.


// Funciones como objects

function Person(name, age) { // Debería ser una clase
    this.name = name
    this.age = age

}

let person5 = new Person("Juan", 39)
console.log(person5)
console.log(typeof person5) // Ambos son objetos - creados de distinta forma
console.log(typeof person4)

// 