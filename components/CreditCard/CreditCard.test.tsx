import React from "react";
import renderer from "react-test-renderer";
import { darkTheme, lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import "jest-styled-components";
import CreditCard from "./CreditCard";

jest.useFakeTimers();

type Props = {
  name: string;
  number: string;
  brand: "visa" | "mastercard" | "santander";
};

const card: Props = {
  name: "Bruce Wayne",
  number: "**** **** **** 1234",
  brand: "visa",
};

const card1: Props = {
  name: "Dick Grayson",
  number: "**** **** **** 1234",
  brand: "mastercard",
};

test("CreditCard", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={darkTheme}>
        <CreditCard {...card} />
        <CreditCard {...card1} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
