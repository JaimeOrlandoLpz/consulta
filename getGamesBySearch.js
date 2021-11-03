export const getGamesBySearch = (busqueda = '') => {
    if (busqueda == ''){
        return [];
    }
    var query = [];
    var juegos = JSON.parse(localStorage.games.toString())
    for (var juegoIndice in juegos) {
        var juego = juegos[juegoIndice];
        var name = juego["game"].name;
        if (name.toLowerCase().includes(busqueda.toLowerCase())) {
            query.push(juego);
        }
    }
    return query;
}