import React from 'react';
import styled from 'styled-components';


const Photo = styled.img`
  margin: 0;
  width: 50%;
`;

const IngredientPanelPhoto = ({ ingredientName }) => {
  return (
    <Photo src={ingredientName} alt={ingredientName} />
  )
};

export default IngredientPanelPhoto;
