import React from 'react';
import styled from 'styled-components';

const NameIngredientsCategory = ({ children }) => <Title>{children}</Title>

export default NameIngredientsCategory;

const Title = styled.h3`
  color: #fff;
  font-size: 26px;
  margin: 0;
  text-transform: uppercase;
`;
