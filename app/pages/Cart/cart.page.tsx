import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";

import { Button, Icon, Logo } from "@Components";
import { useNavigation } from "@react-navigation/native";

export default function Cart(props: any) {
  const navigation = useNavigation();

  React.useEffect(
    () =>
      props.setState({
        bottomBar: {
          onPress: () => console.log("onNextBottomPress"),
          text: `Finalizar`,
          label: `Total: 299,90`,
          description: `ou 3x R$100`,
        },
        topBar: {
          title: "Cart",
          back: navigation.goBack,
        },
      }),
    []
  );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text />
    </View>
  );
}
