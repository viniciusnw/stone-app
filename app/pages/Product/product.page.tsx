import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import useSWRMutation from "swr/mutation";
import { Image } from "react-native";
import { Icon } from "@Components";
import { observer } from "mobx-react";
import { useStore as useCheckoutStore } from "@Contexts/checkout.context";
import { autorun } from "mobx";

const get = (url: string) => fetch(url).then((res) => res.json());

type ParamList = {
  Product: {
    productId: number;
  };
};

const Product: React.FC<any> = (props: any) => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, "Product">>();
  const { cart } = useCheckoutStore();

  const {
    trigger,
    data: product,
    isMutating,
    error,
  } = useSWRMutation(
    `https://fakestoreapi.com/products/${route.params.productId}`,
    get
  );

  const currencyFormat = (num: number) => {
    return "R$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const isAdded = (id: number) => !!cart.items.find((i) => i.id == id);

  const setNavigation = (p?: any) => {
    const _product = p;
    props.setState({
      bottomBar: {
        onPress: () =>
          isAdded(_product.id) ? cart.remove(_product.id) : cart.add(_product),
        text: isAdded(_product.id) ? "Remover" : "Adicionar",
        label: currencyFormat(_product.price),
        description: `ou 3x ${currencyFormat(_product.price / 3)}`,
      },
      topBar: {
        title: _product.title,
        back: navigation.goBack,
        cart: () => props.goTo("Cart"),
      },
    });
  };

  React.useEffect(
    () => autorun(() => product && setNavigation(product)),
    [cart.items, product]
  );

  React.useEffect(() => error && navigation.goBack(), [error]);

  React.useEffect(() => {
    if (route.params?.productId) trigger().then(p => setNavigation(p));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {!isMutating && !!product && (
        <>
          <Image
            style={{
              resizeMode: "contain",
              height: "40%",
              width: "100%",
              backgroundColor: "#fff",
            }}
            source={{
              uri: product.image,
            }}
          />

          <View style={{ padding: 25, gap: 10 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {product.category}
            </Text>
            <Text>{product.description}</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Rating rating={product.rating.rate} />
              <Text style={{ marginLeft: 10 }}>{product.rating.rate}</Text>
            </View>
          </View>
        </>
      )}

      {isMutating && (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color={"black"} />
        </View>
      )}
    </View>
  );
};

const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  return [...Array(5)].map((el, i) =>
    i < rating && i + 1 > rating ? (
      <Icon key={i} icon={"starh"} />
    ) : i < rating ? (
      <Icon key={i} icon={"star"} />
    ) : (
      <Icon key={i} icon={"staro"} />
    )
  );
};

export default observer(Product);
