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
  FormButton,
  Reg,
  Router,
} from "./StyledLogin";

export default function Register() {
  const [email, setEmail] = useState("");
  const [nif, setNif] = useState("");
  async function registerUser(event) {
    event.preventDefault();
    const payload = { email, nif };

    await api.registerUser(payload).then((res) => {
      console.log("res " + JSON.stringify(res.data));
      if (res.data.status !== "error") {
        localStorage.setItem("token", res.data.user);
        window.location.href = "/area-reservada";
      } else {
        alert("Por favor, Confirme os seus dados");
      }
    });
  }

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form>
              <FormH1>Solicitação de Acesso</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                placeholder="exemplo@mail.com"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel htmlFor="for">NIF</FormLabel>
              <FormInput
                placeholder="501634851"
                required
                value={nif}
                onChange={(e) => setNif(e.target.value)}
              />
              <FormButton primary="true" dark="true" to="" onClick={registerUser}>
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
