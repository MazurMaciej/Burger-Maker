import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

//bread
import breadTop from '../assets/img/breadTop.svg';
import breadBottom from '../assets/img/breadBottom.svg';

//meet
import beef from '../assets/img/beef.svg';
import chicken from '../assets/img/chicken.svg';
import pork from '../assets/img/pork.svg';
import fish from '../assets/img/fish.svg';
import egg from '../assets/img/egg.svg';

//cheese
import chedder from '../assets/img/chedder.svg';
import cheese from '../assets/img/cheese.svg';

//vegetables 
import cucumber from '../assets/img/cucumber.svg';
import lettuce from '../assets/img/lettuce.svg';
import onion from '../assets/img/onion.svg';
import pickle from '../assets/img/pickle.svg';
import tomato from '../assets/img/tomato.svg';

//sauce
import ketchup from '../assets/img/ketchup.svg';
import mustard from '../assets/img/mustard.svg';

const IngredientImage = styled.img`
  margin: 0 auto;
  width: 35%;
  margin-bottom: -95px;
`;

const burgerIngredient = ({ ingredientType, style }) => {
  let ingredient = null;

  switch (ingredientType) {
    case ('breadTop'):
      ingredient = <IngredientImage src={breadTop} alt="breadTop" style={style} />
      break;

    case ('breadBottom'):
      ingredient = <IngredientImage src={breadBottom} alt="breadBottom" style={style} />
      break;

    case ('beef'):
      ingredient = <IngredientImage src={beef} alt="beef" style={style} />
      break;

    case ('chicken'):
      ingredient = <IngredientImage src={chicken} style={style} alt="chicken" />
      break;

    case ('pork'):
      ingredient = <IngredientImage src={pork} alt="pork" style={style} />
      break;

    case ('fish'):
      ingredient = <IngredientImage src={fish} alt="fish" style={style} />
      break;

    case ('egg'):
      ingredient = <IngredientImage src={egg} alt="egg" style={style} />
      break;

    case ('chedder'):
      ingredient = <IngredientImage src={chedder} alt="chedder" style={style} />
      break;

    case ('cheese'):
      ingredient = <IngredientImage src={cheese} alt="cheese" style={style} />
      break;

    case ('cucumber'):
      ingredient = <IngredientImage src={cucumber} alt="cucumber" style={style} />
      break;

    case ('lettuce'):
      ingredient = <IngredientImage src={lettuce} alt="lettuce" style={style} />
      break;

    case ('onion'):
      ingredient = <IngredientImage src={onion} alt="onion" style={style} />
      break;

    case ('pickle'):
      ingredient = <IngredientImage src={pickle} alt="pickle" style={style} />
      break;

    case ('tomato'):
      ingredient = <IngredientImage src={tomato} alt="tomato" style={style} />
      break;

    case ('ketchup'):
      ingredient = <IngredientImage src={ketchup} alt="ketchup" style={style} />
      break;

    case ('mustard'):
      ingredient = <IngredientImage src={mustard} alt="mustard" style={style} />
      break;

    default:
      ingredient = null;
  }
  return ingredient;
}

// burgerIngredient.propTypes = {
//   type: PropTypes.string.isRequired
// };

export default burgerIngredient;