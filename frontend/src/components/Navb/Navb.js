import React from "react";
import { Container, NavDropdown } from "react-bootstrap";
import {
  StyledNavbar,
  StyledNav,
  StyledNavLink,
  Home,
  StyledDropdown,
} from "./StyledNavbar";
import { Component } from "react";
import { animateScroll as scroll } from "react-scroll";

export default class Navb extends Component {
  render() {
    const toggleHome = () => {
      scroll.scrollToTop();
    };
    return (
      <>
        <StyledNavbar collapseOnSelect expand="lg" variant="dark" sticky="top">
          <Container>
            <StyledNavbar.Brand
              style={{ cursor: "pointer" }}
              className="logo"
              onClick={toggleHome}
            >
              <Home to="/">
                <img
                  src={require("../../images/AMUT-Logo.svg").default}
                  height="80"
                  className="d-inline-block align-top"
                  alt="amut"
                />
              </Home>
            </StyledNavbar.Brand>
            <StyledNavbar.Toggle aria-controls="responsive-navbar-nav" />
            <StyledNavbar.Collapse id="responsive-navbar-nav">
              <StyledNav className="m-auto">
                <StyledNavLink href="/">Home</StyledNavLink>
                <StyledDropdown title="AMUT" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Quem Somos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="AMUT/Associados">
                    Associados
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Missão, Visão e Valores
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Equipa</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Documentos
                  </NavDropdown.Item>
                </StyledDropdown>
                <StyledNavLink href="/">Saúde</StyledNavLink>
                <StyledNavLink href="/">Caminhando</StyledNavLink>
                <StyledNavLink href="/">Formação</StyledNavLink>
                <StyledDropdown title="Atividades" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/atividades">
                    Eventos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/noticias">Notícias</NavDropdown.Item>
                </StyledDropdown>
                <StyledNavLink href="/">Projetos</StyledNavLink>
              </StyledNav>
              <StyledNav>
                <StyledNavLink href="/login">Entrar</StyledNavLink>
              </StyledNav>
            </StyledNavbar.Collapse>
          </Container>
        </StyledNavbar>
      </>
    );
  }
}
