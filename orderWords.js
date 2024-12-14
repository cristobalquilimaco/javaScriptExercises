// Ordenar una lista de palabras alfabéticamente

// Instrucciones:
// 1 - Crea una funcion llamada "orderWords" que reciba un arreglo de palabras y las ordene alfabéticamente de forma ascendente.
// 2 - Crea otra función llamada "showResults" que imprima el arreglo ordenado en consola
// 3 - La funcion ordenar "orderWords" debe ordenar las palabras usando algún algoritmo de ordenamiento (por ejemplo el metodo sort de javascript)

function orderWords(word){
    return word.sort();
}

function showResults(){
    const orderWords = orderWords(palabras)
    console.log("Palabras ordenadas alfabéticamente: ", orderWords);
}