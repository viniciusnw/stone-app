import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Navbar } from "@Components";

const Wrapper = styled(View)`
  height: 100%;
  justify-content: flex-end;
`;

const client = [
  {
    icon: "wallet",
    label: "Cateira",
    onPress: () => true,
    primary: false,
  },
  {
    icon: "plus",
    label: "Carrinho",
    onPress: () => true,
    primary: false,
  },
  {
    icon: "logout",
    label: "Logout",
    onPress: () => true,
    primary: false,
  },
];

export const Default = {};

export default {
  title: "Navbar",
  component: () => (
    <Wrapper>
      <Navbar items={client} />
    </Wrapper>
  ),
};
