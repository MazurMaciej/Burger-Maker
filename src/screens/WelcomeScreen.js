import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WelcomeScreen = () => (
  <Wrapper>
    <Link to='/burger'>START</Link>
  </Wrapper>
)

export default WelcomeScreen;

const Wrapper = styled.div`
  background-color:  #FFCB00;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
`;