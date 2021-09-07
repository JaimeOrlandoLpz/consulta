import React, {useEffect, useState} from 'react';
import {InfoVideojuegos} from "./InfoVideojuegos";

//Recibe como argumento el género que se va utilizar para hacer la búsqueda de los videojuegos
// utilizando el API de RAWGexport
export const ResultadoVideojuegos = ({genero}) => {
    useEffect(() => {
        getVideojuegos();
    }, []);
    const [infoJuegos, setInfoJuegos] = useState([]);

    const getVideojuegos = async () => {
        const url = 'https://api.rawg.io/api/games?key=81968fe1e43b4826ad66e0ec60f89064&genres=' + encodeURI(genero);
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
        console.log(juegos);
        setInfoJuegos(juegos);
    }

    getVideojuegos();

    return (
        <div>
            <h3 className={"card-title"}>{genero}
                <div className={"container d-flex flex-wrap align-items-center"}>
                    {/*  */}
                    {
                        infoJuegos.map((juego) => {
                                return (
                                    <InfoVideojuegos
                                        key={juego.id}
                                        juego={juego}
                                    />)
                            }
                        )}
                    {/**/}
                </div>
            </h3>
        </div>)
}

