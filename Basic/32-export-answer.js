
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

