import React from 'react';


export const WelcomePage = ({history}) => {
    const doStart = () =>{
        history.replace('/videojuegos');
    }
    return(
        <div>
            <h1>Welcome to the Videogame Library App</h1>
            <br/>
            <button className="btn btn-primary"onClick={ doStart }>Acceder</button>
        </div>
    );
}