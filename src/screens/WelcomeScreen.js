import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { device } from '../assets/data/mediaQueries';
import BackgroundBottom from '../atoms/BackgroundBottom';
import BackgroundTop from '../atoms/BackgroundTop';
import Title from '../atoms/Title';
import WelcomeButton from '../atoms/WelcomeButton';
import { ReactComponent as Burger } from '../assets/img/burger.svg';

const BackgroundWelcome = () => {
  const wrapper = useRef(null);
  const titleAnimation = useRef(null);
  const backgroundAnimation = useRef(null);

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
    const title = titleAnimation.current;
    const background = backgroundAnimation.current;

    gsap.set([breadTop, onion, tomato, salad, ketchup, cheese, meat, breadBottom, title], { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'back.out(1.2)' } });
    const tl2 = gsap.timeline({ defaults: { ease: 'back.out(1.2)' } });

    tl.fromTo(breadBottom, { y: '-=300' }, { duration: .3, y: '+=300', autoAlpha: 1 })
      .fromTo(meat, { y: '-=300' }, { duration: .25, y: '+=300', autoAlpha: 1 })
      .fromTo(cheese, { y: '-=350' }, { duration: .25, y: '+=300', autoAlpha: 1 })
      .fromTo(ketchup, { y: '-=300' }, { duration: .25, y: '+=300', autoAlpha: 1 })
      .fromTo(salad, { y: '-=300' }, { duration: .25, y: '+=300', autoAlpha: 1 })
      .fromTo(tomato, { y: '-=300' }, { duration: .2, y: '+=300', autoAlpha: 1 })
      .fromTo(onion, { y: '-=300' }, { duration: .2, y: '+=300', autoAlpha: 1 })
      .fromTo(breadTop, { y: '-=300' }, { duration: .5, y: '+=300', autoAlpha: 1 })
      .fromTo(title, { x: '-=1000' }, { duration: 1.5, x: '+=1000', autoAlpha: 1 })

    tl2.fromTo(background, { autoAlpha: .5 }, { duration: 2, autoAlpha: 1 })
  }, []);

  return (
    <MainWrapper>
      <BackgroundTop>
        <Title animation={titleAnimation} name='Welcome in' subname='BURGER MAKER' />
      </BackgroundTop>
      <BackgroundBottom animation={backgroundAnimation}>
        <WelcomeButton>
          <Link to='/burger' style={{ textDecoration: 'none', color: '#000', padding: '10px 30px 7px 30px' }}>Make a Burger</Link>
        </WelcomeButton>
      </BackgroundBottom>
      <BurgerWrapper ref={wrapper}>
        <Burger />
      </BurgerWrapper>
    </MainWrapper>
  )
};

export default BackgroundWelcome;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Yanone Kaffeesatz';
  position: relative;
  width: 100%;
  max-height: 100vh;
  max-height: -webkit-fill-available;
`;

const BurgerWrapper = styled.div`
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  top: 0;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);

  svg {
    width: 40vh;
    height: auto;
    margin-bottom: 15vh;
    
    @media ${device.mobileXL} {
      width: 30vh;
  }
  }
`;
