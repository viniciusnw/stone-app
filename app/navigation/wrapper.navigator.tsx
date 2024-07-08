import React from "react";
import { Header } from "@Components";
import BottomBar from "./bottom.navigator";
import { useNavigation } from "@react-navigation/native";
import { useStore as useCheckoutStore } from "@Contexts/checkout.context";
import { View } from "react-native";
import { observer } from "mobx-react";

const Wrapper = (props: any) => {
  const { cart } = useCheckoutStore();
  const navigation = useNavigation();

  const [state, setState] = React.useState({
    bottomBar: {
      text: "...",
      label: false,
      description: false,
      onPress: () => null,
      menu: [],
      disabled: true,
    },
    topBar: {
      back: null,
      cart: false,
      title: false,
    },
  });

  const { bottomBarType = null, Page, header } = props;

  const goTo = (page: string, state: any) => {
    // @ts-ignore
    navigation.navigate(page, state);
  };

  return (
    <View style={{ flex: 1 }}>
      {header && <Header cartQty={cart.items.length} {...state.topBar} />}

      <Page goTo={goTo} setState={setState} />

      {bottomBarType && <BottomBar type={bottomBarType} {...state.bottomBar} />}
    </View>
  );
}

export default observer(Wrapper);