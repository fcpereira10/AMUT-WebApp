import React, { Component } from "react";
import {
  Container,
  FormContent,
  Form,
  FormLabel,
  FormH1,
  FormInput,
  FormWrap,
  Icon,
  FormButton,
  Reg,
} from "./StyledLogin";

export default class Register extends Component {
  render() {
    return (
      <>
        <Container>
          <FormWrap>
            <Icon to="/">
              <img
                src={require("../../images/AMUT-Logo.svg").default}
                height="80"
                className="d-inline-block align-top"
                alt="amut"
              />
            </Icon>
            <FormContent>
              <Form action="#">
                <FormH1>Solicitação de Acesso</FormH1>
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput placeholder="exemplo@mail.com" type="email" required />
                <FormLabel htmlFor="for">NIF</FormLabel>
                <FormInput placeholder="501634851" required />
                <FormButton primary dark type="submit">
                  Solicitar Acesso
                </FormButton>
                <Reg to="/login">Já registado?</Reg>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>
    );
  }
}
