import React, { useEffect, useState } from 'react';
import { getVideojuegos } from '../GetVideojuegos';
export const useFetchVideojuegos = (genero) => {
    const [state, setState] = useState({
        infoJuegos: [],
        loading: true
    });
    useEffect(() => {
        console.log('useEffect ' + genero);
        getVideojuegos(genero)
            .then((resVj) => {
                console.log('resVj' + resVj);
                setState({
                    infoJuegos: resVj,
                    loading: false
                });
            })
    }, [genero]);
    return state;
}
