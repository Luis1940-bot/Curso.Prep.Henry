// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}
var arreglo = ["pera", "manzana", "mandarina", "uva"];
devolverPrimerElemento(arreglo); //pera

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}
arreglo = ["pera", "manzana", "mandarina"];
devolverUltimoElemento(arreglo, "uva"); //uva

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}
arreglo = ["pera", "manzana", "mandarina", "uva"];
obtenerLargoDelArray(arreglo); //4

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let index = 0; index < array.length; index++) {
    array[index] = array[index] + 1;
  }
  return array;
}
arreglo = [1, 2, 3, 4, 5];
incrementarPorUno(arreglo); //2,3,4,5,6

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}
arreglo = ["manzana", "mandarina", "pera"];
agregarItemAlFinalDelArray(arreglo, "uva"); //["manzana", "mandarina", "pera","uva"]

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
arreglo = ["mandarina", "pera", "uva"];
agregarItemAlComienzoDelArray(arreglo, "manzana"); //["manzana", "mandarina", "pera","uva"]

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var respuesta = "";
  for (let index = 0; index < palabras.length; index++) {
    if (index === palabras.length - 1) {
      respuesta += palabras[index];
    } else {
      respuesta += palabras[index] + " ";
    }
  }

  return respuesta;
}
arreglo = ["Este", "es", "un", "array", "de", "strings"];
dePalabrasAFrase(arreglo); //"Este es un array de strings"

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var respuesta = false;
  if (array.indexOf(elemento) >= 0) {
    respuesta = true;
  }
  return respuesta;
}
arreglo = ["pera", "manzana", "mandarina", "uva"];
arrayContiene(arreglo, "mandarina"); //true

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var respuesta = 0;
  for (let index = 0; index < numeros.length; index++) {
    respuesta += numeros[index];
  }
  return respuesta;
}
arreglo = [1, 2, 3, 4, 5];
agregarNumeros(arreglo); //15

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var respuesta = 0;
  var cantidadDeNotas = 0;
  for (let index = 0; index < resultadosTest.length; index++) {
    cantidadDeNotas++;
    respuesta += resultadosTest[index];
  }
  respuesta = respuesta / cantidadDeNotas;
  return respuesta;
}
arreglo = [6, 7, 8, 9, 5];
promedioResultadosTest(arreglo); //7

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var respuesta = 0;
  numeros.sort(function (a, b) {
    return b - a;
  });
  respuesta = numeros[0];
  return respuesta;
}
arreglo = [6, 7, 8, 9, 5];
numeroMasGrande(arreglo); //9

function multiplicarArgumentos(a, b, c) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var producto = 1;

  if (arguments.length === 0) {
    return 0;
  }
  for (let index = 0; index < arguments.length; index++) {
    producto = producto * arguments[index];
  }
  return producto;
}
multiplicarArgumentos(4, 5, 2); //40

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cuenta = 0;
  for (let index = 0; index < arreglo.length; index++) {
    if (arreglo[index] > 18) {
      cuenta++;
    }
  }
  return cuenta;
}
arreglo = [25, 18, 9, 11, 36, 2, 4, 70];
cuentoElementos(arreglo);

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  var respuesta = "";
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    respuesta = "Es fin de semana";
  } else if (numeroDeDia > 1 && numeroDeDia < 7) {
    respuesta = "Es dia Laboral";
  }
  return respuesta;
}
diaDeLaSemana(2); //Es día Laboral

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  var str = n.toString();
  if (str[0] === "9") {
    return true;
  } else {
    return false;
  }
}
empiezaConNueve(98); //true

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var repetido = false;
  for (var i = 0; i < arreglo.length; i++) {
    for (var j = 0; j < arreglo.length; j++) {
      if (arreglo[i] == arreglo[j]) {
        //revisamos que i sea diferente de j, para que no compare el mismo elemento exacto.
        repetido = true;
      } else {
        repetido = false;
        return repetido;
      }
    }
  }
  return repetido;
}
arreglo = ["pera", "pera", "pera", "pera"];
todosIguales(arreglo); //true

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];
  for (let index = 0; index < array.length; index++) {
    if (
      array[index] === "Marzo" ||
      array[index] === "Enero" ||
      array[index] === "Noviembre"
    ) {
      nuevoArray.push(array[index]);
    }
  }
  if (nuevoArray.length < 3) {
    return "No se encontraron los meses pedidos";
  } else {
    return nuevoArray;
  }
}
arreglo = [
  "Febrero",
  "Marzo",
  "Enero",
  "Noviembre",
  "Diciembre",
  "Mayo",
  "Junio",
  "Agosto",
];
mesesDelAño(arreglo); //["Enero", "Marzo", "Noviembre"]

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > 100) {
      nuevoArray.push(array[index]);
    }
  }
  return nuevoArray;
}
arreglo = [1, 0, 25, 120, 100, 200, 145, 25, 74, 89, 130, 115, 108];
mayorACien(arreglo); //[120, 200, 145, 130, 115, 108]

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevoArray = [];

  let index = 0;
  for (index; index < 10; index++) {
    numero = numero + 2;
    if (numero === index) {
      break;
    } else {
      nuevoArray.push(numero);
    }
  }
  if (nuevoArray.length === 10) {
    return nuevoArray;
  } else {
    return "Se interrumpió la ejecución";
  }
}
// breakStatement(3);

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoArray = new Array();

  for (let index = 0; index < 10; index++) {
    if (index === 4) {
      continue;
    } else {
      numero = numero + 2;
      nuevoArray.push(numero);
    }
  }
  return nuevoArray;
}
continueStatement(3);
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
