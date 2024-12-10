// // Variables para llevar el control de las esferas
// let esferasRecogidas = 0;
// const totalEsferas = 7;

// // Función que se llama cuando se hace clic en una esfera
// function recogerEsfera(esferaId) {
//     const esfera = document.getElementById(esferaId);

//     // Desactivar la esfera (cambia el color)
//     esfera.style.backgroundColor = 'gray';
//     esfera.style.pointerEvents = 'none'; // Evitar más clics en esta esfera

//     // Aumentar el contador de esferas recogidas
//     esferasRecogidas++;

//     // Verificar si se han recogido todas las esferas
//     if (esferasRecogidas === totalEsferas) {
//         mostrarMensajeShenlong();
//     }
// }

// // Función para mostrar el mensaje de Shenlong
// function mostrarMensajeShenlong() {
//     const mensaje = document.getElementById('mensaje');
//     mensaje.textContent = '¡Has reunido las 7 Esferas del Dragón! Shenlong ha aparecido.';
// }

// // Asignar evento a cada esfera
// for (let i = 1; i <= totalEsferas; i++) {
//     const esfera = document.getElementById('esfera' + i);
//     esfera.addEventListener('click', () => recogerEsfera('esfera' + i));
// }

let esferasRecogidas = 0
let totalEsferas = 7

function recogerEsfera(esferaId){
    const esfera = document.getElementById(esferaId);
    esfera.style.backgroundColor = "gray"
    esfera.style.pointerEvents = "none";

    esferasRecogidas++;
    if(esferasRecogidas === totalEsferas){
        mostrarMensajeShenlong();
    }
}

function mostrarMensajeShenlong(){
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "¡Has reunido las 7 Esferas del Dragón! Shenlong ha aparecido.";
}

for(let i = 1; i <= totalEsferas; i++){
    const esfera = document.getElementById("esfera" + i);
    esfera.addEventListener("click", () => recogerEsfera("esfera" + i));
}