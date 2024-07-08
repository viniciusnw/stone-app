import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

const StyledContainer = styled(View)``;

const StyledLabel = styled(Text)`
  color: ${({ theme }) => theme.color.black};
  font-weight: 700;
  font-size: 16px;
`;

const StyledDescription = styled(Text)`
  color: ${({ theme }) => theme.color.gray};
  margin-top: 2px;
`;

const PriceResume = ({ label, description, ...props }: any) => {
  return !label && !description ? null : (
    <StyledContainer {...props}>
      {label && <StyledLabel>{label}</StyledLabel>}
      {description && <StyledDescription>{description}</StyledDescription>}
    </StyledContainer>
  );
};

export default PriceResume;
