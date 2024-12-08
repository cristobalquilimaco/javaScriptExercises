// 1: CALCULAR EL VALOR TOTAL DE LA COMPRA

//Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.
//Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicar precio por el iva y dividir por 100.


//Precio 200€

//Iva: 21%

//El total son 242 €.  //200 + 21*200/100

const compra = 200
const iva = 21

const totalCompra = compra + iva * 200 / 100 
console.log(`el valor total de tu compra es de ${totalCompra}€`);

// El valor colocado por consola es de 242€
// para correr el codigo en consola puede colocar node exercise1.js
// node el nombre de tur archivo y dale enter


// 2 CALCULAR EL PERIMETRO DEL CUADRADO

// En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
// El area la calculas como lado multiplicado por lado. El perímetro es la suma de los cuatro lados.

// INDICACIONES:

// LADO = 40
// AREA = 1600
// PERIMETRO 160

