// 1. No Parameters - If the functions takes no parameters, you use empty parantheses.
const greet = () =>  "Hello";
    
    console.log(greet())


// 2. Single Parameter - If the are one parameter, parantheses are optional.
const square = x => x * x;

console.log(square(4))


/* 3. Multiple Parameters - Functions can accept more than one parameter.
The parameters are separated by commas, both in the function definition and in the function call */

const add = (a, b) => a + b;

console.log(add(2, 3))


/* 4. Function body with Multiple Statements - If the Funciton body has more then one statement
 you need to use curley braces and specify the return keyword (if you want return something) */

 const greetPerson = name => {
    const greeting = `Hello, wellcome: ${name}`
    return greeting
 }

 console.log(greetPerson("Lluvia"))


 /* 5. Returning Object Literals - When directly returning an object literal, wrap the literal in parantheses
to differentiate it from the funciton block. */

const makePerson = (firstName, lastName) => 
({ first: firstName, last: lastName })
console.log(makePerson("John", "Rambo"))


// 6. High order function and Callbacks - Arrow functions are particularly popular when used as short callbacks
const numbers = [1, 2, 3, 4]
const doubled = numbers.map(num => num * 2)
console.log(doubled)