// Ejercicios de condicionales
// 1. Imprime por consola tu nombre si una variable toma su valor

let variable = "Juan Manuel"

if (variable == "Juan Manuel") {
    console.log("Tu nombre es: " + variable)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos

let variable1 = "aikens"
let variable2 = "1234"

if (variable1 === "aikens" && variable2 === "1234") {
    console.log("Usuario y contraseña correctos")
} else {
    console.log("Usuario y/o contraseña incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let num = 5

if (num > 0) {
    console.log("El número es positivo")
} else if (num < 0) {
    console.log("El número es negativo")
} else {
    console.log("El número es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual 18) e indica cuantos años le faltan

let age = 21

if (age >= 18) {
    console.log("Puedes votar")    
} else if (age < 18) {
    console.log("No puedes votar")
    console.log("Te faltan " + (18 - age) + " años para votar")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable

let persona = age >= 18? "adulto" : "menor"
console.log("La persona es: " + persona)


// 6. Muestra uen que estacion del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 1;
let estacion = '';

if (mes == 0) {
    console.log("Enero");
    estacion = 'Invierno';
} else if (mes == 1) {
    console.log("Febrero");
    estacion = 'Invierno';
} else if (mes == 2) {
    console.log("Marzo");
    estacion = 'Invierno/Primavera';
} else if (mes == 3) {
    console.log("Abril");
    estacion = 'Primavera';
} else if (mes == 4) {
    console.log("Mayo");
    estacion = 'Primavera';
} else if (mes == 5) {
    console.log("Junio");
    estacion = 'Primavera/Verano';
} else if (mes == 6) {
    console.log("Julio");
    estacion = 'Verano';
} else if (mes == 7) {
    console.log("Agosto");
    estacion = 'Verano';
} else if (mes == 8) {
    console.log("Septiembre");
    estacion = 'Verano/Otoño';
} else if (mes == 9) {
    console.log("Octubre");
    estacion = 'Otoño';
} else if (mes == 10) {
    console.log("Noviembre");
    estacion = 'Otoño';
} else if (mes == 11) {
    console.log("Diciembre");
    estacion = 'Otoño/Invierno';
} else {
    console.log("Mes inválido");
}

if (estacion) {
    console.log(`La estación del año es: ${estacion}`);
}


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes == 0) {
    console.log("Tiene 31 días")
} else if (mes == 1) {
    console.log("Tiene 28 días")
} else if (mes == 2) {  
    console.log("Tiene 31 días")
} else if (mes == 3) {
    console.log("Tiene 30 días")
} else if (mes == 4) {
    console.log("Tiene 31 días")
} else if (mes == 5) {
    console.log("Tiene 30 días")
} else if (mes == 6) {
    console.log("Tiene 31 días")
} else if (mes == 7) {
    console.log("Tiene 30 días")
} else if (mes == 8) {
    console.log("Tiene 31 días")
} else if (mes == 9) {
    console.log("Tiene 31 días")
} else if (mes == 10) {
    console.log("Tiene 30 días")
} else if (mes == 11) {
    console.log("Tiene 31 días")
} else {
    console.log("Mes inválido")
}


// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = "es"

switch (language) {
    case "es":
        console.log("Hola")
        break;
    case "en":
        console.log("Hello")
        break;
    case "fr":
        console.log("Bonjour")
        break;
    default:
        console.log("Idioma no soportado")        
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

 mes = 1
let mesName = " "
estacion = " "

switch (mes) {
    case 0:
        mesName = "Enero";
        estacion = "Invierno";
        break;
    case 1:
        mesName = "Febrero";
        estacion = "Invierno";
        break;
    case 2:
        mesName = "Marzo";
        estacion = "Invierno/Primavera";
        break;
    case 3:
        mesName = "Abril";
        estacion = "Primavera";
        break;
    case 4:
        mesName = "Mayo";
        estacion = "Primavera";
        break;
    case 5:
        mesName = "Junio";
        estacion = "Primavera/Verano";
        break;
    case 6:
        mesName = "Julio";
        estacion = "Verano";
        break;
    case 7:
        mesName = "Agosto";
        estacion = "Verano";
        break;
    case 8:
        mesName = "Septiembre";
        estacion = "Verano/Otoño";
        break;
    case 9:
        mesName = "Octubre";
        estacion = "Otoño";
        break;
    case 10:
        mesName = "Noviembre";
        estacion = "Otoño";
        break;
    case 11:
        mesName = "Diciembre";
        estacion = "Otoño/Invierno";
        break;
    default:
        mesName = "Mes inválido";
        estacion = " ";
        break;
}
 console.log("En el mes de " + mesName + " es" +  " " + estacion)


// 10. Usa un switch para hacer de nuevo el ejercicio 7
mes = 1
mesName = ""
numDays = "1"

switch (mes) {
    case 0:
        mesName = "Enero";
        numDays = "31";
        break;
    case 1:
        mesName = "Febrero";
        numDays = "28";
        break;
    case 2:
        mesName = "Marzo";
        numDays = "31";
        break;
    case 3:
        mesName = "Abril";
        numDays = "30";
        break;
    case 4:
        mesName = "Mayo";
        numDays = "31";
        break;
    case 5:
        mesName = "Junio";
        numDays = "30";
        break;
    case 6:
        mesName = "Julio";
        numDays = "31";
        break;
    case 7:
        mesName = "Agosto";
        numDays = "30";
        break;
    case 8:
        mesName = "Septiembre";
        numDays = "31";
        break;
    case 9:
        mesName = "Octubre";
        numDays = "31";
        break;
    case 10:
        mesName = "Noviembre";
        numDays = "30";
        break;
    case 11:
        mesName = "Diciembre";
        numDays = "31";
        break;
    default:
        mesName = "Mes inválido";
        numDays = " ";
        break;        
}





console.log(mesName + " tiene: " + numDays + " días")