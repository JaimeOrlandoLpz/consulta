export const getVideojuegosByID = async (id) => {
    const url = 'https://api.rawg.io/api/games/' + encodeURI(id) + '?key=cdc87febef7e4446a853e5c829920d18';
    const respuesta = await fetch(url);
    const respuestaJuego = await respuesta.json();

    const juego ={
        id: respuestaJuego.id,
        nombre: respuestaJuego.name,
        imagen: respuestaJuego.background_image,
        rating: respuestaJuego.rating,
        metacritic: respuestaJuego.metacritic
    }

    return juego;
}