
// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
// 3. Usa desestructuración para extraer dos propiedades de un objeto
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
// 6. Usa propagación para combinar dos arrays en uno nuevo
// 7. Usa propagación para crear una copia de un array
// 8. Usa propagación para combinar dos objetos en uno nuevo
// 9. Usa propagación para crear una copia de un objeto
// 10. Combina desestructuración y propagación



// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let animals = ["perro", "gato", "caballo", "león"]

let var1 = animals[0]
let var2 = animals[1]
console.log("Hemos realizado destructuring para estraer estos elementos: " + var1 + " y " + var2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let giveValue = [1, 2, 3, 4]
let  [value0, value1, value2, value3, value4 = 5] = giveValue  // Add un nuevo elemento con valor predeterminado "value4 = 5"
let myValue = value4 // asignamos el valor a la variable "myValue"

console.log(myValue)

let myArray = new Array(5).fill(0);  // Crea un array de 5 elementos, todos con el valor 0
console.log(myArray)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let player = {
    nickName: "aikens",
    game : {
        name: "Diablo IV",
        Region: "EU",
        class: "Sorcer",
        season: "4",
        mode: "Softcore",
    },
     play: function() {
        console.log("La persona está jugando.")
    },

}

console.log(player.nickName)
console.log(player.game.name)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let { nickName: playerName, game: gameDetails } = player; 

console.log(playerName);  
console.log(gameDetails); 

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let { game: { mode: gameMode, season: gameSeason } } = player;

console.log(gameMode)
console.log(gameSeason)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray1 = [1, 2, 3]
let myArray2 = [4, 5, 6]

let myArray3 = [...myArray1, ...myArray2]
console.log(myArray3)

// 7. Usa propagación para crear una copia de un array
let myGames = ["World of Warcraft","Counter-Strike", "Diablo", "RDR2", "FFVII"]

let myCopyGames = [...myGames]
console.log(myCopyGames)

// 8. Usa propagación para combinar dos objetos en uno nuevo
// Recordar que creamos objeto "player" al inicio de estos ejercicios

let stats = {
    level: 50,
    achievements: ["Champion", "Explorer"],
    online: true
};


let combined = {  // Combinar los dos objetos en uno nuevo usando el operador de propagación
    ...player,
    ...stats
};

console.log(combined);

// 9. Usa propagación para crear una copia de un objeto

let player2  = {
    ...stats
}

console.log(player2)

// 10. Combina desestructuración y propagación


let { nickName, game: { mode, season } } = player; // extrae nickName del objeto player y las propiedades mode y season del objeto anidado game dentro de player

let combined2 = { // crea un nuevo objeto que combina las propiedades de "stats" con las propiedades desestructuradas y renombradas 
    nickName,
    gameMode: mode,
    gameSeason: season,
    ...stats
};


console.log(combined2);



let perro = {
    type: "husky",
    size: "big",
    color: "black & white",
    from: { 
        name: "Scandinavia",
        city: "pepito",
    }
}

let { type, from : { name} } = perro;  // Desestructuración del objeto


console.log(type);  
console.log(name);  