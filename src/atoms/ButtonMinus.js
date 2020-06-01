import React from 'react';
import styled from 'styled-components';

const ButtonMinus = ({ remove }) => <Btn onClick={remove}> - </Btn>

export default ButtonMinus;

const Btn = styled.button`
  align-items: center;
  background-color: white;
  cursor: pointer;
  display: flex;
  font-size: 15px;
  height: 25px;
  justify-content: center;
  opacity: .3;
  width: 50%;
`;