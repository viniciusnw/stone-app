import React from "react";
import { View } from "react-native";
import { LoginBox } from "@Components";
import styled from "styled-components";

const StyledWrapper = styled(View)`
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export default function Login(props: any) {
  const loginBoxProps = {
    facebook: {
      onPress: () => props.goTo('Home'),
    },
    google: {
      onPress: () => props.goTo('Home'),
    },
    email: {
      value: "bruce@wayne.corp",
      onChangeText: () => true,
      placeholder: "E-mail",
      autoCompleteType: "email",
    },
    password: {
      value: "123456",
      onChangeText: () => true,
      placeholder: "Senha",
      autoCompleteType: "password",
      secureTextEntry: true
    },
    forgotPassword: true,
    submit: () => props.goTo('Home'),
    register: {
      onPress: () => true,
    },
  };

  return (
    <StyledWrapper>
      <View style={{ width: "100%", marginTop: 60 }}>
        <LoginBox {...loginBoxProps} />
      </View>
    </StyledWrapper>
  );
}
