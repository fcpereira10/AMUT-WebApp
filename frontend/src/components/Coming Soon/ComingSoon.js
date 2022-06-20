import React, { Component } from "react";

import Icon1 from "../../images/comingsoon.svg";
import {
  ComingSoonLink,
  ComingSoonLinkItems,
  ComingSoonLinksContainer,
  ComingSoonLinksWrapper,
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  ComingSoonContainer,
  ComingSoonRow,
  ComingSoonWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
  ComingSoonLinkTitle,
} from "./StyledComingSoon";

export default class ComingSoon extends Component {
  render() {
    return (
      <>
        <ComingSoonContainer dark="true" lightBg="true" id="Noticias">
          <ComingSoonWrapper>
            <ComingSoonRow>
              <Column1>
                <TextWrapper>
                  <TopLine>Em breve!</TopLine>
                  <Heading lightText={false}>Em construção</Heading>
                  <Subtitle lightTextDesc={false}>
                    Esta página estará disponível em breve!
                  </Subtitle>
                  <ComingSoonLinkTitle>
                    Aqui estão alguns links úteis:
                  </ComingSoonLinkTitle>
                  <ComingSoonLinksContainer>
                    <ComingSoonLinksWrapper>
                      <ComingSoonLinkItems>
                      <ComingSoonLink to="/area-reservada">Área Reservada</ComingSoonLink>
              <ComingSoonLink to="/atividades">Eventos</ComingSoonLink>
              <ComingSoonLink to="/noticias">Notícias</ComingSoonLink>
              <ComingSoonLink to="/Associados">Benefícios</ComingSoonLink>
                      </ComingSoonLinkItems>
                    </ComingSoonLinksWrapper>
                  </ComingSoonLinksContainer>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={Icon1} alt="coming soon" />
                </ImgWrap>
              </Column2>
            </ComingSoonRow>
          </ComingSoonWrapper>
        </ComingSoonContainer>
      </>
    );
  }
}
