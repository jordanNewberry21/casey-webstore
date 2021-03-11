import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import './LoginForm.css';

function LoginForm() {
    // hooks
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword]= useState('');
    const loginMessage = useSelector(state => state.errors.loginMessage);

    // login function
    const login = (e) => {
        e.preventDefault();
        if (username && password) {
            dispatch({
                type: 'LOGIN',
                payload: {
                    username: username,
                    password: password,
                },
            });
        } else {
            dispatch({ type: 'LOGIN_INPUT_ERROR' })
        }
    }; // end login

    return (
        <Container>
            <Col>
                <Row className="login-header">
                    <h2>Login</h2>
                </Row>
                <Form className="login-form" onSubmit={e => {login(e)}}>
                    {loginMessage && (
                        <h3 className="alter" role="alert">
                            {loginMessage}
                        </h3>
                    )}
                    <Form.Group>
                        <Form.Label htmlFor="username">
                            Email:
                        </Form.Label>
                        <Form.Control
                            type="email"
                            name="username"
                            required
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                         />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="password">
                            Password:
                        </Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                         />
                    </Form.Group>
                    <Button
                        className="btn login-btn"
                        type="submit"
                        name="submit"
                    >
                        Login
                    </Button>
                </Form>
            </Col>
        </Container>
    )
}

export default LoginForm;
