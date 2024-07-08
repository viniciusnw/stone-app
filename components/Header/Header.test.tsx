import React from "react";
import renderer from "react-test-renderer";
import { darkTheme, lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import "jest-styled-components";
import Header from "./Header";

jest.useFakeTimers();

test("Header", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={darkTheme}>
        <Header back={() => true} menu={() => true} />
        <Header back={false} menu={() => true} />
        <Header back={() => true} cart title="Checkout" />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
