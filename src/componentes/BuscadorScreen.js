import React from 'react'; 

 
export const BuscadorScreen = () => { 

 
    const handleBusqueda = () => { 
         
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
 
                </div> 
            </div> 
        </> 
    ) 
 
} 
 