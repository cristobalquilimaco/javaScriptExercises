// Ejercicio: Filtrar pares e impares
// Tienes un array de números enteros. Tu tarea es escribir una función llamada filtrarParesImpares que reciba este array y devuelva un objeto con dos propiedades:

// pares: un array con todos los números pares.
// impares: un array con todos los números impares.

numbers = [1,2,3,4,5,6,7,8,9]

// function filtrarParesImpares(numbers) {
//     let pares = []
//     let impares = []
    
//     numbers.forEach(num => {
//         if (num %2 === 0){
//             pares.push(num)
//         }else{
//             impares.push(num)
//         }
//     });
//     return {pares, impares}
// }


// const filter = filtrarParesImpares(numbers);
// console.log(filter);

function filtrarParesImpares(numbers){
    let pares = []
    let impares = []

    for (const num of numbers){
        if (num % 2 === 0){
            pares.push(num)
        }else{
            impares.push(num)
        }
    }
    return {pares, impares}

}

filter = filtrarParesImpares(numbers)
console.log(filter);
