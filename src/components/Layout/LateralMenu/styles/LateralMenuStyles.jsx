import { styled } from 'styled-components';

const LateralMenuContainer = styled.section`
  width: 12%;
  background-image: linear-gradient(to left, #4000ca, rgb(3, 251, 234));
  border-right: 6px solid;
  border-color: #300390;
  height: 100%;
  display: flex;
  min-height: 100vh;

  div:nth-child(1){
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    
    gap: 20px;
  }
`

const InviteButton = styled.button`
  width: 80%;
  padding: 8px;
  background-image: radial-gradient(circle at 100%, #ff9a52, #ff8127, #ff5e00);
  font-size: 18px;
  color: white;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.8rem;
  font-weight: bold;
  border-radius: 16px;
  box-shadow: 1px 1px 1px black;
  text-shadow: 1px 1px 2px black;

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
    background-image: linear-gradient(to bottom, #aaff00, #008600);
    color: white;
    width: 70%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    gap: 8px;
    border-radius: 8px;
    text-decoration: none;
    text-shadow: 1px 1px 2px black;
    box-shadow: 1px 1px 1px black;

    span{
      font-weight: bolder;
      font-size: 2rem;
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
    background-image: linear-gradient(to bottom, #c7d503, #6b6d01);
    color: white;
    width: 90%;
    max-width: 240px;
    padding: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    gap: 6px;
    font-size: 2rem;
    border-radius: 8px;
    text-shadow: 1px 1px 2px black;
    box-shadow: 1px 1px 1px black;

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
    width: 160px;
    margin-inline: auto;
    background-image: radial-gradient(circle at 100%, white,white, #a6a6a6);
    border-radius: 100%;
    box-shadow: 0px 0px 2px black;
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
