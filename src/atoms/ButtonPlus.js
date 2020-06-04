import React from 'react';
import styled from 'styled-components';

const ButtonPlus = ({ added }) => <Btn onClick={added}>+</Btn>

export default ButtonPlus;

const Btn = styled.button`
  align-items: center;
  border: none;
  border-radius: 0px 0px 5px 0px;
  background-color: white;
  cursor: pointer;
  display: flex;
  font-size: 15px;
  height: 25px;
  justify-content: center;
  opacity: .3;
  margin-left: 1px;
  transition: .5s;
  width: 50%;

    &:hover {
    opacity: .5;
  }
`;