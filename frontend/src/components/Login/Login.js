import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import api from "../../api";
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
  FormGroup,
} from "./StyledLogin";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);


  async function loginUser(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault();
    const payload = { email, password };
    console.log(payload)

    await api.loginUser(payload).then((res) => {

      if (res.data.success) {
        localStorage.setItem("token", res.data.user);
        
        if (res.data.isAdmin){
          window.location.href = "/admin";
        } else{
          window.location.href = "/area-reservada";
        }
        
        
      } else {
        alert(res.data.error);
      }
    });
  }

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form noValidate validated={validated} onSubmit={loginUser} autoComplete="on"> 
              <FormH1>Área Reservada</FormH1>
              <FormGroup >
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                validated="false"
                placeholder="exemplo@mail.com"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
               <Form.Control.Feedback type="invalid">
              Por favor, verifique o email.
            </Form.Control.Feedback>
            </FormGroup>
              <FormGroup >
              <FormLabel htmlFor="password">Senha</FormLabel>
              <FormInput
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            <Form.Control.Feedback type="invalid">
              Por favor, verifique a senha.
            </Form.Control.Feedback>
            </FormGroup>
              <FormButton primary="true" dark="true" type="submit">
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
