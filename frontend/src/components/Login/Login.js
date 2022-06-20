import React, { useState } from "react";
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
} from "./StyledLogin";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    const payload = { email, password };

    await api.loginUser(payload).then((res) => {

      if (res.data.status !== "error") {
        localStorage.setItem("token", res.data.user);
        
        if (res.data.isAdmin){
          window.location.href = "/admin";
        } else{
          window.location.href = "/area-reservada";
        }
        
        
      } else {
        alert("Por favor, confirme os seus dados");
      }
    });
  }

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={loginUser} autocomplete="on"> 
              <FormH1>Área Reservada</FormH1>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                placeholder="exemplo@mail.com"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel htmlFor="password">Senha</FormLabel>
              <FormInput
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
