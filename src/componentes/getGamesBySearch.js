export const getGamesBySearch = (busqueda = '') => {
    if (busqueda == ''){
        return [];
    }
    if(localStorage.videogames){
        console.log('games = ' + localStorage.videogames);
        var query = [];
        var juegos = JSON.parse(localStorage.videogames.toString())
        for (var juegoIndice in juegos) {
            var juego = juegos[juegoIndice];
            var name = juego["videogames"].name;
            if (name.toLowerCase().includes(busqueda.toLowerCase())) {
                query.push(juego);
            }
        }
        return query;
    }
    else{
        return [];
    }
}