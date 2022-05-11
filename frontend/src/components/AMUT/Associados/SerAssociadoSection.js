import React, { Component } from "react";
import { Button } from "../../StyledButton";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  ImgWrap,
  AssociadosContainer,
  AssociadosRow,
  AssociadosWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
  Img,
} from "./StyledAssociados";
import Icon1 from "../../../images/serassociado.svg";

export default class SerAssociadoSection extends Component {
  render() {
    return (
      <>
        <AssociadosContainer dark={true} lightBg={true} >
          <AssociadosWrapper>
            <AssociadosRow imgStart={false}>
              <Column1>
                <TextWrapper>
                  <Heading lightText={false}>Ser Associado</Heading>
                  <Subtitle lightTextDesc={false}>
                    A AMUT nasce com a missão de conceder benefícios de saúde,
                    bem como criar serviços de natureza social, formativa e de
                    solidariedade. A nossa visão é possibilitar “Saúde e
                    qualidade de vida para todos, solidariamente”!<p/>
                   
                  </Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={Icon1} alt="quemsomos" />
                </ImgWrap>
              </Column2>
            </AssociadosRow>
          </AssociadosWrapper>
        </AssociadosContainer>
      </>
    );
  }
}
