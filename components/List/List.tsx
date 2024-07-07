import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

const StyledList = styled(FlatList)`
  width: 100%;
`;

const List = (props: any) => {
  return <StyledList {...props} />;
};

export const ListTwoCol = (props: any) => {
  return <StyledList numColumns={2} {...props} />;
};

export default List;
