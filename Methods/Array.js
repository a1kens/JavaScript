// split(separator) - splits a string into an array of substrings
let str = "a, b, c, d";
console.log(str.split(", ")); // Output: ["a", "b", "c", "d"]

// concat(array1, array2) - joins two or more arrays into one array
let arr1 = [1, 2]
let arr2 = [3, 4];
console.log(arr1.concat(arr2)); // Output: ["a", "b", "c", "d"]

// filter(callback) - creates a new array with all elements that pass the test implemented by the provided function
let arr = [1, 2, 3, 4, 5];
console.log(arr.filter(num => num % 2 === 0)); // Output: [2, 4]

// find(callback) - returns the value of the first element in the array that satisfies the provided testing function
arr = [1, 2, 3, 4, 5];
console.log(arr.find(num => num > 2)); // Output: 3

// map(callback) - creates a new array with the results of calling a provided function on every element in the array
arr = [1, 2, 3, 4, 5];
console.log(arr.map(num => num * 2)); // Output: [2, 4, 6, 8, 10]
