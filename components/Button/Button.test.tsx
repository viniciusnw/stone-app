import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button";
import { darkTheme, lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import "jest-styled-components";
import { Text } from "react-native";

test("ActionBar", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={darkTheme}>
        <Button color="primary" onPress={() => true}>
          <Text>Default Button</Text>
        </Button>
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
