import React, { Component } from "react";
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
  SubHeading,
  TipologiaWrapper,
  ComparticipaçãoWrapper,
} from "./StyledAssociados";
import "chart.js/auto";
import Icon1 from "../../../images/comparticipação.svg";
import Icon2 from "../../../images/protocolos.svg";
import Icon3 from "../../../images/atividades.svg";
import Icon4 from "../../../images/svg-1.svg";
import { ProgressBar } from "react-bootstrap";

export default class BeneficiosSection extends Component {
  render() {
    return (
      <>
        <AssociadosContainer dark={true} lightBg={true}>
          <AssociadosWrapper>
            <Heading>Benefícios</Heading>
            <SubHeading>
              Os nossos Associados beneficiam de:
            </SubHeading>
            <AssociadosRow imgStart={true}>
              <Column1>
                <Heading lightText={false}>
                  Comparticipação de Despesas de Saúde
                </Heading>
                <ComparticipaçãoWrapper>
                  <div>
                    <TopLine>Medicamentos</TopLine>

                    <ProgressBar
                      now={75}
                      max={100}
                      variant="danger"
                      label={`${75}%`}
                    />
                  </div>
                  <div>
                    <TopLine>
                      Consultas, Tratamentos, Exames, Estomatologia, Próteses e
                      Ortóteses
                    </TopLine>

                    <ProgressBar
                      now={65}
                      max={100}
                      variant="danger"
                      label={`${65}%`}
                    />
                  </div>
                </ComparticipaçãoWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={Icon1} alt="quemsomos" />
                </ImgWrap>
              </Column2>
            </AssociadosRow>

            <AssociadosRow imgStart={false}>
              <Column1>
                <TextWrapper>
                  <Heading lightText={false}>
                    Descontos em Entidades Parceiras
                  </Heading>
                  <Subtitle lightTextDesc={false}>
                    Extensíveis aos cônjuges e a todos os seus ascendentes e
                    descendentes em 1.º grau (pais e filhos)
                  </Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={Icon2} alt="quemsomos" />
                </ImgWrap>
              </Column2>
            </AssociadosRow>

            <AssociadosRow imgStart={true}>
              <Column1>
                <TextWrapper>
                  <Heading lightText={false}>
                    Atividades de prevenção da saúde e da qualidade de vida
                  </Heading>
                  <Subtitle lightTextDesc={false}>
                    Atividades gratuitas ou a custos simbólicos:
                    <ul>
                      <li>Caminhadas </li>
                      <li>Palestras </li>
                      <li>Ações de Sensibilização </li>
                      <li>Entre outros </li>
                    </ul>
                  </Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={Icon3} alt="quemsomos" />
                </ImgWrap>
              </Column2>
            </AssociadosRow>

            <AssociadosRow imgStart={false}>
              <Column1>
                <TextWrapper>
                  <Heading lightText={false}>Outras Vantagens</Heading>
                  <Subtitle lightTextDesc={false}>
                    <ul>
                      <li>Ações de Formação a preços Sociais </li>
                      <li>Biblioteca </li>
                      <li>
                        Prémios de Mérito Escolar para descendentes inscritos{" "}
                      </li>
                      <li>Entre Outros </li>
                    </ul>
                  </Subtitle>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={Icon4} alt="quemsomos" />
                </ImgWrap>
              </Column2>
            </AssociadosRow>
          </AssociadosWrapper>
        </AssociadosContainer>
      </>
    );
  }
}
