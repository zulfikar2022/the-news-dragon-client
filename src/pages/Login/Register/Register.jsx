/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
//controlId="formBasicEmail"
const Register = () => {
  return (
    <Container className="w-50 mx-auto my-5">
      <h3>Please Register</h3>
      <Form>
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
            name="photo-url"
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
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
