// Ejercicio: Juego de Sumas Anidadas
// Tienes una matriz de números, en la que cada número es un valor o una sub-matriz de números. Tu tarea es escribir una función llamada sumNestedArray que recorra la matriz y devuelva la suma total de todos los números, incluyendo los números dentro de las sub-matrices.

// Requisitos:

// La función debe manejar matrices anidadas de manera recursiva.
// La entrada puede contener tanto números como arrays dentro de otros arrays.

const arr = [1, [2,3], [4, [5,6]], 7]

function sumaNesteArray(arr){
    let suma = 0 //Inicializamos la variable donde vamos a agregar la suma en 0

    for(let element of arr){
        if(Array.isArray(element)){
            suma += sumaNesteArray(element)
        }else if(typeof element === "number"){
            suma += element 
        }
        
    }
    return suma
}
console.log(sumaNesteArray(arr))
