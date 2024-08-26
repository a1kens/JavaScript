
// 1. Captura una excepción utilizando try-catch

// 2. Captura una excepción utilizando try-catch y finally

// 3. Lanza una excepción genérica

// 4. Crea una excepción personalizada

// 5. Lanza una excepción personalizada

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

const obj = { name: "Juanma", age: 39 }
// const { name, age = 30 } = obj
const { name, age: originalAge } = obj; // Desestructuramos normalmente
const age = 30; // Asignamos manualmente el valor 30 a la variable age

console.log(age)

/* La razón por la que la edad no cambia en el objeto original obj es porque la desestructuración con un valor por defecto (age = 30)
   solo afecta a la variable que estás creando, no al objeto original.

*/