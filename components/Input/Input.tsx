import React from 'react';
import styled from 'styled-components/native';
import {TextInput} from 'react-native';

const StyledInput = styled(TextInput)`
  width: 100%;
  height: 42px;
  border: 1px solid ${({theme}) => theme.color.border};
  padding: 10px 15px;
`;

const Input = (props: any) => {
  return <StyledInput {...props} />;
};

export default Input;
