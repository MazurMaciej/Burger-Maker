import React from 'react';
import styled from 'styled-components';
import { device } from '../assets/data/mediaQueries';

const WelcomeButton = ({ children, togglePopup }) => <Btn onClick={togglePopup}>{children}</Btn>;

export default WelcomeButton;

const Btn = styled.button`
  background-color: #FFCB00;
  border: 2px transparent solid;
  border-radius: 20px;
  color: #000;
  cursor: pointer;
  font-size: 45px;
  font-family:'Yanone Kaffeesatz';
  font-weight: 700;
  padding: 10px 30px 7px 30px;
  letter-spacing: .5px;
  margin-bottom: 3%;
  text-transform: uppercase;
  transition: 1s;
  z-index: 11;

  &:hover {
    background-color: #FFCB00;
    color: #FFCB00;
    border: 2px #000 solid;
  }

  &:focus {
    outline: none;
  }
  @media ${device.desktopL} {
   font-size: 55px;
  }
  @media ${device.laptopXL} {
   font-size: 30px;
  }
  @media ${device.tabletXL} {
   font-size: 30px;
   margin-bottom: 3%;
  }
  @media ${device.mobileXL} {
   font-size: 20px;
  }
`;