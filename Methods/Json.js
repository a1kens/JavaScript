// setDate(day) 
let date = new Date();
date.setDate(20); // Setea el día del mes a 20
console.log(`setDate(day): ${date}`); // Output: Mon Feb 20 2023 00:00:00 GMT-0500 (Central Standard Time)

// parse(text)
let jsonString = '{ "name": "John Snow", "age": 30 }';
let obj = JSON.parse(jsonString); // Convierte el JSON a un objeto JavaScript
console.log(obj)


// // stringify(value) 

let object = { name: "John Doe", age: 24 };
let jsonStr = JSON.stringify(object); // Convierte el objeto JavaScript a un JSON
console.log(jsonStr); // Output: {"name":"John Doe","age":30}

// all(promises)
let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
Promise.all([p1, p2]).then(values => console.log(values)) // Output: [1, 2]

// race(promises)
let p3 = new Promise((resolve) => setTimeout(resolve, 500, "One"));
let p4 = new Promise((resolve) => setTimeout(resolve, 100, "Two"));
 
Promise.race([p3, p4]).then(winner => console.log(winner)); // Output: Two