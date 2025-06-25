 // Importamos Zod

    import * as z from 'https://esm.sh/zod@3.23.8';
    /* const { z } = window.Zod; */

    

    // Esquema para validar los datos del formulario
    export const registerSchema = z.object({
      // PISTA: Define que el nombre debe ser una cadena no vacía.
    name:z.string()
    .min(3, {message: 'El nombre debe tener al menos 3 caracteres.   '})
    .max(100, {message: 'El nombre completo no puede exceder los 100 caracteres.   '}),
      // PISTA: Valida que el correo tenga el formato correcto.
      email:z.string()
      .email({message:"Debe ser un correo válido.  "}),
      // PISTA: La contraseña debe tener al menos 6 caracteres.
      password:z.string().min(6, "La contraseña debe tener al menos 6 carácteres.  "),
    

    });

    document.getElementById("registerForm").addEventListener("submit", (event) => {
        event.preventDefault();
    
      // Capturamos los valores ingresados
        const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        };

        try {
        // PISTA: Usa el método correcto de Zod para validar el esquema.
        //registerSchema.___?___(formData);
        registerSchema.parse(formData);
        alert("¡Registro exitoso!");
        } catch (error) {
        // PISTA: Muestra los mensajes de error en la página.
        document.getElementById("errors").textContent = error.errors.map(e => e.message).join(", ");
        }
    });