/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import "./Header.css";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Marquee from "react-fast-marquee";

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
    </Container>
  );
};

export default Header;
