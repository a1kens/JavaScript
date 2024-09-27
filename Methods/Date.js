// max(x1, x2, x3) - returns the largest of three numbers
console.log(Math.max(1, 2, 3)); // Output: 3

// random() - returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Output: a random number between 0 and 1

// getDate() - returns the day of the month as a number (1-31)
let date = new Date();
console.log(date.getDate()); // Output: the current day of the month

// getMonth() - returns the month as a number (0-11)
console.log(date.getMonth()); // Output: the current month (0-11)

// getFullYear() - returns the year as a four-digit number
console.log(date.getFullYear()); // Output: the current year

// getTime() - returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(date.getTime()); // Output: the current time in milliseconds



// let date = new Date();

// Obtener el día, el mes y el año
let day = date.getDate(); // Día del mes (1-31)
let month = date.getMonth() + 1; // Mes (0-11, así que sumamos 1)
let year = date.getFullYear(); // Año (por ejemplo, 2024)

// Formatear la fecha como "DD/MM/YYYY"
let formattedDate = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;

console.log(formattedDate); // Salida: "DD/MM/YYYY"