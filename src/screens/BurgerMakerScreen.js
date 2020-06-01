import React from 'react';
import styled from 'styled-components';
import BurgerMakerViewLeft from '../organisms/BurgerMakerViewLeft';
import BurgerMakerViewRight from '../organisms/BurgerMakerViewRight';
import { ingredientPrices } from '../assets/data/ingredientPrices';

class BurgerMakerScreen extends React.Component {
  state = {
    ingredients: {
      egg: 0,
      cucumber: 0,
      pickle: 0,
      tomato: 0,
      onion: 0,
      lettuce: 0,
      ketchup: 0,
      mustard: 0,
      chedder: 0,
      cheese: 0,
      beef: 0,
      chicken: 0,
      pork: 0,
      fish: 0,
    },
    burgerPrice: 1
  };

  render() {
    const ingredients = this.state.ingredients;
    const burgerPrice = this.state.burgerPrice;

    const addIngredientHandler = type => {
      const oldCount = ingredients[type]
      const updatedCount = oldCount + 1;
      const updatedIngredients = {
        ...ingredients
      };
      updatedIngredients[type] = updatedCount;
      const newPrice = burgerPrice + ingredientPrices[type];
      this.setState({
        ingredients: updatedIngredients,
        burgerPrice: newPrice
      })
    };

    const removeIngredientHandler = type => {
      const oldCount = ingredients[type];
      if (oldCount <= 0) { return };
      const updatedCount = oldCount - 1;
      const updatedIngredients = { ...ingredients };
      updatedIngredients[type] = updatedCount;
      const newPrice = burgerPrice - ingredientPrices[type]

      this.setState({
        ingredients: updatedIngredients,
        burgerPrice: newPrice
      })
    };

    return (
      <MainWrapper>
        <BurgerMakerViewLeft
          ingredients={ingredients}
          currentPrice={burgerPrice}
          ingredientsAdded={addIngredientHandler}
          ingredientsRemove={removeIngredientHandler}
        />
        <BurgerMakerViewRight ingredients={ingredients} />
      </MainWrapper>
    );
  };
};
export default BurgerMakerScreen;

const MainWrapper = styled.div`
  background-color: #ddd;
  display: flex;
  height: 100vh;
  width: 100%;
`;