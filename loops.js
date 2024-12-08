// // SUMA DE MULTIPLOS DE 3 Y 5 

// Escribe un programa que calcule la suma de todos los numeros que tengan multiplos de 3 o 5 que sean menores a 1000

// instrucciones:
// 1 ) crea un bucle que recorra todos los numeros del 1 hasta el 9999
// 2 ) Si el numero es multiplo de 3 o 5. añadelo a una variable suma 
// 3 ) Al final del programa, muestra el resultado de la suma en la consola

// PISTAS 
// Puedes utilizar el operador % para verificar si el numero es multiplo de otro Por ejempo, n % 3 === 0 significa que n es un multiplo de 3.
// Usa el bucle for para recorrer los numeros.

// Ejemplo: Suma de los multiplos de 3 y 5 menores a 1000 : 

// Variable para almacenar la suma 

let suma = 0
// bucle para recorrer los numeros del 1 al 999
for(let i = 1; i < 1000; i ++){
    //Si el numero es un multiplo de 3 o 5
    // Utilizando los operadores logicos
    if(i % 3 === 0 || i % 5 === 0 ){
        suma += i;
    }
}

console.log("Suma de los multiplos de 3 y 5 menores a 1000:", suma);
