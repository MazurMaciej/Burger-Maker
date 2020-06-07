import React from 'react';
import styled from 'styled-components';
import backgroundBottom from '../assets/img/wooden-bgc.png'

const BackgroundBottom = ({ children, animation }) => (
    <BackgroundDiv ref={animation}>
        {children}
    </BackgroundDiv>
);

const BackgroundDiv = styled.div`
    align-items: flex-end;
    background-image: url(${backgroundBottom});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    height: 27vh;
    justify-content: center;
    width: 100%;
`;

export default BackgroundBottom;