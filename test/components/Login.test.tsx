import { Login } from '../../src/components/Login';
import ReactDOM from 'react-dom'
import { fireEvent } from '@testing-library/react'


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
    //Testing user Interaction 
    test('Passes credentials currectly', ()=>{
        const inputs = document.querySelectorAll('input');
        const LoginInput = inputs[0];
        const passwordInput = inputs[1];
        const loginButton = inputs[2];

        fireEvent.change(LoginInput, {target:{value:'someUser'}});
        fireEvent.change(passwordInput, {target:{value:'somePass'}});
        fireEvent.click(loginButton);

        expect(authServiceMock.login).toBeCalledWith(
            'someUser',
            'somePass'
        )
    })
}) 