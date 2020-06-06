import React from 'react';
import styled from 'styled-components';
import { device } from '../assets/data/mediaQueries';

const Title = ({ name, subname }) => (
  <WelcomeTitle>{name}<br />
    <BurgerTitle>{subname}</BurgerTitle>
  </WelcomeTitle>)

export default Title;

const BurgerTitle = styled.span`
  color: #FFCB00;
`;

const WelcomeTitle = styled.h1`
  color: white;
  font-size: 70px;
  font-weight: 600;
  text-align: center;

  @media ${device.desktopL} {
   font-size: 100px;
  }
  @media ${device.laptopXL} {
   font-size: 90px;
  }
  @media ${device.laptopL} {
   font-size: 70px;
    margin-top: 13vh;
  }
  @media ${device.tabletXL} {
    margin-top: 10vh;
  }
  @media ${device.mobileXL} {
   font-size: 50px;
  }
`;