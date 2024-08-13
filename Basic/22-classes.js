
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

person6 = new GetSetPerson("Juanma", 39, "aikens", "IBAN123456789")

console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN123456789"


