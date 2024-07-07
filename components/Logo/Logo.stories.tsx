import React from "react";
import { View } from "react-native";
import { Logo, StorybookWrapper } from "@Components";

export const Default = {};

export default {
  title: "Logo",
  component: () => (
    <StorybookWrapper>
      <View style={{ marginTop: 60 }}>
        <Logo />
      </View>
    </StorybookWrapper>
  ),
};
