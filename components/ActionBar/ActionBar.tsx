import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const StyledContainer = styled(View)`
  background-color: #ddd;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  height: ${({ theme }) => theme.height.navbar};
`;

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

export const ActionBar: React.FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
