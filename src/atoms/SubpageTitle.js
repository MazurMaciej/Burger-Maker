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
  }
  @media ${device.laptopXL} {
    font-size: 50px; 
  }
  @media ${device.laptopL} {
    font-size: 45px; 
  }
  @media ${device.tabletXL} {
    font-size: 45px; 
  }
`;