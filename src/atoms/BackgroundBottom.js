import React from 'react';
import styled from 'styled-components';
import { device } from '../assets/data/mediaQueries';
import backgroundBottom from '../assets/img/wooden-bgc.png'

const BackgroundBottom = () => <BackgroundDiv />

const BackgroundDiv = styled.div`
    background-image: url(${backgroundBottom});
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0;
    height: 27vh;
    position: absolute;
    right: 0;
    width: 100%;
  @media ${device.mobileXL} {
        height: 28vh;
    }
`;

export default BackgroundBottom;