import React from 'react';
import styled from 'styled-components';
import { device } from '../assets/data/mediaQueries';

const IngredientNumber = ({ number }) => <Area>{number}</Area>;

export default IngredientNumber;

const Area = styled.p`
  border: none;
  border-radius: 5px 5px 0px 0px;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  opacity: .3;
  font-size: 20px;
  height: 25px;
  width: 100%;
  margin: 0 0 2px 0;

  @media ${device.laptopXL} {
    font-size: 25px;
  }
  @media ${device.laptopL} {
    font-size: 20px;
  }
`;