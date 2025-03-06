// Ejercicio: Encontrar el número único
// Tienes un arreglo de números donde todos los números aparecen dos veces, 
// excepto uno que aparece una sola vez. Tu tarea es encontrar el número único que aparece solo una vez.




function numeroNoRepetido(numeros) {
    const contador = {};
    
    // Contamos las ocurrencias de cada número
    for (let num of numeros) {
        contador[num] = (contador[num] || 0) + 1;
    }
    
    // Buscamos el número que aparece solo una vez
    for (let num in contador) {
        if (contador[num] === 1) {
            return num;  // Retorna el primer número que no se repite
        }
    }
    
    return null;  // Si no hay ningún número único
}

const numeros = [4, 1, 2, 1, 2];
console.log(numeroNoRepetido(numeros));  // Debería devolver 4
