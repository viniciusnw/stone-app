import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

const StyledContainer = styled(View)`
  background-color: ${({ theme, color }: any) =>
    theme.color[!color ? 'default' : color]};
  padding: 5px 10px;
  flex-direction: row;
  align-self: flex-start;
`;

const StyledLabel = styled(Text)`
  color: ${({ theme }) => theme.color.black};
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.color.white};
`;

type Props = {
  label: string,
  color: string,
};


const Label: React.FC<Props> = ({ label, color, ...props }: any) => {
  return (
    <StyledContainer color={color} {...props}>
      <StyledLabel {...props}>{label}</StyledLabel>
    </StyledContainer>
  );
};

export default Label;
