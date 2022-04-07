import React, { Component } from "react";
import {
  ContaCorrenteContainer,
  ContaCorrenteWrapper,
  ContaCorrenteCard,
  ContaCorrenteH2,
  ContaCorrenteIcon,
  TipologiaWrapper,
  TipologiaTitle,
  IconTextTipologia,
  TextTipologia,
  TipologiaValor,
  IconMedicamentos,
  IconAmbulatorio,
  IconEstomatologia,
  IconProteses,
  HistoricWrapper,
  Doc,
} from "./StyledSubmissao";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Col, Form, ProgressBar, Row, Table } from "react-bootstrap";
import { Button } from '../StyledButton'

export default class Submissao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["Comparticipado", "Saldo"],
      medicamentosComp: 81.31,
      medicamentosTotal: 625,
      ambulatorioComp: 68.25,
      ambulatorioTotal: 740,
      estomatologiaComp: 39,
      estomatologiaTotal: 530,
      protesesComp: 0,
      protesesTotal: 530,
    };
  }
  render() {
    return (
      <>
      <ContaCorrenteContainer>
        <HistoricWrapper>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>



            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button>
            Submit
          </Button>
        </Form>
        </HistoricWrapper>
        </ContaCorrenteContainer>
      </>
    );
  }
}
