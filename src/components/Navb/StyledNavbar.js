import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
  background: #3d3d3d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

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
