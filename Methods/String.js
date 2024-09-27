// String Methods

// charAt(index) - returns the character at the specified index
let str = "Hello";
console.log(str.charAt(1)); // Output: "e"


// includessearchString) - returns true if the string contains the specified value, otherwise false 
str = "Hello World";
console.log(str.includes("World")); // Output: true

// replace(SearchValue, newValue) - replaces a specified value with another value in a string   
str = "Hello World";
console.log(str.replace("World", "JavaScript")); // Output: "Hello JavaScript"

// slice(start, end) - extracts a part of a string and returns a new string
str = "Hello World";
console.log(str.slice(0, 5)); // Output: "Hello"

// toUpperCase() - converts a string to uppercase
str = "hello";
console.log(str.toUpperCase()); // Output: "HELLO"