import React from 'react';
import styled from 'styled-components';
import { device } from '../assets/data/mediaQueries';

export const ButtonOrder = ({ children, togglePopup }) => <Btn onClick={togglePopup}>{children}</Btn>;

export const Btn = styled.button`
  background-color: #FFCB00;
  border: 2px transparent solid;
  border-radius: 20px;
  color: #000;
  cursor: pointer;
  font-size: 18px;
  font-family:'Yanone Kaffeesatz';
  font-weight: 700;
  margin-right: 7%;
  padding: 10px 30px 7px 30px;
  letter-spacing: .5px;
  text-transform: uppercase;
  transition: 1s;

  &:hover {
    background-color: #000;
    color: #FFCB00;
    border: 2px #FFCB00 solid;
  }

  &:focus {
    outline: none;
  }
@media ${device.laptopXL} {
  font-size: 25px;
  }
@media ${device.laptopL} {
  font-size: 18px;
  }
`;