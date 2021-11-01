import React, {useState, useContext} from 'react';
//Con Link y NavLinkvamos a poder navegar entre las diferentes páginas utilizando el Router de React. 
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../hooks/context/UserContext';

export const Navbar = () => {


    const { user, setUser } = useContext(UserContext);
    console.log("user: " + user.username);



    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Librería</Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink activeClassName="active" className="nav-item nav-link" exact to="/videojuegos">
                        Videojuegos
                    </NavLink>
                    <NavLink 
                        activeClassName="active" 
                        className="nav-item nav-link" 
                        exact 
                        to="/buscar"> 
                        Buscar 
                    </NavLink>                          
                    <NavLink activeClassName="active" className="nav-item nav-link" exact to="/coleccion">Colección</NavLink>
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
 
                <ul className="navbar-nav ml-auto">
                    <NavLink activeClassName="active" className="nav-item nav-link" exact to="/welcome">
                        Salir
                    </NavLink>
                </ul>

                <div className="navbar-nav ml-auto">
                    <p className="navbar-text"> User: { user.username }</p>
                </div>
            </div>



        </nav>);
}