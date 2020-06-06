import React from 'react';
import styled from 'styled-components';

const PopupWithOrderScreen = ({ togglePopup, newBurger }) => (
  <Wrapper>
    <WrapperInner>
      <p>INFO</p>
      <button onClick={togglePopup}>X</button>
      <button onClick={newBurger}>Złoz nowe zamówienie</button>
    </WrapperInner>
  </Wrapper>
);

export default PopupWithOrderScreen;

const Wrapper = styled.div`
  background-color: rgba(0,0,0,.8);
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1000;
  overflow: hidden;
`;

const WrapperInner = styled.div`
  background-color: #FFCB00;
  height: 70vh;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
`;