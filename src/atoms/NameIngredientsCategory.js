import React from 'react';
import styled from 'styled-components';
import { device } from '../assets/data/mediaQueries';

const NameIngredientsCategory = ({ children }) => <Title>{children}</Title>

export default NameIngredientsCategory;

const Title = styled.h3`
  color: #fff;
  font-size: 26px;
  margin: 0;
  text-transform: uppercase;
  @media ${device.desktopL} {
     font-size: 40px;
  }
  @media ${device.laptopXL} {
    font-size: 30px; 
  }
  @media ${device.tablet} {
    font-size: 25px;
  }
`;
