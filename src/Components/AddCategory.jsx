import React, { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({setCategories})=>{
    const [input, setInput] = useState('');

    const handleChange = (e)=>{
        setInput(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(input.trim().length > 2){
            setCategories(catg => [input,...catg])
            setInput('')
        }
        
    }

    return (
        <form onSubmit={e=>{handleSubmit(e)}}>
            <input 
                className='searchBar'
                type="text" 
                value = {input}
                onChange = {e=>handleChange(e)}
            />
        </form>
    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;