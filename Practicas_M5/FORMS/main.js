document.getElementById('registroEvento').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío automático del formulario

      // Variables
        const nombre = document.getElementById('nombreC')
        const correo = document.getElementById('correo').value;
        const telefono = document.getElementById('telefono')
      /*   const intereses = document.querySelectorAll('input[name="intereses"]:checked');
        const horario = document.querySelector('input[name="horario"]:checked');
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value; */

        const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        
      // Validar nombre
        if (nombre.value.length <= 2  ) {
        /* alert('Por favor, completa todos los campos obligatorios.'); */
        alert('El nombre debe tener al menos 3 digitos');
        return;
        }

        if (!emailRegex.test(correo)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return;
    }

        if (telefono.value.length <=9){
            alert('El número de telefono debe tener 10 digitos');
            return;
        }

      // Si todo está bien
        alert('Registro exitoso. ¡Gracias por registrarte!');

        
    });