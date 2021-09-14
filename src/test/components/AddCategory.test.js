import { shallow } from "enzyme";
import AddCategory from "../../Components/AddCategory";


describe('pruebas en el componente AddCategory',()=>{
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{//ciclos de vida de los test
        jest.clearAllMocks();//limpiar las simulaciones
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);//REINICIO

    })
    test('deberia mostrarse corewectamente',()=>{
        expect(wrapper).toMatchSnapshot()
    });

    test('debe de cambiar la caja de texto',()=>{
        //busco el input 
        const input = wrapper.find('input');
        //valor del value del elemento que dispara el evento 
        const value = 'Hola Mundo'
        //simular un evento change y ese evento va a tener la propiedad target.value que sera igual al value anterior
        input.simulate('change', {target:{value}});
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(value)

    });

    test('no deberia postear la infurmacion con submit',()=>{
        const form = wrapper.find('form');
        form.simulate('submit',{preventDefault:()=>{}});
        //No debio llamar la funcion setCategories
        expect(setCategories).not.toHaveBeenCalled();//BEFOREEACH
    });

    test('deberia llamar el setCategories y limpiar la caja de texto',()=>{
        const input = wrapper.find('input');
        input.simulate('change',{target:{value:'Lo Logre'}});
        const form = wrapper.find('form');
        form.simulate('submit',{preventDefault:()=>{}});
        expect(setCategories).toHaveBeenCalled();//se llamo 
        expect(setCategories).toHaveBeenCalledTimes(1);// se debe llamar una vez
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));//debe llamarse con una funcion
        //console.log(input.props())
        expect(input.props().value).toBe('')

    })
});