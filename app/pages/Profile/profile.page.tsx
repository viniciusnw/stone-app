import React from "react";
import { View } from "react-native";
import { Profile as ProfileComp } from "@Components";
import { useNavigation } from "@react-navigation/native";

export type CardProps = {
  name: string;
  number: string;
  brand: "visa" | "mastercard" | "santander";
};

export default function Profile(props: any) {
  const navigation = useNavigation();

  const user = {
    src: "https://i.pinimg.com/280x280_RS/39/fd/09/39fd09a3f0962e5b7b4a3ccbf5a61057.jpg",
    name: "Bruce Wayne",
    rule: "Wayne Interprise",
  };

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
      <ProfileComp {...user} />
    </View>
  );
}
