import React from 'react';
import styled from 'styled-components';
import SubpageTitle from '../atoms/SubpageTitle';
import Burger from '../molecules/Burger';

const MainWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;
`;


const BurgerMakerViewLeft = () => {
  return (
    <MainWrapper>
      <SubpageTitle>Add ingredients</SubpageTitle>
      <Burger />
    </MainWrapper>
  )
};

export default BurgerMakerViewLeft;