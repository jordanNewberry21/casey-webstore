import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import { Button } from 'react-bootstrap';

function LoginPage() {
    const history = useHistory();

    return (
        <div>
            <LoginForm />
            <center>
                <p>Not registered?</p>
                <Button
                    variant="primary"
                    type="button"
                    onClick={() => {
                        history.push('/register')
                    }}>
                    Register
                </Button>
            </center>
        </div>
    )
}

export default LoginPage;
