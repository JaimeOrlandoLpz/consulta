import React from "react";

export const InfoVideojuegos = ({juego}) => {
    return(
         <div className="card m-2" style={{width: '18rem'}}>
            <img src={juego.imagen} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{juego.nombre}</h5>
                    <p className="card-text">Rating: {juego.rating}</p>
                    <p className="card-text">Metacritic: {juego.metacritic}</p>
                </div>
        </div>
    );
}