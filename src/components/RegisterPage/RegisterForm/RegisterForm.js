import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Container, Button } from 'react-bootstrap';


function RegisterForm() {
    // hooks
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    // error messages
    const registrationMessage = useSelector(state => state.errors.registrationMessage);

    // register user function
    const registerUser = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            dispatch({ type: 'PASSWORD_DOES_NOT_MATCH' });
        } else if (username && password && passwordConfirm && firstName && lastName && street && city && state && zip)
            {
                dispatch({ type: 'REGISTER',
                            payload: {
                                username: username,
                                password: password,
                                first_name: firstName,
                                last_name: lastName,
                                street: street,
                                city: city,
                                state: state,
                                zip: zip,
                            }});
            };
    } // end register user function

    return (
        <Container>
            <Form onSubmit={e => {registerUser(e)}}>
                <h2>Register User</h2>
                {registrationMessage && (
                    <h3 className="alert" role="alert">
                        {registrationMessage}
                    </h3>
                )}
                <Form.Group>
                    <Form.Label htmlFor="username">
                        Email
                    </Form.Label>
                    <Form.Control
                        type="email"
                        name="username"
                        value={username}
                        required
                        onChange={e => setUsername(e.target.value)}
                     />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="password">
                        Password
                    </Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}
                     />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="passwordConfirm">
                        Confirm Password
                    </Form.Label>
                    <Form.Control
                        type="password"
                        name="passwordConfirm"
                        value={passwordConfirm}
                        style={{
                            border: password === passwordConfirm && passwordConfirm ?
                            'green 1px solid'
                            :
                            'red 1px solid'
                        }}
                        required
                        onChange={e => setPasswordConfirm(e.target.value)}
                     />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="firstName">
                        First Name
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        value={firstName}
                        required
                        onChange={e => setFirstName(e.target.value)}
                     />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="lastName">
                        Last Name
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        value={lastName}
                        required
                        onChange={e => setLastName(e.target.value)}
                     />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="street">
                        Street Address
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="street"
                        value={street}
                        required
                        onChange={e => setStreet(e.target.value)}
                     />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="city">
                        City
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="city"
                        value={city}
                        required
                        onChange={e => setCity(e.target.value)}
                     />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="state">
                        State
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="state"
                        value={state}
                        required
                        onChange={e => setState(e.target.value)}
                     />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="zip">
                        Zip Code
                    </Form.Label>
                    <Form.Control
                        type="number"
                        name="zip"
                        value={zip}
                        required
                        onChange={e => setZip(e.target.value)}
                     />
                </Form.Group>
                <Button
                    className="btn"
                    type="submit"
                    name="submit"
                >
                    Register
                </Button>
            </Form>
        </Container>
    )
}

export default RegisterForm
