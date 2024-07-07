import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

const StyledButton = styled(TouchableOpacity)<{ color: any }>`
  background-color: ${({ theme, color }) =>
    theme.color[!color ? "default" : color]};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  font-size: 14px;
`;

const Button = ({ color, children, ...props }: any) => {
  return (
    <StyledButton color={color} {...props}>
      <StyledText>{children}</StyledText>
    </StyledButton>
  );
};

export default Button;
