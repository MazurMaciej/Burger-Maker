import React from 'react';
import styled from 'styled-components';
import { device } from '../assets/data/mediaQueries';

const IgredientPhoto = ({ ingredientName }) => <Photo src={ingredientName} alt={ingredientName} />

export default IgredientPhoto;

const Photo = styled.img`
  margin: 0 1vw 0 0;
  width: 6vw;
    @media ${device.tabletXL} {
      width: 8vw;
  }
    @media ${device.tablet} {
      width: 11vw;
      margin: 0 1.5vw 0 0;
  }
`;