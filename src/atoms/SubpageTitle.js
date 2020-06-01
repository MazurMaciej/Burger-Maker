import React from 'react';
import styled from 'styled-components';

const subpageTitle = ({ children }) => <Title>{children}</Title>

export default subpageTitle;

const Title = styled.h1`
  color: #FFCB00;
  font-size: 45px;
  margin: 0;
  padding-bottom: 30px;
  padding-top: 30px;
  text-transform: uppercase;
`;