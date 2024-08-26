
// Clases

class Person {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

// Sintaxis

let person = new Person("Juanma", 39, "aikens")
let person2 = new Person("Juanma", 39, "aikens")

console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let person3 = new DefaultPerson("Juanma", 39)

console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "aikens"

console.log(person3.alias)

// Funciones en clases

class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina.")
    }

}

let person4 = new PersonWithMethod("Juanma", 39, "aikens")
person4.walk()

// Propiedades privadas

class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }

}

let person5 = new PrivatePerson("Juanma", 39, "aikens", "IBAN123456789")

// No podemos acceder
// console.log(person5.bank) 
// person5.bank = "new IBAN123456789" // bank no es #bank

console.log(person5)

// Getters y Setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }

}

let person6 = new GetSetPerson("Juanma", 39, "aikens", "IBAN123456789")

console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN123456789"


// Definir clase de tipo Animal - función sound()
class Animal {

    constructor(name) {
        this.name = name
    }

    sound () {
        console.log("Emite un sonido genérico")
    }
}


// Parte de herencia - heredando propiedades y comportamientos del "padre"
class Dog extends Animal {

    sound() {        
        // super.sound() // llama al sound() de la clase padre
        console.log("Guau Guau")
    }

    run() {
        console.log("El perro corre")
    }
}


class Fish extends Animal {

    constructor(name, size) {
        super(name);  // llamamos a la clase de la que extiende - heredamos propiedad/ comportamiento del padre 
        this.size = size;
    }

    swim() {
        console.log("El pez nada")
    }

}


let myDog = new Dog("Lluvia")
myDog.run()
myDog.sound()


let myFish = new Fish("aikensFish", "small")
myFish.swim()
myFish.sound()

// console.log(myFish.name)



// Métodos estáticos 

class MathOperations { 

    static sum(a, b) {
        return a + b
    }
}

let myClass = new MathOperations()
console.log(MathOperations.sum(5, 10)) // llamamos a la clase y sin instanciarla tendremos la operación - podemos llamar a esta función en la clase misma, sin instanciar.

