import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Container, Row, Button, Col } from 'react-bootstrap';
import './RegisterPage.css';

// components
import RegisterForm from './RegisterForm/RegisterForm';

function RegisterPage() {

    const history = useHistory();

    return (
        <Container>
            <center>
                <Card>
                    <Card.Header className="register-header">
                        <h2>Thanks for shopping with Creations by Casey!</h2>
                    </Card.Header>
                    <Card.Body className="register-sub-header">
                        <h4>In order to complete your order, please register an account.</h4>
                    </Card.Body>
                </Card>
            </center>
            <center>
                <RegisterForm />
            </center>
            

            <center>
                <p>Already Registered?</p>
                <Button
                    variant="primary"
                    type="button"
                    onClick={() => {
                        history.push('/login');
                    }}>
                    Login
                </Button>
            </center>
        </Container>
    )
}

export default RegisterPage;
