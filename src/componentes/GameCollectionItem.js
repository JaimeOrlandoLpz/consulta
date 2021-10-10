import React from 'react';
import { useFetch } from './hooks/fetchGameId';

export const InfoVideojuegos = ({titulo, dispatch}) => {


    const url = 'https://api.rawg.io/api/games/' + titulo + '?key=cdc87febef7e4446a853e5c829920d18';

    const { loading, info }  = useFetch(url);

    const onClick = (e) => {
        console.log("borrar")
        dispatch({type:"delete", payload:titulo})
    }
    



    return(
        <>
            
            
                {loading ? (
                        
                        <div key={titulo} className="alert alert-info text-center">
                            Cargando...
                        </div>
                    ) 
                    : 
                    (

                        <div key={info.id} className="card p-2 bd-highlight">
                           
                            <img src={info.background_image} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{info.name} Id:{titulo}</h5>
                                    <p  className="card-text">Rating: {info.rating} <br>
                                        </br> Metacritic: {info.metacritic}</p>
                                    <button className="btn btn-danger" onClick={onClick}>
                                        Quitar de Colección
                                    </button>
                                    
                                </div>
                        </div>
                    )
                }
        
        </>

        
        )
}