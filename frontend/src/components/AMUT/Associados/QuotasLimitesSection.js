import React, { useState, Component } from "react";
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
  TextTipologia,
  Img,
  SubHeading,
  TipologiaWrapper,
  IconTextTipologia,
  IconMedicamentos,
  TipologiaTitle,
  TipologiaValor,
  IconAmbulatorio,
  IconEstomatologia,
  IconProteses,
  Wrapper,
  SimulaçãoWrapper,
} from "./StyledAssociados";
import "chart.js/auto";
import Icon1 from "../../../images/comparticipação.svg";
import Icon2 from "../../../images/protocolos.svg";
import Icon3 from "../../../images/atividades.svg";
import Icon4 from "../../../images/svg-1.svg";
import {
  Col,
  Form,
  FormControl,
  InputGroup,
  ProgressBar,
  Row,
} from "react-bootstrap";

export default class QuotaslimitesSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      estado: 1,
      filhos: 0,
      percentagem: 0,
      quota: 0,
      vencimento: 705,
      med: 350,
      amb: 400,
      est: 300,
      prot: 250,
    };
  }
  handleChangeEstado = async (event) => {
    const estado = event.target.value;
    await this.setState({ estado });
    this.handlePercentagemQuota();
    this.handlePlafons();
  };
  handleChangeFilhos = async (event) => {
    const filhos = event.target.value;
    await this.setState({ filhos });
    this.handlePercentagemQuota();
    this.handlePlafons();
  };
  handleChangeVencimento = async (event) => {
    const vencimento = event.target.value;
    await this.setState({ vencimento });
    this.handlePercentagemQuota();
  };
  handlePercentagemQuota = async (event) => {
    const percentagem = parseFloat(
      parseInt(this.state.estado) + parseFloat(this.state.filhos * 0.1)
    );
    await this.setState({ percentagem });
    this.handleQuotaMensal();
  };
  handleQuotaMensal = async (event) => {
    const quota = parseFloat(
      (this.state.percentagem * this.state.vencimento) / 100
    ).toFixed(2);
    this.setState({ quota });
  };
  handlePlafons = async (event) => {
    if (this.state.estado == 2) {
      const med = parseInt(600);
      await this.setState({ med });

      const amb = parseInt(700);
      await this.setState({ amb });

      const est = parseInt(500);
      await this.setState({ est });

      const prot = parseInt(500);
      await this.setState({ prot });
    } else {
      const med = parseInt(350);
      await this.setState({ med });

      const amb = parseInt(400);
      await this.setState({ amb });

      const est = parseInt(300);
      await this.setState({ est });

      const prot = parseInt(250);
      await this.setState({ prot });
    }
    const med = parseInt(this.state.med + parseInt(this.state.filhos * 25));
    await this.setState({ med });
    const amb = parseInt(this.state.amb + parseInt(this.state.filhos * 40));
    await this.setState({ amb });
    const est = parseInt(this.state.est + parseInt(this.state.filhos * 30));
    await this.setState({ est });
    const prot = parseInt(this.state.prot + parseInt(this.state.filhos * 30));
    await this.setState({ prot });
  };

  render() {
    const { estado, filhos, vencimento } = this.state;
    return (
      <>
        <AssociadosContainer dark={true} lightBg={true}>
          <AssociadosWrapper>
            <Heading>Simulação de Quota e Limites Anuais</Heading>
            <Form.Group as={Col}>
              <Form.Group as={Row}>
                <SubHeading>Titulares</SubHeading>

                <Col sm={3}>
                  <Form.Control
                    style={{
                      fontSize: "26px",
                      outline: "none",
                      color: "#d1312c",
                      fontWeight: "bold",
                      width: "100%",
                    }}
                    plaintext
                    as="select"
                    value={estado}
                    onChange={this.handleChangeEstado}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <SubHeading>Filhos</SubHeading>

                <Col sm={3}>
                  <Form.Control
                    style={{
                      fontSize: "26px",
                      outline: "none",
                      color: "#d1312c",
                      fontWeight: "bold",
                    }}
                    plaintext
                    as="select"
                    value={filhos}
                    onChange={this.handleChangeFilhos}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <SubHeading>Vencimento Base </SubHeading>

                <Col sm={2}>
                  <InputGroup>
                    <Form.Control
                      style={{
                        fontSize: "26px",
                        outline: "none",
                        color: "#d1312c",
                        fontWeight: "bold",
                      }}
                      plaintext
                      onChange={this.handleChangeVencimento}
                      placeholder="0,00"
                      value={vencimento}
                      type={"number"}
                      step={"50"}
                      min={0}
                    />
                    <InputGroup.Text
                      style={{
                        fontSize: "26px",
                        outline: "none",
                        color: "#d1312c",
                        fontWeight: "bold",
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        padding: "0",
                      }}
                    >
                      €
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </Form.Group>
            </Form.Group>

            <TipologiaTitle>Quota Mensal:</TipologiaTitle>
            <TipologiaValor>
              {this.state.quota}€ ({this.state.percentagem}% do Vencimento Base)
            </TipologiaValor>

            <TipologiaWrapper>
              <IconTextTipologia>
                <IconMedicamentos />
                <TextTipologia>
                  <TipologiaTitle>Medicamentos</TipologiaTitle>
                  <TipologiaValor>{this.state.med}€</TipologiaValor>
                </TextTipologia>
              </IconTextTipologia>

              <IconTextTipologia>
                <IconAmbulatorio />
                <TextTipologia>
                  <TipologiaTitle>Ambulatório</TipologiaTitle>
                  <TipologiaValor>{this.state.amb}€</TipologiaValor>
                </TextTipologia>
              </IconTextTipologia>

              <IconTextTipologia>
                <IconEstomatologia />
                <TextTipologia>
                  <TipologiaTitle>Estomatologia</TipologiaTitle>
                  <TipologiaValor>{this.state.est}€</TipologiaValor>
                </TextTipologia>
              </IconTextTipologia>

              <IconTextTipologia>
                <IconProteses />
                <TextTipologia>
                  <TipologiaTitle>Próteses e Ortóteses</TipologiaTitle>
                  <TipologiaValor>{this.state.prot}€</TipologiaValor>
                </TextTipologia>
              </IconTextTipologia>
            </TipologiaWrapper>
          </AssociadosWrapper>
        </AssociadosContainer>
      </>
    );
  }
}
