import React, { useState } from 'react';
import { MainAppRouter } from '../routers/MainAppRouter';
import { UserContext } from './hooks/context/UserContext';


export const GameLibraryApp = () => {
    //Utilizamos useState para mantener un usuario y compartirlo con los demás componentes por medio del Context. 
    // El estado inicial es un objeto vacío. 
    const [user, setUser] = useState({
        username: "No User"
    }); 
    return (
        <UserContext.Provider value = {{user, setUser}}>
            <MainAppRouter/>
        </UserContext.Provider>
    );
}