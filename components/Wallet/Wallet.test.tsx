import React from "react";
import renderer from "react-test-renderer";
import { darkTheme, lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import "jest-styled-components";
import Wallet from "./Wallet";

jest.useFakeTimers();

const sample = {
  value: "R$1350,50",
  qty: 8,
};

test("Wallet", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={darkTheme}>
        <Wallet {...sample} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
