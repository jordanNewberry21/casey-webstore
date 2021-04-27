import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import { Card, Container, Button, Row } from 'react-bootstrap';

function LoginPage() {
    const history = useHistory();

    return (
        <Container>
            <Row>
                <div>
                    <Card.Header className="card-header">
                        <h3>Welcome to my store</h3>
                    </Card.Header>
                    <Card.Body className="card-body">
                        <h2>Creations by Casey</h2>
                    </Card.Body>
                </div>
                <LoginForm />
            </Row>
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
        </Container>
    )
}

export default LoginPage;
