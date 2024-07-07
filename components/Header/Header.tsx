import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "@Components/Icon";
import Logo from "@Components/Logo";

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
`;

const StyledFake = styled(View)`
  width: 30px;
`;

const StyledBack = styled(TouchableOpacity)``;

const StyledMenu = styled(TouchableOpacity)``;

class Header extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { back, cart, title } = this.props;
    return (
      <StyledContainer>
        {back ? (
          <StyledBack onPress={back}>
            <Icon icon="left" size={22} />
          </StyledBack>
        ) : (
          <StyledFake />
        )}

        <StyledTitle> {title ? title : <Logo />} </StyledTitle>

        {cart ? (
          <StyledMenu onPress={cart}>
            <Icon icon="cart" size={26} />
          </StyledMenu>
        ) : (
          <StyledFake />
        )}
      </StyledContainer>
    );
  }
}

export default Header;
