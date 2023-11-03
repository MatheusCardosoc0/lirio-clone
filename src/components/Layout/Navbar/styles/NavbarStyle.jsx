import { styled } from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  background-color: #ffffff;
  height: 44px;
  justify-content: start;

  div{
    position: relative;
  }

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
  font-weight: bolder;
  font-size: 1.6rem;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  background-image: linear-gradient(to right, #00bfff, #0e03e0);
  height: 100%;
  width: 150px;
  color: white;
  filter:  ${props => props.isSelected ? 'brightness(125%)' : ''};
  padding-inline: 20px;
  text-shadow: 0px 0px 2px black;
  max-width: 300px;

  &:hover{
      filter: brightness(120%);
  }
`

const OptionsForSectionContainer = styled.div`
  position: absolute;
  top: 56px;
  transform: translateY(-50%) translateX(-50%);
  background-color: #e9e8e8;
  z-index: 100;
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  align-items: start;
  font-weight: bold;
  height: 200px;
  width: 144px;
  max-width: 256px;
  overflow-y: scroll;
  overflow-x: hidden;
  animation: flyingToLocal 0.5s ease-in-out;
  transition: all 1s;
  left: 40%;
  direction: rtl;
  box-shadow: 1px 1px 2px black;
  border-radius: 8px;
  transform: scale(1.5);

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  a{
    padding-bottom: 4px;
    width: 100%;
    text-decoration: none;
    font-size: 1rem;
    background-image: linear-gradient(to bottom, #26ff00, #029a16);
    padding-block: 8px;
    text-align: center;
    color: white;
    text-shadow: 0px 0px 2px black;


    &:hover{
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  @keyframes flyingToLocal {
    0%{
      opacity: 0%;
    }
  }
`


const LogoutButton = styled.button`
  font-weight: bolder;
  font-size: 1.6rem;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  background-image: linear-gradient(to right, #ff0000, #b50303);
  height: 100%;
  width: 100px;
  color: white;
  padding-inline: 20px;
  text-shadow: 1px 1px 1px black;

  &:hover{
      color: white;
      transition: all;
      transition-duration: 1s;
      background-color: '#b01501';
  }
`



export {
  HeaderContainer,
  OptionsForSectionContainer,
  TitleSectionButton,
  LogoutButton
}