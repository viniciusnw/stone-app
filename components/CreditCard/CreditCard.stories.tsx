import React from "react";
import { CreditCard, StorybookWrapper } from "@Components";

export type Props = {
  name: string;
  number: string;
  brand: "visa" | "mastercard" | "santander";
};

const card: Props = {
  name: "Bruce Wayne",
  number: "**** **** **** 1234",
  brand: "visa",
};

const card1: Props = {
  name: "Dick Grayson",
  number: "**** **** **** 1234",
  brand: "mastercard",
};

export const Default = {};

export default {
  title: "Credit Card",
  component: (props: any) => (
    <StorybookWrapper>
      <CreditCard {...card} />
      <CreditCard {...card1} />
    </StorybookWrapper>
  ),
};
