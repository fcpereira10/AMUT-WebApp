import React, { Component } from "react";
import {
  Container,
  FormContent,
  Form,
  FormLabel,
  FormH1,
  FormInput,
  FormWrap,
  FormButton,
  Reg,
  Router,
} from "./StyledLogin";

export default class Register extends Component {
  render() {
    return (
      <>
        <Container>
          <FormWrap>
            <FormContent>
              <Form action="#">
                <FormH1>Solicitação de Acesso</FormH1>
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput
                  placeholder="exemplo@mail.com"
                  type="email"
                  required
                />
                <FormLabel htmlFor="for">NIF</FormLabel>
                <FormInput placeholder="501634851" required />
                <FormButton primary="true" dark="true" to="/area-reservada">
                  Registar
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
