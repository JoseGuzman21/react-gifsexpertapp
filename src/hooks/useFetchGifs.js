// los hooks son funciones
// los custom hooks funcionan como si fueran funcional components
import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'
import React from 'react'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    // se utiliza para que realice peticiones cuando cambia la categoria
    useEffect(() => {

        getGifs(category).then((imgs) =>
            setState({
                data: imgs,
                loading: false
            })
        );
        // .then(setImages);
    }, [category]);

    return state;
}
