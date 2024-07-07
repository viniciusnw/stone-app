import React from "react";
import { Text } from "react-native";
import { Button, StorybookWrapper } from "@Components";

const ButtonDefault = ({ type }: any) => (
  <StorybookWrapper>
    <Button color={type} onPress={() => true}>
      <Text>Default Button</Text>
    </Button>
  </StorybookWrapper>
);

export const Default = {
  args: {
    type: "default",
  },
};

export const Primary = {
  args: {
    type: "primary",
  },
};

export const Black = {
  args: {
    type: "black",
  },
};

export const Gray = {
  args: {
    type: "gray",
  },
};

export default {
  title: "Button",
  argTypes: {
    type: {
      options: ["default", "primary", "black", "gray"],
      control: { type: "radio" },
    },
  },
  component: ({ type }: any) => <ButtonDefault type={type} />,
};
