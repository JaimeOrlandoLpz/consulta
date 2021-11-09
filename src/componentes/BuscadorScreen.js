import { React, useMemo } from 'react';
import { useLocation } from 'react-router';
import { getGamesBySearch } from './getGamesBySearch';
import { useForm } from './hooks/useForm';
import queryString from 'query-string';


export const BuscadorScreen = ({ history }) => {
    let infoGames = '';
    let location = useLocation();
    console.log('location.search = ' + location.search);

    const { busqueda = '' } = queryString.parse(location.search);

    console.log('busuqeda = ' + busqueda);

    const [formValues, handleInputChange] = useForm({
        criterioBusqueda: busqueda,
    });

    const { criterioBusqueda } = formValues;

    const filteredGames = useMemo(
        () => getGamesBySearch(busqueda, infoGames),
        [busqueda, infoGames]
    );

    const handleBusqueda = (e) => {
        e.preventDefault();
        history.push(`?busqueda=${criterioBusqueda}`);
    }

    return (
        <>
            <h1>Buscador</h1>
            <br />

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
                    <div className="d-flex container-md text-center flex-row3 bd-highlight align-items-center mb-3" >
                        {
                            filteredGames.map(juego => {
                                return(
                                    <div className="card m-2" style={{width: '18rem'}}>
                                        <img src={juego.imagen} className="card-img-top"/>
                                            <div className="card-body">
                                                <h5 className="card-title">{juego.nombre}</h5>
                                                <p className="card-text">Rating: {juego.rating}</p>
                                            </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )

}
