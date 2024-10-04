// 10 Useful JavaScript One Liners for Daily Use

/*
*/



/* 1. Swapping Variables Without a Temporary Variable */
let a = 1;
let b = 2;

[a, b] = [b, a];

/* This nifty one-liner uses array destructuring to swap
two variables without using a temporary variable.

It's perfect for algorithms or when you need to quicky switch values.
*/


/* 2. Creating an Array with a Range of Numbers */
const range = (start, end) => 
[...Array(end - start + 1)].map((_, i) => start + i)

/* Need a quick array of consecutive numbers? This one-liner creates it for you.

Use it when you need to generate a range for loops or data visualization.
*/

/* 3. Removing Duplicate Elements from an Array */
array =[]
const uniqueArray = [...new Set(array)]

/* Tired of writing loops to remove duplicates from an array? This one-liner does it for you.

This one-liner ses Set and the spread operator to create a new array with unique values.

It's great for cleaning up data or preparing datasets.
*/

/* 4. Checking if an Object is Empty */
const isEmpty = obj => Object.keys(obj).length === 0
// console.log(isEmpty({})) 
/* This compact function checks if an object has any properties.

Use it for validation or conditional logic in your application.
*/


/* 5. Getting a Random item from an Array */
arr = [1, 2, 3, 4, 5]
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)]

console.log(randomItem(arr)) 
/* Need to pick a random element? This one-liner does just that.

It's perfect for games, randommized selectionss, or adding variety to your app.
*/

// 6. Flattening a Multi-dimensional Array
const flatARray = arr => arr.reduce((acc, val) => 
    acc.concat(Array.isArray(val)? flatARray(val) : val), [])

console.log(flatARray([1, [2, [3, [4]], 5]])) 

/*Este código aplana un arreglo anidado de cualquier profundidad. Si encuentra un arreglo dentro del arreglo original,
 lo procesa recursivamente hasta que ya no haya anidación, devolviendo un solo arreglo con todos los valores en una sola dimensión.
*/

// 7. Capitalizing the First Letter of a String
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

console.log(capitalize('hello world')) 

/* Need to format names or titles? This one-liner capitalizes the first letter of a string.

It's great for improving text presentation in your UI.
*/


// 8. Calculating the Average of Numbers in an Array
const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length

/* This concise function calculates the average of numbers in an array.

Use it for data analysis, performance metrics, or any scenario requiring quick averages.
*/


// 9. Checking if a Variable is Defined
const isDefined = variable => typeof variable !== 'undefined'

/* Avoid "undefined" errors with this simple check.

It's useful for validating function parameters or checking if a value exist before using it */


// 10. Generating a Random Hex Color
const randomColor = () => 
    `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`

/* Need a random color for your UI?
This one-liner generates a  random hex color code.

Its perfect for dynamic styling, data visualization, or creative applications.
*/
