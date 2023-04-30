// eslint-disable-next-line no-unused-vars
import React from "react";
import "./RightNav.css";
import Button from "react-bootstrap/Button";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import QZone from "../QZone/QZone";


const RightNav = () => {
  return (
    <div className="mt-4">
      <h4>Login with</h4>
      <div className="d-flex flex-column ">
        <Button variant="outline-primary">
          <FaGoogle className="me-2" />
          Login with Google
        </Button>
        <Button variant="outline-secondary mt-2">
          <FaGithub className="me-2" />
          Login with Github
        </Button>
      </div>
      <div>
        <h2>Find us on</h2>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook className="me-2" /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter className="me-2" /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram className="me-2" />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="text-danger">
        <div className="text-container">
          <p className="text-big">Create an Amazing Newspaper</p>
          <p className="text-small">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button variant="danger">Danger</Button>
        </div>
      </div>
   
    </div>
  );
};

export default RightNav;
