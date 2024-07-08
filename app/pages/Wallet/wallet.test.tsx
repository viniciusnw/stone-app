import React from "react";
import renderer from "react-test-renderer";
import { lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import Wallet from "./wallet.page";
import "jest-styled-components";
import Wrapper from "@/app/navigation/wrapper.navigator";

jest.useFakeTimers();

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

test("WalletWrapper", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <Wrapper Page={Wallet} header bottomBarType={null} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Wallet", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <Wallet setState={jest.fn} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
