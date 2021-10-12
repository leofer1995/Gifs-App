import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"


describe('pruebas en <GifExpertApp />',()=>{
    test('deberia mostrarse correctamente',()=>{
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostar una lista de categorias',()=>{
        const categories = ['Rick and Morty', 'One Punch'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
        
    })
})