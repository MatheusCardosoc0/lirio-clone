import React from 'react';
import { styled } from 'styled-components';

const LateralMenuContainer = styled.section`
  width: 20%;
  background-image: linear-gradient(to top, #e5f1e3, #e5effa, #ffffff);
  box-shadow: 0px 0px 12px #00000053;
  height: 100%;
 
  min-height: 100vh;

  div:nth-child(1){
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    gap: 20px;

    @media (max-width: 780px) {
      width: 70%;
      margin-inline: auto;
    }
  }

  @media (max-width: 1080px) {
    width: 30%;
  }

  @media (max-width: 780px) {
    width: 70%;
  }
`

const InviteButton = styled.button`
  width: 100%;
  padding: 20px;
  background-color: orange;
  font-size: 18px;
  color: white;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  svg{
    width: 70px;
    height: 70px;
  }
`

const HelpButtons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-items: center;

  button{
    background-color: #6ca4f7;
    color: black;
    width: 90%;
    max-width: 240px;
    padding: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    gap: 6px;
    font-size: 1rem;
    border-radius: 8px;

    svg{
      width: 32px;
      height: 32px;
    }
  }
`


export {
  LateralMenuContainer,
  InviteButton,
  HelpButtons
}
