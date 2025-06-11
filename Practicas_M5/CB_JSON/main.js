// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros_1": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "Como agua para chocolate", "autor": "Laura Esquivel", "genero": "Romance", "disponible": true },
        { "titulo": "La campana de cristal", "autor": "Sylvia Plath", "genero": "Novela", "disponible": true }
    ]
};


//Funcion para simular la lectura de datos
function leerDatos(callback) {
    setTimeout(() => {
        // Aquí simulas leer el JSON con un retraso de 1 segundo
        callback(biblioteca);
    }, 2000);
    

}


//Funcion para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros_1.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
        
    });
}


// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    // Aquí falta la simulación de escribir el libro en el "archivo" (es decir, agregarlo al objeto)
    setTimeout(() => {
        // Pista: deberías agregar el nuevo libro a `biblioteca.libros`
        console.log("Nuevo libro:");
        biblioteca.libros_1.push(nuevoLibro)
    console.log(`${nuevoLibro.titulo} - ${nuevoLibro.autor} (${nuevoLibro.disponible ? 'Disponible' : 'Prestado'})`);
        
    }, 4000);
}

//Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    
    // Simula un retraso antes de actualizar la disponibilidad
    setTimeout(() => {
        // Pista: busca el libro por título y cambia la propiedad 'disponible' a nuevoEstado
        biblioteca.disponible = nuevoEstado;
    biblioteca.titulo=titulo;

    console.log(`${biblioteca.titulo}  (${biblioteca.disponible ? 'Disponible' : 'Prestado'})`)

    
    }, 6000);
}


//Como ejecutar la aplicación
mostrarLibros();    
agregarLibro("Frankenstein", "Mary Shelley", "Terror", true);
actualizarDisponibilidad("Como agua para chocolate", false);
