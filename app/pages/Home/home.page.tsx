import React from "react";
import useSWR from "swr";
import { View, Text, ActivityIndicator } from "react-native";
import { Button } from "@Components";
import useSWRMutation from 'swr/mutation'

const get = (url: string) => fetch(url).then((res) => res.json());

const post = (url: string) => fetch(url).then((res) => res.json());

export default function Home(props: any) {
  const { data, isLoading } = useSWR(
    "https://fakestoreapi.com/products",
    get
  );

  const { trigger, isMutating } = useSWRMutation('https://fakestoreapi.com/products', post)

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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => props.goTo("Product")}>
        <Text> Product </Text>
      </Button>

      {isLoading || isMutating && <ActivityIndicator size="small" color={"black"} />}
    </View>
  );
}
