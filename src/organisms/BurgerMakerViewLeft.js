import React from 'react';
import styled from 'styled-components';
import SubpageTitle from '../atoms/SubpageTitle';

import TitleForIngredientsCategory from '../atoms/TitleForIngredientsCategory';
import IngredientPanel from '../molecules/IngredientPanel';
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


const Wrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  padding-left: 80px;
  padding-right: 80px;
`;

const MainCategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
`;
const LastCategoryWrapper = styled.div`
`;


const BurgerMakerViewLeft = ({ ingredients }) => {

  const ingredientsArray = [{ 'Beef': [beef, ingredients.beef] }, { 'Chicken': [chicken, ingredients.chicken] }, { 'Pork': [pork, ingredients.pork] }, { 'Fish': [fish, ingredients.fish] }, { 'Egg': [egg, ingredients.egg] }, { 'Cucumber': [cucumber, ingredients.cucumber] }, { 'Lettuce': [lettuce, ingredients.lettuce] }, { 'Onion': [onion, ingredients.onion] }, { 'Pickle': [pickle, ingredients.pickle] }, { 'Tomato': [tomato, ingredients.tomato] }, { 'Chedder': [chedder, ingredients.chedder] }, { 'Cheese': [cheese, ingredients.cheese] }, { 'Ketchup': [ketchup, ingredients.ketchup] }, { 'Mustard': [mustard, ingredients.mustard] }]

  const mapIngredients = (a, b) => {
    return (
      ingredientsArray.slice(a, b).map(item => {
        const name = Object.keys(item);
        const photo = Object.values(item);
        return <IngredientPanel key={name} name={name} photo={photo[0][0]} info={photo[0][1]} />
      })
    )
  };

  return (
    <Wrapper>
      <SubpageTitle>Add ingredients</SubpageTitle>
      <MainCategoryWrapper>
        <CategoryWrapper>
          <TitleForIngredientsCategory>
            Meet
      </TitleForIngredientsCategory>
          {mapIngredients(0, 5)}
        </CategoryWrapper>
        <CategoryWrapper>
          <TitleForIngredientsCategory>
            Vegetables
          </TitleForIngredientsCategory>
          {mapIngredients(5, 10)}
        </CategoryWrapper >
        <CategoryWrapper>
          <LastCategoryWrapper>
            <TitleForIngredientsCategory>
              Cheese
          </TitleForIngredientsCategory>
            {mapIngredients(10, 12)}
          </LastCategoryWrapper>
          <LastCategoryWrapper>
            <TitleForIngredientsCategory>
              Sauce
          </TitleForIngredientsCategory>
            {mapIngredients(12, 14)}
          </LastCategoryWrapper>
        </CategoryWrapper>
      </MainCategoryWrapper>
    </Wrapper >
  )
};

export default BurgerMakerViewLeft;