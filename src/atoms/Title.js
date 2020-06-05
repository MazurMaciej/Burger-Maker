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
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  text-align: center;
  @media ${device.mobileS} {
    font-size: 42px
  }
  @media ${device.mobileM} {
    font-size: 42px;
    width: 90%;
    margin: auto;
  }
  @media ${device.mobileL} {
    font-size: 50px
  }
  @media ${device.tablet} {
    font-size: 70px
  }
  @media ${device.laptopXL} {
    font-size: 100px
  }
  @media ${device.desktop} {
    font-size: 120px
  }
  @media ${device.desktopXL} {
    font-size: 130px
  }
`;