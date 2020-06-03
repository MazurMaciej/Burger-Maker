import React from 'react';
import styled from 'styled-components';
import PanelName from '../atoms/PanelName';
import IgredientPhoto from '../atoms/IgredientPhoto';
import IngredientNumber from '../atoms/IngredientNumber';
import ButtonMinus from '../atoms/ButtonMinus'
import ButtonPlus from '../atoms/ButtonPlus';

const IngredientPanel = ({ photo, label, added, remove, number }) => {
  return (
    <Wrapper>
      <PanelName>{label}</PanelName>
      <ContentDivRow>
        <IgredientPhoto ingredientName={photo} />
        <ContentDivColumn>
          <IngredientNumber number={number} />
          <ContentDivRow>
            <ButtonMinus remove={remove} />
            <ButtonPlus added={added} />
          </ContentDivRow>
        </ContentDivColumn>
      </ContentDivRow>
    </Wrapper>
  );
};

export default IngredientPanel;

const ContentDivColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  width: 30%;
`;

const ContentDivRow = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  margin: 15px 0;
  width: 80%; 
`;
