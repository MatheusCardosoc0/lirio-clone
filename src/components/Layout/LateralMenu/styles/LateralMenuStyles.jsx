import { styled } from 'styled-components';

const LateralMenuContainer = styled.section`
  width: 40%;
  background-image: linear-gradient(to top, #e5f1e3, #e5effa, #ffffff);
  box-shadow: 0px 0px 12px #00000053;
  height: 100%;
  display: flex;
  min-height: 100vh;
  position: fixed;
  z-index: 100;

  div:nth-child(1){
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    gap: 20px;

    @media (max-width: 768px) {
      width: 70%;
      margin-inline: auto;
    }
  }

  @media (max-width: 920px) {
    width: 70%;
  }

  @media (max-width: 620px) {
    width: 100%;
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
  font-size: 2rem;
  font-weight: bold;

  svg{
    width: 70px;
    height: 70px;
  }

  @media (max-width: 768px) {
      padding: 10px;
      font-size: 1.6rem;

      svg{
        width: 48px;
        height: 48px;
      }
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

  a{
    background-color: #05eb5d;
    color: black;
    width: 90%;
    max-width: 220px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    gap: 6px;
    border-radius: 8px;
    text-decoration: none;

    span{
      font-weight: bolder;
      font-size: 1.8rem;
    }

    svg{
      width: 32px;
      height: 32px;
    }

    @media (max-width: 768px) {
      padding: 10px;
      font-size: 1.6rem;

      svg{
        width: 24px;
        height: 24px;
      }
    }
  }

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
    font-size: 1.8rem;
    border-radius: 8px;

    svg{
      width: 32px;
      height: 32px;
    }

    @media (max-width: 768px) {
      padding: 10px;
      font-size: 1.6rem;

      svg{
        width: 24px;
        height: 24px;
      }
    }
  }
`

const LogoContainer = styled.img`
    width: 90%;
    height: 90%;
    margin-inline: auto;

    @media (min-width: 768px){
        width: 40%;
        height: 40%;
    }
`

const CloseButton = styled.button`
  height: 100%;
  width: 10%;
  background-color: white;

  &:hover{
    background-color: #0066ff;
    color: white;
  }

  svg{
    font-size: 32px;   
  }

  @media (min-width: 1080px) {
    width: 10%;
  }
`


export {
  LateralMenuContainer,
  InviteButton,
  HelpButtons,
  CloseButton,
  LogoContainer
}
