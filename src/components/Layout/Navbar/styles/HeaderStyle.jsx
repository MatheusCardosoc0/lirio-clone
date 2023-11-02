import { styled } from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  padding-inline: 2px;
  padding-block: 4px;
  background-color: #ffffff;
  height: 44px;
  justify-content: start;
  gap: 2px;

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
  background:  ${props => props.isSelected ? '#398f00' : 'white'};;
  border-right: 6px;
  box-shadow: 3px 1px 2px black;
  height: 100%;
  width: 100%;
  color: ${props => props.isSelected ? 'white' : 'black'};
  padding-inline: 12px;

  &:hover{
      color: white;
      transition: all;
      transition-duration: 1s;
      background-color: #398f00;
      filter: brightness(125%);
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


const LogoutButton = styled.button`
  font-weight: bold;
  font-size: 2rem;
  color: white;
  background: red;
  border-right: 6px;
  box-shadow: 2px 1px 2px black;
  height: 100%;
  width: 60px;
`



export {
  HeaderContainer,
  OptionsForSectionContainer,
  TitleSectionButton,
  LogoutButton
}