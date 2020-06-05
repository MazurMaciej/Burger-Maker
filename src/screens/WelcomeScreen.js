import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../assets/data/mediaQueries';
import BackgroundBottom from '../atoms/BackgroundBottom';
import BackgroundTop from '../atoms/BackgroundTop';
import Title from '../atoms/Title';
import { Btn } from '../atoms/ButtonOrder';
import { ReactComponent as Burger } from '../assets/img/burger.svg';

const BackgroundWelcome = () => (
  <MainWrapper>
    <BackgroundTop />
    <Title name='Welcome in' subname='BURGER MAKER' />
    <BurgerWrapper>
      <Burger />
    </BurgerWrapper>
    <CallButton>
      <Link to='/burger' style={{ textDecoration: 'none', color: '#000', padding: '10px 30px 7px 30px' }}>Make a Burger</Link>
    </CallButton>
    <BackgroundBottom />
  </MainWrapper>
);

export default BackgroundWelcome;

const MainWrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  width: 100%;
`;

const CallButton = styled(Btn)`
   position: absolute;
   bottom: 5%;
   left: 50%;
   margin-right: 0;
   font-size: 35px;
   transform: translateX(-50%);
   z-index: 11;
  &:hover {
    background-color: #FFCB00;
    color: #FFCB00;
    border: 2px #000 solid;
  }
  @media ${device.mobileL} {
   font-size: 30px;
   width: 86%;
  }
  @media ${device.tablet} {
   font-size: 30px;
    padding: 20px 30px 12px 30px;
    width: auto;
  }
  @media ${device.laptopL} {
    padding: 20px 50px 12px 50px;
    font-size: 20px;
  }
  @media ${device.laptopXL} {
    padding: 20px 50px 12px 50px;
    font-size: 30px;
  }
`;

const BurgerWrapper = styled.div`
  position: absolute;
  bottom: -3%;  
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);
  text-align: center;

  svg {
    @media ${device.mobileL} {
      width: 55%;
    }
    @media ${device.tablet} {
      width: 50%;
    }
    @media ${device.laptop} {
      width: 50%;
    } 
    @media ${device.laptopL} {
      width: 55%;

    }
  } 
`;
