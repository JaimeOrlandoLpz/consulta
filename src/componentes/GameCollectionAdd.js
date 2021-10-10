import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const GameCollectionAdd = ({dispatch}) => {
    const [inputValue, setInputValue] = useState('Ingresa el ID del Juego de tu elección');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Se hizo submit...');

        if (0 < Number(inputValue)) {
            dispatch({type:'add', payload:inputValue});
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group input-group-sm mb-3">
                <input 
                    type="text"
                    value={inputValue}
                    onChange={ handleInputChange }
                    className="form-control"
                />
                <button className="btn btn-primary" type="submit">Agregar Juego</button>
            </div>
        </form>
)
}

GameCollectionAdd.propTypes = {
    setTitulos: PropTypes.func.isRequired
}