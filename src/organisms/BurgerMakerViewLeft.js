import React from 'react';
import styled from 'styled-components';
import SubpageTitle from '../atoms/SubpageTitle';
import NameIngredientsCategory from '../atoms/NameIngredientsCategory';
import IngredientPanel from '../molecules/IngredientPanel';
import PanelName from '../atoms/PanelName';
import ButtonOrder from '../atoms/ButtonOrder';
import { IngredientsList } from '../assets/data/arrayWithIngredients';

const BurgerMakerViewLeft = ({ ingredients, ingredientsAdded, ingredientsRemove, currentPrice }) => {

  const ingredientsControlList = [
    {
      label: 'Beef',
      type: 'beef',
      photo: IngredientsList[0],
      number: ingredients.beef
    },
    {
      label: 'Chicken',
      type: 'chicken',
      photo: IngredientsList[1],
      number: ingredients.chicken
    },
    {
      label: 'Pork',
      type: 'pork',
      photo: IngredientsList[2],
      number: ingredients.pork
    },
    {
      label: 'Fish',
      type: 'fish',
      photo: IngredientsList[3],
      number: ingredients.fish
    },
    {
      label: 'Tomato',
      type: 'tomato',
      photo: IngredientsList[4],
      number: ingredients.tomato
    },
    {
      label: 'Cucumber',
      type: 'cucumber',
      photo: IngredientsList[5],
      number: ingredients.cucumber
    },
    {
      label: 'Lettuce',
      type: 'lettuce',
      photo: IngredientsList[6],
      number: ingredients.lettuce
    },
    {
      label: 'Onion',
      type: 'onion',
      photo: IngredientsList[7],
      number: ingredients.onion
    },
    {
      label: 'Chedder',
      type: 'chedder',
      photo: IngredientsList[8],
      number: ingredients.chedder
    },
    {
      label: 'Cheese',
      type: 'cheese',
      photo: IngredientsList[9],
      number: ingredients.cheese
    },
    {
      label: 'Ketchup',
      type: 'ketchup',
      photo: IngredientsList[10],
      number: ingredients.ketchup
    },
    {
      label: 'Mustard',
      type: 'mustard',
      photo: IngredientsList[11],
      number: ingredients.mustard
    },
  ];

  const buildControls = (firstIngredient, lastIngredient) => (
    ingredientsControlList.slice(firstIngredient, lastIngredient).map(item => (
      <IngredientPanel
        key={item.label}
        label={item.label}
        photo={item.photo}
        added={() => ingredientsAdded(item.type)}
        remove={() => ingredientsRemove(item.type)}
        number={item.number}
      />
    ))
  );

  return (
    <Wrapper>
      <SubpageTitle>Add ingredients</SubpageTitle>
      <MainCategoryWrapper>
        <CategoryWrapper>
          <NameIngredientsCategory>
            Meet
          </NameIngredientsCategory>
          {buildControls(0, 4)}
        </CategoryWrapper>
        <CategoryWrapper>
          <NameIngredientsCategory>
            Vegetables
          </NameIngredientsCategory>
          {buildControls(4, 8)}
        </CategoryWrapper >
        <CategoryWrapper>
          <LastCategoryWrapper>
            <NameIngredientsCategory>
              Cheese
          </NameIngredientsCategory>
            {buildControls(8, 10)}
          </LastCategoryWrapper>
          <LastCategoryWrapper>
            <NameIngredientsCategory>
              Sauce
          </NameIngredientsCategory>
            {buildControls(10, 12)}
          </LastCategoryWrapper>
        </CategoryWrapper>
      </MainCategoryWrapper>
      <SummaryWrapper>
        <PanelName currentPrice={currentPrice}>Current burger price: </PanelName>
        <ButtonOrder>Order now</ButtonOrder>
      </SummaryWrapper>
    </Wrapper >
  )
};

export default BurgerMakerViewLeft;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5%;
  width: 30%;
`;

const LastCategoryWrapper = styled.div`
`;

const MainCategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SummaryWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  padding-left: 80px;
  padding-right: 80px;
`;