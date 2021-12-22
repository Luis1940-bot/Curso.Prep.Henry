// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 0;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:

  return str;
}
devolverString("Luis"); //Luis.

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var resultadoSuma = x + y;
  return resultadoSuma;
}
suma(5, 7); //12

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var resultadoResta = x - y;
  return resultadoResta;
}
resta(10, 5); //5

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var resultadoProducto = x * y;
  return resultadoProducto;
}
multiplica(4, 3); //12

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var resultadoDivide = x / y;
  return resultadoDivide;
}
divide(12, 4); //3

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  var resultado;
  if (x === y) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
sonIguales("a", "b"); //false

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var resultado;
  var cadena1 = "";
  cadena1 = str1;
  var cadena2 = "";
  cadena2 = str2;
  if (cadena1.length == cadena2.length) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
tienenMismaLongitud("casa", "mesa"); //true

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  var resultado;
  if (num < 90) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
menosQueNoventa(85); //false

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  var resultado = true;
  if (num > 50) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
mayorQueCincuenta(125); //true

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var resto = x % y;

  return resto;
}
obtenerResto(211, 5); //1

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  var par;
  var auxiliar = num / 2;
  auxiliar = Math.trunc(auxiliar) * 2;
  if (num == auxiliar) {
    par = true;
  } else {
    par = false;
  }
  return par;
}
esPar(10); //true

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var impar;
  var auxiliar = num / 2;
  auxiliar = Math.trunc(auxiliar) * 2;
  if (num == auxiliar) {
    impar = false;
  } else {
    impar = true;
  }
  return impar;
}
esImpar(11); //true

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var cuadrado = Math.pow(num, 2);
  return cuadrado;
}
elevarAlCuadrado(5); //25

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var cubo = Math.pow(num, 3);
  return cubo;
}
elevarAlCubo(3); //9

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var elevado = Math.pow(num, exponent);
  return elevado;
}
elevar(2, 3); //8

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var redondeado = Math.round(num);
  return redondeado;
}
redondearNumero(5.5); //6

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var redondeado = Math.ceil(num);
  return redondeado;
}
redondearHaciaArriba(6.45); //7

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var rnd = Math.floor(Math.random() * 1);
  return rnd;
}
numeroRandom();

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  var resultado = "";
  if (Math.sign(numero) === 1) {
    resultado = "Es positivo";
  } else if (Math.sign(numero) === -1) {
    resultado = "Es negativo";
  } else if (numero == 0) {
    resultado = false;
  }
  return resultado;
}
esPositivo(3); //Es positivo

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var nuevaCadena = str + "!";
  return nuevaCadena;
}
agregarSimboloExclamacion("Hola"); //Hola!

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var nombreApellido = nombre + " " + apellido;
  return nombreApellido;
}
combinarNombres("Luis", "Gimenez"); //Luis Gimenez

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var saludo = "Hola " + nombre + "!";
  return saludo;
}
obtenerSaludo("Luis"); //Hola Luis!

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var area = alto * ancho;
  return area;
}
obtenerAreaRectangulo(3, 5); //15

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var perimetro = lado * 4;
  return perimetro;
}
retornarPerimetro(4); //16

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var triangulo = (base * altura) / 2;
  return triangulo;
}
areaDelTriangulo(3, 4); //6

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var cambio = euro * 1.2;
  return cambio;
}
deEuroAdolar(3); //3.6

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  var vocal = "";
  var mensaje = "";
  if (letra.length == 1) {
    vocal = letra.toLowerCase();
    const arreglo = ["a", "e", "i", "o", "u"];
    //vocal.match(/[aeiou]/g)[0] == letra
    if (arreglo.indexOf(vocal) != -1) {
      ///es vocal
      mensaje = "Es vocal";
    } else {
      mensaje = "Dato incorrecto";
    }
  } else {
    mensaje = "Dato incorrecto";
  }
  return mensaje;
}
esVocal("a"); //“Es vocal”

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
