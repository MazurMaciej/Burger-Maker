import React from 'react';
import styled from 'styled-components';

const BackgroundTop = ({ children }) => (
    <BackgroundDiv>{children}</BackgroundDiv>
);

const BackgroundDiv = styled.div`
    align-items: flex-start;
    background-image: radial-gradient(#5C5C5C , #000000);
    display: flex;
    justify-content: center;
    height: 73vh;
    width: 100%;
`;

export default BackgroundTop;