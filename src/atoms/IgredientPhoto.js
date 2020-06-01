import React from 'react';
import styled from 'styled-components';

const IgredientPhoto = ({ ingredientName }) => <Photo src={ingredientName} alt={ingredientName} />

export default IgredientPhoto;

const Photo = styled.img`
  margin: 0;
  width: 50%;
`;