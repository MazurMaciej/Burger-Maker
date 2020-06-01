import React from 'react';
import styled from 'styled-components';

const PanelName = ({ children, currentPrice }) => <Title>{children} {currentPrice ? `${currentPrice} £` : null}</Title>

export default PanelName;

const Title = styled.p`
  color: #fff;
  font-size: 22px;
  font-weight: 400;
  margin: 0;
  line-height: 30px;
`;