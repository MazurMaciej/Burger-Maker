import React from 'react';
import styled from 'styled-components';
import BurgerMakerViewLeft from '../orgniasms/BurgerMakerViewLeft';
import BurgerMakerViewRight from '../orgniasms/BurgerMakerViewRight'

const MainWrapper = styled.div`
  background-color: #ddd;
  display: flex;
  height: 100vh;
  width: 100%;
`;


class BurgerMakerScreen extends React.Component {
  render() {
    return (
      <MainWrapper>
        <BurgerMakerViewLeft />
        <BurgerMakerViewRight />
      </MainWrapper>
    )
  }
}

export default BurgerMakerScreen; 