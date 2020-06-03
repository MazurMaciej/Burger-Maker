import React from 'react';
import styled from 'styled-components';

const updatePrice = price => price.toFixed(2)

const PanelName = ({ children, currentPrice }) => <Title>{children} {currentPrice ? <Price>{updatePrice(currentPrice)} £</Price> : null}</Title>

export default PanelName;

const Title = styled.p`
  color: #fff;
  font-size: 22px;
  font-weight: 400;
  margin: 0;
  line-height: 30px;
`;

const Price = styled.span`
  color: #FFCB00;
  font-size: 25px;
  margin-left: 5px;
`;
