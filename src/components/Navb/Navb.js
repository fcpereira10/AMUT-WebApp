import React from "react";
import { Container,Navbar } from "react-bootstrap";
import { StyledNavbar, StyledNav, StyledNavLink} from "./StyledNavbar";
import { Component } from "react";
import { animateScroll as scroll } from "react-scroll"
  
export default class Navb extends Component {
  render() {
    
    const toggleHome = () => {
      scroll.scrollToTop();
    }
    return (
      <>
        <StyledNavbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand style={{cursor: "pointer"}}className="logo" onClick={toggleHome}>
              <img
                src={require("../../images/AMUT-Logo.svg").default}
                height="80"
                className="d-inline-block align-top"
                alt="amut"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <StyledNav className="m-auto">
                <StyledNavLink href="/">Home
                </StyledNavLink>
                <StyledNavLink href="/">AMUT</StyledNavLink>
                <StyledNavLink href="/">Saber</StyledNavLink>
                <StyledNavLink href="/">Saúde</StyledNavLink>
                <StyledNavLink href="/">Caminhando</StyledNavLink>
                <StyledNavLink href="/">Eventos</StyledNavLink>
                <StyledNavLink href="/">Notícias</StyledNavLink>
              </StyledNav>
              <StyledNav>
                <StyledNavLink href="/signin">Entrar</StyledNavLink>
              </StyledNav>
            </Navbar.Collapse>
          </Container>
        </StyledNavbar>
      </>
    );
  }
}

