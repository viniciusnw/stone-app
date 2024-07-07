import React from 'react';
import { string, bool, func } from 'prop-types';
import { View, Text, Switch } from 'react-native';
import styled from 'styled-components/native';

const StyledContainer = styled(View)`
  width: 100%;
  border: 1px solid transparent;
  border-bottom-color: ${({ theme }) => theme.color.border};
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.regular};
`;

const StyledWrapper = styled(View)``;

const StyledSwitch = styled(Switch)`
  margin-right: ${({ theme }) => theme.spacing.regular};
`;

const StyledTitle = styled(Text)`
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme }) => theme.color.black};
`;

const StyledDescription = styled(Text)`
  margin-top: 4px;
  color: ${({ theme }) => theme.color.gray};
`;

type Props = {
  label: string,
  description: string,
  active: boolean,
  toggle: () => null,
};

const SwitchItem: React.FC<Props> = ({ label, description, active, toggle, ...props }: any) => {
  return (
    <StyledContainer {...props}>
      <StyledSwitch onValueChange={toggle} value={active} />
      <StyledWrapper>
        <StyledTitle>{label}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default SwitchItem;
