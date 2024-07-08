import React from "react";
import renderer from "react-test-renderer";
import Card from "./Card";
import { darkTheme, lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import "jest-styled-components";

const sample = {
  day: "25",
  month: "ABR",
  price: 10000,
  status: "done",
  title: "Notebook LG 32GB - i7 / RTX 3070",
};

test("Card", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={darkTheme}>
        <Card {...sample} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
