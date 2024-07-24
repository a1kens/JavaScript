console.log("Wellcome to #Day 3")

// if, else if, else



// if (si) ejecutar un bloque de código si una condición es VERDADERA

let age = 39
if (age == 39) {
    console.log("La edad es 39")
}


// else (si no)

if (age != 39) {
    console.log("La edad no es 39")
}


// else if (si no y si la primera condición no se cumple)

if (age == 39) {
    console.log("La edad es 39")    
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 39 ni es menor de edad") // en caso de que no se cumplan las 2 condiciones anteriores
}


// Operador ternario - 
age == 39 ? "La edad es 39" : "La edad no es 39"

const message = age == 39 ? "La edad es 39" : "La edad no es 39"
console.log(message)
// age == 39 ? console.log ("La edad es 39") : console.log("La edad no es 39")


// switch (se utiliza cuando hay varias condiciones que se deben evaluar) - 

let day = 4
let dayName 

switch (day) {
    case 0:
         dayName = "Lunes"
          break
    case 1:
         dayName = "Martes"
          break
    case 2:
         dayName = "Miércoles"
          break
    case 3:
         dayName = "Jueves"
          break
    case 4:
         dayName = "Viernes"
          break
    case 5:
         dayName = "Sábado"
          break 
    case 6:
         dayName = "Domingo"
          break
    default:
        dayName = "Número de día incorrecto"
}

console.log(dayName)


