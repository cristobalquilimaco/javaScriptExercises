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
}

//Objeto para almacenar las palabras segun su longitud
const resultado = {}

// Recorre el array con las palabras
for(let palabras of palabras){
    const longitud = palabras.length; // Aqui se obtiene la longitud de la palabras
}

//Se valida si no existe una clave para esa longitud, si no existe la crea
if(!resultado[longitud]){
    resultado[longitud] = []
}