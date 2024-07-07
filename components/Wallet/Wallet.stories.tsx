import React from "react";
import { Wallet, StorybookWrapper } from "@Components";


const sample = {
  value: "R$1350,50",
  qty: 8,
};

export const Default = {};

export default {
  title: "Wallet",
  component: (props: any) => (
    <StorybookWrapper>
      <Wallet {...sample} />
    </StorybookWrapper>
  ),
};
