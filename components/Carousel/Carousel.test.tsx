import React from "react";
import renderer from "react-test-renderer";
import { darkTheme, lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import "jest-styled-components";
import MyCarousel from "./Carousel";
import ProductsItem from "@Components/List/ProductsItem";

jest.useFakeTimers();

const products = [
  {
    label: "Depilação de axilas",
    description: "Lorem ipsum sit dolor",
    price: 299,
    img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    carousel: true,
  },
  {
    label: "Depilação de virilia",
    description: "Amet sir conquetur amen",
    price: 399,
    oldPrice: 499,
    img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    carousel: true,
  },
];

test("Carousel", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={darkTheme}>
        <MyCarousel
          data={products.map((item) => (
            <ProductsItem {...item} />
          ))}
        />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
