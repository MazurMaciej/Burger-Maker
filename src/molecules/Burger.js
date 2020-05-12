import React from 'react';
import styled from 'styled-components';
import BurgerIngredient from '../atoms/BurgerIngredient';

const BurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const burger = () => {
  return (
    <BurgerContainer>
      <BurgerIngredient ingredientType='breadTop' />
      <BurgerIngredient ingredientType='beef' />
      <BurgerIngredient ingredientType='egg' />
      <BurgerIngredient ingredientType='ketchup' />
      <BurgerIngredient ingredientType='cucumber' />
      <BurgerIngredient ingredientType='breadBottom' />
    </BurgerContainer>
  )
}

export default burger;