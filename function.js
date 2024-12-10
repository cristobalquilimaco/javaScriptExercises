// Ejercicio:
// Descripción:

// Escribe un programa que calcule el área y el perímetro de un rectángulo. Crea una función para calcular el área y otra para calcular el perímetro, y luego utiliza estas funciones en el programa principal.

// Requisitos:

// La función calcularArea debe tomar dos parámetros: el ancho y el alto del rectángulo, y devolver el área (ancho * alto).
// La función calcularPerimetro debe tomar dos parámetros: el ancho y el alto del rectángulo, y devolver el perímetro (2 * (ancho + alto)).
// Después de definir las funciones, en el programa principal, pide al usuario que ingrese las dimensiones del rectángulo (ancho y alto) usando prompt() (o define valores estáticos si no estás trabajando en un entorno de navegador).
// Llama a ambas funciones y muestra los resultados en la consola o en un alert().


// Funcion para calcular el area
function calcularArea(alto, ancho){
    return alto * ancho
}

function calcularPerimetro(alto, ancho){
    return 2 *(alto + ancho)
}

function obtenerDimensiones(){
    // Aqui se definen las dimensiones del rectangulo de forma estatica
    let ancho = 5;
    let alto = 10;

    //calcular el área y el perimetro usando las funciones
    let area = calcularArea(ancho, alto)
    let perimetro = calcularPerimetro(ancho, alto)

    console.log("el area del rectangulo es: ", area);
    console.log("el area del perimetro es: ", perimetro);
}

obtenerDimensiones()