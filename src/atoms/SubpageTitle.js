import React from 'react';
import styled from 'styled-components';
import { device } from '../assets/data/mediaQueries';

const subpageTitle = ({ children }) => <Title>{children}</Title>

export default subpageTitle;

const Title = styled.h1`
  color: #FFCB00;
  font-size: 45px;
  margin: 0;
  padding-bottom: 30px;
  padding-top: 30px;
  text-transform: uppercase;
    @media ${device.desktopXL} {
    font-size: 75px;
    padding-bottom: 120px;
    padding-top: 100px;
  }
  @media ${device.desktopL} {
    padding-bottom: 100px;
    padding-top: 70px;
  }
  @media ${device.laptopXL} {
    font-size: 50px; 
    padding-bottom: 50px;
    padding-top: 70px;
  }
  @media ${device.laptopL} {
    font-size: 45px; 
    padding-bottom: 30px;
    padding-top: 30px;
  }
  @media ${device.tabletXL} {
    font-size: 45px; 
    padding-bottom: 30px;
    padding-top: 30px;
  }
`;