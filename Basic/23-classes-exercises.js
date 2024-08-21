/*
Clases (continuación) y manejo de errores

*/

// 1. Crea una clase que reciba dos propiedades

class Gamer {

    constructor(name, alias) {
        this.name = name        
        this.alias = alias
    }

}

let gamer = new Gamer("Juanma", "aikens")


// 2. Añade un método a la clase que utilice las propiedades

Gamer.prototype.introduce = function() {
    console.log(`Hola, mi nombre es ${this.name} y mi alias es ${this.alias}.`);
};

// gamer.introduce(); // Llama al nuevo método

// 3. Muestra los valores de las propiedades e invoca a la función
// console.log(gamer)
console.log(gamer.alias)
console.log(gamer.name)
gamer.introduce() // Llama al nuevo método


// 4. Añade un método estático a la primera clase

Gamer.compareGamers = function (gamer1, gamer2) {
    if (gamer1.alias === gamer2.alias) {
        return "Los gamers tienen el mismo nick"
    } else {
        return "Los gamers tienen nicks diferentes"
    }
}

let gamer2 = new Gamer ("Pedro", "aikens")
let gamer1 = new Gamer("Juan", "aikens")

// 5. Haz uso del método estático

console.log(Gamer.compareGamers(gamer1, gamer2))


// 6. Crea una clase que haga uso de herencia
// Clase base (superclase)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años.`);
    }
}

// Clase derivada (subclase)
class Player extends Person {
    constructor(name, age, alias) {
        super(name, age); // Llamar al constructor de la superclase
        this.alias = alias;
    }

    // Método específico de Player
    play() {
        console.log(`${this.alias} está jugando.`);
    }

    // Sobrescribir (override) el método introduce
    introduce() {
        console.log(`Hola, soy ${this.name}, también conocido como ${this.alias}, y tengo ${this.age} años.`);
    }
}

let player = new Player("Juanma", 39, "aikens"); // Crear una instancia de Player

// Llamar a los métodos
player.introduce(); // Usará el método sobrescrito en Player
player.play(); // Usará el método específico de Player

// 7. Crea una clase que haga uso de getters y setters
// class Animals {
//     constructor(name, alias) {
//         this._name = name;  // Usamos _name para la propiedad interna
//         this.alias = alias;
//     }

//     // Getter para la propiedad name
//     get name() { 
//         return this._name;
//     }

//     // Setter para la propiedad name
//     set name(newName) {
//         this._name = newName;
//     }
// }

// let animal = new Animals("León", "Rey de la selva");
// console.log(animal.name); // León

// animal.name = "Tigre";
// console.log(animal.name); // Tigre



// 8. Modifica la clase con getters y setters para que use propiedades privadas

class Animals {
    #name;  // Propiedad privada
    #alias; // Propiedad privada

    constructor(name, alias) {
        this.#name = name;   // Asignación a la propiedad privada
        this.#alias = alias; // Asignación a la propiedad privada
    }

    // Getter para la propiedad name
    get name() { 
        return this.#name;
    }

    // Setter para la propiedad name
    set name(newName) {
        this.#name = newName;
    }

    // Getter para la propiedad alias
    get alias() { 
        return this.#alias;
    }

    // Setter para la propiedad alias
    set alias(newAlias) {
        this.#alias = newAlias;
    }
}

let animal = new Animals("León", "Rey de la selva");
console.log(animal.name); // León
console.log(animal.alias); // Rey de la selva

animal.name = "Tigre";
animal.alias = "Gran cazador";

console.log(animal.name); // Tigre
console.log(animal.alias); // Gran cazador

// 9. Utiliza los get y set y muestra sus valores

// Mostrar valores iniciales usando los getters
console.log(`Nombre inicial: ${animal.name}`); // Nombre inicial: León
console.log(`Alias inicial: ${animal.alias}`); // Alias inicial: Rey de la selva

// Modificar valores usando los setters
animal.name = "Tigre";
animal.alias = "Señor de la selva";

// Mostrar valores modificados usando los getters
console.log(`Nombre después de modificar: ${animal.name}`); // Nombre después de modificar: Tigre
console.log(`Alias después de modificar: ${animal.alias}`); // Alias después de modificar: Señor de la selva

// 10. Sobrescribe un método de una clase que utilice herencia 
// Sobreescribe el método del ejercicio 6 - 



let person = new Person("Lorena", 30);
person.introduce(); // Hola, me llamo Juan y tengo 30 años.

// Modificar el método introduce en el prototipo
Person.prototype.introduce = function() {
    console.log(`Hola, soy ${this.name}, y tengo ${this.age} años.`);
};

person.introduce(); // Hola, soy Juan, y tengo 30 años.


// Creo clase que hereda de Person
class SpecialPerson extends Person {
    introduce() {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años. Soy especial.`);
    }
}


let specialPerson = new SpecialPerson("Ana", 28) // Crear una instancia de SpecialPerson
specialPerson.introduce(); // Hola, soy Ana y tengo 28 años. Soy especial.

// Sobrescribir el método introduce solo para esta instancia
specialPerson.introduce = function() {
    console.log(`Hola, soy ${this.name} y tengo ${this.age} años. Esta es una introducción personalizada.`);
};

// Llamar al método sobrescrito
specialPerson.introduce(); // Hola, soy Ana y tengo 28 años. Esta es una introducción personalizada.



console.log("Prueba de modificación de método de clase que hereda Person >> Player")

let player1 = new Player("Jose", 39, "Toche_23"); // creamos instancia de player
player1.introduce() // llamamos al método

// modificamos el metodo
player1.introduce = function() {
    console.log(`Hola, soy ${this.name} y tengo ${this.age} años. Esta es una introducción personalizada para ${this.alias}.`);
}
player1.introduce() // llamamos al método sobrescrito