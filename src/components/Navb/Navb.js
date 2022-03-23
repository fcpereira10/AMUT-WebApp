import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navb.css";
import { Component } from "react";

export default class Navb extends Component {
  render() {
    return (
      <>
        <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand className="logo" href="/">
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
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">AMUT</Nav.Link>
                <Nav.Link href="/">Saber</Nav.Link>
                <Nav.Link href="/">Saúde</Nav.Link>
                <Nav.Link href="/">Caminhando</Nav.Link>
                <Nav.Link href="/">Eventos</Nav.Link>
                <Nav.Link href="/">Notícias</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/signin">Entrar</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
