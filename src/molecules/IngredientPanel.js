import React from 'react';
import styled from 'styled-components';
import { device } from '../assets/data/mediaQueries';

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
  width: 3vw;
    @media ${device.tabletXL} {
      width: 6vw;
  }
    @media ${device.tablet} {
      width: 11vw;
  }
`;

const ContentDivRow = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 1.5vh 0;
`;
