import React from 'react';
import styled from 'styled-components/native';
import { View, Text, StyleSheet } from 'react-native';

const StyledContainer = styled(View)`
  flex-direction: row;
`;

const StyledStone = styled(Text)`
  color: ${({ theme }) => theme.color.default};
  font-weight: 700;
  font-size: 32px;
`;

const StyledTon = styled(Text)`
  color: ${({ theme }) => theme.color.primary};
  font-weight: 700;
  font-size: 32px;
`;

const fontStyle = StyleSheet.create({
  FredokaOneRegular: {
    fontFamily: 'FredokaOne-Regular'
  },
});


const Logo = (props: any) => {
  return (
    <StyledContainer {...props}>
      <Text style={fontStyle.FredokaOneRegular}>
        <StyledStone>
          Stone
        </StyledStone>
        <StyledTon>
          Ton :)
        </StyledTon>
      </Text>
    </StyledContainer>
  )
};

export default Logo;
