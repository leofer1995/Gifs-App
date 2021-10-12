import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { gifGet } from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";
import PropTypes from 'prop-types';

const GifGrid = ({category})=>{
    
    const {data:images, loading} = useFetchGifs(category)
 
    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className='Card-Grid'>
                {images.map(({id, title, url})=>
                    <GifGridItem 
                    key = {id}
                    title = {title}
                    url = {url}
                    /> 
                    )}
            </div>
            <hr/>
        </>
    )
};
GifGrid.propTypes = {
    category:PropTypes.string.isRequired
}
export default GifGrid;