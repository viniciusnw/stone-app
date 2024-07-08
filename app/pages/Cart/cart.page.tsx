import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import { useStore as useCheckoutStore } from "@Contexts/checkout.context";
import { autorun } from "mobx";

const Cart: React.FC<any> = (props: any) => {
  const navigation = useNavigation();
  const { cart } = useCheckoutStore();

  const currencyFormat = (num: number) => {
    return "R$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const setNavigation = () => {
    const total = cart.items.reduce((acc, obj) => acc + obj.price, 0);

    props.setState({
      bottomBar: {
        onPress: () => console.log("onNextBottomPress"),
        text: `Finalizar`,
        label: `Total: ${total}`,
        description: `ou 3x ${currencyFormat(total / 3)}`,
      },
      topBar: {
        title: "Cart",
        back: navigation.goBack,
      },
    });
  };

  React.useEffect(() => autorun(() => setNavigation()), [cart.items]);

  return (
    <View style={{ flex: 1, padding: 25 }}>
      <Text>{cart.items.length} produtos adicionados:</Text>
    </View>
  );
};

export default observer(Cart);
