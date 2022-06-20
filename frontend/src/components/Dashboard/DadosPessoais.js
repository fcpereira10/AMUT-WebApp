import React, { Component } from "react";
import {
  DadosPessoaisTitle,
  DadosPessoaisContainer,
  Wrapper,
} from "./StyledDadosPessoais";
import "chart.js/auto";
import { Col, Form, Row } from "react-bootstrap";
import { Button } from "../StyledButton";

export default class DadosPessoais extends Component {
  render() {
    return (
      <>
        <DadosPessoaisContainer>
          <Wrapper>
            <Form>
              <DadosPessoaisTitle>Contactos</DadosPessoaisTitle>
              <Row className="mb-4">
                <Form.Group as={Col} hasValidation>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required/>
                </Form.Group>
                <Form.Group as={Col} sm={5}>
                  <Form.Label>Telemóvel</Form.Label>
                  <Form.Control type="phone" required />
                </Form.Group>
              </Row>
              <DadosPessoaisTitle>Alterar Senha</DadosPessoaisTitle>
              <Row className="mb-4">
                <Form.Group as={Col} sm={4}>
                  <Form.Label>Senha Atual</Form.Label>
                  <Form.Control type="password" required />
                </Form.Group>
                <Form.Group as={Col} sm={4}>
                  <Form.Label>Nova Senha</Form.Label>
                  <Form.Control type="password" required />
                </Form.Group>
                <Form.Group as={Col} sm={4}>
                  <Form.Label>Confirme a Nova Senha</Form.Label>
                  <Form.Control type="password" required />
                </Form.Group>
              </Row>
              <DadosPessoaisTitle>Morada de Faturação</DadosPessoaisTitle>
              <Row>
                <Form.Group as={Col} sm={8} hasValidation>
                  <Form.Label>IBAN</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group as={Col} sm={4} hasValidation>
                  <Form.Label>Comprovativo IBAN</Form.Label>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" />
                  </Form.Group>
                </Form.Group>
              </Row>
              <Row className="mb-1" style={{paddingBottom:"30px"}}>
                <Form.Group as={Col} sm={4} hasValidation>
                  <Form.Label>Nome da Rua e Nº da Porta</Form.Label>
                  <Form.Control placeholder="Rua 5 de Outubro, 135" />
                </Form.Group>
                <Form.Group as={Col} sm={4} hasValidation>
                  <Form.Label>Código Postal</Form.Label>
                  <Form.Control placeholder="4420-086" />
                </Form.Group>
                <Form.Group as={Col} sm={4}>
                  <Form.Label>Localidade</Form.Label>
                  <Form.Control placeholder="Gondomar" />
                </Form.Group>
              </Row>
              <Button to="">Guardar</Button>
            </Form>
            
          </Wrapper>
        </DadosPessoaisContainer>
      </>
    );
  }
}
