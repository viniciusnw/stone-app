import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const StyledContainer = styled(View)<{ color: string; rounded: boolean }>`
  background-color: ${({ theme, color }) =>
    theme.color[!color ? "default" : color]};
  padding: 5px 10px;
  flex-direction: row;
  align-self: flex-start;
  border-radius: ${({ rounded }) => (rounded ? "50%" : 0)};
`;

const StyledLabel = styled(Text)`
  color: ${({ theme }) => theme.color.black};
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.color.white};
`;

type Props = {
  label: string;
  color: string;
  rounded?: boolean;
};

const Label: React.FC<Props> = ({
  rounded = false,
  label,
  color,
  ...props
}) => {
  return (
    <StyledContainer rounded={rounded} color={color} {...props}>
      <StyledLabel {...props}>{label}</StyledLabel>
    </StyledContainer>
  );
};

export default Label;
