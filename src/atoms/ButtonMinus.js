import React from 'react';
import styled from 'styled-components';
import { device } from '../assets/data/mediaQueries';

const ButtonMinus = ({ remove }) => <Btn onClick={remove}> - </Btn>

export default ButtonMinus;

const Btn = styled.button`
  align-items: center;
  border: none;
  border-radius: 0px 0px 0px 5px;
  background-color: white;
  cursor: pointer;
  display: flex;
  font-size: 15px;
  height: 25px;
  justify-content: center;
  margin-right: 1px;
  opacity: .3;
  transition: .5s;
  width: 50%;

  &:hover {
    opacity: .5;
  }
  @media ${device.laptopXL} {
    font-size: 25px;
  }
`;