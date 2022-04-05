import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const StyledNavbar = styled(Navbar)`
  background: #3d3d3d;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  z-index: 999;
  min-width: 307px;
  font-size: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const StyledNavLink = styled(Nav.Link)`
  color: #fff !important;
  font-weight: 600;
  cursor:pointer;

  &:hover {
    color: #d1312c !important;
    text-decoration: none;
    transform: translate(0%);
    transition: 0.3s ease-out;
  }
`;

export const StyledNav = styled(Nav)``;

export const Home = styled(Link)`
`;