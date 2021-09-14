import { gifGet } from "../../helpers/getGifs";



describe('pruebas en la funcion getGifs',()=>{
    test('debe de traer 10 elementos ',async ()=>{
        const gifs = await gifGet('Rick and Morty');
        expect(gifs.length).toBe(10)
    });

    test('debe de traer 10 elementos ',async ()=>{
        const gifs = await gifGet('');
        //console.log(gifs)
        expect(gifs.length).toBe(0)
    });
})