import React, {useEffect, useState} from 'react';
import {InfoVideojuegos} from "./InfoVideojuegos";
import { useFetchVideojuegos } from './hooks/useFetchVideojuegos';

//Recibe como argumento el género que se va utilizar para hacer la búsqueda de los videojuegos
// utilizando el API de RAWGexport

// export const getVideojuegos = async () => {
//     const url = 'https://api.rawg.io/api/games?key=f853f0b7deb043d99ce19276c75eb925&genres=' + encodeURI(genero);
//     const respuesta = await fetch(url);
//     const setInfoJuegos = useState([]);
//     const {results} = await respuesta.json();
//     const juegos = results.map(juego => {
//         return {
//             id: juego.id,
//             nombre: juego.name,
//             imagen: juego.background_image,
//             rating: juego.rating,
//             metacritic: juego.metacritic
//         }
//     });
//     console.log(juegos);
//     setInfoJuegos(juegos);
// }

export const ResultadoVideojuegos = ({genero}) => {
    // useEffect(() => {
    //     getVideojuegos();
    // }, []);

    const {infoJuegos, loading} = useFetchVideojuegos(genero);


    // getVideojuegos();
    return(
        <div>
            <h3>{genero}</h3>

            {loading ? <p>Loading...</p> : null}

            { console.log('infoJuegos: ' + infoJuegos) }

            <div className = "container d-flex flex-wrap align-items-center">

            {
                
                infoJuegos.map((jueguito) => {
                console.log('jueguito: ' + jueguito);
                   return(
                      <InfoVideojuegos juego={jueguito}></InfoVideojuegos>
                   )
                })
            }
            </div>
        </div>
    );
}
