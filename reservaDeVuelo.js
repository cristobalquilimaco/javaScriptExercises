

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
  