import React, { Component } from "react";

import Icon1 from "../../images/404.svg";
import { NotFoundLink, NotFoundLinkItems, NotFoundLinksContainer, NotFoundLinksWrapper , BtnWrap, Column1, Column2, Heading, Img, ImgWrap, NotFoundContainer, NotFoundRow, NotFoundWrapper, Subtitle, TextWrapper, TopLine, NotFoundLinkTitle } from "./Styled404";

export default class NotFound extends Component {
  render() {
    return (
      <>
        <NotFoundContainer
          dark="true"
          lightBg="true"
          id="Noticias"
        >
          <NotFoundWrapper>
            <NotFoundRow >
              <Column1>
                <TextWrapper>
                  <TopLine>Página Não Encontrada</TopLine>
                  <Heading lightText={false}>
                    Oops!
                  </Heading>
                  <Subtitle lightTextDesc={false}>
                  Parece que não encontramos a página que estava à procura.
                  </Subtitle>
                  <NotFoundLinkTitle>Aqui estão alguns links úteis:</NotFoundLinkTitle>
                  <NotFoundLinksContainer>
          <NotFoundLinksWrapper>
            <NotFoundLinkItems>
              <NotFoundLink to="/">Saber</NotFoundLink>
              <NotFoundLink to="/login">Clínica</NotFoundLink>
              <NotFoundLink to="/login">Caminhando</NotFoundLink>
              <NotFoundLink to="/login">Protocolos</NotFoundLink>
           
            </NotFoundLinkItems>
          </NotFoundLinksWrapper>
          <NotFoundLinksWrapper>
            <NotFoundLinkItems>
            <NotFoundLink to="/login">Notícias</NotFoundLink>
              <NotFoundLink to="/login">Eventos</NotFoundLink>
              <NotFoundLink to="/login">Área Reservada</NotFoundLink>
              <NotFoundLink to="/login">Contactos</NotFoundLink>
            </NotFoundLinkItems>
          </NotFoundLinksWrapper>
          </NotFoundLinksContainer>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={Icon1} alt="404" />
                </ImgWrap>
              </Column2>
            </NotFoundRow>
          </NotFoundWrapper>
        </NotFoundContainer>
      </>
    );
  }
}
