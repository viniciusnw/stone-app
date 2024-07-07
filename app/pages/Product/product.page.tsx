import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import useSWRMutation from "swr/mutation";
import { Image } from "react-native";
import { Icon } from "@Components";
import styled from "styled-components";
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

  const setNavigation = () => {
    props.setState({
      bottomBar: {
        onPress: () =>
          isAdded(product.id) ? cart.remove(product.id) : cart.add(product),
        text: isAdded(product.id) ? "Remover" : "Adicionar",
        label: currencyFormat(product.price),
        description: `ou 3x ${currencyFormat(product.price / 3)}`,
      },
      topBar: {
        title: product.title,
        back: navigation.goBack,
        cart: () => props.goTo("Cart"),
      },
    });
  };

  React.useEffect(() => {
    if (product && !isMutating) setNavigation();
  }, [product]);

  React.useEffect(
    () => autorun(() => product && setNavigation()),
    [cart.items, product]
  );

  React.useEffect(() => error && navigation.goBack(), [error]);

  React.useEffect(() => {
    if (route.params?.productId) trigger();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {!isMutating && product && (
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
            <CategoryText>{product.category}</CategoryText>
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

const CategoryText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
`;

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
