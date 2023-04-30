/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Button, Container,Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
// import { Form } from "react-router-dom";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [errorMessage,setErrorMessage] = useState('');

    const handleSignIn = (event) => {
        setErrorMessage('');
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setErrorMessage('');
                form.reset();
            })
            .catch(error =>{
                console.log(error.message);
                setErrorMessage(error.message);
            })
    }
    


  return (
    <Container className="w-50 mx-auto my-5">
        <h3>Please Login</h3>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" required placeholder="Enter email" />
       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label> 
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-danger">
            {errorMessage && <p className="fw-bold">{errorMessage}</p>}
       </Form.Text>
        <Button variant="primary" type="submit">
         Login
        </Button>
        <br />
        <Form.Text>
            Do not have have an account? <span ><Link to={'/register'} className="text-danger">Please Register</Link></span> 
        </Form.Text>
        {/* This is for showing error */}
     

      </Form>
    </Container>
  );
};

export default Login;
