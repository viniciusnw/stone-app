import React from "react";
import { Header } from "@Components";

export const Default = {
  args: {
    type: "default",
  },
};

export const NoBack = {
  args: {
    type: "no_back",
  },
};

export const Cart = {
  args: {
    type: "cart",
  },
};

export default {
  title: "Header",
  argTypes: {
    type: {
      options: ["default", "no_back", "black", "cart"],
      control: { type: 'radio' },
    },
  },
  component: ({ type }: any) => {
    switch (type) {
      case "default":
        return <Header back={() => true} menu={() => true} />;
      case "no_back":
        return <Header back={false} menu={() => true} />;
      case "cart":
        return  <Header back={() => true} cart title="Checkout" />;
      default:
        return <Header back={() => true} menu={() => true} />;
    }
  },
};
