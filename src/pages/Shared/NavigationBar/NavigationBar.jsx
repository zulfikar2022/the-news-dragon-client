/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container>
              <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="mt-3 rounded"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/">Career</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              {user && (
                <Nav.Link href="/">
                  <FaUserCircle style={{ fontSize: "30px" }}></FaUserCircle>
                </Nav.Link>
              )}
                {user ? (
                  <Button variant="secondary">Logout</Button>
                ) : (
                  <Link to={'/login'}>
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </Container>
    );
};

export default NavigationBar;