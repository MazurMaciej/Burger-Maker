import React from 'react';
import styled from 'styled-components';
import IngredientName from '../atoms/IngredientPanelName';
import IngredientPhoto from '../atoms/IngredientPanelPhoto';
import IngredientPanelNumberArea from '../atoms/IngredientPanelNumberArea';
import IngredientPanelBtnMinus from '../atoms/IngredientPanelBtnMinus'
import IngredientPanelBtnPlus from '../atoms/IngredientPanelBtnPlus';

const Wrapper = styled.div`
  margin: 12px 0;
  width: 80%; 
`;

const ContentDivRow = styled.div`
  display: flex;
`;

const ContentDivColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  width: 50%;
`;

const IngredientPanel = ({ name, photo, info }) => {
  return (
    <Wrapper>
      <IngredientName>{name}</IngredientName>
      <ContentDivRow>
        <IngredientPhoto ingredientName={photo} />
        <ContentDivColumn>
          <IngredientPanelNumberArea info={info} />
          <ContentDivRow>
            <IngredientPanelBtnMinus />
            <IngredientPanelBtnPlus />
          </ContentDivRow>
        </ContentDivColumn>
      </ContentDivRow>
    </Wrapper>
  )
};

export default IngredientPanel;