import React, { useState } from "react";

import { Input } from "../../components/Forms/Input";
import {Button } from "../../components/Forms/Button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { CategorySelect } from "../../components/Forms/CategorySelect";
import { 
    Container,
    Header,
    Title,
    Forms,
    Fields,
    TransactionType,
 } from "./styles";

export function Register(){
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionsTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  }

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
               <TransactionType>
                  <TransactionTypeButton
                    type="up"
                    title="Income"
                    onPress={() => handleTransactionsTypeSelect('up')}
                    isActive={transactionType === 'up'}
                  />
                  <TransactionTypeButton
                    type="down"
                    title="Outcome"
                    onPress={() => handleTransactionsTypeSelect('down')}
                    isActive={transactionType === 'down'}
                  />
                </TransactionType>

                <CategorySelect title='Categoria'/>
            </Fields>

            <Button title="Enviar"/>
        </Forms>
    </Container>
  );
}