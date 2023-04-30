/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
//controlId="formBasicEmail"
const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [errorMessage,setErrorMessage] = useState('');
    const handleRegister = (event) => {
        setErrorMessage('');
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,photo,email,password);
        createUser(email,password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setErrorMessage(error.message);
            })


    }

  return (
    <Container className="w-50 mx-auto my-5">
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" >
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            required
            placeholder="Enter photo url"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name="accept" label="Accepts terms and conditions" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text>
          Already have an account?{" "}
          <span>
            <Link to={"/login"} className="text-danger">
              Please Login
            </Link>
          </span>
        </Form.Text>
        {/* This is for showing error */}
        <Form.Text className="text-danger">
            {errorMessage && <p className="text-danger fw-bold" >{errorMessage}</p>}
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
