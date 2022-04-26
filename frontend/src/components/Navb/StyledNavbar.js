import styled from "styled-components";
import {
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export const StyledDropdown = styled(NavDropdown)`

  font-weight: 600;
  &:hover {
    color: #d1312c !important;
    text-decoration: none;
    transform: translate(0%);
    transition: 0.3s ease-out;
  }
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const StyledNavbar = styled(Navbar)`

  background-color: #3d3d3d;
  z-index: 999;
`;
export const StyledNavLink = styled(Nav.Link)`

  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #fff !important;
    text-decoration: none;
    transform: translate(0%);
    transition: 0.3s ease-out;
  }
`;

export const StyledNav = styled(Nav)``;

export const Home = styled(Link)``;
