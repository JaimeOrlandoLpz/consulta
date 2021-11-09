import { getVideojuegosByID } from "./GetVideoJuegosByID";

export var getGamesBySearch = (busqueda = '') => {
    if (busqueda == ''){
        return [];
    }
    let busquedaInt = parseInt(busqueda, 10);
    if(localStorage.videogames){
        console.log('games = ' + localStorage.videogames);
        var query = [];
        var juegos = JSON.parse(localStorage.videogames.toString())
        for (var juegoIndice in juegos) {
            var juego = juegos[juegoIndice];

            // índice del juego en local storage
            if(juego=== busquedaInt){
                let jueguito;
                getVideojuegosByID(juego).then((res)=>{
                    jueguito = res;
                    console.log(res);
                    query.push(jueguito);
                });
            }
        }
        return query;
    }
    else{
        return [];
    }
}