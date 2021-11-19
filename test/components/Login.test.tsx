import { Login } from '../../src/components/Login';
import ReactDOM from 'react-dom'


describe('Login component test suite', () => {

    let container: HTMLDivElement;
    const authServiceMock = {
        login: jest.fn()
    }
    const setUserMock = jest.fn()

    beforeEach(()=>{
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <Login authService={authServiceMock as any} setUser={setUserMock} />,
            container
        )
    })
    afterEach(() => {
        container = document.body.removeChild(container);
        container.remove();
        jest.clearAllMocks();
    })
    test('Renders correctly initial document', () => {
        const title = document.querySelector('h2');
        expect(title!.textContent).toContain(" Please login");

        const inputs = document.querySelectorAll('input');
        expect(inputs).toHaveLength(3);
        expect(inputs[0].value).toContain('');
        expect(inputs[1].value).toContain('');
        expect(inputs[2].value).toBe('Login');

        const label = document.querySelector('label');
        expect(label).not.toBeInTheDocument();

    })
}) 