import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { ActionBar, ActionBarWrapperDouble, ActionBarWrapperSingle, Button, PriceResume } from "@Components";

const Wrapper = styled(View)`
  height: 100%;
  justify-content: flex-end;
`;

const ActionBarDefault = () => (
  <Wrapper>
    <ActionBar>
      <ActionBarWrapperSingle>
        <Button color="black">
          <Text>Avançar</Text>
        </Button>
      </ActionBarWrapperSingle>
    </ActionBar>
  </Wrapper>
);

const ActionBarPrice = () => (
  <Wrapper>
    <ActionBar>
      <ActionBarWrapperDouble>
        <PriceResume label="3x de R$99,99" description="ou R$299,90" />
        <Button color="black">
          <Text>Comprar</Text>
        </Button>
      </ActionBarWrapperDouble>
    </ActionBar>
  </Wrapper>
);

export const Default = {
  args: {
    withPrice: false,
  },
};

export const BarPrice = {
  args: {
    withPrice: true,
  },
};

export default {
  title: "ActionBar",
  component: ({ withPrice }: any) =>
    withPrice ? <ActionBarPrice /> : <ActionBarDefault/>
};