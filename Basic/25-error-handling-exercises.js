
// 1. Captura una excepción utilizando try-catch

 function suma(a, b) {
  try {
    // Verificar si ambos 'a' y 'b' son de tipo número
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("Debes introducir números");
    }
  } catch (error) {
    console.error("Se ha producido un error:", error.message);
    return;  // Puedes retornar undefined o un valor por defecto si ocurre un error
  }  
  
  return a + b; // Si todo está bien, retorna la suma
}

console.log(suma(2, "b"));  // Nos devolverá una excepción
// console.log(suma(2, 3));    // Nos devolverá el resultado de la suma


// 2. Captura una excepción utilizando try-catch y finally

function suma2(a, b) {
  try {    
    if (typeof a !== "number" || typeof b !== "number") {
      throw new TypeError("Debes introducir números");
    }
  } catch (error) {
    console.error("Se ha producido un error:", error.message);
    return; 
  } finally {    
    console.log("Operación finalizada."); // Este bloque se ejecuta siempre, independientemente de si hubo un error o no
  }
  
  return a + b;
}

console.log(suma(2, "b"));  // Esto lanzará una excepción, retornará undefined, y se ejecutará el finally
// console.log(suma(2, 3))   


// 3. Lanza una excepción genérica

/* Para lanzar una excepción genérica en JavaScript, puedes usar la clase base Error. Esto es útil cuando deseas lanzar una excepción,
 pero no quieres usar un tipo de error específico como TypeError, ReferenceError, etc.
*/

class InvalidNumberError extends Error {  // Definir una excepción personalizada
  constructor(message) {
    super(message); // Llamar al constructor de la clase base (Error)
    this.name = "InvalidNumberError"; // Establecer el nombre del error personalizado
  }
}


function resta(a, b) {
  try {    
    if (typeof a !== "number" || typeof b !== "number") {
      throw new InvalidNumberError("Debes introducir números para realizar la resta"); // Lanzamos una excepción genérica
    }
  } catch (error) {

   if (error instanceof InvalidNumberError) {
       console.error("Se ha producido un InvalidNumberError:", error.message)

   } else {
      console.error("Se ha producido un error desconocido:", error.message);
   }
    
    return;  // Puedes retornar undefined o un valor por defecto si ocurre un error

  } finally {
    console.log("Operación finalizada.");
  }
  
  return a - b;
}

// console.log(resta(8, "b"));  
console.log(resta(8, 3));    

// 4. Crea una excepción personalizada

/* Para crear una excepción personalizada en JavaScript, puedes extender la clase Error.
 Esto te permite definir una nueva clase de excepción con un nombre y un comportamiento específico.
*/

// Creada e incorporada en el apartado anterior

// 5. Lanza una excepción personalizada

console.log(resta(8, "b")); // Recivimos "InvalidNumberError: Debes introducir números para realizar la resta"- Nuestra excepción personalizada

// 6. Lanza varias excepciones según una lógica definida

// Definir una excepción personalizada para contraseñas demasiado cortas
class PasswordTooShortError extends Error {
  constructor(message) {
    super(message);
    this.name = "PasswordTooShortError";
  }
}

// Definir una excepción personalizada para contraseñas demasiado largas
class PasswordTooLongError extends Error {
  constructor(message) {
    super(message);
    this.name = "PasswordTooLongError";
  }
}

// Función de Login con validaciones mejoradas
function Login(pwd) {
  try {
    // Verificar si la contraseña es una cadena
    if (typeof pwd !== "string") {
      throw new TypeError("La contraseña debe ser una cadena de texto.");
    }

    // Verificar si la contraseña es demasiado corta
    if (pwd.length < 8) {
      throw new PasswordTooShortError("La contraseña es demasiado corta. Debe contener al menos 8 caracteres.");
    }

    // Verificar si la contraseña es demasiado larga
    if (pwd.length >= 12) {
      throw new PasswordTooLongError("La contraseña es demasiado larga. No debe exceder los 12 caracteres.");
    }

    console.log("Contraseña aceptada"); // Si pasa todas las validaciones

  } catch (error) {
    if (error instanceof PasswordTooShortError || error instanceof PasswordTooLongError) {
      console.error("Error:", error.message);
    } else {
      console.error("Error desconocido:", error.message);
    }
  }
}

// Ejemplos de uso
console.log("6. Lanza varias excepciones según una Lógica definida");


Login("1234567");       // Lanzará PasswordTooShortError
Login("1234567890123"); // Lanzará PasswordTooLongError 


Login("12345678"); // Este será aceptado porque cumple con los requisitos


// 7. Captura varias excepciones en un mismo try-catch


// Excepción personalizada para tipo de dato inválido
class InvalidPasswordTypeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidPasswordTypeError";
  }
}

// Función de Login con validaciones mejoradas
function Login2(pwd) {
  try {
    // Verificar si la contraseña es una cadena
    if (typeof pwd !== "string") {
      throw new InvalidPasswordTypeError("La contraseña debe ser una cadena de texto.");
    }

    // Verificar si la contraseña es demasiado corta
    if (pwd.length < 8) {
      throw new PasswordTooShortError("La contraseña es demasiado corta. Debe contener al menos 8 caracteres.");
    }

    // Verificar si la contraseña es demasiado larga
    if (pwd.length > 12) {
      throw new PasswordTooLongError("La contraseña es demasiado larga. No debe exceder los 12 caracteres.");
    }

    console.log("Contraseña aceptada"); // Si pasa todas las validaciones

  } catch (error) {
    // Captura y maneja varias excepciones
    if (error instanceof InvalidPasswordTypeError) {
      console.error("Error de tipo de contraseña:", error.message);
    } else if (error instanceof PasswordTooShortError) {
      console.error("Error de contraseña corta:", error.message);
    } else if (error instanceof PasswordTooLongError) {
      console.error("Error de contraseña larga:", error.message);
    } else {
      console.error("Error desconocido:", error.message);
    }
  } finally {
    console.log("Proceso de validación terminado.");
  }
}


console.log("7. Captura varias excepciones en un mismo try-catch");

// Estos ejemplos muestran errores específicos de longitud y tipo
Login2(12345);          // Lanzará InvalidPasswordTypeError
Login2("12345");        // Lanzará PasswordTooShortError
Login2("1234567890123"); // Lanzará PasswordTooLongError 
Login2("12345678");  


// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores


const values = [12, "34.56", "abc", true, null, "45.67", undefined, "123abc"]; // Lista de valores originales


function convertToFloat(value) { // Función para intentar convertir valores a float
  try {
    
    const result = parseFloat(value); // Intentar convertir el valor a float
      
    
    if (isNaN(result)) { // Verificar si la conversión resultó en NaN
      throw new Error(`El valor "${value}" no puede ser convertido a float.`);
    }

    
    console.log(`Valor convertido: ${result}`); // Mostrar el valor convertido
    
  } catch (error) {
    
    console.error("Error:", error.message); // Capturar y mostrar errores
  }
  
}


values.forEach(value => convertToFloat(value)); // Bucle para procesar cada valor en la lista

console.log("Proceso de conversión terminado.");



// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10





// const obj = { name: "Juanma", age: 39 }
// // const { name, age = 30 } = obj
// const { name, age: originalAge } = obj; // Desestructuramos normalmente
// const age = 30; // Asignamos manualmente el valor 30 a la variable age

// console.log(age)

/* La razón por la que la edad no cambia en el objeto original obj es porque la desestructuración con un valor por defecto (age = 30)
   solo afecta a la variable que estás creando, no al objeto original.

*/