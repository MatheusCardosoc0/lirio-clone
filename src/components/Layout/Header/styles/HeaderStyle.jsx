import { styled } from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  gap: 16px;
  overflow-x: scroll;
  padding-block: 20px;
  background-color: #ffffff;

  @media (min-width: 1440px) {
    overflow: initial;
  }

  &::-webkit-scrollbar {
    height: 8px; 
    width: 8px; 
    background-color: #F5F5F5; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f7901b; 
    border-radius: 4px; 
  }

  &::-webkit-scrollbar-track {
    background-color: #F5F5F5; 
  }

  scrollbar-width: thin;
  scrollbar-color: #000000 #F5F5F5;  
`;

const TitleSectionButton = styled(({ isSelected, ...rest }) => <button {...rest} />)`
  font-weight: bold;
  font-size: 1.4rem;
  background: transparent;
  color: ${props => props.isSelected ? '#00b7ff' : 'black'};

  &:hover{
      color: #00b7ff;
      transition: all;
      transition-duration: 1s;
  }
`

const OptionsForSectionContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  background-color: #f7f6f6;
  box-shadow: 0px 0px 4px #0000006e;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 2rem;
  align-items: start;
  padding: 20px;
  font-weight: bold;
  border-radius: 8px;
  height: 300px;
  width: 80%;
  max-width: 300px;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  a{
    padding-bottom: 4px;
    border-bottom: 2px solid #00000053;
    width: 100%;
    text-decoration: none;

    &:hover{
      color: #3bb33b;
      cursor: pointer;
    }
  }
`



export {
  HeaderContainer,
  OptionsForSectionContainer,
  TitleSectionButton
}