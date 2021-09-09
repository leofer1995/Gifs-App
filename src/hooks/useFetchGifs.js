import { useEffect, useState } from "react"
import { gifGet } from '../helpers/getGifs.js'


export const useFetchGifs = ( category )=>{
    const [state,setState] = useState({
        data:[],
        loading:true,
    });

    useEffect(()=>{

        gifGet(category)
        .then(imgs=>setState({
            data:imgs,
            loading:false,
        }))

    },[category])



    return state;
}