import React from "react";
import { Header } from "@Components";
import BottomBar from "./bottom.navigator";
import { useNavigation } from "@react-navigation/native";

export default function Wrapper(props: any) {
  const navigation = useNavigation();

  const [state, setState] = React.useState({
    bottomBar: {
      text: "Avançar",
      label: false,
      description: false,
      onPress: () => null,
      menu: [],
    },
    topBar: {
      back: null,
      cart: false,
      title: false,
    },
  });

  const { bottomBarType = null, Page, header } = props;

  const goTo = (page: string) => {
    // @ts-ignore
    navigation.navigate(page);
  };

  return (
    <>
      {header && (
        <Header
          back={state.topBar.back}
          cart={state.topBar.cart}
          title={state.topBar.title}
        />
      )}

      <Page {...props} state={state} goTo={goTo} setState={setState} />

      {bottomBarType && (
        <BottomBar
          type={bottomBarType}
          menu={state.bottomBar.menu}
          text={state.bottomBar.text}
          label={state.bottomBar.label}
          description={state.bottomBar.description}
          onPress={state.bottomBar.onPress}
        />
      )}
    </>
  );
}
