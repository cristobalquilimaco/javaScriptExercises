// Funcion agruparPoLongitud(palabras)

// Recibe un array de palabras como parametro 

// Devuelve un objeto donde las claves sean longitudes de las palabras y los valores 
// sean arrays con las palabras que tienen esa longitud

// Validaciones:

// Asegurate de que el array no este vacio
// Si esta vacio la funcion debe retornar un array vacio ({})

const palabras = ["casa", "sol", "montaña", "luz", "lago", "mar", "espejo"];

function agruparPoLongitud(palabras){
    // validacion si el arreglo esta vacio
    if(palabras.length === 0)
        return{}


//Objeto para almacenar las palabras segun su longitud
const resultado = {}

// Recorre el array con las palabras
for(let palabra of palabras){
    const longitud = palabras.length; // Aqui se obtiene la longitud de la palabras

    //Se valida si no existe una clave para esa longitud, si no existe la crea
if(!resultado[longitud]){
    resultado[longitud] = []
}
// Agrega la palabra al array que corresponde
    resultado[longitud].push(palabra);
}
return resultado
}

console.log(agruparPoLongitud(palabras));

// Resultado por consola
// // {
// //     '7': [
// //       'casa',    'sol',
// //       'montaña', 'luz',
// //       'lago',    'mar',
// //       'espejo'
// //     ]
// //   }

// Metodos utilizados

// .length() -- la propiedad length de un objeto "string" respresenta la longitud de una cadena, en unidades de codigo UTF-16
// esta propieda devielve el numero de caracteres de una cadena

// .push() -- Este metodo añade uno o mas elementos al final de un Array y devuelve la nueva longitud del array