import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { device } from '../assets/data/mediaQueries';
import BackgroundBottom from '../atoms/BackgroundBottom';
import BackgroundTop from '../atoms/BackgroundTop';
import Title from '../atoms/Title';
import { Btn } from '../atoms/ButtonOrder';
import { ReactComponent as Burger } from '../assets/img/burger.svg';

const BackgroundWelcome = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;
    const breadTop = elements.getElementById('bread-top');
    const onion = elements.getElementById('onion');
    const tomato = elements.getElementById('tomato');
    const salad = elements.getElementById('salad');
    const ketchup = elements.getElementById('ketchup');
    const cheese = elements.getElementById('cheese');
    const meat = elements.getElementById('meat');
    const breadBottom = elements.getElementById('bread-bottom');

    gsap.set([breadTop, onion, tomato, salad, ketchup, cheese, meat, breadBottom], { autoAlpha: 0.05 });

    const tl = gsap.timeline({ defaults: { ease: 'back.out(1.2)' } });
    tl.fromTo(breadBottom, { y: '-=400' }, { duration: .5, y: '+=400', autoAlpha: 1 })
      .fromTo(meat, { y: '-=400' }, { duration: .5, y: '+=400', autoAlpha: 1 })
      .fromTo(cheese, { y: '-=400' }, { duration: .5, y: '+=400', autoAlpha: 1 })
      .fromTo(ketchup, { y: '-=400' }, { duration: .5, y: '+=400', autoAlpha: 1 })
      .fromTo(salad, { y: '-=400' }, { duration: .5, y: '+=400', autoAlpha: 1 })
      .fromTo(tomato, { y: '-=400' }, { duration: .5, y: '+=400', autoAlpha: 1 })
      .fromTo(onion, { y: '-=400' }, { duration: .5, y: '+=400', autoAlpha: 1 })
      .fromTo(breadTop, { y: '-=400' }, { duration: .5, y: '+=400', autoAlpha: 1 })
  });

  return (
    <MainWrapper>
      <BackgroundTop />
      <Title name='Welcome in' subname='BURGER MAKER' />
      <BurgerWrapper ref={wrapper}>
        <Burger />
      </BurgerWrapper>
      <CallButton>
        <Link to='/burger' style={{ textDecoration: 'none', color: '#000', padding: '10px 30px 7px 30px' }}>Make a Burger</Link>
      </CallButton>
      <BackgroundBottom />
    </MainWrapper>
  )
};

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
  @media ${device.desktopL} {
    padding: 20px 50px 12px 50px;
    font-size: 35px;
  }
  @media ${device.laptopL} {
    padding: 20px 20px 12px 20px;
    font-size: 25px;
    }
  @media ${device.tablet} {
    padding: 20px 5px 12px 5px;
    }
  @media ${device.mobileL} {
    font-size: 24px;
    }
  @media ${device.mobileM} {
    font-size: 19px;
    padding: 20px 0px 12px 0px;
    }
`;

const BurgerWrapper = styled.div`
  position: absolute;
  bottom: -3%;  
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);
  text-align: center;
    @media ${device.desktopXL} {
      bottom: 14%;
    }
    @media ${device.laptopL} {
      bottom: -3%;
    }
    @media ${device.tabletXL}  {
      bottom: 5%;
      width: 50%;
    }
    @media ${device.mobileXL} {
      width: 75%;
      bottom: -13vh;
    }
    @media ${device.mobileM} {
      bottom: -12vh;
    }
    @media ${device.mobileS} {
      bottom: -15vh;
    }

  svg {
    @media ${device.desktopL} {
      width: 100%;
    }
    @media ${device.laptopXL} {
      width: 90%;
    }
    @media ${device.laptopL} {
      width: 50%;
    }
    @media ${device.tabletXL} {
      width: 70%;
    }
    @media ${device.mobileXL} {
      width: 55%;
    }
  } 
`;
