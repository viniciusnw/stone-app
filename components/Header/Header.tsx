import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "@Components/Icon";
import Logo from "@Components/Logo";
import Label from "@Components/Label";

const StyledContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 62px;
  border: 1px solid transparent;
  border-bottom-color: ${({ theme }) => theme.color.border};
  padding: 0 ${({ theme }) => theme.spacing.regular};
`;

const StyledTitle = styled(Text)`
  color: ${({ theme }) => theme.color.black};
  font-weight: 700;
  font-size: 20px;
  max-width: 200;
  text-align: center;
`;

const StyledFake = styled(View)`
  width: 30px;
`;

const CartQty = styled(View)`
  position: absolute;
  top: -15;
  right: -10;
`;

const StyledBack = styled(TouchableOpacity)``;

const StyledCart = styled(TouchableOpacity)``;

const Cart = ({ cart, cartQty }: any) => {
  return (
    <StyledCart onPress={cart}>
      <Icon icon="cart" size={26} />

      {!!cartQty && (
        <CartQty>
          <Label rounded label={cartQty} color="danger" />
        </CartQty>
      )}
    </StyledCart>
  );
};

const Header = (props: any) => {
  const { back, cart, title, cartQty } = props;

  return (
    <StyledContainer>
      {back ? (
        <StyledBack onPress={back}>
          <Icon icon="left" size={22} />
        </StyledBack>
      ) : (
        <StyledFake />
      )}

      <StyledTitle numberOfLines={2}>{title ? title : <Logo />}</StyledTitle>

      {cart ? <Cart cart={cart} cartQty={cartQty} /> : <StyledFake />}
    </StyledContainer>
  );
};

export default Header;
