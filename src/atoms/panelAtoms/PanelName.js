import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  color: #fff;
  font-size: 25px;
  font-weight: 400;
  margin: 0 0 10px 0;
`;

const IngredientName = ({ children }) => {
  return (
    <Title>{children}</Title>
  )
};

export default IngredientName;
