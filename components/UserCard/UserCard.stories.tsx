import React from "react";
import { UserCard, StorybookWrapper } from "@Components";

const user = {
  src: "https://www.graciemag.com/wp-content/uploads/2012/06/house.jpg",
  name: "Doctor House",
  description: "Av. Paulista, 14.005, Bela Vista - SP",
};

export const Default = {};

export default {
  title: "UserCard",
  component: () => (
    <StorybookWrapper>
      <UserCard {...user} />
    </StorybookWrapper>
  ),
};
