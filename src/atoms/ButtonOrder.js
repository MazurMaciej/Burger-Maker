import React from 'react';
import styled from 'styled-components';

const ButtonOrder = ({ children }) => <Btn>{children}</Btn>;


export default ButtonOrder;

const Btn = styled.button`
  background-color: #FFD700;
  border: none;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  margin-right: 7%;
  padding: 10px 30px;
  text-transform: uppercase;
  transition: 1s;

  &:hover {
    background-color: #000;
    color: #FFD700;
  }

`;