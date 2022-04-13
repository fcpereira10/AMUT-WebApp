import React, {Component} from "react";
import {
  Container,
  FormContent,
  Form,
  FormLabel,
  FormH1,
  FormInput,
  FormWrap,
  Text,
  FormButton,
  Reg,
  Router,
} from "./StyledLogin";

export default class Login extends Component {
  render() {
    return (
      <>
        <Container>
          <FormWrap>
            <FormContent>
              <Form action="#">
                <FormH1>Área Reservada</FormH1>
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput placeholder="exemplo@mail.com" type="email" required />
                <FormLabel htmlFor='for'>Senha</FormLabel>
                <FormInput type='password' required/>
                <FormButton primary="true" dark="true" to="/area-reservada">
                  Entrar
                </FormButton>
                <Text>Esqueceu-se da Senha?</Text>
                <Reg to="/register">Solicitar Acesso</Reg>       
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>
    );
  }
}
