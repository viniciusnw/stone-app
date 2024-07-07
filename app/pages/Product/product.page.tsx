import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";

import { Button, Icon, Logo } from "@Components";
import { useNavigation, DrawerActions } from "@react-navigation/native";

export default function Product(props: any) {
  const navigation = useNavigation();

  React.useEffect(
    () =>
      props.setState({
        bottomBar: {
          onPress: () => console.log("onNextBottomPress"),
          text: `Adicionar`,
          label: `3x de R$99,99`,
          description: `ou R$299,90`,
        },
        topBar: {
          title: "Product",
          back: navigation.goBack,
          cart: () => props.goTo("Cart"),
        },
      }),
    []
  );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text />
      <Text>Ton :)</Text>
      <Text />
    </View>
  );
}
