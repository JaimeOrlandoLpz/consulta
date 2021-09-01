import React, {useState} from "react";
import {AgregaGenero} from "./componentes/AgregarGenero";
import { ResultadoVideojuegos } from'./componentes/ResultadoVideojuegos';

export const VideojuegosApp = () => {
    const [generos, setGeneros] = useState(['action', 'puzzle']);
    const agregaGenero = () => {setGeneros( estadoActualGeneros => [ ...estadoActualGeneros, 'Nuevo Género' ] );}

    return (<>
        <div className="jumbotron jumbotron-fluid">
            <div className="container"><h1 className="display-4">Gamebook</h1><p className="lead">¡Bienvenido a la
                página donde podrás consultar información de videojuegos!</p></div>
        </div>

        <AgregaGenero setGeneros = {setGeneros}/>

        {/*Creamos la lista de géneros*/}
        <ol className="list-group list-group-numbered">{generos.map(genero => {
            return <ResultadoVideojuegos key={genero}
                                         genero={genero}/>
        })}</ol>
    </>)
}