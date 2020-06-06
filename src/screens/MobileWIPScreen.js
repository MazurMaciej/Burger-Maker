import React from 'react';
import styled from 'styled-components';
import { device } from '../assets/data/mediaQueries';

const MobileWIPScreen = () => (
  <Screen>
    <Title>Work in progress...</Title>
    <Title>Mobile version will be publish soon.</Title>
  </Screen>
);

export default MobileWIPScreen;

const Screen = styled.div`
  background-color: black;
  height: 100vh;
  width: 100%;
  display: none;

  @media ${device.mobileXL} {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
  }
  @media ${device.mobileXL} {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
  }
`;

const Title = styled.h2`
  color: white;
  font-size: 40px;
  @media ${device.mobileL} {
    font-size: 30px;
  }
`;