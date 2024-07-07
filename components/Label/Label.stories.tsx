import React from "react";
import { Label, StorybookWrapper } from "@Components";

const LabelDefault = ({color}: any) => (
  <StorybookWrapper>
    <Label label="Default Label" color={color} />
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

export const Success = {
  args: {
    type: "success",
  },
};

export const Danger = {
  args: {
    type: "danger",
  },
};

export const Warning = {
  args: {
    type: "warning",
  },
};

export default {
  title: "Label",
  argTypes: {
    type: {
      options: ["default", "primary", "success", "danger", "warning"],
      control: { type: "radio" },
    },
  },
  component: ({ type }: any) =>  (<LabelDefault color={type} />),
};
