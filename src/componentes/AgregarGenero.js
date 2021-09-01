import React, {useState} from 'react';
import PropTypes from "prop-types";

export const AgregaGenero = ({setGeneros}) => {
    const [inputValue, setInputValue] = useState('Indica el Género');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Se hizo submit...');
        if(inputValue.trim().length > 4){
            //Mandamos llamar la función setGeneros que recuperamos de los argumentos del componente. Primero agregamos
            // el ultimo valor que escribió el usuario y al final las que ya teníamos.
            setGeneros( generosActuales => [inputValue, ...generosActuales] );
        }
            // Limpiamos input value
         setInputValue('');}

    return (/*Quitamos el fragment <></> y lo cambiamos por un form para poder invocar la funciónde handleSubmit.*/<form
        onSubmit={handleSubmit}>{/*Creamos un input textpara que el usuario escriba el género de videojuegos que quiereagregar a la lista, y hacemos un binding a la variable inputValue en la que vamos a guardarlo que escriba el usuario en este input text.Cada vez que se escriba algo en el input textse manda llamar la función handleInputCange lacual va actualizar el estado de la variable inputValue.*/}
        <div className="input-group input-group-sm mb-3"><input
            type="text" value={inputValue} onChange={handleInputChange} className="form-control"/></div>
    </form>)
    }

AgregaGenero.propTypes = {setGeneros: PropTypes.func.isRequired}