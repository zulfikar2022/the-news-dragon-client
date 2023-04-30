// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee
          className={"text-danger fw-bold "}
          speed={60}
          pauseOnHover={true}
        >
          I can be a React component, multiple React components, or just some
          text.....
        </Marquee>
      </div>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="mt-3 rounded">
        <Container >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/">Career</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              <Nav.Link href="/">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="/">
              <Button variant="secondary">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
