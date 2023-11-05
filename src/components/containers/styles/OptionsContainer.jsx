import { styled } from "styled-components";

const OptionsContainer = styled.div`
  width: 100%;
  max-width: 90%;
  overflow-x: auto;
  padding-inline: 20px;
  overflow-y: hidden;
  position: fixed;
  top: 19%;
  z-index: 60;

  display: flex;
  gap: 8px;
`

const OptionButton = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 100%;
  background-color: ${props => props.$color};
  align-items: center;
  border-right: 4px solid;
  border-bottom: 4px solid;
  border-color: ${props => `rgba(0, 0, 0, 0.167)`};

  &:hover{
    border: none;
  }
    
  svg{
    font-size: 3.6rem;
    color:  white;
    filter: drop-shadow(1px 1px 1px black);
  }
`

export {
  OptionButton,
  OptionsContainer
}