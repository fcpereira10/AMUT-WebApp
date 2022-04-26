import React, {Component} from "react";
import {FaFacebook,FaInstagram, FaYoutube, FaLinkedin} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  WebsiteRights,
  SocialIconLink,
  NIF,
} from "./StyledFooter";

import { animateScroll as scroll } from "react-scroll"

export default class Footer extends Component {
  render() {
  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Acesso Rápido</FooterLinkTitle>
              <FooterLink to="/login">Saber</FooterLink>
              <FooterLink to="/login">Clínica</FooterLink>
              <FooterLink to="/login">Caminhando</FooterLink>
              <FooterLink to="/login">Protocolos</FooterLink>
              <FooterLink to="/login">Notícias</FooterLink>
              <FooterLink to="/login">Eventos</FooterLink>
              <FooterLink to="/login">Área Reservada</FooterLink>
              <FooterLink to="/login">Contactos</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contactos</FooterLinkTitle>
              <FooterLink to="/login">(+351) 224 633 184</FooterLink>
              <FooterLink to="/login">(+351) 966 766 762</FooterLink>
              <FooterLink to="/login">amut@amut.pt</FooterLink>
              <FooterLink to="/login">
                Rua 5 de Outubro, 135 <p /> 4420-086 Gondomar
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Outras informações</FooterLinkTitle>
              <NIF >NIF: 501 634 851</NIF>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleHome} to="/"> <img
                src={require("../../images/AMUT-Logo.svg").default}
                height="70"
                className="d-inline-block align-top"
                alt="amut"
              /></SocialLogo>
            <WebsiteRights>
              AMUT © {new Date().getFullYear()} Todos os direitos reservados.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/amut.pt"
                target="_blank"
                arial-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://instagram.com/amutgondomar"
                target="_blank"
                arial-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/channel/UCQJamao54-fJUmwJb6Epp5w"
                target="_blank"
                arial-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/company/amutgondomar/mycompany/"
                target="_blank"
                arial-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};
}
