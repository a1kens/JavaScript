/* 1. Short-circuit evaluation for default values
Skip the if-else for default values. Use || for cleaner. */
// Old way
// let UserName;
// if (userInput) {
//     userName =userInput;
// } else {
//     userName = "Guest";
// }

// New way
let userInput = ''
const userName = userInput || 'Guest';
console.log(userName);

/* 2. Swap Variables without a temporary Variable
Use array destructuring to swap values in a single line, no temp variable needed  */
// Old way
// let temp = a
// a = b;
// b = temp;

// Modern way
let a = 1, b = 2; 
[a, b] = [b, a];
console.log(`a vale: ${a}`);
console.log(`b vale: ${b}`);

/* 3. Clone arrays with the spread operator for a simpler,
 more intuitive method  */
 // Old way
//  const clone = original.slice()

 // Modern way
 const original = [1, 2, 3]
 const clone2s = [...original]
console.log(`La array original es: ${original}`);
console.log(`La array clonada es: ${clone2s}`);

/* 4. Easily Remove Duplicates from Array  */
 // Old way
// const uniqueArray = []
// for (let i = 0; i < array.length; i++) {
//     if (!uniqueArray.includes(array[i])) {
//         uniqueArray.push(array[i])
//     }
// }

 // Modern way
 const array = [1, 2, 3, 4, 4, 5, 5, 6]
 const uniqueArray2 = [...new Set(array)]
console.log(`La array original es: ${array}`);
console.log(`La array sin duplicados es: ${uniqueArray2} `);

/* 5. Swap Va
Convert a String to a Number Quickly */
// Old way
const num = parseInt('42', 10)

// Modern way
const num2 = +'42'
console.log(num2)
console.log(typeof num2)