import React from 'react';
import styled from 'styled-components';
import backgroundBottom from '../assets/img/wooden-bgc.jpg'

const MainWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  width: 50%;
`;

const BackgroundBottom = styled.div`
    background-image: url(${backgroundBottom});
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0;
    height: 25vh;
    position: absolute;
    right: 0;
    width: 100%;
`;

const BackgroundTop = styled.div`
    background-image: radial-gradient(#5C5C5C , #000000);
    top: 0;
    height: 100vh;
    position: absolute;
    right: 0;
    width: 100%;
`;


const BurgerMakerViewRight = () => {
  return (
    <MainWrapper>
      <BackgroundTop />
      <BackgroundBottom />
    </MainWrapper>
  )
};

export default BurgerMakerViewRight;