

export const gifGet = async(category)=>{
    //console.log(category)
    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=o0HBO7HEDWCbmvIvy59MBvsi2bHLtmd3`
    const res = await fetch(url);
    const {data} = await res.json();
    
    const gifs = data.map(d=>{
        return {
            id:d.id,
            title:d.title,
            url:d.images?.downsized_medium.url
        }
    });
    return gifs
};