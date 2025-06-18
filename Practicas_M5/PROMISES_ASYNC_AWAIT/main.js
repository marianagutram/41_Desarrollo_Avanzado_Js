
let mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (mesasSolicitadas <= mesasDisponibles) {
        resolve(`Reserva confirmada: ${mesasSolicitadas} mesa(s) disponible(s).`);
        } else {
        reject(`Lo siento, solo quedan ${mesasDisponibles} mesa(s) disponible(s).`);
        }
    }, 2000);  // Simula un retraso en la verificación (2 segundos)
    });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = Math.random() > 0.2; 
        if (exito) {
        resolve(`Correo enviado con éxito a ${nombreCliente}. ¡Gracias por reservar!`);
        } else {
        reject(`Error al enviar el correo a ${nombreCliente}. Inténtalo nuevamente.`);
        }
    }, 1500);  // Simula el envío de un correo (1.5 segundos)
    });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
    try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(disponibilidad);

    mesasDisponibles -= mesasSolicitadas; 
    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(confirmacion);
    } catch (error) {
    console.log("Error:", error);  
    }
}

// Llamada de prueba
hacerReserva("Mariana Gutiérrez", 4);  
