import React, {useEffect, useState} from 'react';
import {InfoVideojuegos} from "./InfoVideojuegos";
import { useFetchVideojuegos } from './hooks/useFetchVideojuegos';


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