import React from "react";
import { Fieldset, Input } from "@Components";
import { View } from "react-native";
import styled from "styled-components/native";

const StyledField = styled(View)`
  margin-bottom: 15px;
`;

export const Default = {};

export default {
  title: "Fieldset",
  component: (props: any) => (
    <Fieldset title="Identificação" subtitle="Seus dados pessoais">
      <StyledField>
        <Input placeholder="Nome" />
      </StyledField>
      <StyledField>
        <Input placeholder="E-mail" />
      </StyledField>
    </Fieldset>
  ),
};
