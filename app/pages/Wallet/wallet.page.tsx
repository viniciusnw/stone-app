import React from "react";
import { Text, View } from "react-native";
import {
  CreditCard,
  Profile as ProfileComp,
  Wallet as WalletComp,
} from "@Components";
import { useNavigation } from "@react-navigation/native";

export type CardProps = {
  name: string;
  number: string;
  brand: "visa" | "mastercard" | "santander";
};

export default function Wallet(props: any) {
  const navigation = useNavigation();

  const user = {
    src: "https://i.pinimg.com/280x280_RS/39/fd/09/39fd09a3f0962e5b7b4a3ccbf5a61057.jpg",
    name: "Bruce Wayne",
    rule: "Wayne Interprise",
  };

  const card: CardProps = {
    name: "Bruce Wayne",
    number: "**** **** **** 1234",
    brand: "visa",
  };

  const card1: CardProps = {
    name: "Dick Grayson",
    number: "**** **** **** 1234",
    brand: "mastercard",
  };

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
          title: "Wallet",
          back: navigation.goBack,
        },
      }),
    []
  );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <WalletComp value="R$ 10.000,00" qty={200} />

      <View style={{ padding: 10 }}>
        <Text style={{ marginBottom: 15 }}>Meus cartoes:</Text>
        <CreditCard {...card} />
        <CreditCard {...card1} />
      </View>
    </View>
  );
}
