import React from 'react'; 
import {juegos} from '../../datos/juegos';
import {useForm} from '../../hooks/useForm';
import {GameCard} from '../games/GameCard';
 
export const BuscadorScreen = () => { 

	const juegosFirmados = juegos;
	const [formValues, handleInputChange]=useForm({
		criterioBuqueda:''
	});
	const {criterioBusqueda} = formValues;
    const handleBusqueda = (e) => { 
         e.preventDefault();
	    console.log(criterioBusqueda);
    } 
 
    return ( 
        <> 
            <h1>Buscador</h1> 
            <br/> 
 
            <div className="row"> 
                <div className="col-5"> 
                    <h4>Mi Búsqueda</h4> 
                    <br /> 
                    <form onSubmit={handleBusqueda}> 
                        <input  
                            type="text" 
                            className="form-control"  
                            name="criterioBusqueda"
	    		value={criterioBusqueda}
	    		onChange={handleInputChange}
	    		autoComplete="off"
                        /> 
 
                        <button type="submit" 
                                className="btn m-1 btn-block btn-outline-primary"> 
                            Buscar 
                        </button> 
                    </form> 
                </div> 
 
                <div className="col-7"> 
                    <h4>Resultado</h4> 
                    <br /> 
 
                </div> 
            </div> 
        </> 
    ) 
 
} 
 
