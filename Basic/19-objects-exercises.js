// 
// 1. Crea un objeto con 3 propiedades
// 2. Accede y muestra su valor
// 3. Agrega una nueva propiedad
// 4. Elimina una de las 3 primeras propiedades
// 5. Agrega una función e invócalas
// 6. Itera las propiedades del objeto
// 7. Crea un objeto anidado
// 8. Accede y muestra el valor de las propiedades anidadas
// 9. Comprueba si los dos objetos creados son iguales
// 10. Comprueba si dos propiedades diferentes son iguales


// 1. Crea un objeto con 3 propiedades
let player = {
    nick: "Geglash",
    level: 100,
    geared: true

}

// 2. Accede y muestra su valor
console.log(player)
console.log(player.nick)

// 3. Agrega una nueva propiedad
player.role = "Healer"
console.log(player.role)

// 4. Elimina una de las 3 primeras propiedades
delete player.geared
console.log(player)

// 5. Agrega una función e invócalas

player.spell = function() {
    console.log("Healing Touch")
}

player.spell()
console.log(player)

// 6. Itera las propiedades del objeto
for (let key in player) {
    console.log(key + ": " + player[key])
}

// 7. Crea un objeto anidado

let gamer = {
    nickName: "monesy",
    age: 16,
    game: { 
        name: "counter-strike2",
        category: "Shooter",
        year: "2023"
        
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(gamer)
console.log(gamer.game)
console.log(gamer.game.name)

// 9. Comprueba si los dos objetos creados son iguales

console.log(player == gamer)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(gamer.nickName == gamer.game)