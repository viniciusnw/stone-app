import React from "react";
import renderer from "react-test-renderer";
import { lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import Home from "./home.page";
import "jest-styled-components";
import Wrapper from "@/app/navigation/wrapper.navigator";

jest.useFakeTimers()

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

jest.mock("swr", () => {
  return () => {
    return {
      isLoading: false,
      data: [],
    };
  };
});

test("HomeWrapper", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <Wrapper Page={Home} header bottomBarType={"nav-bar"} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Home", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <Home setState={jest.fn} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
