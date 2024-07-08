import React from "react";
import useSWR from "swr";
import { View, ActivityIndicator } from "react-native";
import { Carousel, ListTwoCol, ProductsItem } from "@Components";

const get = (url: string) => fetch(url).then((res) => res.json());

export default function Home(props: any) {
  const { data: featureProducts = [], isLoading: carouselLoading } = useSWR(
    "https://fakestoreapi.com/products?limit=5&sort=desc",
    get
  );

  const { data: listProducts = [], isLoading: listLoading } = useSWR(
    "https://fakestoreapi.com/products",
    get
  );

  React.useEffect(
    () =>
      props.setState({
        bottomBar: {
          menu: [
            {
              icon: "wallet",
              label: "Wallet",
              onPress: () => props.goTo("Wallet"),
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
              onPress: () => props.goTo("Login"),
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
      {!carouselLoading && (
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

      {!listLoading && featureProducts && (
        <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5 }}>
          <ListTwoCol
            columnWrapperStyle={{ gap: "10" }}
            data={listProducts}
            renderItem={({ item }: any) => (
              <ProductsItem
                carousel
                img={item.image}
                label={item.title}
                price={item.price}
                description={item.description}
                onPress={() => props.goTo("Product", { productId: item.id })}
              />
            )}
          />
        </View>
      )}

      {(listLoading || carouselLoading) && (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color={"black"} />
        </View>
      )}
    </View>
  );
}
