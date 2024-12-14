// Enunciado del ejercicio:
// En un sistema de reservas de vuelos, necesitamos una función que valide si un usuario puede reservar un vuelo en base a las siguientes condiciones:

// Si el usuario tiene 18 años o más, puede hacer la reserva.
// Si el usuario tiene menos de 18 años, necesita tener el consentimiento de un adulto. La función debe pedir la edad del adulto para continuar con la reserva.
// El usuario debe proporcionar un correo electrónico válido para completar la reserva.
// Funciones que deberás implementar:
// esEdadValida(edad): Esta función recibirá la edad del usuario (un número) y devolverá true si la edad es 18 o más, y false si es menor a 18.

// esCorreoValido(correo): Esta función verificará si el correo electrónico tiene un formato válido. Puedes asumir que un correo electrónico válido debe contener "@" y "." en el formato adecuado.

// realizarReserva(usuario): Esta es la función principal que utilizará las funciones anteriores. Recibirá un objeto usuario con las siguientes propiedades:

// edad (un número)
// correo (una cadena de texto)
// tieneConsentimientoAdulto (un valor booleano que indica si tiene el consentimiento de un adulto, solo necesario si la edad es menor a 18).
// La función realizarReserva(usuario) deberá verificar las siguientes condiciones:

// Si el correo es inválido, deberá devolver un mensaje de error.
// Si la edad es válida (18 o más), deberá permitir la reserva.
// Si la edad es menor a 18, deberá verificar si el usuario tiene consentimiento de un adulto. Si no lo tiene, deberá denegar la reserva.
// Si todas las condiciones son correctas, la reserva se completa con éxito.



const user = {
    age: 20,
    email: 'juan@example.com',
    consent: false,
  };
  
  const user2 = {
    age: 15,
    email: 'ana@example.com',
    consent: true,
  };

//Funcion para validar si el usuario es mayo de 18 años
// Función para verificar si la edad es válida (18 o más)
function esEdadValida(edad) {
    return edad >= 18;
  }
  
  // Función para verificar si el correo es válido
  function esCorreoValido(correo) {
    // Verificamos si el correo contiene "@" y "."
    return correo.includes('@') && correo.includes('.');
  }
  
  // Función principal para realizar la reserva
  function realizarReserva(usuario) {
    // Verificamos si el correo es válido
    if (!esCorreoValido(usuario.correo)) {
      return 'Correo electrónico inválido';
    }
  
    // Verificamos la edad
    if (esEdadValida(usuario.edad)) {
      return 'Reserva realizada con éxito';
    }
  
    // Si la edad es menor de 18, verificamos el consentimiento de un adulto
    if (usuario.tieneConsentimientoAdulto) {
      return 'Reserva realizada con éxito';
    }
  
    return 'No se puede realizar la reserva, se requiere consentimiento de un adulto';
  }
  
  // Ejemplo de uso
  const usuario1 = {
    edad: 20,
    correo: 'juan@example.com',
    tieneConsentimientoAdulto: false,
  };
  
  const usuario2 = {
    edad: 15,
    correo: 'ana@example.com',
    tieneConsentimientoAdulto: true,
  };
  
  console.log(realizarReserva(usuario1)); // "Reserva realizada con éxito"
  console.log(realizarReserva(usuario2)); // "Reserva realizada con éxito"
  