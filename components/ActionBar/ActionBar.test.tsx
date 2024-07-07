import React from "react";
import renderer from "react-test-renderer";
import { ActionBar } from "./ActionBar";
import {
  ActionBarWrapperDouble,
  ActionBarWrapperSingle,
} from "./ActionBarWrapper";
import { darkTheme, lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import "jest-styled-components";
import Button from "@Components/Button";
import { Text } from "react-native";
import PriceResume from "@Components/PriceResume";

test("ActionBarWrapperSingle", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <ActionBar>
          <ActionBarWrapperSingle>
            <Button color="black">
              <Text>Avançar</Text>
            </Button>
          </ActionBarWrapperSingle>
        </ActionBar>
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("ActionBarWrapperDouble", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={darkTheme}>
        <ActionBar>
          <ActionBarWrapperDouble>
            <PriceResume label="3x de R$99,99" description="ou R$299,90" />
            <Button color="black">
              <Text>Comprar</Text>
            </Button>
          </ActionBarWrapperDouble>
        </ActionBar>
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
