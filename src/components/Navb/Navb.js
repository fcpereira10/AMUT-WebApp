import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navb.css";
import { Component } from "react";

export default class Navb extends Component {
  render() {
    return (
      <>
        <Navbar className="navbar" collapseOnSelect expand="sm" variant="dark">
          <Container>
            <Navbar.Brand className="logo" href="#home">
              <img
                src={require("../../images/AMUT-Logo.svg").default}
                height="70"
                className="d-inline-block align-top"
                alt="amut"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
