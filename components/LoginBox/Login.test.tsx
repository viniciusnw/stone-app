import React from "react";
import renderer from "react-test-renderer";
import { darkTheme, lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import "jest-styled-components";
import LoginBox from "./LoginBox";

jest.useFakeTimers();

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

test("Login", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={darkTheme}>
        <LoginBox {...props} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
