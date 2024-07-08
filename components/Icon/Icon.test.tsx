import React from "react";
import renderer from "react-test-renderer";
import { darkTheme, lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import "jest-styled-components";
import Icon from "./Icon";

jest.useFakeTimers();

test("Icon", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={darkTheme}>
        <Icon size={40} icon="more" />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
