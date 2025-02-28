// Ejercicio:
// Tienes un array de objetos que representan productos en una tienda. Cada objeto 
// tiene las siguientes propiedades: nombre, precio y cantidad. La tarea es escribir una función que 
// calcule el valor total de los productos en inventario, teniendo en cuenta la cantidad de cada uno.

// Requerimientos:
// Crea una función llamada calcularTotalInventario.
// La función debe aceptar un array de objetos, donde cada objeto representa un producto.
// La función debe devolver el valor total de todos los productos en inventario.

const productos = [
    { nombre: 'Producto A', precio: 30, cantidad: 5 },
    { nombre: 'Producto B', precio: 20, cantidad: 3 },
    { nombre: 'Producto C', precio: 10, cantidad: 7 }
];

//En este caso se debe crear una funcion para calcular el valor
function calcularTotalInventario(productosEnTienda){
    const totalPrecio = productosEnTienda.reduce((suma, producto) =>{
        return suma + producto.precio * producto.cantidad
    }, 0)
    return totalPrecio
}

const total = calcularTotalInventario(productos);
console.log(total);

// En este ejercicio utilizamos el metodo .reduce() (funcion de orden superior) que permite iterar sobre los elementos de un array y acumular un unico valor a partir de ellos