import React from "react";
import { string, number } from "prop-types";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "@Components/Icon";

const StyledContainer = styled(View)`
  width: 100%;
  border: 1px solid transparent;
  border-bottom-color: ${({ theme }) => theme.color.border};
  padding: ${({ theme: { spacing } }) => `${spacing.large} ${spacing.regular}`};
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledWrapper = styled(View)``;

const StyledOrder = styled(Text)`
  font-size: 22px;
  font-weight: 700;
`;

const StyledDetailsWrapper = styled(View)`
  flex-direction: column;
  margin: 10px 0 15px;
`;

const StyledService = styled(Text)`
  font-weight: 700;
  margin-right: ${({ theme }) => theme.spacing.regular};
`;

const StyledQty = styled(Text)``;

const StyledLocation = styled(Text)`
  font-size: 16px;
`;

const StyledAddressLine = styled(Text)`
  color: ${({ theme }) => theme.color.grayDark};
  margin-top: 5px;
`;

const StyledDateWrapper = styled(View)`
  flex-direction: row;
  margin: 10px 0 0;
`;

const StyledDate = styled(Text)``;

const StyledHours = styled(Text)`
  margin-left: ${({ theme }) => theme.spacing.regular};
`;

const StyledActions = styled(View)``;

const StyledMore = styled(TouchableOpacity)``;

type Props = {
  orderId: string;
  items: Array<{
    name: string;
    qty: number;
  }>;
  name: string;
  address1: string;
  address2: string;
  date: string;
  total: number;
};

const OrderInfo: React.FC<Props> = ({
  orderId,
  items,
  name,
  address1,
  address2,
  date,
  total,
  ...props
}: any) => {
  function currencyFormat(num: number) {
    return "R$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <StyledContainer {...props}>
      <StyledWrapper>
        <StyledOrder>{orderId}</StyledOrder>
        <StyledDetailsWrapper>
          {items.map((i: any) => (
            <View style={{flexDirection: 'row'}}>
              <StyledService>{i.name}</StyledService>
              <StyledQty>{`${i.qty} ${
                i.qty === 1 ? "item" : "items"
              }`}</StyledQty>
            </View>
          ))}
        </StyledDetailsWrapper>

        <StyledLocation>{name}</StyledLocation>
        <StyledAddressLine>{address1}</StyledAddressLine>
        <StyledAddressLine>{address2}</StyledAddressLine>
        <StyledDateWrapper>
          <StyledDate>{date}</StyledDate>
          <StyledHours>{currencyFormat(total)}</StyledHours>
        </StyledDateWrapper>
      </StyledWrapper>

      <StyledActions>
        <StyledMore>
          <Icon icon="more" size={20} />
        </StyledMore>
      </StyledActions>
    </StyledContainer>
  );
};

export default OrderInfo;
