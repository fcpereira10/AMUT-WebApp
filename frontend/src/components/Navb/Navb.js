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

  componentDidMount() {
    
    const token = localStorage.getItem('token');
    const isLoggedIn = token != null ? true: false;
    this.setState({
      isLoggedIn
    })

  }
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn : false, 
    }
  }
  handleLogin = () => {
    if (this.state.isLoggedIn) {
      localStorage.removeItem('token');
      this.setState({isLoggedIn: false});
      window.location.href = '/'
    } else {
      window.location.href = 'login'
    }
  }
  render() {
    const toggleHome = () => {
      scroll.scrollToTop();
    };
    const {isLoggedIn} = this.state
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
                  <NavDropdown.Item href="/amut/quemsomos">
                    Quem Somos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/amut/associados">
                    Associados
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                    Missão, Visão e Valores
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/">Equipa</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/">
                    Documentos
                  </NavDropdown.Item>
                </StyledDropdown>
               {/* <StyledNavLink href="/saude">Saúde</StyledNavLink>
                <StyledNavLink href="/caminhando">Caminhando</StyledNavLink>
                <StyledNavLink href="/formacao">Formação</StyledNavLink> */}
                <StyledDropdown title="Atividades" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/atividades">
                    Eventos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/noticias">Notícias</NavDropdown.Item>
                </StyledDropdown>
               {/*  <StyledNavLink href="/projetos">Projetos</StyledNavLink> */}
              </StyledNav>
              <StyledNav>
              <StyledDropdown title="Área Reservada" id="collasible-nav-dropdown">
                  <NavDropdown.Item href={isLoggedIn ? "/area-reservada" : "/login" }>
                    Conta Corrente
                  </NavDropdown.Item>
                  {isLoggedIn ? <NavDropdown.Item onClick={this.handleLogin}>Sair</NavDropdown.Item> : ''}
                </StyledDropdown>
              </StyledNav>
            </StyledNavbar.Collapse>
          </Container>
        </StyledNavbar>
      </>
    );
  }
}
