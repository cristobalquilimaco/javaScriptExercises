// Ejercicio: Encuentra los números primos en un rango dado y verifica si son primos gemelos
// Descripción del problema:
// Rango de números: Dado un número n, se te pide que encuentres todos los números primos entre 2 y n.
// Primos gemelos: Un par de números primos (p1, p2) son considerados primos gemelos si la diferencia entre ellos es exactamente 2. Es decir, si p2 - p1 === 2 y ambos son números primos.
// Requisitos:
// Crea una función que encuentre todos los números primos entre 2 y un número n dado.
// Luego, encuentra y devuelve todos los pares de primos gemelos en ese rango.
// La función debe devolver un array con todos los pares de primos gemelos encontrados.
// La salida debe ser un array de arrays, donde cada subarray contiene un par de primos gemelos.


function isPrimes(num){
    if(num < 2) return false 
    //Aplicamos Math.sqrt() para validar raiz cuadrada de num
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0)return false;
    }
    return true
}

function findPrimes(n){
    let primes = []
    for(let i = 2; i <= n; i++){
        if(isPrimes(i)){
            primes.push(i)
        }
    }
    return primes
}

function findTwinCousins(){
    
}


let num = findPrimes(50)



console.log(num)
