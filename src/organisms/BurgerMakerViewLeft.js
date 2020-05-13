import React from 'react';
import styled from 'styled-components';
import SubpageTitle from '../atoms/SubpageTitle';

import TitleForIngredientsCategory from '../atoms/panelAtoms/NameIngredientsCategory';
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


const BurgerMakerViewLeft = (props) => {

  const ingredientsA = [
    {
      label: 'Beef',
      type: 'beef',
      photo: beef,
      number: props.ingredients.beef
    },
    {
      label: 'Chicken',
      type: 'chicken',
      photo: chicken,
      number: props.ingredients.chicken
    },
    {
      label: 'Pork',
      type: 'pork',
      photo: pork,
      number: props.ingredients.pork
    },
    {
      label: 'Fish',
      type: 'fish',
      photo: fish,
      number: props.ingredients.fish
    },
    {
      label: 'Egg',
      type: 'egg',
      photo: egg,
      number: props.ingredients.egg
    },
    {
      label: 'Tomato',
      type: 'tomato',
      photo: tomato,
      number: props.ingredients.tomato
    },
    {
      label: 'Cucumber',
      type: 'cucumber',
      photo: cucumber,
      number: props.ingredients.cucumber
    },
    {
      label: 'Lettuce',
      type: 'lettuce',
      photo: lettuce,
      number: props.ingredients.lettuce
    },
    {
      label: 'Onion',
      type: 'onion',
      photo: onion,
      number: props.ingredients.onion
    },
    {
      label: 'Pickle',
      type: 'pickle',
      photo: pickle,
      number: props.ingredients.pickle
    },
    {
      label: 'Chedder',
      type: 'chedder',
      photo: chedder,
      number: props.ingredients.chedder
    },
    {
      label: 'Cheese',
      type: 'cheese',
      photo: cheese,
      number: props.ingredients.cheese
    },
    {
      label: 'Ketchup',
      type: 'ketchup',
      photo: ketchup,
      number: props.ingredients.ketchup
    },
    {
      label: 'Mustard',
      type: 'mustard',
      photo: mustard,
      number: props.ingredients.mustard
    },
  ];

  const buildControls = (firstIngredient, lastIngredient) => (
    ingredientsA.slice(firstIngredient, lastIngredient).map(item => (
      <IngredientPanel
        key={item.label}
        label={item.label}
        photo={item.photo}
        added={() => props.ingredientsAdded(item.type)}
        remove={() => props.ingredientsRemove(item.type)}
        number={item.number}
      />
    ))
  );

  return (
    <Wrapper>
      <SubpageTitle>Add ingredients</SubpageTitle>
      <MainCategoryWrapper>
        <CategoryWrapper>
          <TitleForIngredientsCategory>
            Meet
      </TitleForIngredientsCategory>
          {buildControls(0, 5)}
        </CategoryWrapper>
        <CategoryWrapper>
          <TitleForIngredientsCategory>
            Vegetables
          </TitleForIngredientsCategory>
          {buildControls(5, 10)}
        </CategoryWrapper >
        <CategoryWrapper>
          <LastCategoryWrapper>
            <TitleForIngredientsCategory>
              Cheese
          </TitleForIngredientsCategory>
            {buildControls(10, 12)}
          </LastCategoryWrapper>
          <LastCategoryWrapper>
            <TitleForIngredientsCategory>
              Sauce
          </TitleForIngredientsCategory>
            {buildControls(12, 14)}
          </LastCategoryWrapper>
        </CategoryWrapper>
      </MainCategoryWrapper>
    </Wrapper >
  )
};

export default BurgerMakerViewLeft;