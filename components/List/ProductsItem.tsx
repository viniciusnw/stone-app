import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import styled from "styled-components/native";

const StyledTouchable = styled(TouchableWithoutFeedback)``;

const StyledContainer = styled(View)<{ carousel?: boolean }>`
  flex: ${(props) => props.carousel ? '1' : '.5'};
  border: 1px solid ${({ theme }) => theme.color.border};
  margin-bottom: ${({ theme }) => theme.spacing.regular};
  flex-direction: column;
`;

const StyledWrapper = styled(View)`
  flex: 1;
  gap: 10px;
  padding: ${({ theme }) => theme.spacing.regular};
`;

const StyledLabel = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
`;

const StyledDescription = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.color.gray};
`;

const StyledBottom = styled(View)`
  padding: ${({ theme: { spacing } }) => `${spacing.small} ${spacing.regular}`};
  border: 1px solid transparent;
  border-top-color: ${({ theme }) => theme.color.border};
  flex-direction: row;
  justify-content: space-between;
`;

const StyledPrice = styled(View)`
  flex-direction: row;
`;

const StyledOldPrice = styled(Text)`
  text-decoration-line: line-through;
  text-decoration-style: solid;
  margin-right: ${({ theme }) => theme.spacing.regular};
  color: ${({ theme }) => theme.color.grayLight};
`;

const StyledRegularPrice = styled(Text)``;

const ProductsItem = ({
  label,
  description,
  price,
  oldPrice,
  img,
  carousel,
  onPress,
  ...props
}: any) => {
  function currencyFormat(num: number) {
    return "R$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <StyledTouchable onPress={onPress} {...props}>
      <StyledContainer carousel={carousel}>
        <StyledWrapper>
          <Image
            style={{
              resizeMode: "contain",
              height: 125,
              width: "100%",
              backgroundColor: "#fff",
            }}
            source={{
              uri: img,
            }}
          />

          <StyledLabel>{label}</StyledLabel>
          <StyledDescription numberOfLines={1}>{description}</StyledDescription>
        </StyledWrapper>

        <StyledBottom>
          <StyledPrice>
            {oldPrice && (
              <StyledOldPrice>{currencyFormat(oldPrice)}</StyledOldPrice>
            )}
            <StyledRegularPrice>{currencyFormat(price)}</StyledRegularPrice>
          </StyledPrice>
        </StyledBottom>
      </StyledContainer>
    </StyledTouchable>
  );
};

export default ProductsItem;
