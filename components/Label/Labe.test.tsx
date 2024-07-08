import React from "react";
import renderer from "react-test-renderer";
import { darkTheme, lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import "jest-styled-components";
import Label from "./Label";

jest.useFakeTimers();

test("Label", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={darkTheme}>
        <Label label="Default Label" color='primary' />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
