import { SpaceComponent } from '../../src/components/spaces/SpaceComponent'
import ReactDOM from 'react-dom';
import { fireEvent } from '@testing-library/react'


describe('Space Component test suit', ()=>{
    let container: HTMLDivElement;
    const reserveSpaceMock = jest.fn();

    function cleanUpTests(){
        document.body.removeChild(container);
            container.remove();
            jest.clearAllMocks()
    }

    function setUpTests(element: React.FunctionComponentElement<any>){
        container = document.createElement('div')
            document.body.appendChild(container)
            ReactDOM.render(element,container)
    }

    describe('test with photo URL', ()=>{

        beforeEach(()=>{
            setUpTests(<SpaceComponent
                location={'someLocation'}
                name={'someName'}
                reserveSpace={reserveSpaceMock}
                spaceId={'123'}
                photoUrl={'some.url'}
                />)
        })

        test('show image correctly', ()=>{
            const image = container.querySelector('img');
            expect(image!).toBeInTheDocument();
            expect(image!.src).toBe('http://localhost/some.url')
        })

        test('show labels correctly', ()=>{
            const label = container.querySelectorAll('label');
            expect(label[0]).toHaveTextContent('someName')
            expect(label[1]).toHaveTextContent('123')
            expect(label[2]).toHaveTextContent('someLocation')
        })

        test('reserve spaces', ()=>{
            const button = container.querySelectorAll('button');
            fireEvent.click(button!);
            expect(reserveSpaceMock).toHaveBeenCalledWith('123');

        })

        afterEach(()=>{
            cleanUpTests();
        })

    })

    describe('test without photo URL', ()=>{

        beforeEach(()=>{
            setUpTests(<SpaceComponent 
                location={'someLocation'}
                name={'someName'}
                reserveSpace={reserveSpaceMock}
                spaceId={'123'}
            />)
        })

        test('show image correctly', ()=>{
            const image = container.querySelector('img');
            expect(image!).toBeInTheDocument();
            expect(image!.src).toBeFalsy();
        })

        afterEach(()=>{
            cleanUpTests();
        })

    })

})