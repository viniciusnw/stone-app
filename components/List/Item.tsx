import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components/native';
import Icon from '../Icon';

const StyledTouchable = styled(TouchableWithoutFeedback)``;

const StyledContainer = styled(View)`
  width: 100%;
  border: 1px solid transparent;
  border-bottom-color: ${({ theme }) => theme.color.border};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacing.regular};
`;

const StyledTitle = styled(Text)`
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme }) => theme.color.black};
`;

const StyledAction = styled(TouchableOpacity)``;

const Item = ({ theme, label, action, ...props }: any) => {
  return (
    <StyledTouchable {...props}>
      <StyledContainer>
        <StyledTitle>{label}</StyledTitle>
        {action && (
          <StyledAction onPress={action}>
            <Icon icon="right" size={16} color={theme.color.gray} />
          </StyledAction>
        )}
      </StyledContainer>
    </StyledTouchable>
  );
};

export default withTheme(Item);
