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
  IconTextTipologia,
  TextTipologia,
  Atencao,
  IconAtencao,
} from "./StyledAssociados";
import "chart.js/auto";
import Icon1 from "../../../images/comparticipação.svg";
import Icon2 from "../../../images/protocolos.svg";
import Icon3 from "../../../images/atividades.svg";
import Icon4 from "../../../images/svg-1.svg";
import { Col, Form, FormControl, InputGroup, ProgressBar, Row } from "react-bootstrap";
import { Button } from "../../StyledButton";

export default class InscricaoSection extends Component {
  render() {
    return (
      <>
        <AssociadosContainer dark={true} lightBg={true}>
          <AssociadosWrapper>
            <Heading>Inscrição Associado AMUT</Heading>
            Quer inscrever-se como associado(a)/a da AMUT?
Dirija-se à nossa Sede onde poderá fazer a sua inscrição diretamente, logo que venha munido dos Documentos Obrigatórios.<p/>
Para mais esclarecimentos e dúvidas poderá consultar as Perguntas Frequentes e/ou enviar mail para saber@amut.pt, ou contacte a Sede para o telefone: 224 633 184
            Podem inscrever-se na AMUT os trabalhadores da Câmara Municipal de Gondomar, que exerçam funções a tempo inteiro ou parcial, bem como os funcionários em regime de cedência de interesse público na empresa Águas de Gondomar, S.A. e na Rede Ambiente, S.A., bem como os aposentados e/ou reformados da Câmara Municipal de Gondomar.
<p/>
Não serão aceites inscrições de qualquer candidato cuja idade seja igual ou superior a 55 anos.
            {/* <Atencao>
              <IconTextTipologia>
                <IconAtencao />
                <TextTipologia>
                  <Atencao.Heading>Atenção</Atencao.Heading>
                  Podem inscrever-se na AMUT os trabalhadores da Câmara
                  Municipal de Gondomar, que exerçam funções a tempo inteiro ou
                  parcial, bem como os funcionários em regime de cedência de
                  interesse público na empresa Águas de Gondomar, S.A. e na Rede
                  Ambiente, S.A., bem como os aposentados e/ou reformados da
                  Câmara Municipal de Gondomar.
                  <p />
                  Não serão aceites inscrições de qualquer candidato cuja idade
                  seja igual ou superior a 55 anos.
                </TextTipologia>
              </IconTextTipologia>
            </Atencao>
        
           
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} sm={4}>
                  <Form.Label>Tipo Beneficiário</Form.Label>
                  <Form.Control as="select" defaultValue="Associado Efetivo">
                    <option>Associado Efetivo</option>
                    <option>Subscritor (Familiar)</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} hasValidation>
                  <Form.Label>Nome Beneficiário</Form.Label>
                  <Form.Control required isInvalid />
                  <Form.Control.Feedback type="invalid">
                    Por favor, preencha o nome do beneficiário.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} sm={3} hasValidation>
                  <Form.Label>Tipo Despesa</Form.Label>
                  <Form.Control as="select" defaultValue="Medicamentos">
                    <option>Medicamentos</option>
                    <option>Ambulatório</option>
                    <option>Estomatologia</option>
                    <option>Próteses e Ortóteses</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} sm={3} hasValidation>
                  <Form.Label>Nº Fatura/Recibo</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} sm={3}>
                  <Form.Label>Data Fatura/Recibo</Form.Label>
                  <Form.Control
                    type="date"
                    name="data fatura"
                    placeholder="Date of Birth"
                  />
                </Form.Group>
                <Form.Group as={Col} sm={3}>
                  <Form.Label>Preço Fatura/Recibo</Form.Label>
                  <InputGroup>
                    <FormControl
                      placeholder="0,00"
                      type={"number"}
                      step={"0.01"}
                      min={0}
                    />
                    <InputGroup.Text>€</InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} sm={4}>
                  <Form.Label>Cartão de Cidadão</Form.Label>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" />
                  </Form.Group>
                </Form.Group>

                <Form.Group as={Col} sm={4}>
                  <Form.Label>Comprovativo IBAN</Form.Label>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" />
                  </Form.Group>
                </Form.Group>

                <Form.Group as={Col} sm={4}>
                  <Form.Label>Recibo de Vencimento/Pensão Mensal</Form.Label>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" />
                  </Form.Group>
                </Form.Group>
              </Row>

              
            </Form>
            <Button to="">Submeter</Button> */}
     
          </AssociadosWrapper>
        </AssociadosContainer>
      </>
    );
  }
}
