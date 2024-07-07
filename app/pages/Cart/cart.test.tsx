import React from "react";
import renderer from "react-test-renderer";
import { lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import Cart from "./cart.page";
import "jest-styled-components";
import Wrapper from "@/app/navigation/wrapper.navigator";

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
    useRoute: () => ({
      params: {
        productId: 1,
      },
    }),
  };
});

test("CartWrapper", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <Wrapper Page={Cart} header bottomBarType={"action-bar"} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Cart", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <Cart setState={jest.fn} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
