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
  font-size: 1.6rem;
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
  background-color: #ffffff;
  box-shadow: 0px 0px 5px #000000;
  z-index: 10;
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  align-items: start;
  font-weight: bold;
  border-radius: 8px;
  height: 300px;
  width: 80%;
  max-width: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
  animation: flyingToLocal 0.5s ease-in-out;
  transition: all 1s;
  gap: 6px;
  padding: 6px;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  a{
    padding-bottom: 4px;
    width: 100%;
    text-decoration: none;
    font-size: 3rem;
    background-color: white;
    padding: 12px;
    box-shadow: 0px 0px 5px black;
    border-radius: 8px;


    &:hover{
      color: #ffffff;
      cursor: pointer;
      background-color: #007700;
    }
  }

  @keyframes flyingToLocal {
    0%{
      opacity: 0%;
    }
  }
`



export {
  HeaderContainer,
  OptionsForSectionContainer,
  TitleSectionButton
}