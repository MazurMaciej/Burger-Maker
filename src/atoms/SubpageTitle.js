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
  @media ${device.laptop} {
    font-size: 45px; 
    padding-bottom: 30px;
    padding-top: 30px;
  }
  @media ${device.laptopL} {
    font-size: 45px; 
    padding-bottom: 30px;
    padding-top: 40px;
  }
  @media ${device.laptopXL} {
    font-size: 65px; 
    padding-bottom: 65px;
    padding-top: 100px;
  }
  @media ${device.desktop} {
    padding-bottom: 100px;
    padding-top: 70px;
  }
`;