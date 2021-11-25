import { SpaceComponent } from '../../src/components/spaces/SpaceComponent'
import ReactDOM from 'react-dom';


describe('Space Component test suit', ()=>{
    let container: HTMLDivElement;
    const reserveSpaceMock = jest.fn();

    describe('test with photo URL', ()=>{

        beforeEach(()=>{
            container = document.createElement('div')
            document.body.appendChild(container)
            ReactDOM.render(<SpaceComponent 
                location={'someLocation'}
                name={'someName'}
                reserveSpace={reserveSpaceMock}
                spaceId={'123'}
            />,
            container)
        })

        test('basic rendering', ()=>{

        })

        afterEach(()=>{
            document.body.removeChild(container);
            container.remove();
            jest.clearAllMocks()
        })

    })

    describe('test without photo URL', ()=>{

    })

})