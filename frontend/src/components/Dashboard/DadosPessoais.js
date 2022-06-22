import React, { Component } from "react";
import {
  DadosPessoaisTitle,
  DadosPessoaisContainer,
  Wrapper,
} from "./StyledDadosPessoais";
import "chart.js/auto";
import { Col, Form, Row } from "react-bootstrap";
import { Button, SubmitButton } from "../StyledButton";
import api from "../../api";

export default class DadosPessoais extends Component {
  async componentDidMount() {
    await api.getUserById(this.state.id).then((res) => {
      this.setState({
        email: res.data.user.email,
        phone: res.data.user.phone,
        iban: res.data.user.iban,
        address: res.data.user.address,
        postalCode: res.data.user.postalCode,
        local: res.data.user.local,
      });
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      email: "",
      phone: "",
      iban: "",
      address: "",
      postalCode: "",
      local: "",
    };
  }

  handleChangeEmail = async (event) => {
    const email = event.target.value;
    this.setState({ email });
  };
  handleChangePhone = async (event) => {
    const phone = event.target.value;
    this.setState({ phone });
  };
  handleChangePassword = async (event) => {
    const password = event.target.value;
    this.setState({ password });
  };
  handleChangeNewPassword = async (event) => {
    const newPassword = event.target.value;
    this.setState({ newPassword });
  };
  handleChangeConfirmPassword = async (event) => {
    const confirmPassword = event.target.value;
    this.setState({ confirmPassword });
  };
  handleChangeIban = async (event) => {
    const iban = event.target.value;
    this.setState({ iban });
  };
  handleChangeAddress = async (event) => {
    const address = event.target.value;
    this.setState({ address });
  };
  handleChangePostalCode = async (event) => {
    const postalCode = event.target.value;
    this.setState({ postalCode });
  };
  handleChangeLocal = async (event) => {
    const local = event.target.value;
    this.setState({ local });
  };

  handleUpdateUser = async (event) => {
    event.preventDefault();
    if (this.state.newPassword === this.state.confirmPassword) {
      
      const {
        id,
        email,
        phone,
        password,
        newPassword,
        iban,
        address,
        postalCode,
        local,
      } = this.state;
      const payload = { password, newPassword };
      await api.updateUserById(id, payload).then((res) => {
        alert(res.data.message);
      });
    } else{
      alert("As passwords não coincidem!")
    }
  };

  render() {
    return (
      <>
        <DadosPessoaisContainer>
          <Wrapper>
            <Form onSubmit={this.handleUpdateUser}>
              <DadosPessoaisTitle>Contactos</DadosPessoaisTitle>
              <Row className="mb-4">
                <Form.Group as={Col} hasValidation>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    value={this.state.email}
                    type="email"
                    required
                    onChange={this.handleChangeEmail}
                  />
                </Form.Group>
                <Form.Group as={Col} sm={5}>
                  <Form.Label>Telemóvel</Form.Label>
                  <Form.Control
                    value={this.state.phone}
                    type="phone"
                    required
                    onChange={this.handleChangePhone}
                  />
                </Form.Group>
              </Row>
              <DadosPessoaisTitle>Alterar Senha</DadosPessoaisTitle>
              <Row className="mb-4">
                <Form.Group as={Col} sm={4}>
                  <Form.Label>Senha Atual</Form.Label>
                  <Form.Control
                    value={this.state.password}
                    type="password"
                    required
                    onChange={this.handleChangePassword}
                  />
                </Form.Group>
                <Form.Group as={Col} sm={4}>
                  <Form.Label>Nova Senha</Form.Label>
                  <Form.Control
                    value={this.state.newPassword}
                    type="password"
                    required
                    onChange={this.handleChangeNewPassword}
                  />
                </Form.Group>
                <Form.Group as={Col} sm={4}>
                  <Form.Label>Confirme a Nova Senha</Form.Label>
                  <Form.Control
                    value={this.state.confirmPassword}
                    type="password"
                    onChange={this.handleChangeConfirmPassword}
                  />
                </Form.Group>
              </Row>
              <DadosPessoaisTitle>Morada de Faturação</DadosPessoaisTitle>
              <Row className="mb-1" style={{ paddingBottom: "15px" }}>
                <Form.Group as={Col} hasValidation>
                  <Form.Label>IBAN</Form.Label>
                  <Form.Control
                    value={this.state.iban}
                    onChange={this.handleChangeIban}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-1" style={{ paddingBottom: "30px" }}>
                <Form.Group as={Col} sm={6} hasValidation>
                  <Form.Label>Nome da Rua e Nº da Porta</Form.Label>
                  <Form.Control
                    placeholder="Rua 5 de Outubro, 135"
                    value={this.state.address}
                    onChange={this.handleChangeAddress}
                  />
                </Form.Group>
                <Form.Group as={Col} sm={2} hasValidation>
                  <Form.Label>Código Postal</Form.Label>
                  <Form.Control
                    placeholder="4420-086"
                    value={this.state.postalCode}
                    onChange={this.handleChangePostalCode}
                  />
                </Form.Group>
                <Form.Group as={Col} sm={4}>
                  <Form.Label>Localidade</Form.Label>
                  <Form.Control
                    placeholder="Gondomar"
                    value={this.state.local}
                    onChange={this.handleChangeLocal}
                  />
                </Form.Group>
              </Row>
              <SubmitButton type="submit">Guardar</SubmitButton>
            </Form>
          </Wrapper>
        </DadosPessoaisContainer>
      </>
    );
  }
}
