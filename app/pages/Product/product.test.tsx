import React from "react";
import renderer from "react-test-renderer";
import { lightTheme } from "@Theme";
import { ThemeProvider } from "styled-components/native";
import Product from "./product.page";
import "jest-styled-components";
import Wrapper from "@/app/navigation/wrapper.navigator";
import { mount, shallow} from 'enzyme';
import { mountToJson, shallowToJson } from 'enzyme-to-json';
import { Text } from "react-native";


jest.useFakeTimers({
  advanceTimers: 10000,
});

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
      goBack: jest.fn(),
    }),
    useRoute: () => ({
      params: {
        productId: 1,
      },
    }),
  };
});

jest.mock("swr/mutation", () => {
  return () => {
    return {
      trigger: () => {
        return {
          then: () => {
            return {
              image: require("@Assets/images/splash.png"),
              category: "category",
              description: "description",
              title: "title",
              price: 1000,
              rating: {
                rate: 5,
              },
            }
          }
        }
      },
      isMutating: false,
      data: {
        image: require("@Assets/images/splash.png"),
        category: "category",
        description: "description",
        title: "title",
        price: 1000,
        rating: {
          rate: 5,
        },
      },
    };
  };
});

test("ProductWrapper", () => {
  const wrapper = shallow(
    <ThemeProvider theme={lightTheme}>
      <Wrapper Page={Product} header bottomBarType={"action-bar"} />
    </ThemeProvider>
  )
  wrapper.update()
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

test("Product", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={lightTheme}>
        <Product setState={jest.fn} />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
