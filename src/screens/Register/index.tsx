import React from "react";

import { Input } from "../../components/Forms/Input";
import {Button } from "../../components/Forms/Button";

import { 
    Container,
    Header,
    Title,
    Forms,
    Fields,
 } from "./styles";

export function Register(){
  return (
    <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Forms>
          <Fields> 
              <Input
                placeholder="Nome"
                />
              <Input
                placeholder="Preço"
              />
            </Fields>

            <Button title="Enviar"/>
        </Forms>
    </Container>
  );
}