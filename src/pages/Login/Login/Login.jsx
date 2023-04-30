/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Container,Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Form } from "react-router-dom";

const Login = () => {
  return (
    <Container className="w-50 mx-auto my-5">
        <h3>Please Login</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" required placeholder="Enter email" />
       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label> 
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
         Login
        </Button>
        <br />
        <Form.Text>
            Do not have have an account? <span ><Link to={'/register'} className="text-danger">Please Register</Link></span> 
        </Form.Text>
        {/* This is for showing error */}
        <Form.Text className="text-danger">
       
       </Form.Text>

      </Form>
    </Container>
  );
};

export default Login;
