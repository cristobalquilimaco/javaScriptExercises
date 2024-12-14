// Ordenar una lista de palabras alfabéticamente

// Instrucciones:
// 1 - Crea una funcion llamada "orderWords" que reciba un arreglo de palabras y las ordene alfabéticamente de forma ascendente.
// 2 - Crea otra función llamada "showResults" que imprima el arreglo ordenado en consola
// 3 - La funcion ordenar "orderWords" debe ordenar las palabras usando algún algoritmo de ordenamiento (por ejemplo el metodo sort de javascript)

//Se crea la funcion para ordenar alfabéticamente las palabras
function orderWords(words){
    return words.sort();
}

//Funcion para mostrar los resultados de las palabras
function showResults(words){
    const orderWordsFinal = orderWords(words)
    console.log("Palabras ordenadas alfabéticamente: ", orderWordsFinal);
}

//Seccion para probar el ejrcicio
const wordList = ["manzana", "naranja", "pera", "platano", "uva"]
showResults(wordList)







//Metodos aprendidos.

//  .sort()
//Este metodo ordena los elementos de un arreglo localmente y devuelve el arreglo ordenado
//La ordenacion no es necesariamente estable
// El modo de ordenación por defecto responde a la posicion del valor del string de acuerdo a su valor unicode
