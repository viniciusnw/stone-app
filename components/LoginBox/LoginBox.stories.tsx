import React from "react";
import { View } from "react-native";
import { LoginBox, StorybookWrapper } from "@Components";

const props = {
  facebook: {
    onPress: () => true,
  },
  google: {
    onPress: () => true,
  },
  email: {
    value: "",
    onChangeText: () => true,
    placeholder: "E-mail",
    autoCompleteType: "email",
  },
  password: {
    value: "",
    onChangeText: () => true,
    placeholder: "Senha",
    autoCompleteType: "password",
  },
  forgotPassword: true,
  submit: () => true,
  register: {
    onPress: () => true,
  },
};

export const Default = {};

export default {
  title: "Login",
  component: () => (
    <StorybookWrapper>
      <View style={{ width: "100%", marginTop: 60 }}>
        <LoginBox {...props} />
      </View>
    </StorybookWrapper>
  ),
};
