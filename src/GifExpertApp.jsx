import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

const GifExpertApp=({defaultCategories = ['Rick and Morty']})=>{

    const [categories,setCategories]= useState(defaultCategories)
    
    // const handleAdd = ()=>{
    //     setCategories([...categories, 'Los Simpsons'])
    // }
    
    return (
        <>
            <h2>GiffiApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {categories.map((category,i)=>
                    <GifGrid 
                        key = {i}
                        category={category}
                    />)}
            </ol>
        </>
    )
}

export default GifExpertApp;