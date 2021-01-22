import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    // el target tiene el valor del input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const hadleSubmit = (e) => {
        // para que no recargue la pagina
        e.preventDefault();
        // Validando si el campo es vacio
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={hadleSubmit} >
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

// Validando que el setCategories es requerido
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}