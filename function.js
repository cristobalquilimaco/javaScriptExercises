// Ejercicio:
// Descripción:

// Escribe un programa que calcule el área y el perímetro de un rectángulo. Crea una función para calcular el área y otra para calcular el perímetro, y luego utiliza estas funciones en el programa principal.

// Requisitos:

// La función calcularArea debe tomar dos parámetros: el ancho y el alto del rectángulo, y devolver el área (ancho * alto).
// La función calcularPerimetro debe tomar dos parámetros: el ancho y el alto del rectángulo, y devolver el perímetro (2 * (ancho + alto)).
// Después de definir las funciones, en el programa principal, pide al usuario que ingrese las dimensiones del rectángulo (ancho y alto) usando prompt() (o define valores estáticos si no estás trabajando en un entorno de navegador).
// Llama a ambas funciones y muestra los resultados en la consola o en un alert().


// Funcion para calcular el area
function calcularArea(ancho , alto){
    return ancho * alto;
}

//Funcion para calcular el perimetro
function calcularPerimetro(ancho, alto){
    return 2 * (ancho + alto);
}

//Funcion principal
function obtenerDimensiones(){
    //Pedir dimensiones del rectangulo
    let ancho = parseFloat(prompt("Introduce el ancho del rectangulo"))

}