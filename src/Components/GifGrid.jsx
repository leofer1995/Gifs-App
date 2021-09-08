import React, { useEffect, useState } from "react";import GifGridItem from "./GifGridItem";
;

const GifGrid = ({category})=>{
    //console.log(category)
    const [images, setImages] = useState([]);
    useEffect(()=>{
        gifGet(category);
    },[category])

    const gifGet = async(category)=>{
        //console.log(category)
        const url = `http://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=o0HBO7HEDWCbmvIvy59MBvsi2bHLtmd3`
        const res = await fetch(url);
        const {data} = await res.json();
        
        const gifs = data.map(d=>{
            return {
                id:d.id,
                title:d.title,
                url:d.images?.downsized_medium.url
            }
        });
        setImages(gifs)
    };

    return (
        <>
            <h3>{category}</h3>
                {images.map(({id, title, url})=>
                    <GifGridItem 
                        key = {id}
                        title = {title}
                        url = {url}
                    /> 
                )}
        </>
    )
};

export default GifGrid;