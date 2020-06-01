import React from 'react';
import styled from 'styled-components';

const IngredientNumber = ({ number }) => <Area>{number}</Area>;

export default IngredientNumber;

const Area = styled.p`
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  opacity: .3;
  font-size: 20px;
  height: 25px;
  width: 100%;
  margin: 0 0 2px 0;
`;