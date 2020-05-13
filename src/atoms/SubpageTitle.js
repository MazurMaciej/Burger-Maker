import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: #FFCB00;
  font-size: 50px;
  margin: 0;
  padding-bottom: 30px;
  padding-top: 50px;
  text-transform: uppercase;
`;

const subpageTitle = ({ children }) => {
  return (
    <Title>{children}</Title>
  )
}

export default subpageTitle;