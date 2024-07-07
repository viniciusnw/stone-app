import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";

import { Button, Icon, Logo } from "@Components";
import { useNavigation } from "@react-navigation/native";

export default function Profile(props: any) {
  const navigation = useNavigation();

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
              icon: "home",
              label: "Home",
              onPress: () => props.goTo("Home"),
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
          title: "Profile",
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
