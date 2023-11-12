import { styled } from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  overflow-x: initial;
  background-color: #ffffff;
  height: 44px;
  justify-content: start;

  div{
    position: relative;
    width: 100%;
  }
`;

const TitleSectionButton = styled(({ isSelected, ...rest }) => <button {...rest} />)`
  font-weight: bolder;
  font-size: 1.6rem;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  background-image: ${props => props.isSelected ? 'linear-gradient(to right, #c5fb00, #249100)' : 'linear-gradient(to right, #fdfdfd, #cacaca)'};
  height: 100%;
  width: 100%;
  color: #000000;
  padding-inline: 20px;

  &:hover{
    background-image: linear-gradient(to right, #c5fb00, #249100) ;
  }
`

const OptionsForSectionContainer = styled.div`
  position: absolute;
  top: 56px;
  transform: translateY(-50%) translateX(-50%);
  background-color: #ffffff;
  z-index: 100;
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  align-items: start;
  font-weight: bold;
  height: 200px;
  width: 144px;
  max-width: 256px;
  overflow-y: auto;
  overflow-x: hidden;
  animation: flyingToLocal 0.5s ease-in-out;
  transition: all 1s;
  left: 30%;
  direction: rtl;
  transform: scale(1.5);
  box-shadow: 0px 0px 1px black;
  

  a{
    padding-bottom: 4px;
    width: 100%;
    text-decoration: none;
    font-size: 1.2rem;
    background-image: linear-gradient(to bottom, #676666, #000000);
    padding-block: 8px;
    text-align: center;
    color: #ffffff;
    font-weight: bold;

    &:hover{
      background-image: linear-gradient(to bottom, #59ce00, #082300);
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
  min-width: 10%;

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