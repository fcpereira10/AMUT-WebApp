import React, {Component} from "react";
import {
  Container,
  FormContent,
  Form,
  FormLabel,
  FormH1,
  FormInput,
  FormWrap,
  Icon,
  Text,
  FormButton,
} from "./StyledSignin";

export default class SignIn extends Component {
  render() {
    return (
      <>
        <Container>
          <FormWrap>
            <Icon to="/"><img
                src={require("../../images/AMUT-Logo.svg").default}
                height="80"
                className="d-inline-block align-top"
                alt="amut"
              /></Icon>
            <FormContent>
              <Form action="#">
                <FormH1>Área Reservada</FormH1>
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput type="email" required />
                <FormLabel htmlFor='for'>Senha</FormLabel>
                <FormInput type='password' required/>
                <FormButton primary dark type='submit'>Entrar</FormButton>
                <Text>Esqueceu-se da Senha?</Text>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>
    );
  }
}
