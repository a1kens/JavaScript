// values(obj) - returns an array of a given object's own enumerable property values
let obj = { a: 1, b: 2};
console.log(Object.values(obj)); // Output: [1, 2]

// entries(obj) - returns an array of a given object's own enumerable property [key, value] pairs
obj = { a: 1, b: 2};
console.log(Object.entries(obj)); // Output: [["a", 1], ["b", 2]]

// abs(x) - returns the absolute value of a number
console.log(Math.abs(-5)); // Output: 5

// ceil(x) - returns the smallest integer greater than or equal to a given number
console.log(Math.ceil(4.2)); // Output: 5

// floor(x) - returns the largest integer less than or equal to a given number
console.log(Math.floor(4.8)); // Output: 4