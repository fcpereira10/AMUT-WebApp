import React, { Component } from "react";
import { Button } from "../../StyledButton";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  ImgWrap,
  QuemSomosContainer,
  QuemSomosRow,
  QuemSomosWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
  Img,
} from "./StyledQuemSomos";
import Icon1 from "../../../images/quemsomos.jpeg";

export default class QuemSomos extends Component {
  render() {
    return (
      <>
        <QuemSomosContainer dark={true} lightBg={true}>
          <QuemSomosWrapper>
            <QuemSomosRow imgStart={true}>
              <Column1>
                <TextWrapper>
                  <Heading lightText={false}>Quem Somos</Heading>
                  <Subtitle lightTextDesc={false}>
                    A AMUT – Associação Mutualista de Gondomar – nasceu da
                    transformação da Caixa de Previdência dos Trabalhadores da
                    Câmara Municipal de Gondomar e Serviços Municipalizados, em
                    14 de Julho 2011. Com sede localizada na Rua 5 de Outubro,
                    135, 4420-086 Gondomar, é membro da União das Mutualidades
                    Portuguesas e da União Distrital das Instituições
                    Particulares de Solidariedade Social Sem Fins Lucrativos do
                    Porto (UDIPSS). A AMUT é uma Instituição Particular de
                    Solidariedade Social Mutualista e tem por finalidade
                    principal conceder Benefícios Sociais e de Saúde, bem como
                    fomentar e apoiar atividades de natureza Social, Formação e
                    de Solidariedade, visando a melhoria da qualidade de vida
                    dos seus associados e respetivos familiares.
                  </Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
              
                <ImgWrap>
                  <Img src={Icon1} alt="quemsomos" />
                </ImgWrap>
              </Column2>
            </QuemSomosRow>
          </QuemSomosWrapper>
        </QuemSomosContainer>
      </>
    );
  }
}
