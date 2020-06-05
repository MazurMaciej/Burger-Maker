import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../assets/data/mediaQueries';
import BurgerMakerViewLeft from '../organisms/BurgerMakerViewLeft';
import BurgerMakerViewRight from '../organisms/BurgerMakerViewRight';
import { ingredientPrices } from '../assets/data/ingredientPrices';
import PopupWithOrderScreen from './PopupWithOrderScreen';
import logo from '../assets/img/logo.svg';

class BurgerMakerScreen extends React.Component {
  state = {
    ingredients: {
      cucumber: 0,
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
    burgerPrice: 1,
    popupIsOpen: false,
  };

  render() {
    const ingredients = this.state.ingredients;
    const burgerPrice = this.state.burgerPrice;
    const popupIsOpen = this.state.popupIsOpen;

    const addIngredientHandler = type => {
      const newPrice = burgerPrice + ingredientPrices[type];
      const updatedIngredients = { ...ingredients };
      const updatedCount = ingredients[type] + 1;
      updatedIngredients[type] = updatedCount;

      this.setState({
        ingredients: updatedIngredients,
        burgerPrice: newPrice
      })
    };

    const removeIngredientHandler = type => {
      if (ingredients[type] <= 0) { return };
      const updatedCount = ingredients[type] - 1;
      const updatedIngredients = { ...ingredients };
      updatedIngredients[type] = updatedCount;
      const newPrice = burgerPrice - ingredientPrices[type]

      this.setState({
        ingredients: updatedIngredients,
        burgerPrice: newPrice
      })
    };

    const togglePopup = () => {
      this.setState({
        popupIsOpen: !popupIsOpen
      })
    }

    const newBurger = () => {
      this.setState({
        ingredients: {
          cucumber: 0,
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
        burgerPrice: 1,
        popupIsOpen: !popupIsOpen
      })
    }

    return (
      <>
        <MainWrapper>
          <BurgerMakerViewLeft
            ingredients={ingredients}
            currentPrice={burgerPrice}
            ingredientsAdded={addIngredientHandler}
            ingredientsRemove={removeIngredientHandler}
            togglePopup={togglePopup}
          />
          <BurgerMakerViewRight ingredients={ingredients} />
        </MainWrapper>
        {popupIsOpen ? <PopupWithOrderScreen togglePopup={togglePopup} newBurger={newBurger} /> : null}
        <Link to='/'><Logo src={logo} /></Link>
      </>
    );
  };
};
export default BurgerMakerScreen;

const MainWrapper = styled.div`
  background-color: #ddd;
  display: flex;
  height: 100vh;
  width: 100%;
  @media ${device.tablet} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
    @media ${device.laptopXL} {
  flex-direction: row;  
  }    
`;

const Logo = styled.img`
  bottom: 2%;
  position: absolute;
  right: 2%;
  width: 5%;
`;