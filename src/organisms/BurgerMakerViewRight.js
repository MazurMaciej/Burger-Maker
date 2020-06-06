import React from 'react';
import styled from 'styled-components';
import { device } from '../assets/data/mediaQueries';
import Burger from '../molecules/Burger';
import BackgroundBottom from '../atoms/BackgroundBottom';
import BackgroundTop from '../atoms/BackgroundTop';

const BurgerMakerViewRight = ({ ingredients }) => {
  return (
    <MainWrapper>
      <BackgroundTop>
        <Burger ingredients={ingredients} />
      </BackgroundTop>
      <BackgroundBottom />
    </MainWrapper>
  );
};

export default BurgerMakerViewRight;

const MainWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  width: 50%;
  
  @media ${device.tabletXL} {
    width: 100%;
    height: 50vh;
  } 
`;