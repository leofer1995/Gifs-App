import GifGridItem from "../../Components/GifGridItem";
import {shallow} from 'enzyme';


describe('Pruebas en el componente GifGridItem',()=>{

    const url = 'https://localhost/hola.jpg';
    const title = 'Hola Mundo';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('Prueba de renderizado del componente',()=>{
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe tener un parrafo con el title',()=>{ 
        const p =  wrapper.find('p');
        expect(p.text().trim()).toBe(title)
    });

    test('debe tener la imagen igual al url y alt de los props', ()=>{

        const img = wrapper.find('img');
        //console.log(img.props().src)
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);

    });

    test('debe tener como clase animate__backInLeft',()=>{
        const div = wrapper.find('div');
        //console.log(div.props())
        const className = div.props().className
        expect(className.includes('animate__backInLeft')).toBe(true)
    });
})
