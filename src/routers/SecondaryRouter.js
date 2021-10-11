import React from 'react';
import { Navbar } from '../componentes/comunes/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { GameCollectionApp } from '../componentes/GameCollectionApp';
import { VideojuegosApp } from '../VideojuegosApp';


export const SecondaryRouter = () => {
    return (
    <><Navbar />
        <div>
            <Switch>

            <Route exact path="/coleccion" component={GameCollectionApp} />
            <Route exact path="/videojuegos" component={VideojuegosApp} />                     
                
            </Switch>
        </div></>);
    }