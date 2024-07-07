import React from "react";
import useSWR from "swr";
import { View, ActivityIndicator } from "react-native";
import { Carousel, ProductsItem } from "@Components";

const get = (url: string) => fetch(url).then((res) => res.json());

export default function Home(props: any) {
  const { data: featureProducts = [], isLoading } = useSWR(
    "https://fakestoreapi.com/products?limit=5",
    get
  );

  React.useEffect(
    () =>
      props.setState({
        bottomBar: {
          menu: [
            {
              icon: "wallet",
              label: "Carteira",
              onPress: () => true,
              primary: false,
            },
            {
              icon: "user",
              label: "Profile",
              onPress: () => props.goTo("Profile"),
              primary: true,
            },
            {
              icon: "logout",
              label: "Logout",
              onPress: () => true,
              primary: false,
            },
          ],
        },
        topBar: {
          cart: () => props.goTo("Cart"),
        },
      }),
    []
  );

  return (
    <View style={{ flex: 1, paddingTop: 10 }}>
      {!isLoading && featureProducts && (
        <Carousel
          data={featureProducts.map((item: any) => (
            <ProductsItem
              carousel
              img={item.image}
              label={item.title}
              price={item.price}
              description={item.description}
              onPress={() => props.goTo("Product", { productId: item.id })}
            />
          ))}
        />
      )}

      {isLoading && (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color={"black"} />
        </View>
      )}
    </View>
  );
}
