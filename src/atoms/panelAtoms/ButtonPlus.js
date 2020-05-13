import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  align-items: center;
  background-color: white;
  cursor: pointer;
  display: flex;
  font-size: 15px;
  height: 25px;
  justify-content: center;
  opacity: .3;
  width: 50%;
`;

const IngredientPanelBtnPlus = ({ added }) => {
  return (
    <Btn onClick={added}>+</Btn>
  )
}
export default IngredientPanelBtnPlus;