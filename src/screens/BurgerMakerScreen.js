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
      onion: 0,
      lettuce: 0,
      ketchup: 0,
      mustard: 0,
      chedder: 1,
      cheese: 0,
      beef: 0,
      chicken: 1,
      pork: 0,
      fish: 0,
    },
    totalPrice: 1
  }

  render() {
    const ingredients = this.state.ingredients;

    const addIngredientHandler = type => {
      const oldCount = ingredients[type]
      const updatedCount = oldCount + 1;
      const updatedIngredients = {
        ...ingredients
      };
      updatedIngredients[type] = updatedCount;
      this.setState({
        ingredients: updatedIngredients
      })
    };

    const removeIngredientHandler = type => {
      const oldCount = ingredients[type]
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...ingredients
      };
      updatedIngredients[type] = updatedCount;
      this.setState({
        ingredients: updatedIngredients
      })
    };

    return (
      <MainWrapper>
        <BurgerMakerViewLeft
          ingredients={ingredients}
          ingredientsAdded={addIngredientHandler}
          ingredientsRemove={removeIngredientHandler}
        />
        <BurgerMakerViewRight
          ingredients={ingredients}
        />
      </MainWrapper>
    )
  }
}

export default BurgerMakerScreen; 