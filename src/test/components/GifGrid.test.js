import { shallow } from "enzyme";
import '@testing-library/jest-dom'
import GifGrid from "../../Components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs")//fingir llamadas a este archivo

describe('pruebas en componente GifGrid',()=>{
    const category = 'Rick and Morty'
    
    test('deberia renderizar GifGrid',()=>{
        useFetchGifs.mockReturnValue({//finge una llamada al archivo donde esta el useFetchGifs
            data:[],
            loading:true,
        });
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot();
    });

    test('deberia mostar items cuando se cargan imagenes useFetchGifs',()=>{
        const gifs = [
        {
            id:'abc',
            url:'https://localhost/xxx/cosa.png',
            title:'cualquier cosa',
        },
        {
            id:'abc',
            url:'https://localhost/xxx/cosa.png',
            title:'cualquier cosa',
        }]
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false,
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false)//valida que no existe el tag p de loading
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    });
});