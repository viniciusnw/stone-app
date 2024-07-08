import React from "react";
import renderer from "react-test-renderer";
import { darkTheme, lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import "jest-styled-components";
import Input from "./Input";

jest.useFakeTimers();

test("Input", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={darkTheme}>
        <Input value="" />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
