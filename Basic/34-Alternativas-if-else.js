// 

// Ternary operator - Comprubea condición y ejecuta la primera expresión si la condición es "true" sino ejecutará la segunda expresión
const isLoggedIn = false
const buttonText = isLoggedIn ? "Log out" : "Log in"

console.log(buttonText)


// Switch statement

const day = "Monday"
let greeting

switch(day) {  // variable/expresión
    case "Saturday": // Comprueba si la variable/expresión coincide con el valor
        greeting = "Enjoy your Weekend" // lanza el código si se cumple
        break;
    
    case "Sunday":
        greeting = "Sunday Funday"
        break;
    
    case "Friday":
        greeting = "Happy RiYAY!"
        break; 
     default:
        greeting = "Let's smash those goals today!"
}

console.log(greeting)



// Jump /. dispach table 
// stores value-function pairs in a object to quickly fetch and run a function based on a value (which is treated as an object key)

const run = () => { console.log("Run away!") }
const attack = () => { console.log("Go get 'em!") }
const specialAttack = () => { console.log("Finish them!")} // associates functions to possible expression values

const handleAction = {
    "newbie" : run,
    "intermediate" : attack,
    "advance" : attack,
    "expert" : specialAttack,  // treat variable values as object keys to retrieve functions

}

const level = "intermediate"
handleAction [level]() 


// Dynamic dispatch - executes a version of a method based on the object's type.

const handleGreet = (animal) =>  { animal.greet()} // executes the method for the object type

class Creature {
    constructor (health = 100) {
        this.health = health
    }
    greet() {
        console.log('Hi there')
    }
}

class Dog extends Creature {
    greet() {
        console.log('Woof!')
    }
}

class Cat extends Creature {
    greet() {
        console.log('Meow!')
    }
}

const winston = new Dog()
handleGreet(winston) // Output: Woof!

const kitty = new Cat()
handleGreet(kitty) // Outuput: Meow!