import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  color: #fff;
  font-size: 35px;
  margin: 0;
  text-transform: uppercase;
`;

const TitleForIngredientsCategory = ({ children }) => {
  return (
    <Title>{children}</Title>
  )
}

export default TitleForIngredientsCategory;
