// Ejercicio: Cálculo de un número primo
// Escribe una función que determine si un número es primo o no. Un número primo es aquel que solo tiene dos divisores: 1 y él mismo.

// Requisitos:
// La función debe llamarse esPrimo.
// La función debe recibir un número entero como argumento.
// La función debe devolver true si el número es primo y false si no lo es.
// Pistas:
// Un número primo solo tiene dos divisores: 1 y él mismo.
// Si el número es menor o igual a 1, no es primo.
// Puedes optimizar el código evitando comprobar los divisores hasta la raíz cuadrada del número.

function primeNumber(num){
    if(num <= 1){
        return false
    }

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true
}

console.log(primeNumber(7));
console.log(primeNumber(0));
console.log(primeNumber(5));

