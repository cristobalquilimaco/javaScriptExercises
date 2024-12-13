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
function validateAge(age){
    return age >= 18;
}

//Funcion para validar si el correo esta escrito corretamente
function validateEmail(email){
    return email.includes("@") && email.includes(".")
}

//Funcion para hacer la reservacion
function makeAReservation(user){
    //condicion para validar si el correo es valido 
    if(!validateEmail(user.email)){
        return "The email has been sucessfully validate"
    }
    if(validateAge(user.age)){
        return "The user is of the correct age to make a reservation"
    }
    if(user.consent){
        return "Does it have adult consent?"
    }
    return "The user cannot make the reservation"
}