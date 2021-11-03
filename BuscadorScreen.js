import {React,useMemo} from 'react'; 
import { getGamesBySearch} from './getGamesBySearch';
import {useForm} from './hooks/useForm';

 
export const BuscadorScreen = () => { 
    let busqueda = '';
    let infoGames = '';

    const [formValues, handleInputChange] = useForm({
        criterioBusqueda: busqueda,
    });

    const { criterioBusqueda } = formValues;

    const filteredGames = useMemo(
        () => getGamesBySearch(busqueda, infoGames),
        [busqueda, infoGames]
    );
    console.log(filteredGames);

    const handleBusqueda = (e) => { 
        e.preventDefault();
        console.log(e);
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
                    {
                    // filteredGames.map(funcion que crea la tarjeta)
                    }
                </div> 
            </div> 
        </> 
    ) 
 
} 
 