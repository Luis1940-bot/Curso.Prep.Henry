// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arreglo = [];
  for (let clave in objeto) {
    var cadena1 = clave;
    var cadena2 = objeto[clave];
    arreglo.push([cadena1, cadena2]);
  }
  return arreglo;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí

  var subcadena = string;
  var index = 0;
  const objCadena = {};

  do {
    subcadena = subcadena.substring(index); //luisu//uisu
    var sub = subcadena.substring(index, 1); //l//u
    var regex = new RegExp(sub, "gi");
    var veces = subcadena.match(regex).length; //1//2
    subcadena = subcadena.replace(regex, ""); //uisu//is
    objCadena[sub] = veces;

    //index++;
  } while (subcadena.length > 0); //4//2
  return objCadena;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var nuevoStringMayuscula = "";
  var nuevoStringMinuscula = "";
  for (let index = 0; index < s.length; index++) {
    var subminuscula = s.substring(index, index + 1);
    var asciiminuscula = subminuscula.charCodeAt(0);
    var subMayuscula = subminuscula.toUpperCase();
    var asciimayuscula = subMayuscula.charCodeAt(0);
    if (asciiminuscula === asciimayuscula) {
      //es mayuscula
      nuevoStringMayuscula += s.slice(index, index + 1);
    } else {
      nuevoStringMinuscula += subminuscula;
    }
  }
  return nuevoStringMayuscula + nuevoStringMinuscula;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var nuevoString = "";
  var stringInvertido = "";
  var array = str.split(" ");
  for (let i = 0; i < array.length; i++) {
    var stringNuevo = array[i];
    for (let index = stringNuevo.length; index >= 0; index--) {
      stringInvertido += stringNuevo.substring(index, index + 1);
    }
    nuevoString += stringInvertido + " ";
    stringInvertido = "";
  }

  return nuevoString.trimEnd();
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  if (numero > 2) {
    var stringNumero = numero.toString();
    var primerdigito = stringNumero.substring(0, 1);
    var ultimodigito = stringNumero.substring(stringNumero.length - 1);
    if (primerdigito === ultimodigito) {
      return "Es capicua";
    } else {
      return "No es capicua";
    }
  } else {
    return "No es capicua";
  }
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var sub = "[/abc/]";
  var regex = new RegExp(sub, "gi");
  return (subcadena = cadena.replace(regex, ""));
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort((a, b) => {
    if (a.length == b.length) {
      return 0;
    } else if (a.length < b.length) {
      return -1;
    }
  });
  return arr;
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var nuevoArray = [];
  arreglo1.forEach((element1) => {
    arreglo2.forEach((element2) => {
      if (element1 === element2) {
        nuevoArray.push(element1);
      }
    });
  });
  return nuevoArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
