import React, { useReducer } from 'react';
import { GameCollectionAdd } from './GameCollectionAdd';
import { GameCollection } from './GameCollection';
import { collectionReducer, init } from './hooks/collectionReducer';


export const GameCollectionApp = () => {

    const [titulos, dispatch] = useReducer(collectionReducer, [], init);

    return ( 
        <>
            <div className = "jumbotron jumbotron-fluid" >
                <div className = "container" >
                <h1 className = "display-4" > Gamebook </h1> 
                <p className = "lead" > ¡Bienvenido a Gamebook, el portal donde puedes consultar la información de tus juegos favoritos! </p> 
                </div> 
            </div> 

            <GameCollectionAdd dispatch = {dispatch}/>
            <GameCollection titulos={titulos} dispatch={dispatch}/>
            
        </>
    )
}