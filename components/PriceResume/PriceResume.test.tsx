import React from "react";
import renderer from "react-test-renderer";
import { darkTheme, lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import "jest-styled-components";
import PriceResume from "./PriceResume";

jest.useFakeTimers();

test("PriceResume", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={darkTheme}>
        <PriceResume label="label" description="description" />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
