import React from 'react';
import styled from 'styled-components';

const ButtonPlus = ({ added }) => <Btn onClick={added}>+</Btn>

export default ButtonPlus;

const Btn = styled.button`
  align-items: center;
  background-color: white;
  cursor: pointer;
  display: flex;
  font-size: 15px;
  height: 25px;
  justify-content: center;
  opacity: .3;
  width: 50%;
`;