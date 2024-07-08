import React from "react";
import renderer from "react-test-renderer";
import { darkTheme, lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import "jest-styled-components";
import Navbar from "./Navbar";

jest.useFakeTimers();

type Nav = {
  icon: string;
  label: string;
  onPress: () => any;
  primary: boolean;
};

const nav: Nav[] = [
  {
    icon: "wallet",
    label: "Cateira",
    onPress: () => true,
    primary: false,
  },
  {
    icon: "plus",
    label: "Carrinho",
    onPress: () => true,
    primary: false,
  },
  {
    icon: "logout",
    label: "Logout",
    onPress: () => true,
    primary: false,
  },
];

test("Navbar", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={darkTheme}>
        <Navbar items={nav} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
