import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const {emailLogin} = useContext(AuthContext);
    const navigate=  useNavigate();
    const handleLogIn = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;
        emailLogin(email, password)
        .then(result=>{
            const user = result.user;
            form.reset();
            navigate('/')
        })
        .catch(error=>{
            console.error(error);
        })
    }
    
    return (
        <div>
            <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' required type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' required type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Login
                </Button>
                </Form>
        </div>
    );
};

export default Login;