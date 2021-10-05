import React, { useState } from "react";
import { getVideojuegosByID } from "./GetVideoJuegosByID";


export function GameCollectionAdd(){

    const [titleID, setTitleID] = useState('Indique el ID del título de su elección');
    const [juego, setJuego] = useState({
        id: 300000,
        name: "Halleloo"
    });
    const handleInputChange = (e) => {
        setTitleID(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Se hizo submit...');
        getVideojuegosByID(titleID).then((resultado) =>{
            setJuego(resultado);
        });
        console.log('----------');
        console.log(juego);
            // Limpiamos input value
         setTitleID('');}

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-group input-group-sm mb-3">
                <input type="text" onChange={ handleInputChange } value={titleID} className="form-control"/></div>
            </form>
            <p>Juego: {juego.nombre}</p>
        </div>
    );
}
