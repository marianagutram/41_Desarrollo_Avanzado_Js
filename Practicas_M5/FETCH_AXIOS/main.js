// Implementa las Solicitudes con Fetch
const fetchBtn = document.getElementById('fetch-btn');
const dataContainer = document.getElementById('data-container');

fetchBtn.addEventListener('click', () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response =>  {
        if (!response.ok) {
        throw new Error('Error en la solicitud');
        }
        return response.json();
    }) 
    .then(data => renderCharacters(data.results)
        )
    .catch(error => {
        console.error('Error:', error);
        dataContainer.textContent = 'Hubo un error al obtener los datos.';
    }); 
});


/* AXIOS */

const axiosBtn = document.getElementById('axios-btn');

axiosBtn.addEventListener('click', () => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
        const data = response.data;
        renderCharacters(data.results);
      // Completar: renderizar datos en el contenedor
      // Pista: Observa que Axios ya convierte la respuesta JSON, por lo que no necesitas usar `.json()`.
    })
    .catch(error => {
        console.error('Error:', error);
        dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});



/* RENDER */
function renderCharacters(characters) {
    dataContainer.innerHTML = '';
    characters.forEach(character => {
    const characterElement = document.createElement('div');
    characterElement.innerHTML = `
        <h3>${character.name}</h3>
        <img src="${character.image}" alt="${character.name}">
    `;
    dataContainer.appendChild(characterElement);
    });
}