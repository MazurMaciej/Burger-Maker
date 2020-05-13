import React from 'react';
import styled from 'styled-components';
import IngredientName from '../atoms/panelAtoms/PanelName';
import IngredientPhoto from '../atoms/panelAtoms/Photo';
import IngredientPanelNumberArea from '../atoms/panelAtoms/IngredientsNumber';
import IngredientPanelBtnMinus from '../atoms/panelAtoms/ButtonMinus'
import IngredientPanelBtnPlus from '../atoms/panelAtoms/ButtonPlus';

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

const IngredientPanel = ({ photo, info, label, key, added, remove, number }) => {
  return (
    <Wrapper>
      <IngredientName>{label}</IngredientName>
      <ContentDivRow>
        <IngredientPhoto ingredientName={photo} />
        <ContentDivColumn>
          <IngredientPanelNumberArea number={number} />
          <ContentDivRow>
            <IngredientPanelBtnMinus remove={remove} />
            <IngredientPanelBtnPlus added={added} />
          </ContentDivRow>
        </ContentDivColumn>
      </ContentDivRow>
    </Wrapper>
  )
};

export default IngredientPanel;