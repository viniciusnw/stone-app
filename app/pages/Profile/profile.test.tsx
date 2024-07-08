import React from "react";
import renderer from "react-test-renderer";
import { lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import Profile from "./profile.page";
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

test("ProfileWrapper", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <Wrapper Page={Profile} header bottomBarType={null} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Profile", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <Profile setState={jest.fn} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
