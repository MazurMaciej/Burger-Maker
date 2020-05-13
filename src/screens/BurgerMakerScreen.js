import React from 'react';
import styled from 'styled-components';
import BurgerMakerViewLeft from '../organisms/BurgerMakerViewLeft';
import BurgerMakerViewRight from '../organisms/BurgerMakerViewRight'

const MainWrapper = styled.div`
  background-color: #ddd;
  display: flex;
  height: 100vh;
  width: 100%;
`;


class BurgerMakerScreen extends React.Component {
  state = {
    ingredients: {
      egg: 0,
      cucumber: 0,
      pickle: 0,
      tomato: 1,
      onion: 1,
      lettuce: 1,
      ketchup: 0,
      mustard: 0,
      chedder: 0,
      cheese: 1,
      beef: 2,
      chicken: 0,
      pork: 0,
      fish: 0,
    }
  }

  render() {
    const ingredients = this.state.ingredients;

    return (
      <MainWrapper>
        <BurgerMakerViewLeft
          ingredients={ingredients}
        />
        <BurgerMakerViewRight
          ingredients={ingredients}
        />
      </MainWrapper>
    )
  }
}

export default BurgerMakerScreen; 