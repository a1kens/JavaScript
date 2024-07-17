const numbers = [1, 2, 3, 4, 5];

// Double the numbers, filter out the even numbers, and then sum then up
const result = numbers 
.map(num => num * 2) // [2, 4, 6, 8, 10]
.filter(num => num % 2 === 0) // 
.reduce((sum, num) => sum + num, 0); // 30

console.log(result);
console.log(numbers);


const numbers2 = [1, 2, 3, 4, 5 ];
const suma = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(numbers2);
console.log(suma);
