import Button from "@Components/Button";
import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";

const StyledContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.border};
  margin-bottom: ${({ theme }) => theme.spacing.regular};
`;

const StyledWrapper = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  flex: 1;
`;

const StyledLine = styled(View)`
  padding: ${({ theme }) => theme.spacing.regular};
  border-left-color: ${({ theme }) => theme.color.border};
  border: 1px solid transparent;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const StyledInfo = styled(View)`
  flex: 1;
`;

const StyledAction = styled(View)`
  flex: 0.2;
`;

const StyledLogo = styled(View)`
  justify-content: center;
  align-items: center;
`;

const StyledName = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.color.gray};
`;

const StyledNumber = styled(Text)`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.gray};
`;

export type Props = {
  name: string;
  image: string;
  qty: number;
  onPress: () => any;
};

const ProductItemHorizontal: React.FC<Props> = ({
  name,
  image,
  onPress,
  qty,
}) => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledLogo>
          <Image
            style={{ width: 80, height: 80, resizeMode: "contain" }}
            source={{ uri: image }}
          />
        </StyledLogo>

        <StyledLine>
          <StyledInfo>
            <StyledName numberOfLines={3}>{name}</StyledName>
            <StyledNumber>{qty}</StyledNumber>
          </StyledInfo>

          <StyledAction>
            <Button rounded color="danger" onPress={onPress}>
              <Text>X</Text>
            </Button>
          </StyledAction>
        </StyledLine>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default ProductItemHorizontal;
