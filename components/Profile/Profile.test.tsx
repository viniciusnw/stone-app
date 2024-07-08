import React from "react";
import renderer from "react-test-renderer";
import { darkTheme, lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import "jest-styled-components";
import Profile from "./Profile";

jest.useFakeTimers();

const user = {
  src: "https://i.pinimg.com/280x280_RS/39/fd/09/39fd09a3f0962e5b7b4a3ccbf5a61057.jpg",
  name: "Bruce Wayne",
  rule: "Wayne Interprise",
};

test("Profile", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={darkTheme}>
        <Profile {...user} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
