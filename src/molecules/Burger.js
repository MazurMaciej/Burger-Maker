import React from 'react';
import styled from 'styled-components';
import BurgerIngredient from '../atoms/BurgerIngredient';

const burger = (props) => {
  let index = 90;

  const handleZIndex = () => {
    return index = index - 1;
  }

  let transformStateToBurger = Object.keys(props.ingredients).map(item => {
    return [...Array(props.ingredients[item])].map((_, position) => {
      return <BurgerIngredient key={item + position} ingredientType={item} style={{ zIndex: `${handleZIndex(index)}` }} />
    })
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, []);

  if (transformStateToBurger.length === 0) {
    transformStateToBurger = <Title>Please add some ingredients to burger...</Title>
  }

  return (
    <BurgerContainer>
      <BurgerIngredient ingredientType='breadTop' style={{ zIndex: `100` }} />
      {transformStateToBurger}
      <BurgerIngredient ingredientType='breadBottom' style={{ zIndex: `-1` }} />
    </BurgerContainer>
  );
};

export default burger;

const BurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 75%;
  width: 100%;
  z-index: 1;
`;

const Title = styled.p`
  color: white;
  display: flex;
  font-size: 30px;
  justify-content: center;
  position: absolute;
  top: 50%;
  width: 100%;
`;