import React, { useState } from "react";
import api from "../../api";
import {
  FormGroup,
  Container,
  FormContent,
  Form,
  FormLabel,
  FormH1,
  FormInput,
  FormWrap,
  FormButton,
  Reg,
} from "./StyledLogin";

export default function Register() {
  const [email, setEmail] = useState("");
  const [nif, setNif] = useState("");
  async function registerUser(event) {
    event.preventDefault();
    const payload = { email, nif };

    await api.registerUser(payload).then((res) => {
      if (res.data.status !== "error") {

        alert(res.data.message)
        window.location.href = "/login";
      } else {
        alert(res.data.message);
      }
    });
  }

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={registerUser}>
              <FormH1>Solicitação de Acesso</FormH1>
              <FormGroup>
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput
                  placeholder="exemplo@mail.com"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="for">NIF</FormLabel>
                <FormInput
                  placeholder="501634851"
                  required
                  value={nif}
                  onChange={(e) => setNif(e.target.value)}
                />
              </FormGroup>
              <FormButton primary="true" dark="true" type="submit">
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
