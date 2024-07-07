import React from "react";
import { Carousel, ProductsItem } from "@Components";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Item = styled(View)`
  height: 300;
`;

const products = [
  {
    label: "Depilação de axilas",
    description: "Lorem ipsum sit dolor",
    price: 299,
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    carousel: true
  },
  {
    label: "Depilação de virilia",
    description: "Amet sir conquetur amen",
    price: 399,
    oldPrice: 499,
    img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    carousel: true
  },
];

export const Default = {};

export default {
  title: "Carousel",
  component: (props: any) => (
    <Carousel
      data={products.map((item) => (
        <Item>
          <ProductsItem {...item} />
        </Item>
      ))}
    />
  ),
};
