export const getVideojuegos = async (genero) => {
    const url = 'https://api.rawg.io/api/games?key=cdc87febef7e4446a853e5c829920d18&genres=' + encodeURI(genero);
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    const juegos = results.map(juego => {
        return {
            id: juego.id,
            nombre: juego.name,
            imagen: juego.background_image,
            rating: juego.rating,
            metacritic: juego.metacritic
        }
    });
    console.log('juegos fn: ' + juegos);
    return juegos;
}