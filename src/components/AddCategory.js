import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [value, setValue] = useState('')
    const handleInputChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        if (value.trim().length > 2) {
            setCategories(cats => [value, ...cats]);
            setValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={value}
                onChange={handleInputChange}
            />
            <h2>AddCategory</h2>
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
