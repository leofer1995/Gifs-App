import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'


describe('Pruebas en el hook useFetchGifs',()=>{
    test('debe retornar el estado inicial',async()=>{
        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs('Rick and Morty'));
        const {data, loading} = result.current
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true)
    });

    test('debe retornar un arreglo de img y loading n false',async()=>{
        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs('Rick and Morty'));
        await waitForNextUpdate();
        const {data, loading} = result.current

        expect(data.length).toBe(10);
        expect(loading).toBe(false)

    })
})