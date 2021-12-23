// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  var respuesta;
  if (x > y) {
    respuesta = x;
  } else if (x < y) {
    respuesta = y;
  } else {
    respuesta = x;
  }
  return respuesta;
}
obtenerMayor(5, 7); //y=7

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var respuesta = "";
  if (edad >= 18) {
    respuesta = "Allowed";
  } else {
    respuesta = "Not allowed";
  }
  return respuesta;
}
mayoriaDeEdad(25); //Allowed

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  var estado = "";

  if (status === 1) {
    estado = "Online";
  } else if (status === 2) {
    estado = "Away";
  } else {
    estado = "Offline";
  }
  return estado;
}
conection(1); //Online

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var saludo = "";
  if (idioma === "aleman") {
    saludo = "Guten Tag!";
  } else if (idioma === "mandarin") {
    saludo = "Ni Hao!";
  } else if (idioma === "ingles") {
    saludo = "Hello!";
  } else {
    saludo = "Hola!";
  }
  return saludo;
}
saludo("aleman"); //Guten Tag!

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  var respuesta = "";
  switch (color) {
    case "blue":
      respuesta = "This is blue";
      break;

    case "red":
      respuesta = "This is red";
      break;

    case "green":
      respuesta = "This is green";
      break;

    case "orange":
      respuesta = "This is orange";
      break;
    default:
      respuesta = "Color not found";
      break;
  }
  return respuesta;
  F;
}
colors("orange"); //This orange

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  var respuesta;
  if (numero === 10 || numero === 5) {
    respuesta = true;
  } else {
    respuesta = false;
  }
  return respuesta;
}
esDiezOCinco(10); //true

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  var respuesta;
  if (numero > 20 && numero < 50) {
    respuesta = true;
  } else {
    respuesta = false;
  }
  return respuesta;
}
estaEnRango(23); //true

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var respuesta;
  if (numero === 0) {
    respuesta = true;
  } else {
    if (numero - Math.floor(numero) === 0) {
      respuesta = true;
    } else {
      respuesta = false;
    }
  }

  return respuesta;
}
esEntero(1); //true

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var respuesta = numero;
  var auxiliar3 = Math.trunc(numero / 3) * 3;
  if (auxiliar3 === numero) {
    respuesta = "fizz";
  }
  var auxiliar5 = Math.trunc(numero / 5) * 5;
  if (auxiliar5 === numero) {
    respuesta = "buzz";
  }
  if (auxiliar3 === numero && auxiliar5 === numero) {
    respuesta = "fizzbuzz";
  }
  return respuesta;
}
fizzBuzz(25); //fizzbuzz

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  var respuesta;
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    respuesta = "Error";
  } else {
    if (
      Math.sign(num1) === -1 ||
      Math.sign(num2) === -1 ||
      Math.sign(num3) === -1
    ) {
      respuesta = "Hay negativos";
    } else {
      if (num1 > num2 && num1 > num3) {
        respuesta = "Número 1 es mayor y positivo";
      } else if (num3 > num1 && num3 > num2) {
        num3++;
        respuesta = num3;
      } else {
        respuesta = false;
      }
    }
  }
  return respuesta;
}
operadoresLogicos(1, 2, 3); //4

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por resolverlo usando un bucle `foos 0 y 1 NO son considerados números primos
  var respuesta;
  var contador = 0;
  for (let index = 1; index <= numero; index++) {
    var auxiliar = Math.trunc(numero / index) * index;
    if (auxiliar === numero) {
      contador++;
    }
  }
  if (contador == 2 && numero != 0 && numero != 1) {
    respuesta = true;
  } else {
    respuesta = false;
  }
  return respuesta;
}
esPrimo(2); //true

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  var respuesta = "";
  if (valor === true) {
    respuesta = "Soy verdadero";
  } else {
    respuesta = "Soy falso";
  }
  return respuesta;
}
esVerdadero(1 < 2); //Soy verdadero

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  var arreglo = new Array();
  for (let index = 0; index <= 10; index++) {
    arreglo.push(index * 6);
  }
  return arreglo;
}
tablaDelSeis(); //[0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  var resultado;
  if (String(numero).length === 3) {
    respuesta = true;
  } else {
    respuesta = false;
  }
  return respuesta;
}
tieneTresDigitos(425); //true

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var pasadas = 1;

  do {
    pasadas++;
    numero = numero + 5;
  } while (pasadas <= 8);
  return numero;
}
doWhile(5); //45

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile,
};
