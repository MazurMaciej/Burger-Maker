import React from 'react';
import styled from 'styled-components';
import BurgerIngredient from '../atoms/BurgerIngredient';
import { device } from '../assets/data/mediaQueries';

const Burger = ({ ingredients }) => {
  let index = 90;
  const handleZIndex = () => index = index - 1;

  const transformStateToBurger = Object.keys(ingredients).map(item => {
    return [...Array(ingredients[item])].map((_, position) => {
      return <BurgerIngredient key={item + position} ingredientType={item} style={{ zIndex: `${handleZIndex(index)}` }} />
    })
  }).reduce((array, element) => {
    return array.concat(element)
  }, []);

  return (
    <BurgerContainer>
      {transformStateToBurger.length === 0 ? <Title>Add some ingredients to the burger...</Title> : null}
      <BurgerIngredient ingredientType='breadTop' style={{ zIndex: `100` }} />
      {transformStateToBurger}
      <BurgerIngredient ingredientType='breadBottom' style={{ zIndex: `-1` }} />
    </BurgerContainer>
  );
};

export default Burger;

const BurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
  width: 100%;
  z-index: 1;
  position: absolute;
  bottom: 30vh;
  left: 0;
  right: 0;
  @media ${device.tabletXL} {
    height: 40vh;
    bottom: 17vh;
  }
`;

const Title = styled.p`
  color: white;
  display: flex;
  font-size: 30px;
  justify-content: center;
  position: absolute;
  top: 50%;
  width: 100%;

  @media ${device.laptopXL} {
    font-size: 37px;
  }
  @media ${device.tabletXL} {
    font-size: 30px;
  }
  @media ${device.tablet} {
    font-size: 25px;
  }
`;