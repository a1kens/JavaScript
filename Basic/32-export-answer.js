
let frase = "murcielago"
let contador = 0

for (let f = 0; f < frase.length; f++) {
    let vocales = frase[f].toLowerCase() 
if (vocales === "a" || vocales === "e"  || vocales === "i" || vocales === "o" || vocales === "u")  {
    contador++
}
    console.log("numero de vocales ", contador)
}


let animales = ["perro", "gato", "mono", "pingüino"];

animales.forEach(function(item) {
    console.log(item);
});



let means = "plane";
let msg = `I don't like to travel by ${means}`;
console.log(msg);


let movie = {
title: "Life",
year: 1999
}

console.log(movie.title)
movie.title = "Matrix"

console.log(movie.title)


animales.push("hamster");
console.log(animales)


let x = [10, 20, 30, 40];
let y = [50, 60];
x.reverse().push(y);
console.log(x.length);
console.log(x)


for(let a=1; a<10; a+=2) {
    console.log(a);
};


let colors = ['red', 'green', 'blue'];
for (let c of colors) console.log(c);



let route = {distance: 131, elevation: 1.4};
for (let k in route) console.log(k);



let a = (n) => {
    return n > 2 ? n * a(n - 1) : 2
}
console.log(a(6));



let cmp = (a, b) => b -  a 
x = [40, 10, 30, 20, 50];
x.sort(cmp);
console.log(x)


// let counter = 2;
// let interval = setInterval(() => {
//     console.log(counter);
// // Insert missing line here.
// if(counter-- <= 0) clearInterval(interval)
// }, 1000);




let power = (x, y) => x ** y;

function execute(todo, a, b) {
return todo(a, b);
}
console.log(execute(power, 3, 2));



{

        
const a = "hello";
try{ 


    console.log(a.toUpperCase());

} catch (error) {
    console.log(a)
    } finally {
    console.log(a);
}

}



let arr = [10, 20, 30]
arr[100] = 40
console.log(arr.length)

