//Ejercicio 1

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//Ejercicio 2

let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

//Ejercicio 3

let i = 2;
do {
    console.log(i);
    i += 2;
} while (i <= 20);

//Ejercicio 4

const names = ['Alice', 'Bob', 'Charlie'];
for (const name of names) {
    console.log(name);
}

//Ejercicio 5

const person = { name: 'John', age: 30, city: 'New York' };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

//Ejercicio 6

function greet(name, callback) {
    const message = `Hello, ${name}!`;
    callback(message);
}

greet('Alice', (message) => {
    console.log(message);
});

//Ejercicio 7

function simulateAsync(number, callback) {
    setTimeout(() => {
        callback(number + 1);
    }, 2000);
}

simulateAsync(5, (result) => {
    console.log(result);
});

//Ejercicio 8

function processArray(arr, callback) {
    for (const item of arr) {
        callback(item);
    }
}

processArray([1, 2, 3], (num) => {
    console.log(num * 3);
});


//Ejercicio 9

const names = ['alice', 'bob', 'charlie'];

function printUpperCase(name) {
    console.log(name.toUpperCase());
}

for (const name of names) {
    printUpperCase(name);
}

//Ejercicio 10

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Fetched Data');
        }, 1000);
    });
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data + ' Processed');
        }, 1000);
    });
}

function saveData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data + ' Saved');
        }, 1000);
    });
}

fetchData()
    .then(processData)
    .then(saveData)
    .then(result => console.log(result))
    .catch(error => console.error('Error:', error));