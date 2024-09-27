//push(element) - adds a new element to the end of an array
let arr = [1, 2]
arr.push(3)
console.log(arr) // Output: [1, 2, 3]

// pop() - removes the last element from an array and returns that element
arr = [1, 2, 3]
let lastElement = arr.pop()
console.log(arr) // Output: [1, 2]
console.log(lastElement) // Output: 3

// assign(target, ...sources) - replaces existing elements of an array with new elements
let target = {a: 1 };
let source = {b: 2};

Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 2 }

// keys(object) - returns an array of a given object's own enumerable property names
obj = { a: 1, b: 2};
console.log(Object.keys(obj)); // Output: ["a", "b"]