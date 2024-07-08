import React from "react";
import renderer from "react-test-renderer";
import { darkTheme, lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import "jest-styled-components";
import Logo from "./Logo";

jest.useFakeTimers();

test("Logo", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={darkTheme}>
        <Logo />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
