import React, { Component } from "react";
import {
  Atencao,
  IconAtencao,
  IconTextTipologia,
  SubmissaoContainer,
  TextTipologia,
  Wrapper,
} from "./StyledSubmissao";
import "chart.js/auto";
import {
  Col,
  Form,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Button } from "../StyledButton";

const value = `1 – Todas as faturas-recibo ou faturas simplificadas apresentadas, devem conter o nome e número de contribuinte;
2 - As faturas-recibo referentes à aquisição de medicamentos, têm que ser acompanhadas por um dos seguintes documentos: prescrição médica, guia de tratamento ou guia de aviamento;
3 - As faturas/recibo referentes à aquisição de outros produtos farmacêuticos, são comparticipadas, desde que prescritos por médicos inscritos na Ordem dos Médicos e acompanhados de respetiva declaração médica que ateste a necessidade e imprescindibilidade do seu uso para tratamento médico;
4 - O reembolso de despesas respeitantes a próteses e/ou ortóteses, só será efetuado se a fatura-recibo vier acompanhada de prescrição médica;
5 - As faturas-recibo emitidas por pessoas singulares (recibo verde eletrónico) e os emitidos por pessoas coletivas deverão conter a especialidade médica e a discriminação dos atos médicos realizados.
6 - O pedido de reembolso, com todos os documentos necessários, deve ser submetido no prazo de 90 dias, a contar da data da emissão da fatura/recibo, referente à realização do ato ou cuidado de saúde;
7 - O envio digital da documentação dispensa a necessidade de entrega dos originais (exceto em caso de necessidade de esclarecimento). O Associado deverá conservar na sua posse os documentos originais pelo prazo de 5 anos, para efeitos legais;
8 - Cuidados a ter com a submissão de despesas:
  - Digitalizar um documento por página e de forma legível;
  - Apenas são permitidos ficheiros em formato PDF;
  - Ao inserir os documentos deve seguir a seguinte ordem: fatura/recibo, prescrição médica/guia de aviamento e declaração médica (quando houver lugar);
  - Deverá ser feita uma submissão por cada documento a anexar;
9 - Os Associados para terem direito a receber as comparticipações, têm que ter as suas quotas em dia.`;

export default class Submissao extends Component {
  render() {
    return (
      <>
        <SubmissaoContainer>
          <Wrapper>
            <Atencao>
            <IconTextTipologia>
            <IconAtencao/>
                    <TextTipologia>
              <Atencao.Heading>Atenção</Atencao.Heading>
              Deve fazer uma submissão por cada despesa a reembolsar.
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
                  <Form.Label>Fatura/Recibo</Form.Label>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" />
                  </Form.Group>
                </Form.Group>

                <Form.Group as={Col} sm={4}>
                  <Form.Label>Prescrição Médica</Form.Label>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" />
                  </Form.Group>
                </Form.Group>

                <Form.Group as={Col} sm={4}>
                  <Form.Label>Declaração Médica</Form.Label>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" />
                  </Form.Group>
                </Form.Group>
              </Row>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  Requisitos para Reembolso conforme Regulamento de Benefícios:
                </Form.Label>
                <Form.Control value={value} as="textarea" rows={5} readOnly />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Concordo com Requisitos para o Reembolso"
                />
              </Form.Group>
            </Form>
            <Button>Submeter</Button>
          </Wrapper>
        </SubmissaoContainer>
      </>
    );
  }
}
