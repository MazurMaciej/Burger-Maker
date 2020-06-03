import React from 'react';
import styled from 'styled-components';
import { IngredientsList } from '../assets/data/arrayWithIngredients';

const BurgerIngredient = ({ ingredientType, style }) => {
  let ingredient = null;

  switch (ingredientType) {
    case ('beef'):
      ingredient = <IngredientImage src={IngredientsList[0]} alt="beef" style={style} />
      break;

    case ('chicken'):
      ingredient = <IngredientImage src={IngredientsList[1]} alt="chicken" style={style} />
      break;

    case ('pork'):
      ingredient = <IngredientImage src={IngredientsList[2]} alt="pork" style={style} />
      break;

    case ('fish'):
      ingredient = <IngredientImage src={IngredientsList[3]} alt="fish" style={style} />
      break;

    case ('tomato'):
      ingredient = <IngredientImage src={IngredientsList[4]} alt="tomato" style={style} />
      break;

    case ('cucumber'):
      ingredient = <IngredientImage src={IngredientsList[5]} alt="cucumber" style={style} />
      break;

    case ('lettuce'):
      ingredient = <IngredientImage src={IngredientsList[6]} alt="lettuce" style={style} />
      break;

    case ('onion'):
      ingredient = <IngredientImage src={IngredientsList[7]} alt="onion" style={style} />
      break;

    case ('chedder'):
      ingredient = <IngredientImage src={IngredientsList[8]} alt="chedder" style={style} />
      break;

    case ('cheese'):
      ingredient = <IngredientImage src={IngredientsList[9]} alt="cheese" style={style} />
      break;

    case ('ketchup'):
      ingredient = <IngredientImage src={IngredientsList[10]} alt="ketchup" style={style} />
      break;

    case ('mustard'):
      ingredient = <IngredientImage src={IngredientsList[11]} alt="mustard" style={style} />
      break;

    case ('breadTop'):
      ingredient = <IngredientImage src={IngredientsList[12]} alt="breadTop" style={style} />
      break;

    case ('breadBottom'):
      ingredient = <IngredientImage src={IngredientsList[13]} alt="breadBottom" style={style} />
      break;

    default:
      ingredient = null;
  }
  return ingredient;
};

export default BurgerIngredient;

const IngredientImage = styled.img`
  margin: 0 auto;
  width: 35%;
  /* margin-bottom: -88px; */
  margin-bottom: -14%;
`;