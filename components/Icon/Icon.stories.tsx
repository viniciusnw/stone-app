import React from "react";
import { Image as XImage } from "expo-image";
import { View, Text, Image as RImage } from "react-native";
import styled from "styled-components/native";
import { Icon, StorybookWrapper } from "@Components";
import { icons } from "@Assets";
import { ScrollView } from "react-native";

const Wrapper = styled(ScrollView)`
  width: 100%;
`;

const IconBox = styled(View)`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 5px;
  width: 110px;
  height: 110px;
  justify-content: center;
  align-items: center;
`;

const IconText = styled(Text)`
  margin: 10px 0 0;
  background-color: #eee;
  border-radius: 3px;
  padding: 2px 6px;
`;

const pack = [
  "left",
  "right",
  "more",
  "menu",
  "list",
  "calendar",
  "plus",
  "wallet",
  "user",
  "security",
  "map",
  "settings",
  "logout",
  "creditcard",
];

export const Default = {
  args: {
    type: "default",
  },
};

export const Image = {
  args: {
    type: "image",
  },
};

export default {
  title: "Icon",
  argTypes: {
    type: {
      options: ["default", "image"],
      control: { type: "radio" },
    },
  },
  component: ({ type }: any) => {
    switch (type) {
      case "default":
        return (
          <StorybookWrapper>
            <Wrapper
              contentContainerStyle={{
                justifyContent: "center",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {pack.map((icon) => (
                <IconBox>
                  <Icon size={40} icon={icon} />
                  <IconText>{icon}</IconText>
                </IconBox>
              ))}
            </Wrapper>
          </StorybookWrapper>
        );
      case "image":
        return (
          <StorybookWrapper>
            <Wrapper
              contentContainerStyle={{
                justifyContent: "center",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {Object.keys(icons).map((icon) => (
                <IconBox>
                  <RImage
                    style={{ width: 42, height: 42 }}
                    // @ts-ignore
                    source={icons[icon]}
                  />
                  <IconText>{icon}</IconText>
                </IconBox>
              ))}
            </Wrapper>
          </StorybookWrapper>
        );
    }
  },
};
