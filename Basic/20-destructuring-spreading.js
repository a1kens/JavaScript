// 

let myArray = [1, 2, 3, 4]

let person = {
    name: "Juanma",
    age: 39,
    alias: "aikens"
}


let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)


// Destructuring - Capacidad de extraer valores y asignarlo a variables de manera concisa
// Con una única definición voy a ser capar de crear varias variables y asignarla a varios valores

// Sintaxis de arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray // Se realiza destructuring del array en 4 variables
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4) // undefined - no contiene más valores


// Sintaxis arrays con valores predeterminados

 let [myValue5, myValue6, myValue7, myValue8, myValue9= 0] = myArray  // le hemos dado valor predeterminado al myValue9 = 0
 console.log("Prueba dar valor predeterminado a un valur del array")
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9) 


// Ignorar elementos de ese array

let [myValue10, , , myValue13] = myArray //dejamos los espacios en blanco 
console.log(myValue10)
console.log(myValue13)

// Intercambiar valores

// let a = 1, b = 2
// console.log(a)
// console.log(b)

// [myValue10, myValue13] = [myValue13, myValue10]
// console.log(myValue10)
// console.log(myValue13)


// Sintaxis objects

// let{name, age, alias} = person
// console.log(name)
// console.log(age)
// console.log(alias)


// Sintaxis objects con valores predeterminados

let { name2, age2, alias2, email= "juansm@gmail.com"} = person
console.log(name2) // no existe
console.log(age2) // no existe
console.log(alias2) // no existe
console.log(email) 

// Sintaxis objects con nuevos nombres de variables

let { name: name3, age: age3, alias: alias3} = person  // no importa el orden pero si el "nombre"
console.log(name3)
console.log(age3)
console.log(alias3)


// Objects anidados

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

let {name: name4, job:{ name: jobName } } = person3
console.log(name4)
console.log(jobName)


// Spreading / Propagación (...)


// Combinación de arrays 

let myArray2 = [...myArray]

console.log(myArray2)

let myArray3 = [...myArray2, 5, 6]
console.log(myArray3)

let myArray4 = [...myArray2, ...myArray3]
console.log(myArray4)


// Sintaxis Objects