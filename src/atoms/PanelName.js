import React from 'react';
import styled from 'styled-components';
import { device } from '../assets/data/mediaQueries';

const updatePrice = price => price.toFixed(2)

const PanelName = ({ children, currentPrice }) => <Title>{children} {currentPrice ? <Price>{updatePrice(currentPrice)} £</Price> : null}</Title>

export default PanelName;

const Title = styled.p`
  color: #fff;
  font-size: 22px;
  font-weight: 400;
  margin: 0;
  line-height: 30px;

  @media ${device.laptopXL} {
  font-size: 30px;
  line-height: 60px;
  }

  @media ${device.desktop} {
  font-size: 30px;
  line-height: 65px;
  }
`;

const Price = styled.span`
  color: #FFCB00;
  font-size: 25px;
  margin-left: 5px;

  @media ${device.laptopXL} {
  font-size: 38px;
  }
`;
