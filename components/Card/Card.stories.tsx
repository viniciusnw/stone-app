import React from "react";
import { Card, StorybookWrapper } from "@Components";

const sample = {
  day: "25",
  month: "ABR",
  price: 10000,
  status: 'done',
  title: "Notebook LG 32GB - i7 / RTX 3070",
};

export const Default = {
  
};

export default {
  title: "Card",
  component: (props: any) => (
    <StorybookWrapper>
      <Card {...sample} />
    </StorybookWrapper>
  ),
};
